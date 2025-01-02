import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Service dealing with google configuration
 */
@Injectable()
export class GoogleAuthConfigService {
  constructor(private configService: ConfigService) {}

  get clientId(): string {
    return this.configService.get<string>('google.clientId');
  }
  get clientSecret(): string {
    return this.configService.get<string>('google.clientSecret');
  }
  get callbackUrl(): string {
    return this.configService.get<string>('google.callbackUrl');
  }
}
