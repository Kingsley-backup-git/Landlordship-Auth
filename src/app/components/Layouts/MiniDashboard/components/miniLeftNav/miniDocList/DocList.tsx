import React from 'react'
import { PiChartBarDuotone } from "react-icons/pi";
import { FaRegFolderOpen } from "react-icons/fa";
import { PiNotebookDuotone } from "react-icons/pi";
import { PiGearDuotone } from "react-icons/pi";

export default function MiniDocList() {
  return (
    <div className='mt-1 pt-1 pb-2'>
    <h1 className='ps-2 text-[#656667] text-xs front-[400]'>Documentation</h1> 
     <div className={`mt-1 flex flex-col  gap-y-1`}>
 <div  className={`flex rounded-xl  hover:bg-[#1C1C1C0D] gap-x-2 p-2  items-center`}>
 <PiChartBarDuotone className='min-w-[16px] min-h-[16px] max-w-[16px] w-[100%] h-[100%] text-white/85'/>
  <h1 className='text-white/85 text-[10px] font-[400]'>Finance</h1> 
 </div>
 
 
 <div  className={`flex rounded-xl  hover:bg-[#1C1C1C0D] gap-x-2 p-2  items-center `}>
 <FaRegFolderOpen className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-white/85'/>
   <h1 className='text-white/85 text-xs font-[400]'>Documents</h1> 
 </div>
 
 
 <div  className='flex rounded-xl hover:bg-[#1C1C1C0D] gap-x-2 p-2  items-center'>
 <PiNotebookDuotone className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-white/85'/>
  <h1 className='text-white/85 text-xs font-[400]'>Reports</h1>
 </div>
 
 <div  className='flex rounded-xl  hover:bg-[#1C1C1C0D] gap-x-2 p-2  items-center'>
 <PiGearDuotone className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-white/85'/>
 <h1 className='text-white/85 text-xs font-[400]'>Tools</h1> 
 </div>
 
     </div>
 </div>
  )
}
