"use server";
import { PrismaClient } from '@prisma/client';
import { z } from "zod";

const prisma = new PrismaClient();
let i = 0

export async function createTodo(
  state: {
    message: string;
    content: string;
  },
  formData: FormData,
) {
  const schema = z.object({
    todo: z.string().min(1),
    id: z.string().min(1),
  });
  const parse = schema.safeParse({
    todo: formData.get("todo"),
    id: formData.get("id"),
  });

  if (!parse.success) {
    return { message: "Failed to create todo" };
  }

  const data = parse.data;
  try {
    const res = await prisma.todo.create({
      data: {
        content: data.todo,
        finished: false,
        user: {
          connect: {
            id: data.id
          }
        }
      },
    });
    // revalidatePath("/");
    return { message: `success`, content: data.todo, update: i++ };
  } catch (e) {
    return { message: "Failed to create todo", content: data.todo, update: i++ };
  }
}

export async function deleteTodo(
  state: {
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
    await prisma.todo.delete({
      where: { id: data.id },
    });

    // revalidatePath("/");
    return { message: `success` };
  } catch (e) {
    return { message: "Failed to delete todo" };
  }
}


