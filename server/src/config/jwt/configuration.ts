import { registerAs } from '@nestjs/config';
import { Transform } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import validateConfig from 'src/utils/validate-config';
class EnvironmentVariablesValidator {
  @IsString()
  JWT_SECRET: string;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  JWT_EXPIRES_IN: number;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  JWT_COOKIE_EXPIRES_IN: number;
}
export default registerAs('jwt', () => {
  validateConfig(process.env, EnvironmentVariablesValidator);
  return {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
    cookieExpiresIn: process.env.JWT_COOKIE_EXPIRES_IN,
  };
});
