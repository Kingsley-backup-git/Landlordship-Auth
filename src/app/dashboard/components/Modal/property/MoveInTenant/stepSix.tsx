import Button from '@/app/components/ui/ButtonTwo'
import ToggleButton from '@/app/components/ui/ToggleButton'
import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

export default function StepSix({header, stepHandler}:{header:string, stepHandler : (num:number)=> void;}) {
  return (
    <div className='sm:p-6 py-2 px-4  sm:max-w-[960px] mx-auto w-[100%]'>
       <h1 className = "text-black  font-semibold sm:flex hidden text-sm">{header}</h1>


<div className="mt-16 max-w-[650px] w-full mx-auto px-4">
<h1 className="font-semibold text-xl text-black text-center">Share lease</h1>
<p className='text-[#00000066] font-[400] text-sm mt-1 text-center'>Share the lease with tenants who aren&apos;t yet connected.</p>

<div className='w-full mt-6'>
<div className='flex gap-x-2 items-center border-b-[1px] border-[#00000033] py-4'>
<div className='flex-[28%] text-[#00000066] font-normal text-xs'>Tenant</div>
<div className='flex-[28%] text-[#00000066] font-normal text-xs'>Email</div>
<div className='flex-[28%] text-[#00000066] font-normal text-xs'>Share</div>
<div className='flex-[16%] text-[#00000066] font-normal text-xs'>Status</div>
</div>
<div className='flex gap-x-2 items-center border-b-[.5px] border-[#00000033] py-2'>
<div className='flex-[28%] text-black font-normal text-xs'>Lucy Mendel</div>
<div className='flex-[28%] text-black font-normal text-xs'>lucymendel@gmail.com</div>
<div className='flex-[28%]'><ToggleButton /></div>
<div className='flex-[16%] text-[#8A8CD9] font-normal text-xs flex items-center gap-x-1'><div className='w-[5px] h-[5px] bg-[#8A8CD9] rounded-full'></div><h1>In Progress</h1></div>
</div>


</div>


<div className="flex items-center mx-auto max-w-[350px] w-full  gap-x-4 mt-7 justify-center">
<Button onClick={()=> stepHandler(2)} classname='bg-[#0000000A] flex flex-1 items-center justify-center gap-x-2 rounded-xl py-2 px-4'>
<FaAngleLeft className='text-[#00000066] text-base'/>
  <h1 className="text-sm font-[400] text-black">Previous</h1>
</Button>

<Button onClick={()=> stepHandler(7)} classname='bg-[#1D3639] flex flex-1 items-center gap-x-2 justify-center rounded-xl py-2 px-4'>

  <h1 className="text-sm font-[400] text-white">Continue</h1>
  <FaAngleRight className='text-[#00000066] text-white text-base'/>
</Button>
</div>
</div>
    </div>
  )
}
