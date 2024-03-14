"use server"
import { redirect } from "next/navigation"

export const RedirectTOLogin=()=>{
        redirect("/auth/login");
}
export const RedirectToSignup=()=>{
    redirect("/auth/signup")
}