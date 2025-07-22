"use client";
import React, { useState } from "react";
import styles from "../application.module.css";
import overflowStyle from "../../../dashboard.module.css";
export default function Menu() {
  const [status, setStaus] = useState("All");
  function statusHandler(val: string) {
    setStaus(val);
  }
  return (
    <div
      className={`flex flex-1 space-x-6 overflow-x-auto col-span-12 whitespace-nowrap ${overflowStyle.overflow}`}
    >
      <div
        onClick={() => statusHandler("All")}
        className={`text-sm font-[400] cursor-pointer ${status === "All" ? styles.active : styles.nav}`}
      >
        All
      </div>
      <div
        onClick={() => statusHandler("Pending")}
        className={`text-sm font-[400] cursor-pointer ${status === "Pending" ? styles.active : styles.nav}`}
      >
        Pending
      </div>
      <div
        onClick={() => statusHandler("InProgress")}
        className={`text-sm font-[400] cursor-pointer ${status === "InProgress" ? styles.active : styles.nav}`}
      >
        In Progress
      </div>
      <div
        onClick={() => statusHandler("Completed")}
        className={`text-sm font-[400] cursor-pointer ${status === "Completed" ? styles.active : styles.nav}`}
      >
        Completed
      </div>
      <div
        onClick={() => statusHandler("Approved")}
        className={`text-sm font-[400] cursor-pointer ${status === "Approved" ? styles.active : styles.nav}`}
      >
        Approved
      </div>
      <div
        onClick={() => statusHandler("Rejected")}
        className={`text-sm font-[400] cursor-pointer ${status === "Rejected" ? styles.active : styles.nav}`}
      >
        Rejected
      </div>
    </div>
  );
}
