import "./global.css";
import 'tailwindcss/tailwind.css';
import Head from 'next/head'
import { Appbar } from "./components/appbar";
import { Providers } from "./components/providers";
import { NextUI } from "./components/nextUIProvider";



export const metadata = {
  title: "待办事项 - To Do Lists online ",
  description: "To Do Lists online Minimalist wind ｜ Multiple Theme Styles ｜ 在线todolists ｜极简 todo ｜主题样式定制",
};



export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <Head>
        <title>todolist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Cache-Control" content="no-store" />
      </Head>
      <body>

        <div className='absolute bottom-[0px] text-[#000000] opacity-10 w-[100vw] p-4 z-[10]'>
          <div className="text-center text-xs">
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=13063402000259">冀公网安备13063402000259号</a>&nbsp;
            <a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index">冀ICP备2024063617号</a>
          </div>
        </div>
        <Providers>
          <NextUI>
            <Appbar />
            {children}
          </NextUI>
        </Providers>

      </body>
    </html>
  );
}
