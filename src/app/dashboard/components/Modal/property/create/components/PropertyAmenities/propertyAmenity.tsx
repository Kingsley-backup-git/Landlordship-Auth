'use client'
import Checkbox from '@/app/dashboard/(dashboard)/properties/components/inputs/checkbox'
import React,{useState} from 'react'
import { IoMdAdd } from "react-icons/io";
export default function PropertyAmenities() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [features, setFeatures] = useState(["Furnished", "Renovated", 
        "Dishwashed", "Feature","Feature",
        "Feature","Feature","Feature","Feature","Feature","Feature",
        "Feature","Feature"])
  return (
    <div className='bg-[#F9F9FA] rounded-2xl p-6 mt-6'>
<h1 className='font-semibold text-sm text-black'>Property Amenities</h1>

<div className='flex flex-wrap gap-4 items-center mt-5'>
{features.map((feature, index)=> {
    return <div key={index} className='flex flex-nowrap items-center gap-x-2'>
<Checkbox classname={`w-[14px] h-[14px] cursor-pointer border-[#00000033] flex justify-center items-center  border-[1px] rounded`} checked={false} clicked={()=> null}/>
<h1 className='text-sm font-[400] text-black'>{feature}</h1>
    </div>
})}
</div>

<div className="flex gap-x-2 cursor-pointer max-w-fit w-full mt-5 items-center bg-[#0000000A] py-1 px-2 rounded-lg">
<IoMdAdd className="text-white bg-black rounded-full p-1  text-xl"/>
<h1 className="text-sm text-black font-[400]">Add custom amenity</h1>
</div>
    </div>
  )
}
