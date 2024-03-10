"use server";
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from "next/cache";
import { z } from "zod";

const prisma = new PrismaClient();
function getLocalTime(nS: any) {
  return new Date(parseInt(nS)).toLocaleString().replace(/:\d  {1,2}$/, ' ');
}

export async function createTodo(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const schema = z.object({
    todo: z.string().min(1),
  });
  const parse = schema.safeParse({
    todo: formData.get("todo"),
  });

  if (!parse.success) {
    return { message: "Failed to create todo" };
  }

  const data = parse.data;

  try {
    // await sql`
    //   INSERT INTO todo (content,finished,userId)
    //   VALUES (${data.todo},false,'cltl6823f000cklv9hqfefffx')
    // `;
    console.log(11, getLocalTime(new Date().getTime()), new Date().getTime())

    await prisma.todo.create({
      data: {
        content: data.todo,
        finished: false,
        user: {
          connect: {
            id: "cltl6823f000cklv9hqfefffx"
          }
        }
      },
    });

    console.log(22, getLocalTime(new Date().getTime()), new Date().getTime())

    revalidatePath("/");
    return { message: `Added todo ${data.todo}` };
  } catch (e) {
    return { message: "Failed to create todo" };
  }
}

export async function deleteTodo(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const schema = z.object({
    id: z.string().min(1),
    todo: z.string().min(1),
  });
  const data = schema.parse({
    id: formData.get("id"),
    todo: formData.get("todo"),
  });

  try {
    // await sql`
    //   DELETE FROM todos
    //   WHERE id = ${data.id};
    // `;
    await prisma.todo.delete({
      where: { id: data.id },
    });

    revalidatePath("/");
    return { message: `Deleted todo ${data.todo}` };
  } catch (e) {
    return { message: "Failed to delete todo" };
  }
}
