import React from "react";
import { PiMoneyDuotone } from "react-icons/pi";
import { FaArrowTrendUp } from "react-icons/fa6";
export default function PendingApplications() {
  return (
    <div className="bg-[#E6F1FD] rounded-2xl xs:p-6 p-4 col-span-6 lg:col-span-2   md:col-span-3 1sm:col-span-3 sm:col-span-6">
      <div className="flex items-center">
        <h1 className="text-sm text-black font-[400] flex-1">Applications Pending</h1>

    

         <div className="w-[10px] h-[10px] rounded-full bg-yellow-500">
          
       </div>
      </div>

      <div className="mt-4 flex gap-x-2 items-center">
        <h1 className="sm:text-lg text-base font-semibold text-black">
       In progres...
        </h1>

      </div>
    </div>
  );
}

