

export default async function About() {
  // const [intro, setIntro] = useState('');
  // async function getData() {
  //   const res = await cloud.invoke('about')
  //   setIntro(res?.data)
  // }
  // useEffect(() => {
  //   getData()
  // }, []);

  // Server Action
  // async function create() {
  //   const res = await cloud.invoke('about')
  //   setIntro(res?.data)
  // }
  const desc = "本站是一个基于 Next.js 和 vercel 云开发的网站，主要提供 ToDoList 功能。通过结合 Next.js 的强大功能和 LAF 云开发的便捷性，我们打造了一个简洁高效的任务管理平台。用户可以轻松创建、编辑和完成任务，帮助他们更好地组织生活和工作。<br><br/>感谢开发者倾心打造这个网站，让用户可以通过简单而优雅的界面体验到高效的任务管理。无论是工作任务、学习计划还是日常琐事，本站都能帮助您清晰地记录和管理，让生活更加有序、高效。<br><br/>欢迎您来体验本站带来的便利和愉悦，让我们一起提升效率，享受更美好的生活！"
  return (
    <main className="flex flex-col  items-center pt-[100px]  bg-[#d5e4fc] min-h-screen">
      <p className="text-center text-[40px] bold text-[#4a5e7d]">关于本站</p>
      <div className="relative bg-[#fbfdf6] mt-[50px] mb-[200px] pt-[50px] pb-[50px] w-[1000px] min-h-[600px]" >
        <p className="pl-[40px] pr-[40px] text-[#4e6c84] text-[20px]" dangerouslySetInnerHTML={{ __html: desc }} ></p>
      </div>
    </main>
  );
}


