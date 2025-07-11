'use client'
import Checkbox from '@/app/dashboard/(dashboard)/properties/components/inputs/checkbox'
import { FormikProps } from 'formik';
import React,{useState} from 'react'
import { IoMdAdd } from "react-icons/io";
interface PropertyFormValues {
  propertyName: string;
  yearBuilt: number;
  uniqueId: string;
  stateAddress: string;
  city: string;
  region: string;
  zip: string;
  country: string;
  propertyType?: "individual" | "multi-unit";
  amenities?: string[];
  features?: string[];
  attachments?: File[];
}

export default function PropertyAmenities({formik} : {formik : FormikProps<PropertyFormValues>}) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [allamenities, setAmenities] = useState(["Furnished", "Renovated", 
        "Dishwashed"])
            function handleChange (event:React.ChangeEvent<HTMLInputElement>) {
        const {value,checked} = event.target
        const amenities = formik.values.amenities ?? []
        console.log(value, checked)
        if(checked) {
          formik.setFieldValue('amenities', [...amenities, value])
        } else {
          formik.setFieldValue('amenities', formik.values.amenities?.filter((v) => v !== value))
        }
            }
  return (
    <div className='bg-[#F9F9FA] rounded-2xl p-6 mt-6'>
<h1 className='font-semibold text-sm text-black'>Property Amenities</h1>

<div className='flex flex-wrap gap-4 items-center mt-5'>
{allamenities.map((feature, index)=> {
    return <div key={index} className='flex flex-nowrap items-center gap-x-2'>
<Checkbox name = "amenities" value={feature} id = {`amenity-${index}`} classname={`w-[16px] h-[16px] cursor-pointer border-[#00000033] flex justify-center items-center  border-[1px] rounded`} checked={formik.values.amenities?.includes(feature) as boolean} clicked={(event)=> handleChange(event)}/>
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
