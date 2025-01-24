'use client'
import React, { createContext, useContext, useState, ReactNode } from "react";

interface MyContextProps {
  leftNav: boolean;
  toggleNav: ()=> void;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [leftNav, setLeftNav] = useState(true);

  function toggleNav() {
    setLeftNav((nav)=> !nav)
  }
  return (
    <MyContext.Provider value={{ leftNav, toggleNav }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
