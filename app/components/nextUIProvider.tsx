"use client"
import React, { ReactNode } from 'react'

import { NextUIProvider } from "@nextui-org/react";


interface Props {
    children: ReactNode
}

export const NextUI = (props: Props) => {
    return (
        <NextUIProvider>
            {props.children}
        </NextUIProvider>
    )
}
