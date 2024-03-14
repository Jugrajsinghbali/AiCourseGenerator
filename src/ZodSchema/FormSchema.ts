import {z} from "zod"
export const RegisterFormSchema = z.object({
    name:z.string().min(3,{message:"Please write appropriate name"}),
    email: z.string().email({ message: "Invalid email type" }),
    password: z.string().min(6, { message: "Minimum 6 characters required" }),
    confirmpassword: z.string().min(6),
}).refine(data => data.password === data.confirmpassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"]
});
export const LoginFormSchema=z.object({
    email: z.string().email({message:"Invaild email type"}),
    password:z.string(),
});