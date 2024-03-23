
import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


// 批量创建todo
export async function POST(req: any) {
    const { id, todos } = await req.json()
    console.log('todo', todos)
    // @ts-ignore
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