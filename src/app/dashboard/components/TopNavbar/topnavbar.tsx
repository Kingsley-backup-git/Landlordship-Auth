'use client'
import React from 'react'
import { PiSidebar } from "react-icons/pi";
import { PiChatsDuotone } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { BsCommand } from "react-icons/bs";
import TextInput from '../inputs/TextInput';
import { PiSunDuotone } from "react-icons/pi";
import { PiCalendarDuotone } from "react-icons/pi";
import { PiSidebarDuotone } from "react-icons/pi";
import { VscBell } from "react-icons/vsc";
import { useRouter, usePathname } from 'next/navigation';
import { useMyContext } from '@/context/NavProvider';
export default function TopNavbar() {
  const {push} = useRouter()
  const pathname = usePathname()
  const menu = pathname.split("/")
  const path =menu[menu.length - 2];
const {toggleNav} = useMyContext()
  const lastPath = menu.filter(Boolean).pop()
  return (
    <div className = "sm:flex hidden items-center px-4 gap-x-4 border-b-[1px] border-[#1C1C1C1A]  pb-4 w-[100%]">
        <div className='me-auto flex gap-x-3 items-center'>
<PiSidebar className='text-black cursor-pointer text-xl' onClick={()=> toggleNav()}/>
<PiChatsDuotone className='text-xl cursor-pointer text-black' onClick = {()=> push("/dashboard/messages")}/>

<div className='1/2md:flex hidden gap-x-3 items-center'>
    <h1 className='text-[#00000066] font-[400] text-sm capitalize'>{path}</h1>
    <div className='text-sm font-[400] text-[#00000033]'>/</div>
    <h1 className='font-[400] text-sm text-black capitalize'>{lastPath}</h1>
</div>
        </div>



        <div className='ms-auto flex items-center gap-x-4'>
<div className='bg-[#0000000A] max-w-[160px] w-[100%] rounded-lg px-2 py-[6px] gap-x-[6px] flex items-center'>
<CiSearch className='text-lg text-[#00000033]'/>
<TextInput type='text' classname='flex-1 w-[100%]  bg-transparent text-black text-sm outline-0 border-[0px] border-transparent' placeholder='Search'  name={'searchinput'}/>
<BsCommand className='text-sm text-[#00000033]'/>
</div>

<PiSunDuotone className='text-black text-xl'/>

<PiCalendarDuotone className='text-black text-xl'/>

<VscBell className='text-black text-xl'/>

<PiSidebarDuotone className='text-black 1md:flex hidden text-xl'/>
        </div>
    </div>
  )
}
