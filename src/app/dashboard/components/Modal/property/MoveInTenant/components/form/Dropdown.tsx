import React from 'react'
import { LuChevronsUpDown } from "react-icons/lu";
export default function Dropdown({className, text} : {className:string; text:string;}) {
  return (
    <div className={className}>
<label className='text-[#00000066] text-xs font-normal'>{text}</label>
<div className='w-full relative'>
    <select   className="w-full appearance-none  text-sm py-1 placeholder:text-[#00000033] placeholder:opacity-70 outline-none border-0 text-black">
    <option className=''  value={"First Property"}>First Property 101</option>

    </select>

    <LuChevronsUpDown className='absolute pointer-events-none top-[5px] right-3 text-[#00000066]' />
</div>
</div>
  )
}
