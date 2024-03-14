
"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import {useRouter } from 'next/navigation'
import {signIn} from "next-auth/react"
import React from 'react'
import {z} from"zod"
import { LoginFormSchema } from '@/ZodSchema/FormSchema'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FcGoogle} from "react-icons/fc";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { DEFAULT_LOGIN_REDIRECT } from '@/route'
import { PiGithubLogoFill } from 'react-icons/pi';
import { LoginAction } from '@/serveractions/LoginAction'
import toast from 'react-hot-toast'
import { RedirectToSignup } from '@/serveractions/Redirect'
const page = () => {
  const onCLickII=(provider:"google" | "github")=>{
    signIn(provider,{callbackUrl:DEFAULT_LOGIN_REDIRECT})
  }

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password:""
    },
  })
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router=useRouter();
    const onClick=()=>{
        RedirectToSignup();
    }
    async function onSubmit(values: z.infer<typeof LoginFormSchema>) {
      try {
        const res=await LoginAction(values);
        if(res?.message)
        toast.error(res.message)
      } catch (error) {
          console.log(error)
      }
      
    }
  
  return (
    <div className='flex h-[100vh] justify-center items-center'>
      <Card className='sm:w-3/12 w-full m-2 '>
        <CardHeader className='font-bold justify-center flex items-center'>
          Welcome , Please Login First
        </CardHeader>
        <CardContent>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter Password" {...field} />
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
      <div className='flex justify-center w-full'><Button className='w-full' size="lg" type="submit">Login</Button></div>
      </form>
    </Form>
    </CardContent>
        <CardFooter className='flex-col w-full gap-2 justify-center'>
        <Button className='w-full'  onClick={()=>{
          onCLickII("google");
        }} ><FcGoogle className="mr-2 h-4 w-4"/> Login with google</Button>
          <Button  className=' w-full' onClick={()=>{
          onCLickII("github");
        }}><PiGithubLogoFill className="mr-2 h-4 w-4"/>Login with github</Button>
        </CardFooter>
        <CardDescription className=' flex justify-center'>
          <Button  variant="link" onClick={onClick
            
          } >Create an account</Button>
        </CardDescription>
      </Card>
    </div>
  )
}

export default page
