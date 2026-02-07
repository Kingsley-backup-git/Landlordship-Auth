"use client";
import Link from "next/link";
import React from "react";
import { PiChartPieSliceFill } from "react-icons/pi";
import { LuWrench } from "react-icons/lu";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
// import { MdKeyboardArrowUp } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";
import { PiMoneyDuotone } from "react-icons/pi";
import { PiFolderOpenDuotone } from "react-icons/pi";
import { PiUserCircleDuotone } from "react-icons/pi";
import { MdPendingActions } from "react-icons/md";
export default function DashboardList({ leftNav }: { leftNav: boolean }) {
  // const [open, setOpen] = useState (false)
  const type = useUserStore((state) => state.type);

  const pathname = usePathname();
  // const Dropdown = ()=> {
  //   if(!open && leftNav) {
  //     setOpen(true)
  //   } else {
  //     setOpen(false)
  //   }
  // }
  return (
    <div className="mt-8 pt-1 pb-2">
      {leftNav ? (
        <h1 className="ps-3 text-[#1C1C1C66] text-sm front-[400]">
          Dashboards
        </h1>
      ) : null}
      <div
        className={`mt-3 flex flex-col ${leftNav ? "" : "items-center"} gap-y-1`}
      >
        <Link
          href="/dashboard/overview"
          className={`flex gap-x-2 p-2 hover:bg-[#1C1C1C0D] cursor-pointer rounded-xl items-center ${pathname.includes("/overview") ? "bg-[#1C1C1C0D]" : null}`}
        >
          <PiChartPieSliceFill className="min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black" />
          {leftNav ? (
            <h1 className="text-[#1C1C1C] text-xs font-[400]">Overview</h1>
          ) : null}
        </Link>

        {(type !== "tenant" && type!=="agent") && (
          <div className="w-full py-1">
            <Link
              href="/dashboard/properties"
              className={`flex gap-x-2 rounded-xl hover:bg-[#1C1C1C0D]  items-center ${leftNav ? "" : "justify-center"} p-2 cursor-pointer ${pathname.includes("/properties") ? "bg-[#1C1C1C0D]" : null}`}
            >
              <HiOutlineBuildingOffice2 className="text-[#1C1C1C] min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%]" />
              {leftNav ? (
                <h1 className="flex-1 text-[#1C1C1C] text-xs font-[400]">
                  Properties
                </h1>
              ) : null}
              {/* {(open && leftNav)  && <MdOutlineKeyboardArrowDown className='text-[#1C1C1C33] min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%]'/>}
    {(!open && leftNav) && <MdKeyboardArrowUp className='text-[#1C1C1C33] min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%]'/>} */}
            </Link>

            {/* {(open && leftNav) && <div className='flex flex-col gap-y-1'>
<Link onClick = {()=> setOpen(true)} href = "/dashboard/unit" className={`text-[#1C1C1C] hover:bg-[#1C1C1C0D] rounded-xl cursor-pointer text-xs font-[400] py-3 px-6  ${pathname.includes("/unit") ? "bg-[#1C1C1C0D]": null}`}>Units</Link>
<Link onClick = {()=> setOpen(true)}  href = "/dashboard/buildings" className={`text-[#1C1C1C] hover:bg-[#1C1C1C0D] rounded-xl text-xs font-[400] py-3 px-6 ${pathname.includes("/buildings") ? "bg-[#1C1C1C0D]": null}`}>Buildings</Link>

</div> } */}
          </div>)}

           <Link
              href="/dashboard/maintenance"
              className={`flex rounded-xl  hover:bg-[#1C1C1C0D] gap-x-2 p-2 items-center ${pathname.includes("/maintenance") ? "bg-[#1C1C1C0D]" : null}`}
            >
              <LuWrench className="min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-[#1C1C1C]" />
              {leftNav ? (
                <h1 className="text-[#1C1C1C] text-xs font-[400] flex-1">
                  Maintenance
                </h1>
              ) : null}
              {leftNav ? (
                <MdKeyboardArrowRight className="min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-[#1C1C1C33]" />
              ) : null}
            </Link>
     {type === "tenant" && (
          <>
            

            <Link
              href="/dashboard/documentation/finance"
              className={`flex rounded-xl  hover:bg-[#1C1C1C0D] gap-x-2 p-2  items-center ${pathname.includes("/finance") ? "bg-[#1C1C1C0D]" : null}`}
            >
              <PiMoneyDuotone className="min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black" />
              {leftNav ? (
                <h1 className="text-[#1C1C1C] text-xs font-[400]">Finance</h1>
              ) : null}
            </Link>

            <Link
              href="/dashboard/documentation/finance"
              className={`flex rounded-xl  hover:bg-[#1C1C1C0D] gap-x-2 p-2  items-center ${pathname.includes("/finance") ? "bg-[#1C1C1C0D]" : null}`}
            >
              <PiFolderOpenDuotone className="min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black" />
              {leftNav ? (
                <h1 className="text-[#1C1C1C] text-xs font-[400]">Files</h1>
              ) : null}
            </Link>
          </>
        )}

          {type === "agent" && (
          <>
            

            <Link
              href="/dashboard/documentation/finance"
              className={`flex rounded-xl  hover:bg-[#1C1C1C0D] gap-x-2 p-2  items-center ${pathname.includes("/requests") ? "bg-[#1C1C1C0D]" : null}`}
            >
              <MdPendingActions className="min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-black" />
              {leftNav ? (
                <h1 className="text-[#1C1C1C] text-xs font-[400]">Requests</h1>
              ) : null}
            </Link>

          
          </>
        )}

        <Link
          href="/dashboard/profile"
          className={`flex gap-x-2 p-2 hover:bg-[#1C1C1C0D] cursor-pointer rounded-xl items-center ${pathname.includes("/profile") ? "bg-[#1C1C1C0D]" : ""}`}
        >
          <PiUserCircleDuotone className="min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-[#1C1C1C]" />
          {leftNav ? (
            <h1 className="text-[#1C1C1C] text-xs font-[400]">Profile</h1>
          ) : null}
        </Link>
      </div>
    </div>
  );
}
