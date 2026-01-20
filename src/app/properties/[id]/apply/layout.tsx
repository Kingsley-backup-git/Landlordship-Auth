import AuthNavbar from "@/app/auth/components/AuthNavbar";
import React, { ReactNode } from "react";

//import Logo from "../../../public/streamwallet.png";
//import whiteStreamLogo from "../../../public/whiteKycLogo.png"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#F9F9FA] min-h-screen px-8 py-6 flex flex-col">
      <AuthNavbar />
      <div className="justify-center  flex-1 flex mx-auto items-center   max-w-[380px] w-[100%]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
