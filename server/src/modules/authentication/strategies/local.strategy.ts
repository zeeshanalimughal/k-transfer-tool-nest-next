import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticationService } from '../auth.service';
import { ExtractJwt } from 'passport-jwt';
import configuration from 'src/config/jwt/configuration';

/**
 * Local Strategy class to validate user credentials
 * @extends PassportStrategy(Strategy)
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthenticationService) {
    super({
      usernameField: 'email',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configuration().secret,
    });
  }
  /**
   * Validate user credentials
   * @param username  Username of the user
   * @param password  Password of the user
   * @returns  User object
   * @throws  Unauthorized exception if user credentials are invalid
   */
  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
