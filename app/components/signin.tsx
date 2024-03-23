"use client"
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

export const SigninButton = () => {
    const { data: session } = useSession()
    // console.log(11, session && session.user)
    if (session && session.user) {
        return <div className='flex items-center justify-center gap-4 ml-auto'>
            <img className='w-[28px] h-[28px] rounded-full' src={session.user.image!} />
            <p className='text-sky-600'>{session.user.name}&nbsp;&nbsp;&nbsp;</p>
            <button className='text-red-400' onClick={() => { signOut() }}>    Sign Out</button>
        </div>
    }
    return (
        <div className='flex gap-4 ml-auto'>
            <button className='text-green-600 ml-auto ' onClick={() => {
                signIn('', { redirectTo: '/' });
            }}> Sign In</button>
        </div>
    )
}
