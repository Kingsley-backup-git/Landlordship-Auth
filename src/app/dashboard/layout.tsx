
import React, { ReactNode } from "react";
import UserProvider from "../components/Providers/UserProvider";
import SocketProvider from "../components/Providers/socketProvider";

const Layout = ({ children }: { children: ReactNode }) => {
 
  return (
    <>
      <UserProvider>
        <SocketProvider>
          {children}
           </SocketProvider>
      </UserProvider>
    </>
  );
};

export default Layout;
