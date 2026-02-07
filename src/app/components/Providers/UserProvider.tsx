"use client";
import { UserService } from "@/services/user";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, ReactNode, useContext } from "react";
import MainLoader from "../ui/loaders/mainLoader";
import { TenantService } from "@/services/tenant";
import { AgentService } from "@/services/agent";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const userContext = createContext<any>(null);
export default function UserProvider({ children }: { children: ReactNode }) {
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: async () => await new UserService().getUser(),
  });

  const TenantQuery = useQuery({
    queryKey: ["tenantquery"],
    queryFn: async () => await new TenantService().getTenant(),
    enabled: !!userQuery?.data?.data?.isTenant,
  });


  const AgentQuery = useQuery({
    queryKey: ["agentquery"],
    queryFn: async () => await new AgentService().getAgentRequests(),
    enabled: !!userQuery?.data?.data?.isAgent,
  });
  return (
    <>
      {userQuery?.isPending ? (
        <MainLoader />
      ) : userQuery?.isSuccess ? (
        <userContext.Provider
          value={{
            query: userQuery,
            data: userQuery?.data,
            tenantQuery: TenantQuery,
              tenantData: TenantQuery?.data,
              agentData: AgentQuery?.data,
            agentQuery : AgentQuery
          }}
        >
          {children}
        </userContext.Provider>
      ) : null}
    </>
  );
}

export const useUser = () => {
  return useContext(userContext);
};
