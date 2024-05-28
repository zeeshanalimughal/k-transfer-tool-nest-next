import NextAuth from "next-auth";
import { ApiResponse } from "./response";

type UserType = {
  id?: string;
  email: string;
  name: string;
};

export interface UserLoginResponseType extends ApiResponse {
  user: UserType;
  token: string;
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: UserType;
  }
}
