import React from "react";
import Image from "next/image";
import Req1 from "../../../../../../public/Req2215.png";
import Req2 from "../../../../../../public/Req0125.png";
import Req3 from "../../../../../../public/Reg0215.png";
import Req4 from "../../../../../../public/Req2805.png";
import Req5 from "../../../../../../public/Req1015.png";
import styles from "../../../(dashboard)/dashboard.module.css";
export default function MaintenanceReq() {
  const requests = [
    {
      img: Req1,
      req: "Request #2215",
      time: "Just now",
    },
    {
      img: Req2,
      req: "Request #0125",
      time: "59 minutes ago",
    },
    {
      img: Req3,
      req: "Request #0215",
      time: "12 hours ago",
    },
    {
      img: Req4,
      req: "Request #2805",
      time: "Today, 11:59 AM",
    },
    {
      img: Req5,
      req: "Request #1015",
      time: "Feb 2, 2024",
    },
  ];
  return (
    <div className="mt-6 w-[100%]">
      <h1 className="text-[#1C1C1C] font-[400] text-sm">
        Maintenance Requests
      </h1>

      <div
        className={`flex flex-col mt-4 h-[278px] overflow-auto ${styles.overflow}`}
      >
        {requests.map((request, index) => {
          return (
            <div key={index} className="pt-2 flex gap-x-2 ps-2">
              <div className="flex gap-y-1 flex-col items-center">
                <Image
                  src={request.img}
                  className="rounded-full"
                  alt=""
                  width={28}
                  height={24}
                />
                <div
                  className={`w-[1px] h-[20px] ${requests.length - 1 === index && "hidden"} border-[1px] border-[#1C1C1C1A]`}
                ></div>
              </div>
              <div className="flex-1">
                <h1 className="text-[#1C1C1C] font-[400] text-sm">
                  {request.req}
                </h1>
                <p className="text-[#1C1C1C66] text-xs font-[400]">
                  {request.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
