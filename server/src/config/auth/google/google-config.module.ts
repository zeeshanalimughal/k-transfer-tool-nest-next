import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import googleConfig from './google-config';
import { GoogleAuthConfigService } from './google-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [googleConfig],
      validationSchema: Joi.object({
        GOOGLE_CLIENT_ID: Joi.string().required(),
        GOOGLE_CLIENT_SECRET: Joi.string().required(),
        GOOGLE_CALLBACK_URL: Joi.string().required(),
      }),
    }),
  ],
  providers: [ConfigService, GoogleAuthConfigService],
  exports: [ConfigService, GoogleAuthConfigService],
})
export class GoogleAuthConfigModule {}
