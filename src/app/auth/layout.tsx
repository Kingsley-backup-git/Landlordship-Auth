
import React, { ReactNode } from "react";
import AuthNavbar from "./components/AuthNavbar";
//import Logo from "../../../public/streamwallet.png";
//import whiteStreamLogo from "../../../public/whiteKycLogo.png"

const Layout = ({ children }: { children: ReactNode }) => {
  
  return (
    <div className="bg-[#F9F9FA] min-h-screen px-8 py-6">
    <AuthNavbar />
      <div className="mt-[80px] rounded-2xl justify-center bg-[#FFFFFF] flex mx-auto max-w-[680px] w-[100%]">
        
        {children}
      
      </div>
    </div>
  );
};

export default Layout;