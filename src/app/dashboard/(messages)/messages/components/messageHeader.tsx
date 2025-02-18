import React from 'react'
import { PiTextTLight } from "react-icons/pi";
import { PiTextAUnderline } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiTextItalic } from "react-icons/pi";
import { PiTextStrikethrough } from "react-icons/pi";
import { PiTextB } from "react-icons/pi";
import { PiTextUnderline } from "react-icons/pi";
import { PiListBullets } from "react-icons/pi";
import { IoIosLink } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { PiArrowUUpLeft } from "react-icons/pi";
import { PiArrowsOutSimple } from "react-icons/pi";
import { PiArrowUUpRight } from "react-icons/pi";
export default function MessageHeader() {
  return (
    <div className='bg-[#F9F9FA] flex-wrap p-2 flex items-center'>
        <div className='flex items-center gap-x-4 pe-4'>
        <PiArrowUUpLeft className='text-black cursor-pointer text-lg'/>
        <PiArrowUUpRight className='text-black cursor-pointer text-lg'/>
        </div>


        <div className='flex items-center gap-x-4 px-5 border-x-[1px] border-[#00000033]'>
<div className='flex items-center gap-x-1'>
<PiTextTLight className='text-black text-lg cursor-pointer'/>
<MdOutlineKeyboardArrowDown className='text-[#00000066] cursor-pointer text-base'/>

</div>


<div className='flex items-center gap-x-1'>
<PiTextAUnderline className='text-black text-lg cursor-pointer'/>
<MdOutlineKeyboardArrowDown className='text-[#00000066] cursor-pointer text-base'/>

</div>


<PiTextB className='text-black cursor-pointer text-lg'/>

<PiTextItalic className='text-black cursor-pointer text-lg'/>

<PiTextUnderline className='text-black cursor-pointer text-lg'/>


<PiTextStrikethrough className='text-black cursor-pointer text-lg'/>

<PiListBullets className='text-black cursor-pointer text-lg'/>
        </div>


        <div className="ps-4 items-center  flex flex-1 gap-x-1">
            <div className='flex-1 flex items-center gap-x-4'>
            <IoIosLink className='text-black cursor-pointer text-lg'/>
            <BsThreeDots  className='text-black cursor-pointer text-lg'/>
            </div>

            <PiArrowsOutSimple className='text-black cursor-pointer text-lg '/>
            </div>

    </div>

  )
}
