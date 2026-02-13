"use client";
import React, { SetStateAction, useEffect, useState } from "react";
import { PiBugBeetle } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { PiBroadcast } from "react-icons/pi";
import styles from "../../../(dashboard)/dashboard.module.css";
import { io } from "socket.io-client";
import { useQuery } from "@tanstack/react-query";
import { NotificationServices } from "@/services/notifications";
import { useUser } from "@/app/components/Providers/UserProvider";
import {timeAgo} from "../../../../../utils/functions"
import Skeleton from "@/app/components/ui/loaders/Skeleton";
import ErrorDisplay from "@/app/components/ui/ErrorDisplay";
import EmptyState from "@/app/components/ui/EmptyState";
import { PiBellSimple } from "react-icons/pi";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Notifications({data, isSuccess, isPending, isError, setNotifications, notifications,  notificationData} : {data:any, isSuccess : boolean, isPending: boolean, isError: boolean, setNotifications : SetStateAction<any>, notifications : any, notificationData : any }) {


  useEffect(() => {
    if (isSuccess) {
   
         setNotifications(notificationData);
    }
  }, [isSuccess]);


 
return (
    <div className="w-[100%]">
      <h1 className="text-[#1C1C1C] font-[400] text-sm">Notifications</h1>

      <div
        className={`flex flex-col mt-3 max-h-[200px] h-full overflow-auto ${styles.overflow}`}
      >
        {isPending ? (
             <div className="flex flex-col gap-2 p-2">
                 <Skeleton className="h-10 w-full rounded-lg" />
                 <Skeleton className="h-10 w-full rounded-lg" />
             </div>
        ) : isError ? (
           <ErrorDisplay message="Failed" className="text-xs" />
        ) : (isSuccess && (
          notifications?.filter((item: any) => !item.type.includes("maintenance")).length === 0 ? (
             <EmptyState message="No notifications" icon={PiBellSimple} className="h-40 bg-transparent border-0" />
          ) : (
          notifications?.filter((item: any) => !item.type.includes("maintenance"))?.sort((a: any,b: any)=>  new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())?.map((notification: any) => {
            return (
              <div className="p-2 flex gap-x-2" key={notification._id}>
                <PiBugBeetle className="text-2xl text-[#1C1C1C] bg-[#E3F5FF] rounded-full p-1" />

                <div className="flex-1">
                  <h1 className="text-[#1C1C1C] font-[400] text-sm">
                    {notification.title}
                  </h1>
                  <p className="text-[#1C1C1C66] text-xs font-[400]">
                 {timeAgo(notification?.createdAt)}
                  </p>
                </div>
              </div>
            );
          }))))}
      </div>
    </div>
  );
}
