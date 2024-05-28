import { getSession, signOut } from "next-auth/react";
import { auth } from "./auth";

export const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

export async function Api(url: string, options: any = {}, isFormData = false) {
  let session = null;
  if (typeof window === "undefined") {
    session = await auth();
  } else {
    session = await getSession();
  }

  const accessToken = session?.user.id;

  const headers = options?.headers || {};
  const requestOptions = {
    ...options,
    cache: options?.cache || "no-store",
    headers: {
      "Content-Type": isFormData
        ? "application/x-www-form-urlencoded"
        : "application/json",
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  };

  if (options?.IP) {
    requestOptions.headers["X-Forwarded-For"] = options.IP;
  }

  try {
    const response = await fetch(API_BASE_URL + url, requestOptions);
    const responseData = await response.json();
    if (response.status === 401) {
      if (typeof window !== "undefined") {
        await signOut({ redirect: false });
        window.location.href = "/signin";
      }
    }
    return responseData;
  } catch (error: any) {
    console.error("Error:", error.message);
  }
}
