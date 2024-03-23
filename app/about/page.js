

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
  const desc = "本站提供todolist功能"
  return (
    <main className="flex flex-col  items-center pt-[100px]  bg-[#d5e4fc] min-h-screen">
      <p className="text-center text-[40px] bold text-[#4a5e7d]">关于本站</p>
      <div className="relative bg-[#fbfdf6] mt-[50px] mb-[200px] pt-[50px] pb-[50px] w-[1000px] min-h-[600px]" >
        <p className="pl-[40px] pr-[40px] text-[#4e6c84] text-[20px]" dangerouslySetInnerHTML={{ __html: desc }} ></p>
      </div>
    </main>
  );
}


