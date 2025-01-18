import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import TextInput from './inputs/TextInput';
export default function SelectedChats() {
  return (
    <div className='flex flex-col py-3 divide-y-[1px] divide-[#0000000A] border-[1px] border-[#0000000A] rounded-lg'>
        <div className='px-4 flex pb-3 items-center gap-x-2'>
<h1 className='text-[#00000066] font-[400] text-sm'>
    To
</h1>
<div className='flex-1'>

</div>
<div className='ms-auto flex flex-col items-center'>
<MdKeyboardArrowUp className='text-[#00000066] text-sm relative top-[4px]'/>
<MdOutlineKeyboardArrowDown className='text-[#00000066] text-sm relative top-[-4px]'/>

</div>
        </div>

        <div className='flex gap-x-4 items-center pt-2 px-4'>
<h1 className='text-[#00000066] font-[400] text-sm'>Subject</h1>
<TextInput classname='flex-1 outline-none w-[100%] border-0 font-[400] text-sm text-black p-1'/>
        </div>

    </div>
  )
}
