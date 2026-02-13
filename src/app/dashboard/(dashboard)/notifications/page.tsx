"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { NotificationServices } from "@/services/notifications";
import { useSocket } from "@/app/components/Providers/socketProvider";
import Skeleton from "@/app/components/ui/loaders/Skeleton";
import ErrorDisplay from "@/app/components/ui/ErrorDisplay";
import EmptyState from "@/app/components/ui/EmptyState";
import { PiBugBeetle, PiUserCircleDuotone, PiBellSimple } from "react-icons/pi";
import { timeAgo } from "@/utils/functions";


export default function NotificationsPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [notifications, setNotifications] = useState<any[]>([]);
  const { socket } = useSocket();


  const {
    data: notificationData,
    isSuccess,
    isError,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["notifications_page"],
    queryFn: async () => await new NotificationServices().getNotifications(),
  });

  useEffect(() => {
    if (isSuccess && notificationData) {
      setNotifications(notificationData);
    }
  }, [isSuccess, notificationData]);

  useEffect(() => {
    if (!socket) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    socket.on("notification", (payload: any) => {
      console.log("New notification:", payload);
      setNotifications((prev) => [payload, ...prev]);
    });

    return () => {
      socket.off("notification");
    };
  }, [socket]);

  // Combine and sort all notifications
  const allNotifications = notifications?.sort(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  if (isPending) {
    return (
      <div className="max-w-[800px] mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-6">Notifications</h1>
        <div className="flex flex-col gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-24 w-full rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-[800px] mx-auto p-6">
         <h1 className="text-2xl font-semibold mb-6">Notifications</h1>
        <ErrorDisplay onRetry={() => refetch()} />
      </div>
    );
  }

  return (
    <div className="max-w-[800px] mx-auto p-6 pb-20">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Notifications</h1>
        {/* Future: Mark all as read button could go here */}
      </div>

      <div className="flex flex-col gap-4">
        {allNotifications?.length === 0 ? (
          <EmptyState
            message="You have no notifications"
            icon={PiBellSimple}
            className="h-64"
          />
        ) : (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          allNotifications?.map((item: any) => {
            const isMaintenance = item.type.includes("maintenance");
            
            return (
              <div
                key={item._id}
                className={`group flex items-start gap-4 p-4 rounded-2xl border border-transparent hover:border-gray-200 transition-all duration-200 ${
                  // LinkedIn style: "unread" usually has a subtle background or indicator. 
                  // Assuming all are "read" for now as we don't have read status field explicit in the provided code snippets yet, 
                  // but we can style them cleanly.
                  "bg-white hover:shadow-sm"
                }`}
              >
                <div className="flex-shrink-0 mt-1">
                  {isMaintenance ? (
                     <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
                        <PiUserCircleDuotone className="text-2xl" />
                     </div>
                  ) : (
                    <div className="p-3 bg-orange-50 text-orange-600 rounded-full">
                        <PiBugBeetle className="text-2xl" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-medium text-gray-900 line-clamp-2">
                       {item.title}
                    </p>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                      {timeAgo(item.createdAt)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {/* Assuming there might be a body/message field. If not, title is used. 
                        Usage of 'type' as subtitle if description is missing.
                    */}
                    {item.message || item.description || (isMaintenance ? "Maintenance update" : "System notification")}
                  </p>
                </div>
                
                {/* Visual indicator for "unread" (optional, placeholder for now) */}
                {/* <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div> */}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
