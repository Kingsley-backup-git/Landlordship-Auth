import React from "react";
import { PiMoneyDuotone } from "react-icons/pi";
export default function StaticRevenue() {
  return (
    <div className="bg-[#E6F1FD] rounded-lg p-3 ">
      <div className="flex items-center">
        <h1 className="text-[11px] text-black font-[400] flex-1">Revenue</h1>

        <PiMoneyDuotone className="text-[#1C1C1C] min-w-[15px] min-h-[15px] max-w-[15px] w-[100%] h-[100%]" />
      </div>

      <div className="mt-3 flex gap-x-2 items-center">
        <h1 className="text-base flex-1  font-semibold text-black">$12,000</h1>
      </div>
    </div>
  );
}
