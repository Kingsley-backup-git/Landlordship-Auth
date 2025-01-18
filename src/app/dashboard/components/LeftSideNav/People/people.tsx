'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { PiIdentificationBadgeDuotone } from "react-icons/pi";
import { PiIdentificationCardDuotone } from "react-icons/pi";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { PiUsersDuotone } from "react-icons/pi";
export default function PeopleList() {
  const pathname = usePathname()
  return (
    <div className='mt-1 pt-1 pb-2'>
        <h1 className='ps-3 text-[#1C1C1C66] text-sm front-[400]'>People</h1>
        <div className='mt-3 flex flex-col gap-y-1'>
<Link href = "/dashboard/people/tenants" className={`flex rounded-xl  hover:bg-[#1C1C1C0D] gap-x-2 p-2  items-center ${pathname.includes("/tenants") ? "bg-[#1C1C1C0D]": null}`}>
<PiIdentificationBadgeDuotone className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black'/>
<h1 className='text-[#1C1C1C] text-xs font-[400]'>Tenants</h1>
</Link>


<Link href = "/dashboard/overview" className='flex rounded-xl  hover:bg-[#1C1C1C0D] gap-x-2 p-2  items-center'>
<PiIdentificationCardDuotone className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black'/>
<h1 className='text-[#1C1C1C] text-xs font-[400]'>Tenancies</h1>
</Link>


<Link href = "/dashboard/people/applications" className={`flex rounded-xl   hover:bg-[#1C1C1C0D] gap-x-2 p-2  items-center ${pathname.includes("/applications") ? "bg-[#1C1C1C0D]": null}`}>
<PiUsersThreeDuotone className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black'/>
<h1 className='text-[#1C1C1C] text-xs font-[400]'>Applications</h1>
</Link>

<Link href = "/dashboard/people/agents" className={`flex rounded-xl  hover:bg-[#1C1C1C0D] gap-x-2 p-2   items-center ${pathname.includes("/agents") ? "bg-[#1C1C1C0D]": null}`}>
<PiUsersDuotone className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black'/>
<h1 className='text-[#1C1C1C] text-xs font-[400]'>Agents</h1>
</Link>

        </div>
    </div>
  )
}
