"use client"
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export const SigninButton = () => {
    const { data: session } = useSession()
    // console.log(11, session && session.user)
    if (session && session.user) {
        return <div className='flex items-center justify-center gap-4  mr-[200px] ml-auto'>
            <img className='w-[28px] h-[28px] rounded-full' src={session.user.image!} />

            <Dropdown>
                <DropdownTrigger>
                    <p className='cursor-pointer text-headerText'>{session.user.name}&nbsp;&nbsp;&nbsp;</p>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions" onAction={(key) => {
                    // alert(key)
                    signOut()
                }}>
                    <DropdownItem key="delete" >Sign Out</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            {/* <button className='text-headerText hover:opacity-90' onClick={() => { signOut() }}>    Sign Out</button> */}
        </div>
    }
    return (
        <div className='flex gap-4 ml-auto'>
            <button className='text-headerText ml-auto ' onClick={() => {
                signIn('', { redirectTo: '/' });
            }}> Sign In</button>
        </div>
    )
}
