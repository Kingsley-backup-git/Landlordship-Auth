import Link from 'next/link';
import React from 'react'
import { PiIdentificationBadgeDuotone } from "react-icons/pi";
import { PiIdentificationCardDuotone } from "react-icons/pi";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { PiUsersDuotone } from "react-icons/pi";
export default function PeopleList() {
  return (
    <div className='mt-1 pt-1 pb-2'>
        <h1 className='ps-3 text-[#1C1C1C66] text-sm front-[400]'>People</h1>
        <div className='mt-3 flex flex-col gap-y-1'>
<Link href = "/dashboard/overview" className='flex gap-x-2 p-2  items-center'>
<PiIdentificationBadgeDuotone className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black'/>
<h1 className='text-[#1C1C1C] text-sm font-[400]'>Tenants</h1>
</Link>


<Link href = "/dashboard/overview" className='flex gap-x-2 p-2  items-center'>
<PiIdentificationCardDuotone className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black'/>
<h1 className='text-[#1C1C1C] text-sm font-[400]'>Tenancies</h1>
</Link>


<Link href = "/dashboard/overview" className='flex gap-x-2 p-2  items-center'>
<PiUsersThreeDuotone className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black'/>
<h1 className='text-[#1C1C1C] text-sm font-[400]'>Applications</h1>
</Link>

<Link href = "/dashboard/overview" className='flex gap-x-2 p-2  items-center'>
<PiUsersDuotone className='min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black'/>
<h1 className='text-[#1C1C1C] text-sm font-[400]'>Agents</h1>
</Link>

        </div>
    </div>
  )
}
