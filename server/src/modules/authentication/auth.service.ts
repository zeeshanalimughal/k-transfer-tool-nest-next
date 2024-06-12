import { Injectable, NotAcceptableException } from '@nestjs/common';
import { Response } from 'express';
import { ResponseOut } from 'src/common/interfaces/response.interface';
import { SignInDTO } from './dto/login.dto';
import { SignInResponse } from './interfaces/login.interface';
import { ForgotPwdDTO } from './dto/forgot-pwd.dto';
import { ForgotPwdResponse } from './interfaces/forgot-pwd.interface';
import { ResetPasswordDTO } from './dto/reset-pwd.dto';
import * as crypto from 'crypto';
import { LogClass } from 'src/common/decorators/log-class.decorator';
import { UsersRepository } from '../users/users.repository';
import { UserDocument } from '../users/entities/user.entity';
import { SignUpDTO } from './dto/sign-up.dto';
import { UserAlreadyExistsException } from './exceptions/UserAlreadyExistsException';
import { JwtStrategy } from './strategies/jwt.strategy';

@Injectable()
@LogClass()
export class AuthenticationService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtStrategy: JwtStrategy,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user: any = await this.usersRepository.findByEmail(email);
    if (!user) return null;
    const passwordValid = await user.correctPassword(password, user.password);
    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }
    if (user && passwordValid) {
      return user;
    }
    return null;
  }

  async signUp(signupDto: SignUpDTO): Promise<ResponseOut<null>> {
    const user = await this.usersRepository.findByEmail(signupDto.email);
    if (user) throw new UserAlreadyExistsException(signupDto.email);
    await this.usersRepository.create(signupDto);
    return {
      statusCode: 200,
      status: 'success',
      message: 'Register Successfully',
    };
  }

  async signIn(signInDto: SignInDTO): Promise<ResponseOut<SignInResponse>> {
    const { email } = signInDto;
    const user: any =
      await this.usersRepository.findByEmailAndGetPassword(email);
    try {
      return this.jwtStrategy.createSendToken(user, 200, 'Login Successfully');
    } catch (error) {
      return {
        statusCode: 500,
        status: 'error',
        message: 'An error occurred',
      };
    }
  }

  async forgotPassword(
    forgotPasswordDto: ForgotPwdDTO,
  ): Promise<ResponseOut<ForgotPwdResponse>> {
    const { email } = forgotPasswordDto;
    if (!email) {
      return {
        statusCode: 400,
        status: 'fail',
        message: 'Please provide an email',
      };
    }

    const user: any = await this.usersRepository.findByEmail(email);

    if (!user) {
      return {
        statusCode: 404,
        status: 'fail',
        message: 'User not found',
      };
    }

    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });

    // const resetURL = `${req.protocol}://${req.get(
    //   'host',
    // )}/reset-password?token=${resetToken}`;

    try {
      //   await this.mailer.sendMail(
      //     user.email,
      //     resetConfirmationTitle(),
      //     resetConfirmationContent(email, resetURL, "30"),
      //     undefined,
      //     true,
      //     NotificationType.Confirmation
      //   );

      return {
        statusCode: 200,
        status: 'success',
        message: 'Token sent to email',
        data: { token: resetToken },
      };
    } catch (error) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save({ validateBeforeSave: false });
      throw new Error('There was an error sending the email. Try again later!');
    }
  }

  async resetPassword(
    token: string,
    resetPasswordDto: ResetPasswordDTO,
  ): Promise<ResponseOut<null>> {
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
    const user: UserDocument[] = await this.usersRepository.find({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });

    if (!user[0]) {
      return {
        statusCode: 400,
        status: 'fail',
        message: 'Token is invalid or has expired',
      };
    }

    user[0].password = resetPasswordDto.password;
    user[0].passwordResetToken = undefined;
    user[0].passwordResetExpires = undefined;
    await user[0].save();

    return {
      statusCode: 200,
      status: 'success',
      message: 'Reset Password Successfully',
    };
  }

  async logout(res: Response): Promise<void> {
    res.clearCookie('user_id');
    res.clearCookie('jwt');
    res.clearCookie('connect.sid');
  }
}
