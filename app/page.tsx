import { AddForm } from "@/app/add-form";
import { DeleteForm } from "@/app/delete-form";
import { PrismaClient } from '@prisma/client';
import Link from 'next/link'
// import { useCookies } from "react-cookie"
const prisma = new PrismaClient();

export default async function Home() {
  // const [setCookie] = useCookies(["user"])
  // try {
  //   const newUser = await prisma.user.create({
  //     data: {
  //       name: 'nick',
  //       email: 'nick',
  //       password: '123456'
  //     },
  //   });

  //   setCookie("user", newUser.id, {
  //     path: "/",
  //     maxAge: 8400000, // cookeie 十天过期
  //     sameSite: true,
  //   })
  // } catch (err) {
  //   console.log(err)
  // }



  const todos = await prisma.todo.findMany();

  const myDecoStyle = (finished: boolean) => {
    let color = finished ? 'text-[#a9af99] line-through' : 'text-[#4e6c84]'
    return `flex flex-row  items-center relative text-[22px] justify-start items-start leading-[60px] text-left my-0 mx-[auto] text-[20px] w-[700px] bold ml-0 ${color}`;
  }
  return (
    <main className="flex flex-col items-center pt-[0px]  bg-[#d5e4fc] min-h-screen">
      <p className="text-center text-[40px] pt-[50px] bold text-[#4a5e7d]">TO DO LISTS</p>
      <div className="relative bg-[#fbfdf6] mt-[50px] mb-[200px] pt-[50px] pb-[50px] w-[1000px] min-h-[600px]" >

        <div className="flex flex-row  justify-start w-[700px]  ml-[auto] mr-[auto]">
          <AddForm />
        </div>
        <div className="flex flex-col justify-start items-start h-100 w-[700px] ml-[auto] mr-[auto] mt-[20px] pl-[20px]">
          {
            todos.map((todo, index) => {
              return <div className={`${myDecoStyle(todo.finished)}`} key={index}>
                {/* <Checkbox className="opacity-100" isSelected={item.finished} onChange={(event) => {
                                    // handleCheckbox(index, event, item._id, item.finished)
                 }} radius="full"></Checkbox> */}
                <p className="pl-[7px]">{todo.content}</p>

                <DeleteForm id={todo?.id} todo={todo.content} />
              </div>
            })
          }
        </div>
        <Link href="/about"><div className="absolute bottom-[20px] right-[20px] text-[12px] text-[#cad2b4] cursor-pointer">
          关于本站
        </div>
        </Link>
      </div>
    </main>


  );
}
