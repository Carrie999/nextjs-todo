import React from 'react'
import { SigninButton } from './signin'

export const Appbar = () => {
    return (
        <header className='flex gap-4 p-4 bg-gradient-to-b from-white to-grey-200 shadow'>
            <SigninButton ></SigninButton>
        </header>
    )
}
