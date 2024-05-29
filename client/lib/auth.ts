import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import AuthService from "@/services/auth";
import { SingInFormValues } from "@/schema/authentication";

export const { signIn, handlers, signOut, auth } = NextAuth({
  providers: [
    Google({
      authorization: {
        params: {
          scope: "openid profile email",
        },
      },
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          console.log(credentials);
          const response = await AuthService.signIn(
            credentials as SingInFormValues
          );
          if (response?.statusCode >= 400) {
            console.log("response", response);
            return null;
          }
          return response.data.user;
        } catch (error: any) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account && account?.provider === "google") {
        try {
          // // Call your custom API to register or log in the user
          // const response = await AuthService.registerOrLoginGoogleUser({
          //   id: user.id,
          //   email: user.email,
          //   name: user.name,
          // });
          // if (response?.statusCode >= 400) {
          //   console.log("response", response);
          //   return false; // Return false to stop the sign-in process
          // }
          console.log("user", user);
        } catch (error: any) {
          console.error("Google sign-in error:", error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user }: { token: any; user: any | any }) {
      if (token && user) {
        token.user = {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user = token.user;
      return session;
    },
  },
  debug: false,
});
