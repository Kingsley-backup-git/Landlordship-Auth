import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiHandCoins } from "react-icons/pi";
export default function TotalRentDue() {
  return (
    <div className="bg-[#E6F1FD] rounded-2xl sm:p-6 p-4 col-span-6 lg:col-span-2  md:col-span-3 sm:col-span-6  1sm:col-span-3 ">
      <div className="flex items-center">
        <h1 className="xs:text-sm text-xs text-black font-[400] flex-1">
          Total Rent Due
        </h1>

        <PiHandCoins className="text-[#1C1C1C] sm:min-w-[20px] sm:min-h-[20px] sm:max-w-[20px] max-w-[19px] min-w-[19px] min-h-[19px] w-[100%] h-[100%]" />
      </div>

      <div className="mt-4 flex gap-x-2 items-center">
        <h1 className="xs:text-xl text-base font-semibold flex-1 text-black">
          $1,020
        </h1>

        <h1 className="text-xs font-[400]  text-black">+11.02%</h1>

        <FaArrowTrendUp className="text-black min-w-[13px] min-h-[13px] max-w-[13px] w-[100%] h-[100%]" />
      </div>
    </div>
  );
}
