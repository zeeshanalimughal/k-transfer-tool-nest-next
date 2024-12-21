"use server";

import { auth, signIn, signOut } from "@/lib/auth";
export const loginAction = async () => {
  try {
    const response = await signIn("google");
    return { data: response };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const getSessionAction = async () => {
  try {
    const response = await auth();
    return { data: response };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const logoutAction = async () => {
  try {
    await signOut();
    return { data: null };
  } catch (error: any) {
    return { error: error.message };
  }
};
