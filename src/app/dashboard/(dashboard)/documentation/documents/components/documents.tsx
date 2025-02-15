import React from 'react'
import { PiFileDoc } from "react-icons/pi";
export default function AllDocuments() {
  return (
     <div className='bg-[#EDEEFC] rounded-2xl xs:p-6 p-4 '>
             <div className='flex items-center gap-x-1'>
                 <h1 className='text-sm text-black font-[400] flex-1'>Documents</h1>
             
              <PiFileDoc className='text-[#1C1C1C] min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%]'/>
             </div>
             
           <div className='mt-4 justify-between flex items-center gap-x-1'>
           <h1 className='sm:text-xl text-base font-semibold text-black'>0</h1>
           <h1 className='text-xs font-[400] text-black'>0 MB/512 MB</h1>
           </div>
           
            
             
            
                 </div>
  )
}
