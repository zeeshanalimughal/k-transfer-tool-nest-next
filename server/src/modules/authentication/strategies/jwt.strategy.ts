import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { LogMethod } from 'src/common/decorators/log-method.decorator';
import { ResponseOut } from 'src/common/interfaces/response.interface';
import { JwtConfigService } from 'src/config/jwt/config.service';
import { UserDocument } from 'src/modules/users/entities/user.entity';
import { SignInResponse } from '../interfaces/login.interface';
import { JwtService } from '@nestjs/jwt';
import { Request as RequestType } from 'express';

/**
 * JWT Strategy class to validate JWT token
 * @extends PassportStrategy(Strategy)
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly jwtConfig: JwtConfigService,
    private jwtService: JwtService,
  ) {
    // Call the parent class constructor with the options
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtStrategy.extractJWT,
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      ignoreExpiration: false,
      secretOrKey: jwtConfig.secret,
      signOptions: {
        expiresIn: jwtConfig.expiresIn,
      },
    });
  }

  /**
   *  Extract JWT from request object
   * @param req  Request object from express
   * @returns  JWT token from request object or null
   */
  private static extractJWT(req: RequestType): string | null {
    console.log(req.cookies);
    if (req.cookies && 'jwt' in req.cookies) {
      return req.cookies.jwt;
    }
    return null;
  }

  @LogMethod()
  /**
   * Validate JWT token and return user object if token is valid
   * @param payload  Payload from JWT token
   * @returns  User object
   * @throws  Unauthorized exception if token is invalid
   */
  createSendToken(
    user: UserDocument,
    statusCode: number,
    msg: string,
  ): ResponseOut<SignInResponse> {
    const token = this.signToken(user.email, String(user._id));

    /* Remove password from output */
    user.password = undefined;
    return {
      statusCode,
      status: 'success',
      message: msg,
      data: { user, token },
    };
  }

  /**
   *  Sign JWT token with email and id
   * @param email Email of user
   * @param id ID of user
   * @returns Signed JWT token
   */
  private signToken(email: string, id: string | number) {
    const payload = { email, sub: id };
    return this.jwtService.sign(payload, {
      secret: this.jwtConfig.secret,
      expiresIn: this.jwtConfig.expiresIn,
    });
  }

  /**
   * Validate JWT token and return user object if token is valid
   * @param payload  Payload from JWT token
   * @returns  payload
   */
  validate(payload: any) {
    console.log('Inside JWT Strategy Validate');
    console.log(payload);
    return payload;
  }
}
