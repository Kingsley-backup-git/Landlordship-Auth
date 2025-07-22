"use client";
import React from "react";

import dynamic from "next/dynamic";

const DonutChart = dynamic(() => import("./chart"), { ssr: false });
export default function RevenueChart() {
  return (
    <div className="bg-[#212a2c6a] rounded-lg py-6  p-3 items-stretch sm:flex hidden flex-col  h-[250px] col-span-3 ">
      <h1 className="font-semibold text-whitw text-xs self-start">Revenue</h1>
      <div className="flex sm:flex-col overflow-hidden  flex-row  justify-items-start items-center gap-x-3">
        <div className="flex  flex-1 justify-center">
          <DonutChart />
        </div>
        <div className="flex-1  w-full">
          <div
            className={`flex flex-col  overflow-hidden mt-1 h-[75px] gap-y-3  max-w-[150px] sm:mx-auto w-[100%]`}
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-x-1 items-center">
                <div className={`w-[5px] h-[5px] rounded-full bg-black`}></div>
                <h1 className="text-[9px] font-[400] text-white">Income</h1>
              </div>

              <h1 className="text-[9px] font-[400] text-white">67.6%</h1>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-x-1 items-center">
                <div
                  className={`w-[5px] h-[5px] rounded-full bg-[#94E9B8]`}
                ></div>
                <h1 className="text-[9px] font-[400] text-white">Expenses</h1>
              </div>

              <h1 className="text-[9px] font-[400] text-white">26.4%</h1>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-x-1 items-center">
                <div
                  className={`w-[5px] h-[5px] rounded-full bg-[#94E9B8]`}
                ></div>
                <h1 className="text-[9px] font-[400] text-white">Income</h1>
              </div>

              <h1 className="text-[9px] font-[400] text-white">67.6%</h1>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-x-1 items-center">
                <div
                  className={`w-[5px] h-[5px] rounded-full bg-[#94E9B8]`}
                ></div>
                <h1 className="text-[9px] font-[400] text-white">Overdue</h1>
              </div>

              <h1 className="ttext-[9px]font-[400] text-white">6%</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
