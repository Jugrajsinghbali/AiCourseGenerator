import { useSession } from "next-auth/react";

export const user=useSession().data?.user;