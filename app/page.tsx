
"use client";

import { List } from './list';
import { useEffect, useState } from 'react';
import event from './lib/event'


export default function Home() {
  const [theme, setTheme] = useState('theme1')
  const [haveImage, setHaveImage] = useState(true)

  useEffect(() => {
    function update(content: any) {
      setTheme(content)
      if (content === 'theme1') {
        setHaveImage(true)
      }
      if (content === 'theme2') {
        setHaveImage(false)
      }
    }
    event.on('theme', update);

    const storeTheme = localStorage.getItem('data-theme')
    if (storeTheme) {
      document.querySelector("html")?.setAttribute("data-theme", storeTheme);
      setTheme(storeTheme)
    }

  }, [])


  useEffect(() => {
    if (theme === 'theme1') {
      setHaveImage(true)
    }
    if (theme === 'theme2') {
      setHaveImage(false)
    }
    if (theme === 'theme3') {
      setHaveImage(false)
    }
    if (theme === 'theme4') {
      setHaveImage(true)
    }
  }, [theme])

  const myDecoStyle = () => {
    let bg = ''
    if (theme === 'theme1') {
      bg = 'bg-bg1'
    }
    if (theme === 'theme2') {
      bg = 'bg-bg3'
    }
    if (theme === 'theme3') {
      bg = 'bg-bg3'
    }
    if (theme === 'theme4') {
      bg = 'bg-bg3'
    }

    return 'w-[100%] h-[100%] absolute z-[0] bg-cover ' + bg;
  }

  return (
    <div className='overflow-hidden'>
      {haveImage && <div className={myDecoStyle()} ></div>}

      <main className="flex flex-col items-center pt-[0px] bg-layout min-h-screen overflow-y-auto" >
        <p className="relative z-[1] left-[-30px] text-center text-[40px] pt-[100px] bold text-title">&nbsp; TO DO LISTS</p>
        <div className='relative bg-content mb-[200px] pt-[50px] pb-[50px] w-[1000px] min-h-[600px] mt-[30px]' >
          <List />
        </div>

      </main >
    </div>
  );
}
