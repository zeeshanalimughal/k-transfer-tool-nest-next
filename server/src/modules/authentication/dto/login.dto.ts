import { IsEmail, IsNotEmpty } from 'class-validator';
export class SignInDTO {
  @IsNotEmpty({ message: 'Please enter email' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Please enter password' })
  password: string;
}
