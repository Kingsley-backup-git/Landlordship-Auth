import Button from "@/app/components/ui/ButtonTwo";
import Image from "next/image";
import React, { SetStateAction, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { PiCloudArrowUpDuotone } from "react-icons/pi";
import { PiVideoCameraDuotone } from "react-icons/pi";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function StepThree({
  stepHandler,
   setRequest
}: {
    stepHandler: (num: number) => void;
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 setRequest: SetStateAction<any>;
  }) {
  const [images, setImages] = useState<File[]>([])
  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null
    if (!file) {
  return
    }
    setImages([...images, file])
    setRequest((prev: { attachment: File[]; })=> ({...prev, attachment : [...prev.attachment, file] }))
    
  }
  return (
    <div className="mt-8 max-w-[400px] w-full mx-auto block">
      <h1 className="text-black font-semibold text-2xl text-center">
        Snap a photo of the issue
      </h1>
      <p className="font-normal mt-3 text-[#00000066] text-sm text-center">
        Add details of the problem to visualise the issue.
      </p>

      <div className="flex flex-col gap-y-6 mt-6">
        <label className="max-w-[280px] w-full mx-auto block">
         
          <div className="border flex flex-col gap-y-3 cursor-pointer items-center border-[rgba(0, 0, 0, 0.2)]  border-dashed  mx-auto w-full rounded-2xl p-6 h-[126px]">
            <PiCloudArrowUpDuotone className="text-2xl text-black" />
            <h1 className="text-black text-center text-sm">
              Add photos or upload a file
            </h1>
             <input type="file" onChange={(e)=> changeHandler(e)} accept = "image/*" multiple className="hidden w-full"/>
          </div>
        </label>
{(images && images.length > 0 )&& images?.map((image, index)=> {
  return <div key = {index} className="w-[70px] h-[70px]">
<Image src={URL.createObjectURL(image)} width = {70}  height = {70} className="w-full h-full object-cover" alt={`attachment${[index]}`}/>
  </div>
})}


          {/* <label className="max-w-[280px] w-full mx-auto block">
         
          <div className="border flex flex-col gap-y-3 cursor-pointer items-center border-[rgba(0, 0, 0, 0.2)]  border-dashed  mx-auto w-full rounded-2xl p-6 h-[126px]">
            <PiVideoCameraDuotone className="text-2xl text-black" />
            <h1 className="text-black text-center text-sm">
             Record a 15-sec video of the issue
            </h1>
             <input type="file" accept = "video/*" className="hidden w-full"/>
          </div>
        </label> */}
      </div>




         <div className="flex items-center gap-x-4 mt-6 justify-between">
              <Button
                onClick={() => stepHandler(2)}
                classname="bg-[#0000000A] flex items-center justify-center gap-x-2 max-w-[170px] w-full rounded-xl py-2 px-4"
              >
                <FaAngleLeft className="text-[#00000066] text-base" />
                <h1 className="text-sm font-[400] text-black">Previous</h1>
              </Button>
      
              <Button
                onClick={() => {
                
                  stepHandler(4);
                 
                }}
                classname={`bg-[#1D3639] cursor-pointer flex items-center gap-x-2 justify-center max-w-[170px] w-full rounded-xl py-2 px-4`}
              >
                <h1 className="text-sm font-[400] text-white">Continue</h1>
                <FaAngleRight className="text-[#00000066] text-white text-base" />
              </Button>
            </div>
    </div>
  );
}
