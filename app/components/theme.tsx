"use client"
import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import event from "../lib/event"


export const Theme = () => {

    return (
        <div className='pl-[370px] relative top-[2px]'>
            <Dropdown >
                <DropdownTrigger>
                    <p className='cursor-pointer text-headerText'>Theme&nbsp;&nbsp;&nbsp;</p>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions" onAction={(key) => {
                    event.emit('theme', key);
                    // @ts-ignore
                    document.querySelector("html")?.setAttribute("data-theme", key);
                    // @ts-ignore
                    localStorage.setItem('data-theme', key)
                }}>
                    <DropdownItem key="theme1" >Fresh Green</DropdownItem>
                    {/* <DropdownItem key="theme2" >Sea salt bluen</DropdownItem> */}
                    <DropdownItem key="theme3" >black</DropdownItem>
                    <DropdownItem key="theme4" >dispersion</DropdownItem>
                    <DropdownItem key="theme5" >cartoon</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>

    )
}
