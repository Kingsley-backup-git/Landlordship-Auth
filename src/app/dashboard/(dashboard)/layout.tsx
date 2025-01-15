
import React, { ReactNode } from "react";
import LeftNav from "../components/LeftSideNav/LeftNav";
import RightNav from "../components/RightSideNav/RightNav";
import TopNavbar from "../components/TopNavbar/topnavbar";
import styles from "../../dashboard/(dashboard)/dashboard.module.css"
//import Logo from "../../../public/streamwallet.png";
//import whiteStreamLogo from "../../../public/whiteKycLogo.png"

const Layout = ({ children }: { children: ReactNode }) => {
  
  return (
    <div className="bg-white min-h-screen h-[100%] flex">
    <div className={`flex-[15%] px-3 overflow-y-auto h-screen ${styles.overflow} sticky top-0 border-r-[1px] border-[#1C1C1C1A]`}>
<LeftNav />
    </div>

    <div className="flex-[65%] py-4">
        <TopNavbar />
    {children}
    </div>
     

    <div className={`flex-[20%] px-4 ${styles.overflow} overflow-y-auto h-screen sticky top-0 border-l-[1px] border-[#1C1C1C1A]`}>
<RightNav />
</div>
 
        
      
      
    
    </div>
  );
};

export default Layout;