import React from 'react'
import Card from './components/card'

import { BsThreeDots } from "react-icons/bs";
import { FaChevronLeft } from 'react-icons/fa6';
import Link from 'next/link';
export default function Tools() {
  return (
    <div className = "sm:p-6 py-2 px-4 sm:max-w-[960px] mx-auto w-[100%]">
      
<div className='flex sm:block items-center justify-between'>
<Link href="/dashboard/" className='flex items-center sm:hidden gap-x-[1px]'>
  <FaChevronLeft className='text-[#007AFF] text-lg'/>
  <h1 className='font-[400] sm:text-base text-sm tracking-[-0.43px] text-[#007AFF]'>Home</h1>
  </Link>


  <h1 className = "text-black font-semibold sm:tracking-normal tracking-[-0.43px]  sm:text-sm text-base">Tools</h1>


  <BsThreeDots className='text-[#007AFF] text-lg sm:hidden flex'/>
</div>



 <div className = "mt-6 grid sm:grid-cols-2 grid-cols-1 w-[100%] sm:gap-6 gap-6">
<Card />

<Card />

<Card />


<Card />

<Card />
 </div>
    </div>
  )
}
