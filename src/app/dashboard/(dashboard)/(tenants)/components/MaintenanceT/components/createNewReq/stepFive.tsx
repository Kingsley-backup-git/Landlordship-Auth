import Button from '@/app/components/ui/ButtonTwo';
import Checkbox from '@/app/dashboard/(dashboard)/properties/components/inputs/checkbox';
import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { PiThumbsDownDuotone, PiThumbsUpDuotone } from 'react-icons/pi';
import { requestTypes } from '../../maintenanceT';
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
export default function StepFive({stepHandler,permissionHandler, accessPermission, request, ChoosePetHandler
}: {
        stepHandler: (num: number) => void;
        permissionHandler: (val: boolean) => void;
        accessPermission: boolean;
        request: requestTypes;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ChoosePetHandler: (name: keyof typeof request.pets, value: boolean) => void;
}) {
  return (
   <div className="mt-8 max-w-[400px] w-full mx-auto block">
      <h1 className="text-black font-semibold text-2xl text-center">
      Permission to access
      </h1>
      <p className="font-normal mt-3 text-[#00000066] text-sm text-center">
    Can we use our key when you are away?
          </p>
      
      <div className="flex flex-col w-full items-center gap-y-4 mt-6">
        <div onClick={() => permissionHandler(true)} className={`max-w-[280px] cursor-pointer ${accessPermission === true ? "border-2 border-solid border-black" : "border-dashed border-[1px] border-[#00000033]"}  w-full h-[110px] flex flex-col  gap-y-3 items-center justify-center rounded-2xl p-4 `}>
          {accessPermission === false ? <PiThumbsUpDuotone className="text-[#1C1C1C] text-lg" /> : <AiFillLike className="text-[#1C1C1C] text-lg" />}
                  <h1 className="text-sm font-[400] text-black">Yes</h1>
                </div>
      
        <div onClick={() => permissionHandler(false)} className={`max-w-[280px] cursor-pointer w-full h-[110px] flex flex-col ${accessPermission === false ? "border-2 border-solid border-black" : "border-dashed border-[1px] border-[#00000033]"}  gap-y-3 items-center justify-center rounded-2xl  p-4 `}>
          {accessPermission === true ? <PiThumbsDownDuotone className="text-[#1C1C1C] text-lg" /> : <AiFillDislike className="text-[#1C1C1C] text-lg" />}
                  <h1 className="text-sm font-[400] text-black">No</h1>
                </div>
          </div>
          
<div className='mt-6 border-b-2 pb-4 border-[#0000001A] mb-5'>
          <h1 className="font-normal mb-4 text-black text-sm">Pets</h1>

          <div className="flex flex-wrap items-center gap-x-4">
              <div className='flex items-center gap-x-2'>
                    <Checkbox
                          name="cats"
                          value={"cats"}
                          id={`cats`}
                          classname={`w-[16px] h-[16px] cursor-pointer border-[#00000033] flex justify-center items-center  border-[1px] rounded`}
                          checked={request.pets.cats}
                          clicked={(event) => ChoosePetHandler("cats", event.target.checked)}
                        />
                        <h1 className="text-sm font-[400] text-black">{"Cats"}</h1>
              </div>
                      
              
                 <div className='flex items-center gap-x-2'>
                    <Checkbox
                          name="dogs"
                          value={"dogs"}
                          id={`dogs`}
                          classname={`w-[16px] h-[16px] cursor-pointer border-[#00000033] flex justify-center items-center  border-[1px] rounded`}
                          checked={request.pets.dogs}
                          clicked={(event) => ChoosePetHandler("dogs", event.target.checked)}
                        />
                        <h1 className="text-sm font-[400] text-black">{"Dogs"}</h1>
              </div>


                 <div className='flex items-center gap-x-2'>
                    <Checkbox
                          name="other"
                          value={"other"}
                          id={`other`}
                          classname={`w-[16px] h-[16px] cursor-pointer border-[#00000033] flex justify-center items-center  border-[1px] rounded`}
                          checked={request.pets.other}
                          clicked={(event) => ChoosePetHandler("other", event.target.checked)}
                        />
                        <h1 className="text-sm font-[400] text-black">{"Other"}</h1>
              </div>
              </div>
              </div>
      
          

             <div className="flex items-center gap-x-4 mt-6 justify-between">
                        <Button
                          onClick={() => stepHandler(4)}
                          classname="bg-[#0000000A] flex items-center justify-center gap-x-2 max-w-[170px] w-full rounded-xl py-2 px-4"
                        >
                          <FaAngleLeft className="text-[#00000066] text-base" />
                          <h1 className="text-sm font-[400] text-black">Previous</h1>
                        </Button>
                
                        <Button
                          onClick={() => {
                          
                            stepHandler(6);
                           
                          }}
                          classname={`bg-[#1D3639] cursor-pointer flex items-center gap-x-2 justify-center max-w-[170px] w-full rounded-xl py-2 px-4`}
                        >
                          <h1 className="text-sm font-[400] text-white">Continue</h1>
                          <FaAngleRight className="text-[#00000066] text-white text-base" />
                        </Button>
                      </div>
      </div>
  )
}
