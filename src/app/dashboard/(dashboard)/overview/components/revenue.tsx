import React from 'react'
import { PiMoneyDuotone } from "react-icons/pi";
export default function Revenue() {
  return (
<div className='bg-[#EDEEFC] rounded-2xl p-6'>
 <div className='flex items-center'>
     <h1 className='text-sm text-black font-[400] flex-1'>Revenue</h1>
 
  <PiMoneyDuotone className='text-[#1C1C1C] min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%]'/>
 </div>
 
 
 <h1 className='text-2xl mt-4 font-semibold text-black'>$12,000</h1>

     </div>
  )
}
