import "./global.css";
import 'tailwindcss/tailwind.css';
import Head from 'next/head'
import { Appbar } from "./components/appbar";
import { Providers } from "./components/providers";


export const metadata = {
  title: "Next.js Forms Example",
  description: "Example application with forms and Postgres.",
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
      </Head>
      <body>
        <Providers>
          <Appbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
