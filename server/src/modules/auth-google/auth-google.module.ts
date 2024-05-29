import { Module } from '@nestjs/common';
import { AuthGoogleService } from './auth-google.service';
import { ConfigModule } from '@nestjs/config';
import { AuthGoogleController } from './auth-google.controller';
import { AuthenticationModule } from '../authentication/auth.module';
import { AuthenticationService } from '../authentication/auth.service';
import { UsersRepository } from '../users/users.repository';
import { JwtStrategy } from '../authentication/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { JwtConfigService } from 'src/config/jwt/config.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    ConfigModule,
    AuthenticationModule,
  ],
  providers: [
    AuthGoogleService,
    AuthenticationService,
    UsersRepository,
    JwtStrategy,
    JwtService,
    JwtConfigService,
  ],
  exports: [AuthGoogleService],
  controllers: [AuthGoogleController],
})
export class AuthGoogleModule {}
