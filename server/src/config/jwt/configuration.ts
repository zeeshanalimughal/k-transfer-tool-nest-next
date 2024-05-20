import { registerAs } from '@nestjs/config';
import { IsString } from 'class-validator';
import validateConfig from 'src/utils/validate-config';
class EnvironmentVariablesValidator {
  @IsString()
  AUTH_JWT_SECRET: string;

  @IsString()
  AUTH_JWT_TOKEN_EXPIRES_IN: string;

  @IsString()
  AUTH_REFRESH_SECRET: string;

  @IsString()
  AUTH_REFRESH_TOKEN_EXPIRES_IN: string;

  @IsString()
  AUTH_FORGOT_SECRET: string;

  @IsString()
  AUTH_FORGOT_TOKEN_EXPIRES_IN: string;

  @IsString()
  AUTH_CONFIRM_EMAIL_SECRET: string;

  @IsString()
  AUTH_CONFIRM_EMAIL_TOKEN_EXPIRES_IN: string;

  @IsString()
  AUTH_COOKIE_TOKEN_EXPIRES_IN: string;
}
export default registerAs('auth', () => {
  validateConfig(process.env, EnvironmentVariablesValidator);
  return {
    secret: process.env.AUTH_SECRET,
    expires: process.env.AUTH_EXPIRES,
    refreshSecret: process.env.AUTH_REFRESH_SECRET,
    refreshExpires: process.env.AUTH_REFRESH_EXPIRES,
    forgotSecret: process.env.AUTH_FORGOT_SECRET,
    forgotExpires: process.env.AUTH_FORGOT_EXPIRES,
    confirmEmailSecret: process.env.AUTH_CONFIRM_EMAIL_SECRET,
    confirmEmailExpires: process.env.AUTH_CONFIRM_EMAIL_EXPIRES,
    cookieExpiresIn: process.env.AUTH_COOKIE_EXPIRES,
  };
});
