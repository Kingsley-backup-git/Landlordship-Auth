import React from 'react'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'

export default function StaticProperties() {
  return (
    <div className='bg-[#E6F1FD] rounded-lg p-3 '>
   <div className='flex items-center'>
       <h1 className='text-[11px] text-black font-[400] flex-1'>Properties</h1>
   
    <HiOutlineBuildingOffice2 className='text-[#1C1C1C] min-w-[15px] min-h-[15px] max-w-[15px] w-[100%] h-[100%]'/>
   </div>
   
   <div className='mt-3 flex gap-x-2 items-center'>
   <h1 className='text-base  font-semibold text-black'>29</h1>
   
   <h1 className="text-[8px] font-[400] ms-auto text-black">+11.02%</h1>
   
   <FaArrowTrendUp className='text-black min-w-[10px] min-h-[10px] max-w-[10px] w-[100%] h-[100%]'/>
   </div>
       </div>
  )
}
