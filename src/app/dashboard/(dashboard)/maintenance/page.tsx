import React from 'react'
import Cards from './components/cards'
import { FaChevronLeft } from "react-icons/fa6";
import { BsThreeDots } from 'react-icons/bs'
// import Details from './components/details';

export default function Maintenance() {
  return (
    <>
    <div className='sm:p-6 py-2 px-4 sm:max-w-[960px] mx-auto w-[100%]'>
      <div className='flex sm:block items-center justify-between'>
        <div className='flex items-center sm:hidden gap-x-[1px]'>
        <FaChevronLeft className='text-[#007AFF] text-lg'/>
        <h1 className='font-[400] sm:text-base text-sm tracking-[-0.43px] text-[#007AFF]'>Home</h1>
        </div>
        <h1 className = "text-black font-semibold sm:flex hidden sm:text-sm text-base">Requests</h1>
        <h1 className = "text-black font-semibold sm:hidden flex sm:text-sm text-base">Maintenance</h1>

         <BsThreeDots className='text-[#007AFF] text-lg sm:hidden flex'/>
</div>
        <div className="sm:grid grid-cols-12 hidden sm:gap-x-5 gap-x-3 mt-5 w-full">
<div className='col-span-4 w-full '>
    <h1 className='font-semibold text-sm text-black'>Yet to Start <span className='text-[#00000066]'>6</span></h1>
    <div className="h-[5px] sm:flex hidden w-[100%] bg-[#E3572B] mt-2 rounded-2xl"></div>
</div>


<div className='col-span-4 w-full'>
    <h1 className='font-semibold text-sm text-black'>In Progress <span className='text-[#00000066]'>4</span></h1>
    <div className="h-[5px] w-[100%] bg-[#C3DF93] mt-2 rounded-2xl"></div>
</div>


<div className='sm:col-span-4 col-span-12'>
    <h1 className='font-semibold text-sm text-black'>Completed <span className='text-[#00000066]'>8</span></h1>
    <div className="h-[5px] w-[100%] bg-[#94E9B8] mt-2 rounded-2xl"></div>
</div>

        </div>






        <div className="grid grid-cols-12 sm:hidden sm:gap-x-5 gap-x-3 sm:gap-y-3 gap-y-2 mt-5 w-full">
<div className='xs:col-span-6 col-span-12 w-full flex justify-between bg-[#FFFFFF] rounded-2xl  p-5'>
  <div className='flex gap-x-2 items-center'>
<div className={`w-[9px] h-[9px] rounded-full  bg-[#FFDB56]`}></div>
    <h1 className='font-semibold text-sm text-black'>Yet to Start </h1>
    </div>
    <div className='text-[#00000066]'>6</div>
   
</div>


<div className='xs:col-span-6 col-span-12 w-full flex justify-between bg-[#FFFFFF] items-center rounded-2xl p-5'>
<div className='flex gap-x-2 items-center'>
<div className={`w-[9px] h-[9px] rounded-full  bg-[#AF52DE]`}></div>
    <h1 className='font-semibold text-sm text-black'>In Progress</h1>
    </div>
    <div className='text-[#00000066]'>4</div>
</div>


<div className='col-span-12 w-full flex justify-between bg-[#FFFFFF] rounded-2xl p-5'>
<div className='flex gap-x-2 items-center'>
<div className={`w-[9px] h-[9px] rounded-full  bg-[#34C759]`}></div>
    <h1 className='font-semibold text-sm text-black'>Completed</h1>
    </div>
    <div className='text-[#00000066]'>8</div>
    
</div>

        </div>






        <div className='grid sm:grid-cols-3 grid-cols-1 sm:mt-4 mt-6 gap-5'>
<Cards />
        </div>
    </div>
{/* <Details /> */}
    </>
  )
}
