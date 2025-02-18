import React from 'react'
import { FaArrowTrendUp } from 'react-icons/fa6';
import { PiUsersFourDuotone } from "react-icons/pi";
export default function CurrentTenancies() {
  return (
      <div className='bg-[#E6F1FD] rounded-2xl sm:p-6 p-4 '>
       <div className='flex items-center'>
           <h1 className='xs:text-sm text-xs text-black font-[400] flex-1'>Current Tenancies</h1>
       
        <PiUsersFourDuotone  className='text-[#1C1C1C] sm:min-w-[20px] sm:min-h-[20px] sm:max-w-[20px] max-w-[19px] min-w-[19px] min-h-[19px] w-[100%] h-[100%]'/>
       </div>
       
       <div className='mt-4 flex gap-x-2 items-center'>
       <h1 className='xs:text-xl text-base font-semibold flex-1 text-black'>268</h1>
       
       <h1 className="text-xs font-[400]  text-black">+11.02%</h1>
       
       <FaArrowTrendUp className='text-black min-w-[13px] min-h-[13px] max-w-[13px] w-[100%] h-[100%]'/>
       </div>
           </div>
  )
}
