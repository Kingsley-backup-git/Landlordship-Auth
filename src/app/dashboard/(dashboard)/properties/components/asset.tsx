import React from "react";
import { PiMoneyDuotone } from "react-icons/pi";
import { FaArrowTrendUp } from "react-icons/fa6";
export default function Asset() {
  return (
    <div className="bg-[#E6F1FD] rounded-2xl xs:p-6 p-4 col-span-6 lg:col-span-2   md:col-span-3 1sm:col-span-3 sm:col-span-6">
      <div className="flex items-center">
        <h1 className="text-sm text-black font-[400] flex-1">Asset Value</h1>

        <PiMoneyDuotone className="text-[#1C1C1C] min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%]" />
      </div>

      <div className="mt-4 flex gap-x-2 items-center">
        <h1 className="sm:text-xl text-base font-semibold text-black">
          £31,000
        </h1>

        <h1 className="text-xs font-[400] ms-auto text-black">+15.03%</h1>

        <FaArrowTrendUp className="text-black min-w-[13px] min-h-[13px] max-w-[13px] w-[100%] h-[100%]" />
      </div>
    </div>
  );
}
