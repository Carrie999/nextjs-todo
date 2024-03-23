
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

// 批量创建todo
export async function POST(req: Request, context: { params: Params }) {
    const { id, todos } = await req.json()
    console.log('todo', todos)
    todos.map(item => {
        delete item.id
        item.userId = id
    })
    const res = await prisma.todo.createMany({
        data: todos,
    });

    if (res) {
        return NextResponse.json({ message: 'success' }, { status: 200 })
    } else {
        return NextResponse.json({ message: 'error' }, { status: 400 })
    }

}