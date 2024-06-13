import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { GoogleAuthConfigService } from 'src/config/auth/google/google-config.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private readonly googleAuthConfigService: GoogleAuthConfigService,
  ) {
    super({
      clientID: googleAuthConfigService.clientId,
      clientSecret: googleAuthConfigService.clientSecret,
      callbackURL: googleAuthConfigService.callbackUrl,
      passReqToCallback: true,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    request: Request,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    const { email, name, picture } = profile;
    const user = {
      email,
      firstName: name.givenName,
      lastName: name.familyName,
      picture,
    };
    done(null, user);
  }
}
