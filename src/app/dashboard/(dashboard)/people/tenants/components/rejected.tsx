import React from 'react'
import { PiUserMinusDuotone } from "react-icons/pi";
export default function Rejected() {
  return (
    <div className='bg-[#E6F1FD] rounded-2xl p-6'>
            <div className='flex items-center'>
                <h1 className='text-sm text-black font-[400] flex-1'>Rejected</h1>
            
             <PiUserMinusDuotone className='text-[#1C1C1C] min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%]'/>
            </div>
            
            
            <h1 className='text-xl mt-4 font-semibold text-black'>0</h1>
           
        
                </div>
  )
}
