import Link from 'next/link';
import React from 'react'
import { PiChartBarDuotone } from "react-icons/pi";
import { FaRegFolderOpen } from "react-icons/fa";
import { PiNotebookDuotone } from "react-icons/pi";
import { PiGearDuotone } from "react-icons/pi";
export default function DocList() {
  return (
    <div className='mt-1 pt-1 pb-2'>
    <h1 className='ps-3 text-[#1C1C1C66] text-sm front-[400]'>Documentation</h1>
    <div className='mt-3 flex flex-col gap-y-1'>
<Link href = "/dashboard/overview" className='flex gap-x-2 p-2  items-center'>
<PiChartBarDuotone className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black'/>
<h1 className='text-[#1C1C1C] text-sm font-[400]'>Finance</h1>
</Link>


<Link href = "/dashboard/overview" className='flex gap-x-2 p-2  items-center'>
<FaRegFolderOpen className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black'/>
<h1 className='text-[#1C1C1C] text-sm font-[400]'>Documents</h1>
</Link>


<Link href = "/dashboard/overview" className='flex gap-x-2 p-2  items-center'>
<PiNotebookDuotone className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black'/>
<h1 className='text-[#1C1C1C] text-sm font-[400]'>Reports</h1>
</Link>

<Link href = "/dashboard/overview" className='flex gap-x-2 p-2  items-center'>
<PiGearDuotone className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black'/>
<h1 className='text-[#1C1C1C] text-sm font-[400]'>Tools</h1>
</Link>

    </div>
</div>
  )
}
