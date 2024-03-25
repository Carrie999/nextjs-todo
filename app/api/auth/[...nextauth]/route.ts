import nextAuth from 'next-auth'
import { authOptions } from "@/app/lib/auth";


const handlers = nextAuth(authOptions)

export { handlers as GET, handlers as POST }