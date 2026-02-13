'use client'
import React, { SetStateAction, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Req1 from "../../../../../../public/Req2215.png";
import styles from "../../../(dashboard)/dashboard.module.css";
import { timeAgo } from "../../../../../utils/functions"
import { PiUserCircleDuotone } from "react-icons/pi";
import Skeleton from "@/app/components/ui/loaders/Skeleton";
import ErrorDisplay from "@/app/components/ui/ErrorDisplay";
import EmptyState from "@/app/components/ui/EmptyState";
import { PiWrench } from "react-icons/pi";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MaintenanceReq({data, isSuccess, isPending, isError, setNotifications, notifications, notificationData} : {data:any, isSuccess : boolean, isPending: boolean, isError: boolean, setNotifications : SetStateAction<any>, notifications : any, notificationData : any }) {


 useEffect(() => {
     if (isSuccess) {
    
          setNotifications(notificationData);
     }
   }, [isSuccess]);

  return (
    <div className="mt-6 w-[100%]">
      <h1 className="text-[#1C1C1C] font-[400] text-sm">
        Maintenance Requests
      </h1>

      <div
        className={`flex flex-col mt-4 max-h-[278px] h-full overflow-auto ${styles.overflow}`}
      >
        {isPending ? (
            <div className="flex flex-col gap-2 p-2">
                 <Skeleton className="h-10 w-full rounded-lg" />
                 <Skeleton className="h-10 w-full rounded-lg" />
            </div>
        ) : isError ? (
            <ErrorDisplay message="Failed" className="text-xs" />
        ) : (isSuccess && (
          notifications?.filter((item: any) => item.type.includes("maintenance")).length === 0 ? (
             <EmptyState message="No maintenance requests" icon={PiWrench} className="h-40 bg-transparent border-0" />
          ) : (
            notifications?.filter((item: any) => item.type.includes("maintenance"))?.sort((a: any,b: any)=>  new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())?.map((request: any, index: number) => {
          return (
            <div key={request?._id} className="pt-2 flex gap-x-2 ps-2">
              <div className="flex gap-y-1 flex-col items-center">
             <PiUserCircleDuotone className="min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%] text-[#1C1C1C]" />
                {/* <div
                  className={`w-[1px] h-[20px] ${notifications.length - 1 === index && "hidden"} border-[1px] border-[#1C1C1C1A]`}
                ></div> */}
              </div>
              <div className="flex-1">
                <h1 className="text-[#1C1C1C] font-[400] text-sm">
                  {request?.title}
                </h1>
                <p className="text-[#1C1C1C66] text-xs font-[400]">
                  {timeAgo(request?.createdAt)}
                </p>
              </div>
            </div>
          );
        }))))}
      </div>
    </div>
  );
}
