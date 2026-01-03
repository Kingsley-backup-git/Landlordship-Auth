import React from "react";
import { PiUsersFourDuotone } from "react-icons/pi";
export default function TotalTenants() {
  return (
    <div className="bg-[#E6F1FD] rounded-2xl sm:p-6 p-4 ">
      <div className="flex items-center">
        <h1 className="text-sm text-black font-[400] flex-1">Active Tenants</h1>

        <PiUsersFourDuotone className="text-[#1C1C1C] min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%]" />
      </div>

      <h1 className="sm:text-xl text-base mt-4 font-semibold text-black">25</h1>
    </div>
  );
}
