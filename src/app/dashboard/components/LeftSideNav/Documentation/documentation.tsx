'use client'
import Link from 'next/link';
import React from 'react'
import { PiChartBarDuotone } from "react-icons/pi";
import { FaRegFolderOpen } from "react-icons/fa";
import { PiNotebookDuotone } from "react-icons/pi";
import { PiGearDuotone } from "react-icons/pi";
import { usePathname } from 'next/navigation';
export default function DocList({leftNav} : {leftNav:boolean}) {
  const pathname = usePathname()
  return (
    <div className='mt-1 pt-1 pb-2'>
   {leftNav  ? <h1 className='ps-3 text-[#1C1C1C66] text-sm front-[400]'>Documentation</h1> : null}
    <div className={`mt-3 flex flex-col ${leftNav ? "" : "items-center"} gap-y-1`}>
<Link href = "/dashboard/documentation/finance" className={`flex rounded-xl  hover:bg-[#1C1C1C0D] gap-x-2 p-2  items-center ${pathname.includes("/finance") ? "bg-[#1C1C1C0D]": null}`}>
<PiChartBarDuotone className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black'/>
{leftNav  ? <h1 className='text-[#1C1C1C] text-xs font-[400]'>Finance</h1> : null }
</Link>


<Link href = "/dashboard/documentation/documents" className={`flex rounded-xl  hover:bg-[#1C1C1C0D] gap-x-2 p-2  items-center ${pathname.includes("/documents") ? "bg-[#1C1C1C0D]": null}`}>
<FaRegFolderOpen className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black'/>
{leftNav  ?  <h1 className='text-[#1C1C1C] text-xs font-[400]'>Documents</h1> : null}
</Link>


<Link href = "/dashboard/overview" className='flex rounded-xl hover:bg-[#1C1C1C0D] gap-x-2 p-2  items-center'>
<PiNotebookDuotone className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black'/>
{leftNav  ? <h1 className='text-[#1C1C1C] text-xs font-[400]'>Reports</h1>:null}
</Link>

<Link href = "/dashboard/documentation/tools" className='flex rounded-xl  hover:bg-[#1C1C1C0D] gap-x-2 p-2  items-center'>
<PiGearDuotone className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black'/>
{leftNav  ?<h1 className='text-[#1C1C1C] text-xs font-[400]'>Tools</h1> : null}
</Link>

    </div>
</div>
  )
}
