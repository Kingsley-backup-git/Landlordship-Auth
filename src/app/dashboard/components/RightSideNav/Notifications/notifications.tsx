import React from "react";
import { PiBugBeetle } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { PiBroadcast } from "react-icons/pi";
import styles from "../../../(dashboard)/dashboard.module.css";
export default function Notifications() {
  return (
    <div className="w-[100%]">
      <h1 className="text-[#1C1C1C] font-[400] text-sm">Notifications</h1>

      <div
        className={`flex flex-col mt-3 h-[200px] overflow-auto ${styles.overflow}`}
      >
        <div className="p-2 flex gap-x-2">
          <PiBugBeetle className="text-2xl text-[#1C1C1C] bg-[#E3F5FF] rounded-full p-1" />

          <div className="flex-1">
            <h1 className="text-[#1C1C1C] font-[400] text-sm">
              Bin collection due
            </h1>
            <p className="text-[#1C1C1C66] text-xs font-[400]">Just now</p>
          </div>
        </div>

        <div className="p-2 flex gap-x-2">
          <AiOutlineUser className="text-2xl text-[#1C1C1C] bg-[#E5ECF6] rounded-full p-1" />

          <div className="flex-1">
            <h1 className="text-[#1C1C1C] font-[400] text-sm">
              New tenant application
            </h1>
            <p className="text-[#1C1C1C66] text-xs font-[400]">
              59 minutes ago
            </p>
          </div>
        </div>

        <div className="p-2 flex gap-x-2">
          <PiBugBeetle className="text-2xl text-[#1C1C1C] bg-[#E3F5FF] rounded-full p-1" />

          <div className="flex-1">
            <h1 className="text-[#1C1C1C] font-[400] text-sm">
              Contractor finished repairs
            </h1>
            <p className="text-[#1C1C1C66] text-xs font-[400]">12 hours ago</p>
          </div>
        </div>

        <div className="p-2 flex gap-x-2">
          <PiBroadcast className="text-2xl text-[#1C1C1C] bg-[#E5ECF6] rounded-full p-1" />

          <div className="flex-1">
            <h1 className="text-[#1C1C1C] font-[400] text-sm">
              New repair request
            </h1>
            <p className="text-[#1C1C1C66] text-xs font-[400]">
              Today, 11:59 AM
            </p>
          </div>
        </div>

        <div className="p-2 flex gap-x-2">
          <PiBugBeetle className="text-2xl text-[#1C1C1C] bg-[#E3F5FF] rounded-full p-1" />

          <div className="flex-1">
            <h1 className="text-[#1C1C1C] font-[400] text-sm">
              Contractor finished repairs
            </h1>
            <p className="text-[#1C1C1C66] text-xs font-[400]">12 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
