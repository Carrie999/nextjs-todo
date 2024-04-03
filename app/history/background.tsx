"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import event from '../lib/event'


export const Background = () => {
    const [theme, setTheme] = useState('theme1')
    const [haveImage, setHaveImage] = useState(true)

    useEffect(() => {
        event.on('theme', update);
        //@ts-ignore
        function update(content) {
            setTheme(content)
        }
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
        if (theme === 'theme5') {
            setHaveImage(false)
        }
    }, [theme])


    const myDecoStyle = () => {
        let bg = ''
        if (theme === 'theme1') {
            bg = 'bg-bg1'
        }
        if (theme === 'theme2') {
            bg = ''
        }
        if (theme === 'theme3') {
            bg = ''
        }
        if (theme === 'theme4') {
            bg = 'bg-bg3'
        }
        if (theme === 'theme5') {
            bg = ''
        }

        return 'w-[100%] h-[100%] absolute z-[0] bg-cover ' + bg;
    }

    return (
        haveImage ? <div className={myDecoStyle()} ></div> : <></>
    )
}
