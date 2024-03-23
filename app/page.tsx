
// import { PrismaClient } from '@prisma/client';
import Link from 'next/link'
import { List } from './list';

export default async function Home() {

  return (
    <main className="flex flex-col items-center pt-[0px]  bg-[#d5e4fc] min-h-screen">
      <p className="text-center text-[40px] pt-[50px] bold text-[#4a5e7d]">TO DO LISTS</p>
      <div className="relative bg-[#fbfdf6] mt-[50px] mb-[200px] pt-[50px] pb-[50px] w-[1000px] min-h-[600px]" >
        <List />
        <Link href="/about"><div className="absolute bottom-[20px] right-[20px] text-[12px] text-[#cad2b4] cursor-pointer">
          关于本站
        </div>
        </Link>
      </div>
    </main>


  );
}
