import React from "react";
import SearchInput from "./components/inputs/SearchInput";
import Link from "next/link";
import {
  PiChartBarDuotone,
  PiChartPieSliceFill,
  PiGearDuotone,
  PiIdentificationBadgeDuotone,
  PiIdentificationCardDuotone,
  PiNotebookDuotone,
  PiUsersDuotone,
  PiUsersThreeDuotone,
} from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LuWrench } from "react-icons/lu";
import { FaRegFolderOpen } from "react-icons/fa";

export default function MobileHome() {
  return (
    <div className="p-3 sm:hidden block">
      <h1 className="text-black text-3xl font-bold">Home</h1>

      <SearchInput />

      <div className="bg-white mt-4 p-4 rounded-2xl">
        <h1 className="text-[#00000066] font-[400] text-sm">Dashboards</h1>

        <div className="flex flex-col">
          <Link
            href="/dashboard/overview"
            className={`flex gap-x-2 py-3  cursor-pointer  items-center`}
          >
            <PiChartPieSliceFill className="min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black" />
            <h1 className="text-[#1C1C1C] xs:text-sm flex-1 text-xs font-[400]">
              Overview
            </h1>
          </Link>

          <Link
            href="/dashboard/unit"
            className={`flex gap-x-2   cursor-pointer  items-center`}
          >
            <HiOutlineBuildingOffice2 className="min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black" />
            <h1 className="text-[#1C1C1C]  xs:text-sm flex-1 border-y-[1px] py-3 border-[#1C1C1C1A text-xs font-[400]">
              Properties
            </h1>
          </Link>

          <Link
            href="/dashboard/maintenance"
            className={`flex gap-x-2 pt-3  cursor-pointer  items-center`}
          >
            <LuWrench className="min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black" />
            <h1 className="text-[#1C1C1C]  xs:text-sm flex-1 text-xs font-[400]">
              Maintenance
            </h1>
          </Link>
        </div>
      </div>

      <div className="bg-white p-4 mt-3 rounded-2xl">
        <h1 className="text-[#00000066] font-[400] text-sm">People</h1>

        <div className="flex flex-col">
          <Link
            href="/dashboard/people/tenants"
            className={`flex gap-x-2   cursor-pointer  items-center`}
          >
            <PiIdentificationBadgeDuotone className="min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black" />
            <h1 className="text-[#1C1C1C] text-xs xs:text-sm flex-1  border-b-[1px] py-3  border-[#1C1C1C1A] font-[400]">
              Tenants
            </h1>
          </Link>

          <Link
            href="/dashboard/people/tenancies"
            className={`flex gap-x-2  cursor-pointer  items-center`}
          >
            <PiIdentificationCardDuotone className="min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black" />
            <h1 className="text-[#1C1C1C] text-xs xs:text-sm flex-1 border-b-[1px] py-3  border-[#1C1C1C1A] font-[400]">
              Tenancies
            </h1>
          </Link>

          <Link
            href="/dashboard/people/applications"
            className={`flex gap-x-2   cursor-pointer  items-center`}
          >
            <PiUsersThreeDuotone className="min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black" />
            <h1 className="text-[#1C1C1C] text-xs xs:text-sm flex-1 border-b-[1px] py-3  border-[#1C1C1C1A font-[400]">
              Applications
            </h1>
          </Link>

          <Link
            href="/dashboard/people/agents"
            className={`flex gap-x-2 pt-3  cursor-pointer  items-center`}
          >
            <PiGearDuotone className="min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black" />
            <h1 className="text-[#1C1C1C] text-xs xs:text-sm flex-1 font-[400]">
              Agents
            </h1>
          </Link>
        </div>
      </div>

      <div className="bg-white p-4 mt-3 rounded-2xl">
        <h1 className="text-[#00000066] font-[400] text-sm">Documentation</h1>

        <div className="flex flex-col">
          <Link
            href="/dashboard/documentation/finance"
            className={`flex gap-x-2  cursor-pointer  items-center`}
          >
            <PiChartBarDuotone className="min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black" />
            <h1 className="text-[#1C1C1C] text-xs xs:text-sm flex-1 border-b-[1px] py-3  border-[#1C1C1C1A] font-[400]">
              Finance
            </h1>
          </Link>

          <Link
            href="/dashboard/documentation/documents"
            className={`flex gap-x-2   cursor-pointer  items-center`}
          >
            <FaRegFolderOpen className="min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black" />
            <h1 className="text-[#1C1C1C] text-xs xs:text-sm flex-1 border-b-[1px] py-3  border-[#1C1C1C1A] font-[400]">
              Documents
            </h1>
          </Link>

          <Link
            href="/dashboard/overview"
            className={`flex gap-x-2 opacity-30 pointer-events-none cursor-pointer  items-center`}
          >
            <PiNotebookDuotone className="min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black" />
            <h1 className="text-[#1C1C1C] text-xs xs:text-sm flex-1 border-b-[1px] py-3  border-[#1C1C1C1A font-[400]">
              Reports
            </h1>
          </Link>

          <Link
            href="/dashboard/documentation/tools"
            className={`flex gap-x-2 pt-3  cursor-pointer  items-center`}
          >
            <PiUsersDuotone className="min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black" />
            <h1 className="text-[#1C1C1C] text-xs xs:text-sm flex-1 font-[400]">
              Tools
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
