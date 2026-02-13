"use client";
import React, { useEffect, useState } from "react";
import Notifications from "./Notifications/notifications";
import MaintenanceReq from "./MaintenanceReq/maintenanceRequests";
import Contacts from "./Contacts/contacts";
import { useQuery } from "@tanstack/react-query";
import { NotificationServices } from "@/services/notifications";
import { useUser } from "@/app/components/Providers/UserProvider";
import { useSocket } from "@/app/components/Providers/socketProvider";
export default function RightNav() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [notifications, setNotifications] = useState<any[]>([]);
  const {socket} = useSocket()
  const { data } = useUser();
  const {
    data: notificationData,
    isSuccess,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => await new NotificationServices().getNotifications(),
  });

  useEffect(() => {

 
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     socket.on("notification", (payload:any) => {
 console.log(payload)
        setNotifications((prev) => [...prev, payload]);
        
      });

    return () => {
      socket.off("notification");
    };
  }, []);
  return (
    <div className="w-[100%] py-5">
      <Notifications
        data={data}
        isSuccess={isSuccess}
        isPending={isPending}
        isError={isError}
        setNotifications={setNotifications}
        notifications={notifications}
        notificationData={notificationData}
      />

      <MaintenanceReq
        data={data}
        isSuccess={isSuccess}
        isPending={isPending}
        isError={isError}
        setNotifications={setNotifications}
        notifications={notifications}
        notificationData={notificationData}
      />

      <Contacts />
    </div>
  );
}
