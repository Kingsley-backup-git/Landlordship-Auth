'use client'
import Button from '@/app/components/ui/Button';
import { FormikProps } from 'formik';
import Image from 'next/image';
import React, { useRef, useState } from 'react'
import { PiCloudArrowUpDuotone } from "react-icons/pi";
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
export default function UploadAttachment({formik}: {formik: FormikProps<PropertyFormValues>}) {
   const fileRef = useRef<HTMLInputElement>(null);
const [image, setImage] = useState<File[]>([]);
  const handleClick = () => {
    fileRef.current?.click(); 

  };
  function handleImageUpload(e:React.ChangeEvent<HTMLInputElement>) {
    if(e.target.files) {
const file = e?.target?.files[0]  
 if(file) {
      formik.setFieldValue('attachments', [...formik.values.attachments ?? [], file])
      setImage(prev => [...prev, file])
    }
    }
    
   
  }
  return (
    <div className='bg-[#F9F9FA] rounded-2xl p-6 mt-6'>
      <h1 className='font-semibold text-sm text-black'>Upload Attachment</h1> 

      <div className='bg-[#FFFFFFCC] relative rounded-2xl mt-4 p-4 flex gap-x-3 items-center'>
 {image.length < 1 && <PiCloudArrowUpDuotone className="text-xl text-black"/>}
       {image.length < 1 &&  <h1 className="font-[400] text-sm text-black">Store important documents and ready made templates</h1>}
       <div className="inset-y-0 my-auto absolute flex items-center gap-x-2">
        {image.length > 0 &&
        image?.map((img, index)=> {
          return <Image key = {index} width={40} height={40} src ={URL?.createObjectURL(img)} alt="image" className=" w-[40px] object-cover h-[40px] rounded-lg " /> 
        })}
         </div>
        </div> 
    <label htmlFor = "upload">
      <input multiple={true} ref={fileRef} type = "file" accept='image/*' className = "hidden" id = "upload" onChange = {(e)=> handleImageUpload(e)}/>
    <Button type="button" onClick={handleClick} classname='text-white cursor-pointer text-xs font-[400] bg-black rounded-lg py-1 px-2 mt-4' text="Upload"/>
    </label>
    </div>
  )
}
