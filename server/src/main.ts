import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/config.service';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import { ExpressSessionConfigService } from './config/session/session.service';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  app.setGlobalPrefix('api');
  app.use(cookieParser());
  const sessionConfig: ExpressSessionConfigService = app.get(
    ExpressSessionConfigService,
  );
  app.use(
    session({
      secret: sessionConfig.sessionSecret,
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }, // 1 week
    }),
  );
  app.use(passport.initialize());
  const appConfig: AppConfigService = app.get(AppConfigService);
  await app.listen(appConfig.port);
}
bootstrap();
