
import { Background } from './background'

export const metadata = {
  title: "To Do Lists - About",
  description: "To Do Lists online Minimalist wind, Multiple Theme Styles",
};

export default async function About() {

  return (
    <>
      <Background></Background>
      <main className="flex flex-col bg-layout items-center pt-[100px] ">
        <p className="relative z-[10] text-center text-[40px] bold text-title">站长有话说</p>
        <div className="relative bg-content mt-[50px] mb-[200px] pt-[50px] pb-[50px] w-[1000px] h-[670px] overflow-y-scroll" >
          {/* <p className="pl-[40px] pr-[40px] text-black text-[20px]" dangerouslySetInnerHTML={{ __html: desc }} ></p> */}
          <p className="pl-[40px] pr-[40px] text-black text-[20px]">
            问：这个世界上有很多 todolist 网站，你的网站有很什么特别的地方吗？
            <br />
            <p className="opacity-50 text-[18px] mt-[8px]">答：你可以在纸上写 todo，电脑和手机的备忘录里写 todo，可以在笔记软件里写 todolist，论核心功能确实在哪里都一样。

              本站更加适合电脑工作者，如果你希望有更加简洁的网站在线todolist，你可以偶尔来来。评价一个人不是看他怎么说，而是看他怎么做，所以 todo 我认为是衡量一个人价值的重要指标。
              我希望这个网站可以存在很长时间，一年两年甚至十年，这里只提供当天的 todo，你也可以很清晰的看到历史过去的某一天你做了什么。我希望把 todo 能够保存下来，用来日后回忆反思进步，
              这就是本站建立的初衷。</p>

            <br />
            问: 个人开发的网站会不会跑路？
            <br />
            <p className="opacity-50 text-[18px] mt-[8px]"> 答：这里会提供一个历史 todo 下载表格，你可以随时保存。如果这个网站就站长一个用户，让站长靠兴趣维持吧。这个网站本身就是一个学习兴趣项目，本想学习下nextjs server 数据库，docker 部署之类的内容，
              就先珍惜本站还能存在的时间吧。
            </p>

            <br />
            问: 数据请求好慢啊？用户登录有问题？
            <br />
            <p className="opacity-50 text-[18px] mt-[8px]"> 答：站主为了解决请求速度问题也是操碎了心，我会努力解决这个问题的，有任何其他问题也可以找我。
              <br />
              你也可以联系我qq：771685809
            </p>


            <br />
            问: 站长会不会偷窥你的数据？
            <br />
            <p className="opacity-50 text-[18px] mt-[8px]"> 答：我闲的没事干，监视你们干了什么。你做的才重要，别人知道不知道有什么打紧的，想要别人不知道就不要写。
            </p>

            <br />
            <p className="opacity-50 text-[18px]">
              这里做了主题样式，希望你喜欢，后面有兴趣会补充更多主题，本站主也会关注最新流行的样式是什么，争取跟上设计潮流。

              本站是由 nextjs 搭建，使用 SSR，tailwind，react 的 useFormState 和 RPC，postgres 数据库，在 vercel 美国部署，腾讯云在中国使用 docker 部署，使用的 github 和谷歌认证。
              如果看不懂我说的也没关系，就是最潮流的。日后前端有什么新框架发展，立马用上。功能不多，但是技术永远使用最新的。最后祝您少说多做。
            </p>
            <br />







          </p>
        </div>
      </main >
    </>
  );
}


