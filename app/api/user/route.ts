
import { NextResponse } from "next/server"
import { headers } from 'next/headers'
import { PrismaClient } from '@prisma/client';
import { verifyJwt } from "@/app/lib/jwt";
const prisma = new PrismaClient();

export async function GET() {
    const authorization = headers().get('authorization')
    if (authorization) {
        let token = verifyJwt(authorization.slice(7,))
        let user = await prisma.user.findMany({
            // @ts-ignore
            where: { name: token.name, email: token.email },
        });

        if (user) {
            return NextResponse.json({ message: 'success', data: user[0] }, { status: 200 })
        } else {
            return NextResponse.json({ message: 'error', data: [] }, { status: 200 })
        }
    } else {
        return NextResponse.json({ message: 'authorization error', todos: [] }, { status: 400 })
    }
}
