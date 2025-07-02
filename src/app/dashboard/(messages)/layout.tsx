'use client'
import React, { ReactNode } from "react";
import LeftNav from "../components/LeftSideNav/LeftNav";

import TopNavbar from "../components/TopNavbar/topnavbar";
import styles from "../../dashboard/(dashboard)/dashboard.module.css"
import BottomNav from "@/app/components/Layouts/BottomMobileNav";
import { useMyContext } from "@/context/NavProvider";
//import Logo from "../../../public/streamwallet.png";
//import whiteStreamLogo from "../../../public/whiteKycLogo.png"

const Layout = ({ children }: { children: ReactNode }) => {
   const {leftNav} = useMyContext()
  return (
    <div className="sm:bg-white bg-[#F9F9FA] min-h-screen h-[100%] flex">
    <div className={`${leftNav ? "min-w-[212px] max-w-[212px] w-[100%]" : "w-[66px]"} transition-all duration-100 ease-in-out sm:flex hidden px-3 overflow-y-auto h-screen ${styles.overflow} sticky top-0 border-r-[1px] border-[#1C1C1C1A]`}>
<LeftNav />
    </div>

    <div className="flex-[85%] flex flex-col sm:h-screen py-4">
        <TopNavbar />
    {children}
   
    </div>
     

 
        
      
    <BottomNav />
    
    </div>
  );
};

export default Layout;