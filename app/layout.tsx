import "./global.css";
import 'tailwindcss/tailwind.css';
import Head from 'next/head'
import { Appbar } from "./components/appbar";
import { Providers } from "./components/providers";
import { NextUI } from "./components/nextUIProvider";

export const metadata = {
  title: "To Do Lists - online ",
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
