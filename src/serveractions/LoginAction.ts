"use server";

import { LoginFormSchema } from "@/ZodSchema/FormSchema";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { AuthError } from "next-auth";
import { z } from "zod";

export async function LoginAction(data: z.infer<typeof LoginFormSchema>) {
  try {
    const { email, password } = data;
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    console.log("Runned");
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {message:"Invalid Credentials"};
        default:
          return {message:"Server down"};
      }
    }
    throw error;
  }
}
