"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { PiChartPieSliceFill } from "react-icons/pi";
import { LuWrench } from "react-icons/lu";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { usePathname } from 'next/navigation';
export default function DashboardList() {
  const [open, setOpen] = useState (false)
const pathname = usePathname()
  const Dropdown = ()=> {
    if(!open) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }
  return (
    <div className='mt-8 pt-1 pb-2'>
        <h1 className='ps-3 text-[#1C1C1C66] text-sm front-[400]'>Dashboards</h1>
        <div className='mt-3 flex flex-col gap-y-1'>
<Link href = "/dashboard/overview" className={`flex gap-x-2 p-2 cursor-pointer rounded-xl items-center ${pathname.includes("/overview") ? "bg-[#1C1C1C0D]": null}`}>
<PiChartPieSliceFill className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black'/>
<h1 className='text-[#1C1C1C] text-sm font-[400]'>Overview</h1>
</Link>


<div className='w-full py-2'>
    <div className='flex gap-x-2 items-center p-2 cursor-pointer' onClick={()=> Dropdown()}>
    <HiOutlineBuildingOffice2 className='text-[#1C1C1C] min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%]'/>
    <h1 className='flex-1 text-[#1C1C1C] text-sm font-[400]'>Properties</h1>
   {open && <MdOutlineKeyboardArrowDown className='text-[#1C1C1C33] min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%]'/>}
    {!open && <MdKeyboardArrowUp className='text-[#1C1C1C33] min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%]'/>}
    </div>

    {open && <div className=' ps-3 flex flex-col gap-y-1'>
<Link onClick = {()=> setOpen(true)} href = "/dashboard/unit" className={`text-[#1C1C1C] rounded-xl cursor-pointer text-sm font-[400] p-2  ${pathname.includes("/unit") ? "bg-[#1C1C1C0D]": null}`}>Units</Link>
<Link onClick = {()=> setOpen(true)}  href = "/dashboard/overview" className='text-[#1C1C1C] text-sm font-[400] p-2'>Buildings</Link>

</div> }
</div>
<Link href = "/dashboard/overview" className='flex gap-x-2 p-2 items-center'>
<LuWrench className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-[#1C1C1C]'/>
<h1 className='text-[#1C1C1C] text-sm font-[400] flex-1'>Maintenance</h1>
<MdKeyboardArrowRight className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-[#1C1C1C33]'/>
</Link>

        </div>
    </div>
  )
}
