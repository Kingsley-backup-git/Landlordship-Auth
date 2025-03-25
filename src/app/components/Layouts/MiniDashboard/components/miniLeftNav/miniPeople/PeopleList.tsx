
import React from 'react'
import { PiIdentificationBadgeDuotone } from "react-icons/pi";
import { PiIdentificationCardDuotone } from "react-icons/pi";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { PiUsersDuotone } from "react-icons/pi";
export default function MiniPeopleList() {
  return (
    <div className='mt-1 pt-1 pb-2'>
   <h1 className='ps-2 text-[#656667] text-xs front-[400]'>People</h1> 
     <div className={`mt-1 flex flex-col  gap-y-1`}>
<div  className={`flex rounded-xl  hover:bg-[#1C1C1C0D] gap-x-2 p-2  items-center `}>
<PiIdentificationBadgeDuotone className='min-w-[16px] min-h-[16px] max-w-[16px] w-[100%] h-[100%] text-white'/>
 <h1 className='text-white text-[10px] font-[400]'>Tenants</h1>
</div>


<div  className='flex rounded-xl  hover:bg-[#1C1C1C0D] gap-x-2 p-2  items-center'>
<PiIdentificationCardDuotone className='min-w-[16px] min-h-[16px] max-w-[16px] w-[100%] h-[100%] text-white'/>
<h1 className='text-white text-[10px] font-[400]'>Tenancies</h1>
</div>


<div className={`flex rounded-xl   hover:bg-[#1C1C1C0D] gap-x-2 p-2  items-center `}>
<PiUsersThreeDuotone className='min-w-[16px] min-h-[16px] max-w-[16px] w-[100%] h-[100%] text-white'/>
<h1 className='text-white text-[10px] font-[400]'>Applications</h1> 
</div>

<div  className={`flex rounded-xl  hover:bg-[#1C1C1C0D] gap-x-2 p-2   items-center`}>
<PiUsersDuotone className='min-w-[16px] min-h-[16px] max-w-[16px] w-[100%] h-[100%] text-white'/>
 <h1 className='text-white text-[10px] font-[400]'>Agents</h1> 
</div>

     </div>
 </div>
  )
}
