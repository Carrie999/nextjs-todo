
import { RegisterForm } from "./register-form";
export default async function About() {


  return (
    <main className="flex flex-col  items-center pt-[100px]  bg-[#d5e4fc] min-h-screen">
      <p className="text-center text-[40px] bold text-[#4a5e7d]">register</p>
      <div className="relative bg-[#fbfdf6] mt-[50px] mb-[200px] pt-[50px] pb-[50px] w-[1000px] min-h-[600px]" >
        <div className="relative flex flex-col items-center ml-[auto] mr-[auto] w-[100%] h-[100px]" >
          <RegisterForm />
          {/* <div className="bg-green-100 w-[100px] h-[100px]"></div> */}
        </div>
      </div>
    </main>
  );
}


