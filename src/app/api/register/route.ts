import { NextResponse,NextRequest } from "next/server";
import { db } from "@/utils/db";
import bcryptjs from "bcryptjs"
export async function POST(req:NextRequest) {
    try {
        const {email,password,name}=await req.json();
        const existingUser=await db.user.findUnique({where:{
            email
        }})
        if(existingUser){
            return NextResponse.json({error:"email id already exits"},{status:401})
        }
        const hashpassword=await bcryptjs.hash(password,10);
        const user=await db.user.create({
            data:{
                email,password:hashpassword,name
            }
        })
        return NextResponse.json({message:`Registerd ${user.email}`},{status:200})
    } catch (error) {
        console.log("error from user creation")
        return NextResponse.json(error)
    }
}