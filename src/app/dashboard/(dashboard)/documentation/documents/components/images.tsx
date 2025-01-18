import React from 'react'
import { PiFileImageFill } from "react-icons/pi";
export default function Images() {
  return (
   <div className='bg-[#E6F1FD] rounded-2xl p-6'>
           <div className='flex items-center'>
               <h1 className='text-sm text-black font-[400] flex-1'>Images</h1>
           
            <PiFileImageFill className='text-[#1C1C1C] min-w-[18px] min-h-[18px] max-w-[18px] w-[100%] h-[100%]'/>
           </div>
           
           
           <div className='mt-4 justify-between flex items-center gap-x-1'>
            <h1 className='text-xl font-semibold text-black'>0</h1>
            <h1 className='text-xs font-[400] text-black'>0 MB/512 MB</h1>
            </div>
          
       
               </div>
  )
}
