import React from 'react'
import { FaArrowTrendDown } from 'react-icons/fa6';
import { PiHandArrowDown } from "react-icons/pi";
export default function PaymentReceived() {
  return (
     <div className='bg-[#EDEEFC] rounded-2xl sm:p-6 p-4 sm:col-span-2 1sm:col-span-3 col-span-6'>
          <div className='flex items-center'>
              <h1 className='xs:text-sm text-xs text-black font-[400] flex-1'>Payment Received</h1>
          
           <PiHandArrowDown className='text-[#1C1C1C] sm:min-w-[20px] sm:min-h-[20px] sm:max-w-[20px] max-w-[19px] min-w-[19px] min-h-[19px] w-[100%] h-[100%]'/>
          </div>
          
          <div className='mt-4 flex  gap-x-2 items-center'>
          <h1 className='xs:text-xl flex-1 text-base font-semibold text-black text-break'>$3,290</h1>
          
          <h1 className="text-xs font-[400]  text-black">-0.03%</h1>
          
          <FaArrowTrendDown className='text-black min-w-[13px] min-h-[13px] max-w-[13px] w-[100%] h-[100%]'/>
          </div>
              </div>
  )
}
