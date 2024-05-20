import { UserDocument } from 'src/modules/users/entities/user.entity';

export interface SignInResponse {
  token: string;
  user: UserDocument;
}
