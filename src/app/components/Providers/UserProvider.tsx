"use client";
import { UserService } from "@/services/user";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, ReactNode, useContext } from "react";
import MainLoader from "../ui/loaders/mainLoader";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const userContext = createContext<any>(null)
export default function UserProvider({ children }: { children: ReactNode }) {
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: async () => await new UserService().getUser(),
  });
  return (
    <>
      {userQuery?.isPending ? (
        <MainLoader />
      ) : userQuery?.isSuccess ? (
          <userContext.Provider value={{query : userQuery, data : userQuery?.data}}>{children}</userContext.Provider> 
      ) : null}
    </>
  );
}

export const useUser = () => {
  return useContext(userContext)
}
