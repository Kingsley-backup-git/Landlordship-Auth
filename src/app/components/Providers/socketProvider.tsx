"use client";
import { UserService } from "@/services/user";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, ReactNode, useContext, useEffect } from "react";
import MainLoader from "../ui/loaders/mainLoader";
import { TenantService } from "@/services/tenant";
import { AgentService } from "@/services/agent";
import { io } from "socket.io-client";
import { useUser } from "./UserProvider";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const socketContext = createContext<any>(null);
export default function SocketProvider({ children }: { children: ReactNode }) {
    const {data, query} = useUser()
    const socket = io(process.env.NEXT_PUBLIC_API_URL);
    useEffect(() => {
        if (data?.data?._id) {
            socket.emit("join", data?.data?._id)
        }
    },[data?.data?._id, socket])
  return (
    <>
      {query?.isPending ? (
        <MainLoader />
      ) : query?.isSuccess ? (
        <socketContext.Provider
          value={{
            socket
          }}
        >
          {children}
        </socketContext.Provider>
      ) : null}
    </>
  );
}

export const useSocket = () => {
  return useContext(socketContext);
};
