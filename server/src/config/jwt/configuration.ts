import { registerAs } from '@nestjs/config';
import { IsString } from 'class-validator';
import validateConfig from 'src/utils/validate-config';
class EnvironmentVariablesValidator {
  @IsString()
  JWT_SECRET: string;

  @IsString()
  JWT_EXPIRES_IN: string;

  @IsString()
  JWT_COOKIE_EXPIRES_IN: string;
}
export default registerAs('auth', () => {
  validateConfig(process.env, EnvironmentVariablesValidator);
  return {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
    cookieExpiresIn: process.env.JWT_COOKIE_EXPIRES_IN,
  };
});
