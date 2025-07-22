import React from "react";
import { PiChartPieSliceFill } from "react-icons/pi";
import { LuWrench } from "react-icons/lu";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

export default function MiniDashboardList() {
  return (
    <div className="mt-8 pt-1 pb-2">
      <h1 className="ps-2 text-[#656667] text-xs front-[400]">Dashboards</h1>
      <div className={`mt-1 flex flex-col gap-y-1`}>
        <div
          className={`flex gap-x-2 p-2 hover:bg-[#1C1C1C0D]  rounded-xl items-center `}
        >
          <PiChartPieSliceFill className="min-w-[16px] min-h-[16px] max-w-[16px] w-[100%] h-[100%] text-white/85" />
          <h1 className="text-white/85 text-[10px] font-[400]">Overview</h1>
        </div>

        <div className="w-full py-1">
          <div className={`flex gap-x-2 rounded-xl items-center px-2 py-1 `}>
            <HiOutlineBuildingOffice2 className="text-white/85 min-w-[16px] min-h-[16px] max-w-[16px] w-[100%] h-[100%]" />
            <h1 className="flex-1 text-white/85 text-[10px] font-[400]">
              Properties
            </h1>
          </div>
          <div className="flex flex-col gap-y-1">
            <div
              className={`text-white/85  rounded-xl  text-[10px] font-[400] py-2 px-6  `}
            >
              Units
            </div>
            <div
              className={`text-white/85 rounded-xl text-[10px] font-[400] py-2 px-6 `}
            >
              Buildings
            </div>
          </div>
        </div>
        <div
          className={`flex rounded-xl  hover:bg-[#1C1C1C0D] gap-x-2 p-2 items-center `}
        >
          <LuWrench className="min-w-[16px] min-h-[16px] max-w-[16px] w-[100%] h-[100%] text-white/85" />
          <h1 className="text-white/85 text-[10px] font-[400] flex-1">
            Maintenance
          </h1>
        </div>
      </div>
    </div>
  );
}
