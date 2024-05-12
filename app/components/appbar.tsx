"use client";
import React from 'react'
import { SigninButton } from './signin'
import { Theme } from './theme'
import Image from 'next/image'
import logo from '../img/logo.png'
import logoBlack from '../img/logo-black.png'
import Link from 'next/link'
import event from '../lib/event'
import { useEffect, useState } from 'react';


export const Appbar = () => {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        function update(content: any) {

            if (content === 'theme4') {
                setDark(true)
            } else {
                setDark(false)
            }

        }
        event.on('theme', update);


        const storeTheme = localStorage.getItem('data-theme')
        if (storeTheme === 'theme4') {
            setDark(true)
        }

    }, [])

    return (
        <header className='absolute top-[0px] bg-header w-[100vw] flex p-4 z-[10]'>
            <Link href="/">
                <div >
                    {typeof window !== 'undefined' && window?.location.hostname === "todos.asia" ?
                        <div className="cursor-pointer absolute z-[1] top-[16px] left-[160px] w-[140px] text-headerText text-[20px]">
                            待办事项
                        </div>
                        : <Image
                            src={dark ? logoBlack : logo}
                            className='cursor-pointer absolute z-[1] top-[-4px] left-[160px] w-[140px]'
                            alt="Picture of the author"
                        />}

                </div>
            </Link>
            <Theme></Theme>
            <Link href="/history">
                <div className="pl-[30px] relative top-[2px] cursor-pointer text-headerText">
                    History
                </div>
            </Link>
            <Link href="/about">
                <div className="pl-[30px] relative top-[2px] cursor-pointer text-headerText">
                    About
                </div>
            </Link>
            <SigninButton ></SigninButton>
        </header>
    )
}
