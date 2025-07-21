import Button from "@/app/components/ui/ButtonTwo";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { PiThumbsUpDuotone } from "react-icons/pi";
import { PiThumbsDownDuotone } from "react-icons/pi";
export default function StepSeven({
  header,
  stepHandler,
}: {
  header: string;
  stepHandler: (num: number) => void;
}) {
  return (
    <div className="sm:p-6 py-2 px-4  sm:max-w-[960px] mx-auto w-[100%]">
      <h1 className="text-black  font-semibold sm:flex hidden text-sm">
        {header}
      </h1>

      <div className="max-w-[600px] w-full mx-auto  mt-16 block justify-center items-center ">
        <h1 className="font-semibold text-xl text-black text-center">
          Add automatic recurring rent
        </h1>
        <p className="mt-1 text-sm font-[400] text-center text-[#00000066]">
          Enable the automatic lease rent invoicing.
        </p>

        <div className="flex flex-col w-full items-center gap-y-4 mt-6">
          <div className="max-w-[280px] w-full h-[110px] flex flex-col  gap-y-3 items-center justify-center rounded-2xl p-4 border-[1px] border-[#00000033]">
            <PiThumbsUpDuotone className="text-[#1C1C1C] text-lg" />
            <h1 className="text-sm font-[400] text-black">Yes</h1>
          </div>

          <div className="max-w-[280px] w-full h-[110px] flex flex-col  gap-y-3 items-center justify-center rounded-2xl p-4 border-[1px] border-[#00000033]">
            <PiThumbsDownDuotone className="text-[#1C1C1C] text-lg" />
            <h1 className="text-sm font-[400] text-black">No</h1>
          </div>
        </div>

        <div className="flex items-center mx-auto w-full max-w-[400px] gap-x-4 mt-6 justify-center">
          <Button
            onClick={() => stepHandler(6)}
            classname="bg-[#0000000A] flex flex-1 items-center justify-center gap-x-2 rounded-xl py-2 px-4"
          >
            <FaAngleLeft className="text-[#00000066] text-base" />
            <h1 className="text-sm font-[400] text-black">Previous</h1>
          </Button>

          <Button
            onClick={() => stepHandler(8)}
            classname="bg-[#1D3639] flex flex-1 items-center gap-x-2 justify-center rounded-xl py-2 px-4"
          >
            <h1 className="text-sm font-[400] text-white">Continue</h1>
            <FaAngleRight className="text-[#00000066] text-white text-base" />
          </Button>
        </div>
      </div>
    </div>
  );
}
