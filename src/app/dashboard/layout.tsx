"use client";
import React, { ReactNode } from "react";
import UserProvider from "../components/Providers/UserProvider";

const Layout = ({ children }: { children: ReactNode }) => {
 
  return (
    <>
      <UserProvider>
       {children}
      </UserProvider>
    </>
  );
};

export default Layout;
