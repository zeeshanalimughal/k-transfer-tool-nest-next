import { Api } from "@/lib/api";
import { ILoginResponse } from "@/types/auth";
import { ApiResponse } from "@/types/common";

const AuthService = {
  signUp: async (data: object): Promise<ApiResponse> => {
    return await Api("/auth/sign-up", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  signIn: async (data: object): Promise<ILoginResponse> => {
    return await Api("/auth/sign-in", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  logout: async (data: object) => {
    return await Api("/auth/logout", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};

export default AuthService;
