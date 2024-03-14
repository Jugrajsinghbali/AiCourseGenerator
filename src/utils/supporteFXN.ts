import { db } from "./db"
export const getUserByEmailId=async(email:string)=>{
        try {
            const user=await db.user.findUnique({where:{
                email
            }})
            if(user)
            return user
        return null
        } catch (error) {
            return null
        }
}
export const getUserById=async(id:string)=>{
    try {
        const user=await db.user.findUnique({where:{
            id
        }})
        if(user)
        return user
    return null
    } catch (error) {
        return null
    }
}