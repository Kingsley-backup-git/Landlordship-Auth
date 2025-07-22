import React from "react";
import Notifications from "./Notifications/notifications";
import MaintenanceReq from "./MaintenanceReq/maintenanceRequests";
import Contacts from "./Contacts/contacts";

export default function RightNav() {
  return (
    <div className="w-[100%] py-5">
      <Notifications />

      <MaintenanceReq />

      <Contacts />
    </div>
  );
}
