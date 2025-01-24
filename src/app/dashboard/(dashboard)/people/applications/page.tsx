import React from 'react'
import Menu from './components/menu'
import AllApplications from './components/allApplications'
import { FaChevronLeft } from 'react-icons/fa6'
import { BsThreeDots } from 'react-icons/bs'

export default function Applications() {
  return (
    <div className='sm:p-6 py-2 px-4 sm:max-w-[960px] mx-auto   w-full overflow-hidden'>

<div className='flex sm:hidden items-center justify-between'>
  <div className='flex items-center sm:hidden gap-x-[1px]'>
  <FaChevronLeft className='text-[#007AFF] text-lg'/>
  <h1 className='font-[400] sm:text-base text-sm tracking-[-0.43px] text-[#007AFF]'>Home</h1>
  </div>


  <h1 className = "text-black font-semibold sm:tracking-normal tracking-[-0.43px] sm:text-sm text-base">Applications</h1>


  <BsThreeDots className='text-[#007AFF] text-lg sm:hidden flex'/>
</div>


<div className="w-full overflow-auto mt-6 sm:mt-0 grid grid-cols-12 grid-flow-col">
        <Menu />
        </div>

       <AllApplications />
    </div>
  )
}
