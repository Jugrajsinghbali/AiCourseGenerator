import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import bcryptjs from "bcryptjs"
import Credentials from "next-auth/providers/credentials";
import { LoginFormSchema } from "./ZodSchema/FormSchema";
import { getUserByEmailId } from "./utils/supporteFXN";
export default {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET_KEY,
    }),
    Google({
      clientId:process.env.GOOGLE_CLIENT_ID,clientSecret:process.env.GOOGLE_SECRET_KEY
    })
    ,Credentials({
      async authorize(credentials, request) {
        const validatefields = LoginFormSchema.safeParse(credentials);
        if (validatefields.success) {
          const { email, password } = validatefields.data;
          const user = await getUserByEmailId(email);
          if (!user || !user.password) {
            return null;
          }
          const match = await bcryptjs.compare(password, user.password);
          if (match) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;