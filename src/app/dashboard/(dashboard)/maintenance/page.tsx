'use client'
import React from "react";
import Cards from "./components/cards";
import { FaChevronLeft } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";
import MaintenanceT from "../(tenants)/components/MaintenanceT/maintenanceT";
import { useUserStore } from "@/store/useUserStore";
import { useQuery } from "@tanstack/react-query";
import { MaintenanceService } from "@/services/maintenance";
import NotFoundImg from "../../../../../public/notfound.png";
import Image from "next/image";
import { TenantService } from "@/services/tenant";
// import Details from './components/details';

export default function Maintenance() {
  const type = useUserStore((state) => state.type);
  const maintenanceQuery = useQuery({
    queryKey: ['maintenanceData'],
    queryFn : async ()=> await new MaintenanceService().getRequest()
  })
  const tenantQuery = useQuery({
      queryKey: ["tenant"],
      queryFn: async () => await new TenantService().getTenant(),
    });

  const pending = maintenanceQuery?.data?.filter((data:{status:string})=> data?.status === "pending").length
 const inprogress = maintenanceQuery?.data?.filter((data:{status:string})=> data?.status === "inprogress").length
 const complete = maintenanceQuery?.data?.filter((data:{status:string})=> data?.status === "complete").length
  return (
    <>
      <div className="sm:p-6 py-2 px-4 sm:max-w-[960px] mx-auto w-[100%]">
        <div className="flex sm:block items-center justify-between">
          <Link
            href="/dashboard/"
            className="flex items-center sm:hidden gap-x-[1px]"
          >
            <FaChevronLeft className="text-[#007AFF] text-lg" />
            <h1 className="font-[400] sm:text-base text-sm tracking-[-0.43px] text-[#007AFF]">
              Home
            </h1>
          </Link>
          <h1 className="text-black font-semibold sm:flex hidden sm:text-sm text-base">
            Requests
          </h1>
          <h1 className="text-black font-semibold sm:hidden flex sm:text-sm text-base">
            Maintenance
          </h1>

          <BsThreeDots className="text-[#007AFF] text-lg sm:hidden flex" />
        </div>

        {type !== "tenant" ? (
          <>
            {maintenanceQuery?.data?.length < 1 ?

              <div className="flex-1 mt-8 flex flex-col w-full items-center justify-center">
                <h1 className="text-2xl text-black text-center font-semibold">
                  No Request Sent yet
                </h1>
       
                <Image
                  src={NotFoundImg}
                  className="mt-4"
                  width={100}
                  height={100}
                  alt="the not found image"
                />
              </div>
              :
              <div>
                <div className="sm:grid grid-cols-12 hidden sm:gap-x-5 gap-x-3 mt-5 w-full">
                  <div className="col-span-4 w-full ">
                    <h1 className="font-semibold text-sm text-black">
                      Yet to Start <span className="text-[#00000066]">{pending}</span>
                    </h1>
                    <div className="h-[5px] sm:flex hidden w-[100%] bg-[#E3572B] mt-2 rounded-2xl"></div>
                  </div>

                  <div className="col-span-4 w-full">
                    <h1 className="font-semibold text-sm text-black">
                      In Progress <span className="text-[#00000066]">{inprogress}</span>
                    </h1>
                    <div className="h-[5px] w-[100%] bg-[#C3DF93] mt-2 rounded-2xl"></div>
                  </div>

                  <div className="sm:col-span-4 col-span-12">
                    <h1 className="font-semibold text-sm text-black">
                      Completed <span className="text-[#00000066]">{complete}</span>
                    </h1>
                    <div className="h-[5px] w-[100%] bg-[#94E9B8] mt-2 rounded-2xl"></div>
                  </div>
                </div>

                <div className="grid grid-cols-12 sm:hidden sm:gap-x-5 gap-x-3 sm:gap-y-3 gap-y-2 mt-5 w-full">
                  <div className="xs:col-span-6 col-span-12 w-full flex justify-between bg-[#FFFFFF] rounded-2xl  p-5">
                    <div className="flex gap-x-2 items-center">
                      <div
                        className={`w-[9px] h-[9px] rounded-full  bg-[#FFDB56]`}
                      ></div>
                      <h1 className="font-semibold text-sm text-black">
                        Yet to Start{" "}
                      </h1>
                    </div>
                    <div className="text-[#00000066]">{pending}</div>
                  </div>

                  <div className="xs:col-span-6 col-span-12 w-full flex justify-between bg-[#FFFFFF] items-center rounded-2xl p-5">
                    <div className="flex gap-x-2 items-center">
                      <div
                        className={`w-[9px] h-[9px] rounded-full  bg-[#AF52DE]`}
                      ></div>
                      <h1 className="font-semibold text-sm text-black">
                        In Progress
                      </h1>
                    </div>
                    <div className="text-[#00000066]">{inprogress}</div>
                  </div>

                  <div className="col-span-12 w-full flex justify-between bg-[#FFFFFF] rounded-2xl p-5">
                    <div className="flex gap-x-2 items-center">
                      <div
                        className={`w-[9px] h-[9px] rounded-full  bg-[#34C759]`}
                      ></div>
                      <h1 className="font-semibold text-sm text-black">
                        Completed
                      </h1>
                    </div>
                    <div className="text-[#00000066]">{complete}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3  sm:grid-cols-1 2sm:grid-cols-2 grid-cols-1 sm:mt-4 mt-6 gap-x-5 sm:gap-y-8 gap-y-6">
                  <Cards data={maintenanceQuery?.data} />
                </div>
              </div>
            }
          </>
        ) : type === "tenant" &&
        tenantQuery?.isSuccess &&
        tenantQuery?.data?.tenant !== null ? (
        <div className="w-full">
          <MaintenanceT />
       </div>
             ) : (
               <div className="flex-1 mt-8 flex flex-col w-full items-center justify-center">
                 <h1 className="text-2xl text-black text-center font-semibold">
                   No Tenant Information yet
                 </h1>
       
                 <Image
                   src={NotFoundImg}
                   className="mt-4"
                   width={100}
                   height={100}
                   alt="the not found image"
                 />
               </div>
             )}
      </div>
      {/* <Details /> */}
    </>
  );
}
