import Button from '@/app/components/ui/ButtonTwo';
import React,{SetStateAction} from 'react'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

export default function StepFour({  stepHandler,descriptionHandler, description,  setRequest
}: {
    stepHandler: (num: number) => void;
    descriptionHandler: (num: string) => void;
    description: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setRequest: SetStateAction<any>;
}) {
  return (
     <div className="mt-8 max-w-[400px] w-full mx-auto block">
      <h1 className="text-black font-semibold text-2xl text-center">
       Describe the issue
      </h1>
      <p className="font-normal mt-3 text-[#00000066] text-sm text-center">
      Check the subject and provide the issue details.
      </p>

      <textarea value={description} onChange={(event)=> descriptionHandler(event?.target.value)} placeholder='Describe the isuue' className="border-2 h-[200px] resize-none mt-4 py-1 px-3 border-[#0000001A] rounded-xl w-full bg-transparent p-2 text-sm font-[400] flex-1 placeholder:text-[#00000033] text-black outline-none" />

    
    
             <div className="flex items-center gap-x-4 mt-6 justify-between">
                  <Button
                    onClick={() => stepHandler(3)}
                    classname="bg-[#0000000A] flex items-center justify-center gap-x-2 max-w-[170px] w-full rounded-xl py-2 px-4"
                  >
                    <FaAngleLeft className="text-[#00000066] text-base" />
                    <h1 className="text-sm font-[400] text-black">Previous</h1>
                  </Button>
          
                  <Button
                    onClick={() => {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            setRequest((req: any)=> ({...req, description}))
                      stepHandler(5);
                     
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
