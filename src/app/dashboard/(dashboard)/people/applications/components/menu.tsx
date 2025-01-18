'use client'
import React, { useState } from 'react'
import styles from "../application.module.css"
export default function Menu() {
    const [status, setStaus] = useState("All")
   function statusHandler(val: string) {
    setStaus(val)
   }
  return (
    <div className='flex items-center gap-x-5'>
       <h1 onClick={()=> statusHandler("All")} className={`text-[#00000066] text-sm font-[400] pb-1 cursor-pointer ${status === "All" ? styles.active : styles.nav} `}>All</h1>

       <h1 className={`text-[#00000066] text-sm font-[400] pb-1 cursor-pointer ${styles.nav}`}>Pending</h1>


       <h1 className={`text-[#00000066] text-sm font-[400] pb-1 cursor-pointer ${styles.nav}`}>In Progress</h1>

       <h1 className={`text-[#00000066] text-sm font-[400] pb-1 cursor-pointer ${styles.nav}`}>Completed</h1>
       <h1 className={`text-[#00000066] text-sm font-[400] pb-1 cursor-pointer ${styles.nav}`}>Approved</h1>
       <h1 className={`text-[#00000066] text-sm font-[400] pb-1 cursor-pointer ${styles.nav}`}>Rejected</h1>

    </div>
  )
}
