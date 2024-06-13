import { registerAs } from '@nestjs/config';
import { IsString } from 'class-validator';
import validateConfig from 'src/utils/validate-config';
/**
 * Class to validate the environment variables for google
 * @class Environment
 * @file google-config.ts
 */
class EnvironmentVariablesValidator {
  @IsString()
  GOOGLE_CLIENT_ID: string;

  @IsString()
  GOOGLE_CLIENT_SECRET: string;

  @IsString()
  GOOGLE_CALLBACK_URL: string;
}
/**
 * Configuration for the google
 * @export default - configuration for the google
 */
export default registerAs('google', () => {
  validateConfig(process.env, EnvironmentVariablesValidator);
  return {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackUrl: process.env.GOOGLE_CALLBACK_URL,
  };
});
