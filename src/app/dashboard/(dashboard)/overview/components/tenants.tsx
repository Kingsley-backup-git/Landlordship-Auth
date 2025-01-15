import React from 'react'
import { PiListChecksBold } from "react-icons/pi";
import { FaArrowTrendDown } from "react-icons/fa6";
export default function Tenants() {
  return (
     <div className='bg-[#EDEEFC] rounded-2xl p-6'>
    <div className='flex items-center'>
        <h1 className='text-sm text-black font-[400] flex-1'>Tenants</h1>
    
     <PiListChecksBold className='text-[#1C1C1C] min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%]'/>
    </div>
    
    <div className='mt-4 flex gap-x-2 items-center'>
    <h1 className='text-2xl font-semibold text-black'>715</h1>
    
    <h1 className="text-xs font-[400] ms-auto text-black">-0.03%</h1>
    
    <FaArrowTrendDown className='text-black min-w-[13px] min-h-[13px] max-w-[13px] w-[100%] h-[100%]'/>
    </div>
        </div>
  )
}
