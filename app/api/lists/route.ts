
import { NextResponse } from "next/server"
import { headers } from 'next/headers'
import { PrismaClient } from '@prisma/client';
import { verifyJwt } from "@/app/lib/jwt";
import parseUrl from "parse-url";

const prisma = new PrismaClient();

const currentDate = new Date();

// 获取年、月、日
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 月份从 0 开始，需要加 1
const day = String(currentDate.getDate()).padStart(2, '0');

export async function GET(req: any) {
    const authorization = headers().get('authorization')

    if (authorization) {
        let token = verifyJwt(authorization.slice(7,))
        if (!token) {
            return NextResponse.json({ message: 'authorization error', todos: [] }, { status: 200 })
        }
        // let token = verifyJwt(authorization.slice(7,))
        // let user = await prisma.user.findMany({
        //     where: { name: token.name, email: token.email },
        // });
        if (req?.url.includes('?')) {

            let url = parseUrl(req.url)
            let id = url.query.id
            let date = new Date(`${year}-${month}-${day}`)
            let mon = url.query?.mon

            if (url.query.date) {
                date = new Date(url.query.date)
            }
            if (url.query.month) {
                mon = url.query.month
            }
            if (mon) {
                const todos = await prisma.todo.findMany({
                    where: {
                        userId: id,
                        createdAt: {
                            // @ts-ignore
                            gte: new Date(year, mon - 1, 1), // 月份从 0 开始，所以要减 1
                            // @ts-ignore
                            lt: new Date(year, mon, 1), // 下个月的第一天即当前月的最后一天
                        },
                    },
                    orderBy: {
                        createdAt: 'asc' // 或 'desc'，根据需要选择升序或降序排序
                    }
                }
                );
                return NextResponse.json({ message: 'success', todos: todos }, { status: 200 })
            }
            // console.log('id', id)
            const todos = await prisma.todo.findMany({
                where: {
                    userId: id,
                    createdAt: {
                        gte: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
                        lt: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1),
                    },
                },
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

export async function POST(req: any) {
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