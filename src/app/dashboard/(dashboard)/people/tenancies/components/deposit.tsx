import React from 'react'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { PiHandDepositDuotone } from "react-icons/pi";

export default function Deposits() {
  return (
  <div className='bg-[#E6F1FD] rounded-2xl sm:p-6 p-4 sm:col-span-2 1sm:col-span-3 col-span-6'>
         <div className='flex items-center'>
             <h1 className='xs:text-sm text-xs text-[#1D3639] font-[400] flex-1'>Deposits</h1>
         
          <PiHandDepositDuotone className='text-[#1C1C1C] sm:min-w-[20px] sm:min-h-[20px] sm:max-w-[20px] max-w-[19px] min-w-[19px] min-h-[19px] w-[100%] h-[100%]'/>
         </div>
         
         <div className='mt-4 flex  gap-x-2 items-center'>
         <h1 className='xs:text-xl flex-1 text-base  font-semibold text-black'>£31,000</h1>
         
         <h1 className="text-xs font-[400]  text-black">+15.03%</h1>
         
         <FaArrowTrendUp className='text-black min-w-[13px] min-h-[13px] max-w-[13px] w-[100%] h-[100%]'/>
         </div>
             </div>
  )
}
