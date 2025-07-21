"use client";
import Image from "next/image";
import React, { useState } from "react";
import User from "../../../../../public/user.png";
import DashboardList from "./dashboard/dashboard";
import PeopleList from "./People/people";
import DocList from "./Documentation/documentation";
import Logo from "../../../../../public/Logo.png";
import { useMyContext } from "@/context/NavProvider";
import { useQuery } from "@tanstack/react-query";
import { UserService } from "@/services/user";
import { useUserStore } from "@/store/useUserStore";
import { FaCheck } from "react-icons/fa6";
export default function LeftNav() {
  const [toggle, setToggle] = useState(false);
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: async () => await new UserService().getUser(),
  });
  function toggleState() {
    setToggle((prev) => !prev);
  }
  const type = useUserStore((state) => state.type);
  const setType = useUserStore((state) => state.setType);
  const { leftNav } = useMyContext();
  return (
    <div className="w-[100%] py-5 flex flex-col overflow-x-visible h-screen gap-y-6 ">
      <div className="flex-1 relative">
        <div
          className={`flex gap-x-3  items-center truncate ${!leftNav && "justify-center"} px-2 cursor-pointer`}
          onClick={() => toggleState()}
        >
          <Image
            src={User}
            alt="user"
            className="w-[24px] h-[24px] rounded-full"
          />

          {leftNav && userQuery.isSuccess ? (
            <h1 className="text-[#1C1C1C] font-[400] text-sm">
              {userQuery?.data?.data?.email}
            </h1>
          ) : null}

          {toggle && (
            <div className="fixed z-[99999] rounded-lg bg-gray-500 gap-y-1 shadow-2xl flex flex-col   top-12 left-10 p-2  max-w-[110px] w-full">
              <div
                className="text-white flex justify-between items-center text-sm cursor-pointer"
                onClick={() => setType("landlord")}
              >
                <div>LandLord</div>{" "}
                {type === "landlord" && <FaCheck className="text-green-300" />}
              </div>

              <div
                className="text-white flex justify-between items-center text-sm cursor-pointer"
                onClick={() => setType("tenant")}
              >
                <div>Tenant</div>{" "}
                {type === "tenant" && <FaCheck className="text-green-300" />}
              </div>
            </div>
          )}
        </div>

        <DashboardList leftNav={leftNav} />

        {type !== "tenant" && <PeopleList leftNav={leftNav} />}

        {type !== "tenant" && <DocList leftNav={leftNav} />}
      </div>
      <Image
        src={Logo}
        alt="logo"
        className="mt-auto mx-auto"
        width={130}
        height={130}
      />
    </div>
  );
}
