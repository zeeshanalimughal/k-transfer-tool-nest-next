"use server";

import { signIn } from "@/lib/auth";
export const loginAction = async (
) => {
  try {
    const response = await signIn("google");
    return { data: response };
  } catch (error: any) {
    return { error: error.message };
  }
};
