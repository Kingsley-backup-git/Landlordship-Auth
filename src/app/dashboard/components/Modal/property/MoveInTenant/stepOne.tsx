'use client'
import React, { useEffect, useState } from 'react'
import Dropdown from './components/form/Dropdown'
import Button from '@/app/components/ui/ButtonTwo'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useQuery } from '@tanstack/react-query';
import { PropertyService } from '@/services/property';
export default function StepOne({header, setPropertyIdHandler, stepHandler, propertyId}:{header:string,setPropertyIdHandler : (id:string)=>void, stepHandler : (num:number)=> void;propertyId:string}) {

  const propertyQuery = useQuery({
    queryKey: ['allProperties'],
    queryFn : async()=> await new PropertyService().getAllProperties()
  })


  return (
<>
{propertyQuery.isSuccess &&
    <div className='sm:p-6 py-2 px-4  sm:max-w-[960px] mx-auto w-[100%]'>
       <h1 className = "text-black  font-semibold sm:flex hidden text-sm">{header}</h1>
    <div className='mt-16 justify-center max-w-[600px] mx-auto w-full'>
<h1 className="text-2xl text-center font-semibold text-black">
Property details
</h1>

<p className="text-sm text-center mt-2 font-[400] text-[#00000066]">Select the property and unit below.</p>


<Dropdown setPropertyIdHandler = {setPropertyIdHandler} properties={propertyQuery?.data} text="Property" className="py-4 px-5 mt-5 rounded-2xl mx-auto block w-full max-w-[400px] bg-[#FFFFFFCC] border-[.5px] border-[#0000001A]"/>

<div className="flex items-center gap-x-4 mt-6 justify-center">
<Button onClick={()=> stepHandler(0)} classname='bg-[#0000000A] flex items-center justify-center gap-x-2 max-w-[170px] w-full rounded-xl py-2 px-4'>
<FaAngleLeft className='text-[#00000066] text-base'/>
  <h1 className="text-sm font-[400] text-black">Previous</h1>
</Button>

<Button onClick={()=> stepHandler(4)} classname={`${propertyId === "" ? "bg-gray-300 cursor-not-allowed pointer-events-none": "bg-[#1D3639] cursor-pointer" } flex items-center gap-x-2 justify-center max-w-[170px] w-full rounded-xl py-2 px-4`}>

  <h1 className="text-sm font-[400] text-white">Continue</h1>
  <FaAngleRight className='text-[#00000066] text-white text-base'/>
</Button>
</div>
    </div>
  </div>
}
  </>
  )
}
