import authConfig from "./auth.config";
import NextAuth from "next-auth";
const { auth } = NextAuth(authConfig);
import {
  authRoute,
  apiPrefix,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "./route";

export default auth((req) => {
  const { nextUrl } = req;
  const isloggedin = !!req.auth;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiPrefix);
  const isAuthRoute = authRoute.includes(nextUrl.pathname);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

  if(isApiAuthRoute){
    return 
  }
  if (isAuthRoute) {
    if (isloggedin) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return
  }
  if (!isloggedin && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }
  return
});
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
