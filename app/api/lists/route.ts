
import { NextResponse } from "next/server"
import { headers } from 'next/headers'
import { PrismaClient } from '@prisma/client';
import { verifyJwt } from "@/app/lib/jwt";
const prisma = new PrismaClient();

type Params = {
    // team: string
}
type Request = {
    // team: string
}

export async function GET(req: Request, res: any, context: { params: Params }) {
    const authorization = headers().get('authorization')

    if (authorization) {
        // let token = verifyJwt(authorization.slice(7,))
        // let user = await prisma.user.findMany({
        //     where: { name: token.name, email: token.email },
        // });

        if (req?.url.includes('?')) {
            const id = req?.url.split('?')[1].split('=')[1]
            console.log('id', id)
            const todos = await prisma.todo.findMany({
                where: { userId: id },
                orderBy: {
                    createdAt: 'asc' // 或 'desc'，根据需要选择升序或降序排序
                }
            }
            );
            return NextResponse.json({ message: 'success', todos: todos }, { status: 200 })
        } else {
            // const todos = await prisma.todo.findMany();
            return NextResponse.json({ message: 'success error', todos: [] }, { status: 200 })
        }

        // if (user) {
        //     const todos = await prisma.todo.findMany({
        //         where: { userId: user[0].id },
        //         orderBy: {
        //             createdAt: 'asc' // 或 'desc'，根据需要选择升序或降序排序
        //         }
        //     }
        //     );
        //     return NextResponse.json({ message: 'success', todos: todos }, { status: 200 })
        // }
    } else {
        return NextResponse.json({ message: 'authorization error', todos: [] }, { status: 400 })
    }



}
export async function POST(req: Request, context: { params: Params }) {
    const { id, finished } = await req.json()

    const res = await prisma.todo.update({
        where: {
            id,
        },
        data: {
            finished,
        },
    });

    if (res) {
        return NextResponse.json({ message: 'success' }, { status: 200 })
    } else {
        return NextResponse.json({ message: 'error' }, { status: 400 })
    }

}