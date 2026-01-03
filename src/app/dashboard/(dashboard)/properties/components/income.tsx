import React from "react";
import { PiListChecksBold, PiMoneyDuotone } from "react-icons/pi";
import { FaArrowTrendDown } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { TenantService } from "@/services/tenant";
export default function Income() {
//   const getAlltenantQuery = useQuery({
//     queryKey: ["alltenant"],
//     queryFn: async () => await new TenantService().getAllTenant(),
//   });
  return (
    <div className="bg-[#EDEEFC] rounded-2xl xs:p-6 p-4 col-span-6 lg:col-span-2 md:col-span-3 sm:col-span-6  1sm:col-span-3 ">
      <div className="flex items-center">
        <h1 className="text-sm text-black font-[400] flex-1">
          Monthly Rental Income
        </h1>

        <PiMoneyDuotone className="text-[#1C1C1C] min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%]" />
      </div>

      <div className="mt-4 flex gap-x-2 items-center">
        <h1 className="sm:text-xl text-base font-semibold text-black">
        €1000
        </h1>

        <h1 className="text-xs font-[400] ms-auto text-black">-0.03%</h1>

        <FaArrowTrendDown className="text-black min-w-[13px] min-h-[13px] max-w-[13px] w-[100%] h-[100%]" />
      </div>
    </div>
  );
}
