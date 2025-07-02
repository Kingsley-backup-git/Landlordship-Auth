import RadioInput from '@/app/auth/setup/components/inputs/radioButton'
import Checkbox from '@/app/dashboard/(dashboard)/properties/components/inputs/checkbox'
import React from 'react'

export default function PropertyType({propertyTypeHandler, propertyType} : {propertyTypeHandler : (val:string)=> void, propertyType : string}) {
  return (
    <div className = "bg-[#F9F9FA] p-6 rounded-2xl mt-6">
<h1 className="font-semibold text-sm text-black">Choose Your Property Type</h1>


<div className='grid grid-cols-2 items-stretch gap-x-6  mt-4'>
<div className={`bg-[#FFFFFFCC]  relative cursor-pointer flex-1 ${propertyType === "individual" ? "border-[#000000] border-[2px]" : "border-[.5px] #0000001A"} py-6 px-6 rounded-2xl`} onClick={()=> propertyTypeHandler("individual")}>
     <div className="">
        <h1 className='font-semibold text-sm text-black'>Individual Property</h1>
        <p className="text-[#00000066] font-[400] text-xs mt-2">Perfect for standalone homes, condos, or single rental units.</p>
            </div>
     
       {propertyType === "individual" ? <RadioInput />  : <div className='h-[15px] w-[15px] top-4 right-5 absolute border-[#00000033] border-[1px] rounded-full'></div> }
</div>



<div className={`bg-[#FFFFFFCC]  cursor-pointer ${propertyType === "multi" ? "border-[#000000] border-[2px]" : "border-[.5px] #0000001A"} relative flex-1 py-6  px-6 rounded-2xl`} onClick={()=> propertyTypeHandler("multi")}>
     <div className="">
        <h1 className='font-semibold text-sm text-black'>Multi-Unit Complex</h1>
        <p className="text-[#00000066] font-[400] text-xs mt-2">Ideal for managing apartments, duplexes, or buildings with multiple rental units.</p>
            </div>
     
            {propertyType === "multi" ? <RadioInput />  : <div className='h-[15px] top-4 right-5 w-[15px] border-[#00000033] absolute border-[1px] rounded-full'></div> }
</div>
</div>



<div className="bg-[#FFFFFFCC] py-4 px-5 border-[.5px] border-[#0000001A] mt-4 rounded-2xl">
    <h1 className='text-[#00000066] text-xs font-[400]'>Does this property have special requirements?</h1>
<div className='flex gap-x-5 mt-2 items-center'>
<div className='flex gap-x-3 items-center'>
    <Checkbox classname={`w-[14px] h-[14px] cursor-pointer border-[#00000033] flex justify-center items-center  border-[1px] rounded`} checked={false} clicked={()=> null}/>
    <h1 className='text-black font-[400] text-sm'>Yes (e.g., manufactured/mobile home)</h1>
</div>


<div className='flex gap-x-3 items-center'>
    <Checkbox classname={`w-[14px] h-[14px] cursor-pointer border-[#00000033] flex justify-center items-center  border-[1px] rounded`} checked={false} clicked={()=> null}/>
    <h1 className='text-black font-[400] text-sm'>No</h1>
</div>
</div>


</div>
    </div>
  )
}
