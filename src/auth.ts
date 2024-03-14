import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./utils/db"

export const {
  handlers: { GET, POST },
  auth,signIn,signOut
} = NextAuth({
  events:{
    async linkAccount({user}){
      await db.user.update({
        where:{id:user.id},
        data:{
            emailVerified:new Date()
        }
      })
    }
  },
  callbacks:{
    async session({session,token}){
      if(session.user){
        session.user.id=token?.id
      }
      return session;
    },
    async jwt({token}){
    token.id=token.sub
      return token
    }
  },
  adapter:PrismaAdapter(db),
  session:{strategy:"jwt"},
  ...authConfig,
})