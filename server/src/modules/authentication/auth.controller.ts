import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { ResponseOut } from 'src/common/interfaces/response.interface';
import { ResetPasswordDTO } from './dto/reset-pwd.dto';
import { ForgotPwdDTO } from './dto/forgot-pwd.dto';
import { ForgotPwdResponse } from './interfaces/forgot-pwd.interface';
import { SignInDTO } from './dto/login.dto';
import { SignInResponse } from './interfaces/login.interface';
import { SignUpDTO } from './dto/sign-up.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticationService } from './auth.service';
import { JwtConfigService } from 'src/config/jwt/config.service';
import { AppConfigService } from 'src/config/app/config.service';

@Controller('auth')
export class AuthenticationController {
  constructor(
    private readonly authService: AuthenticationService,
    private readonly jwtConfig: JwtConfigService,
    private readonly appConfig: AppConfigService,
  ) {}

  @Get('test')
  async test(): Promise<string> {
    return 'test';
  }
  @Post('sign-up')
  async signup(
    @Body() signupDto: SignUpDTO,
    @Res() res: Response,
  ): Promise<Response> {
    const result = await this.authService.signUp(signupDto);
    return res.status(result.statusCode).json(result);
  }

  @UseGuards(AuthGuard('local'))
  @Post('sign-in')
  async signIn(
    @Body() signInDto: SignInDTO,
    @Res() res: Response,
  ): Promise<Response<ResponseOut<SignInResponse>>> {
    const result = await this.authService.signIn(signInDto);

    const cookieOptions: Record<string, any> = {
      expires: new Date(
        Date.now() +
          parseInt(this.jwtConfig.cookieExpiresIn) * 24 * 60 * 60 * 1000,
      ),
      httpOnly: true,
    };
    if (this.appConfig.env === 'production') {
      cookieOptions.secure = true;
    }

    res.cookie('jwt', result.data.token, cookieOptions);
    res.cookie('user_id', result.data.user.id, cookieOptions);

    return res.status(result.statusCode).json(result);
  }

  @Post('forgot')
  async forgotPassword(
    @Body() forgotPasswordDto: ForgotPwdDTO,
    @Res() res: Response,
  ): Promise<Response<ResponseOut<ForgotPwdResponse>>> {
    const result = await this.authService.forgotPassword(forgotPasswordDto);
    return res.status(result.statusCode).json(result);
  }

  @Patch(':token')
  async resetPassword(
    @Param('token') token: string,
    @Body() resetPasswordDto: ResetPasswordDTO,
    @Res() res: Response,
  ): Promise<Response<ResponseOut<null>>> {
    const result = await this.authService.resetPassword(
      token,
      resetPasswordDto,
    );

    return res.status(result.statusCode).json(result);
  }

  @Post('logout')
  async logout(@Res() res: Response): Promise<Response<ResponseOut<null>>> {
    await this.authService.logout(res);
    return res.status(200).json({
      statusCode: 200,
      status: 'success',
      message: 'user logout is a success',
    });
  }
}
