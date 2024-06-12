import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtConfigModule } from 'src/config/jwt/config.module';
import { JwtProviderModule } from 'src/providers/jwt/provider.module';
import { AppConfigModule } from 'src/config/app/config.module';
import { UsersModule } from '../users/users.module';
import { AuthenticationController } from './auth.controller';
import { AuthenticationService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { SessionSerializer } from 'src/common/serializers/session.serializer';

@Module({
  imports: [
    PassportModule.register({ session: true }),
    JwtProviderModule,
    UsersModule,
    JwtConfigModule,
    AppConfigModule,
  ],
  controllers: [AuthenticationController],
  providers: [
    AuthenticationService,
    LocalStrategy,
    JwtStrategy,
    JwtService,
    SessionSerializer,
  ],
})
export class AuthenticationModule {}
