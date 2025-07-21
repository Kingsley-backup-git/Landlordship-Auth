"use client";
import React from "react";
import styles from "../../dashboard.module.css";

import dynamic from "next/dynamic";

const DonutChart = dynamic(() => import("./chart/revenueChart"), {
  ssr: false,
});
export default function RevenueChart() {
  return (
    <div className="sm:bg-[#F9F9FA]  bg-white rounded-2xl py-6 sm:px-6 p-3 items-stretch sm:flex hidden flex-col  sm:h-[280px] md:col-span-5 col-span-12 lg:col-span-3 sm:order-2 lg:order-[4]">
      <h1 className="font-semibold text-black text-sm self-start">Revenue</h1>
      <div className="flex sm:flex-col flex-row overflow-auto justify-items-start items-center gap-x-3">
        <div className="flex  flex-1 justify-center">
          <DonutChart />
        </div>
        <div className="flex-1  w-full">
          <div
            className={`flex flex-col  overflow-auto mt-1 h-[95px] gap-y-3  max-w-[200px] sm:mx-auto w-[100%] ${styles.overflow}`}
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-x-1 items-center">
                <div className={`w-[5px] h-[5px] rounded-full bg-black`}></div>
                <h1 className="text-xs font-[400] text-black">Income</h1>
              </div>

              <h1 className="text-xs font-[400] text-black">67.6%</h1>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-x-1 items-center">
                <div
                  className={`w-[5px] h-[5px] rounded-full bg-[#94E9B8]`}
                ></div>
                <h1 className="text-xs font-[400] text-black">Expenses</h1>
              </div>

              <h1 className="text-xs font-[400] text-black">26.4%</h1>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-x-1 items-center">
                <div
                  className={`w-[5px] h-[5px] rounded-full bg-[#94E9B8]`}
                ></div>
                <h1 className="text-xs font-[400] text-black">Income</h1>
              </div>

              <h1 className="text-xs font-[400] text-black">67.6%</h1>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-x-1 items-center">
                <div
                  className={`w-[5px] h-[5px] rounded-full bg-[#94E9B8]`}
                ></div>
                <h1 className="text-xs font-[400] text-black">Overdue</h1>
              </div>

              <h1 className="text-xs font-[400] text-black">6%</h1>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-x-1 items-center">
                <div
                  className={`w-[5px] h-[5px] rounded-full bg-[#94E9B8]`}
                ></div>
                <h1 className="text-xs font-[400] text-black">Overdue</h1>
              </div>

              <h1 className="text-xs font-[400] text-black">6%</h1>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-x-1 items-center">
                <div
                  className={`w-[5px] h-[5px] rounded-full bg-[#94E9B8]`}
                ></div>
                <h1 className="text-xs font-[400] text-black">Overdue</h1>
              </div>

              <h1 className="text-xs font-[400] text-black">6%</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
