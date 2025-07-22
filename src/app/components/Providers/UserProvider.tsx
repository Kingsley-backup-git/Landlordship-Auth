"use client";
import { UserService } from "@/services/user";
import { useQuery } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import MainLoader from "../ui/loaders/mainLoader";

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
        children
      ) : null}
    </>
  );
}
