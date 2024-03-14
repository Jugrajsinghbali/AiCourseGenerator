
"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import React from 'react'
import { FcGoogle} from "react-icons/fc";
import {redirect, useRouter } from 'next/navigation'
import {signIn} from "next-auth/react"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { DEFAULT_LOGIN_REDIRECT } from '@/route'
import { PiGithubLogoFill } from 'react-icons/pi';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterFormSchema } from '@/ZodSchema/FormSchema';
import { z } from 'zod';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { RedirectTOLogin } from '@/serveractions/Redirect';
const page = () => {
  const onCLickII=(provider:"google" | "github")=>{
    signIn(provider,{callbackUrl:DEFAULT_LOGIN_REDIRECT})
  }
  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      name:"",
      email: "",
      password:"",
      confirmpassword:""
    },
  })
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router=useRouter();
    const onClick=()=>{
        RedirectTOLogin()
    }
 
    async function onSubmit(values: z.infer<typeof RegisterFormSchema>) {
      try {
        const {email,password,name}=values;
        const res=await axios.post("/api/register",{email,name,password})
        toast.success("Register Succesfuly")
        RedirectTOLogin()
      } catch (error) {
          console.log("error")
      }
      }

  return (
    <div className='flex h-[100vh] justify-center items-center'>
      <Card className='shadow-md sm:w-3/12 w-full m-2   '>
        <CardHeader className='font-bold justify-center flex items-center'>
          Register Now, Free 1Hr Trail
        </CardHeader>
        <CardContent >
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="jhonbb@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /><FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input placeholder="******" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="confirmpassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl>
              <Input placeholder="******" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        <div className='flex w-full justify-center'><Button className='w-full' size="lg" type="submit">Register</Button></div>
      </form>
    </Form>
        </CardContent>
        
        <CardFooter className='flex-col w-full gap-2 justify-center'>
        <Button className='w-full'  onClick={()=>{
          onCLickII("google");
        }} ><FcGoogle className="mr-2 h-4 w-4"/> Login with google</Button>
          <Button  className='w-full' onClick={()=>{
          onCLickII("github");
        }}><PiGithubLogoFill className="mr-2 h-4 w-4"/>Login with github</Button>
        </CardFooter>
        <CardDescription className=' flex justify-center'>
          <Button  variant="link" onClick={onClick
            
          } >Already have an account? login now</Button>
        </CardDescription>
      </Card>
    </div>
  )
}

export default page
