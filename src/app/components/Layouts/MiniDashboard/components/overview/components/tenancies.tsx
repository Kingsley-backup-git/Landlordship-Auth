import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiUsersThree } from "react-icons/pi";
export default function StaticTenancies() {
  return (
    <div className="bg-[#E6F1FD] rounded-lg p-3 ">
      <div className="flex items-center">
        <h1 className="text-[11px] text-black font-[400] flex-1">Tenancies</h1>

        <PiUsersThree className="text-[#1C1C1C] min-w-[15px] min-h-[15px] max-w-[15px] w-[100%] h-[100%]" />
      </div>

      <div className="mt-3 flex gap-x-2 items-center">
        <h1 className="text-base  font-semibold text-black">31</h1>

        <h1 className="text-[8px] font-[400] ms-auto text-black">+15.03%</h1>

        <FaArrowTrendUp className="text-black min-w-[10px] min-h-[10px] max-w-[10px] w-[100%] h-[100%]" />
      </div>
    </div>
  );
}
