import Button from '@/app/components/ui/Button';
import React from 'react'
import { PiCloudArrowUpDuotone } from "react-icons/pi";
export default function UploadAttachment() {
  return (
    <div className='bg-[#F9F9FA] rounded-2xl p-6 mt-6'>
      <h1 className='font-semibold text-sm text-black'>Upload Attachment</h1> 

      <div className='bg-[#FFFFFFCC] rounded-2xl mt-4 p-4 flex gap-x-3 items-center'>
<PiCloudArrowUpDuotone className="text-xl text-black"/>
        <h1 className="font-[400] text-sm text-black">Store important documents and ready made templates</h1>
        </div> 
    
    <Button classname='text-white text-xs font-[400] bg-black rounded-lg py-1 px-2 mt-4' text="Upload"/>
    </div>
  )
}
