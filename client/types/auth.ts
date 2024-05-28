interface User {
  _id: string;
  name: string;
  email: string;
  provider: string;
  socialId: string | null;
  active: boolean;
  passwordChangedAt: string;
  id: string;
  token: string;
}
interface Data {
  user: User;
  token: string;
}
export interface ILoginResponse {
  statusCode: number;
  status: string;
  message: string;
  data: Data;
}
