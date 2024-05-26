import { JwtService } from '@nestjs/jwt';
import { SignInResponse } from './interfaces/login.interface';
import { ResponseOut } from 'src/common/interfaces/response.interface';
import { Injectable } from '@nestjs/common';
import { LogMethod } from 'src/common/decorators/log-method.decorator';
import { UserDocument } from '../users/entities/user.entity';
import { JwtConfigService } from 'src/config/jwt/config.service';

@Injectable()
export class JwtStrategy {
  constructor(
    private jwtService: JwtService,
    private readonly jwtConfig: JwtConfigService,
  ) {}

  @LogMethod()
  createSendToken(
    user: UserDocument,
    statusCode: number,
    msg: string,
  ): ResponseOut<SignInResponse> {
    const token = this.signToken(user.email, String(user._id));
    console.log(token);

    /* Remove password from output */
    user.password = undefined;
    return {
      statusCode,
      status: 'success',
      message: msg,
      data: { user, token },
    };
  }

  private signToken(email: string, id: string | number) {
    const payload = { email, sub: id };
    return this.jwtService.sign(payload, {
      secret: this.jwtConfig.secret,
      expiresIn: this.jwtConfig.expiresIn,
    });
  }
}
