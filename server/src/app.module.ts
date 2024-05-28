import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/config.module';
import { MongoDatabaseProviderModule } from './providers/mongo/provider.module';
import { AuthenticationModule } from './modules/authentication/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ErrorHandlingMiddleware } from './common/middleware/error-handling';

@Module({
  imports: [
    AppConfigModule,
    MongoDatabaseProviderModule,
    AuthenticationModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ErrorHandlingMiddleware).forRoutes('*');
  }
}
