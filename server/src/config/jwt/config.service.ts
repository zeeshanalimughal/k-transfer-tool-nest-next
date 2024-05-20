import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtConfigService {
  constructor(private configService: ConfigService) {}

  get secret(): string {
    return this.configService.get<string>('auth.secret');
  }

  get expires(): string {
    return this.configService.get<string>('auth.expires');
  }

  get refreshSecret(): string {
    return this.configService.get<string>('auth.refreshSecret');
  }

  get refreshExpires(): string {
    return this.configService.get<string>('auth.refreshExpires');
  }

  get forgotSecret(): string {
    return this.configService.get<string>('auth.forgotSecret');
  }

  get forgotExpires(): string {
    return this.configService.get<string>('auth.forgotExpires');
  }

  get confirmEmailSecret(): string {
    return this.configService.get<string>('auth.confirmEmailSecret');
  }

  get confirmEmailExpires(): string {
    return this.configService.get<string>('auth.confirmEmailExpires');
  }

  get cookieExpiresIn(): string {
    return this.configService.get<string>('auth.cookieExpiresIn');
  }
}
