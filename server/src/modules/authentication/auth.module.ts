import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtConfigModule } from 'src/config/jwt/config.module';
import { JwtProviderModule } from 'src/providers/jwt/provider.module';
import { JwtStrategy } from './jwt.strategy';
import { AppConfigModule } from 'src/config/app/config.module';
import { UsersModule } from '../users/users.module';
import { AuthenticationController } from './auth.controller';
import { AuthenticationService } from './auth.service';
import { LocalStrategy } from 'src/common/guards/local.guard';

@Module({
  imports: [
    PassportModule,
    JwtProviderModule,
    UsersModule,
    JwtConfigModule,
    AppConfigModule,
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, LocalStrategy, JwtStrategy, JwtService],
})
export class AuthenticationModule {}
