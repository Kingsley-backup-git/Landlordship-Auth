"use client";
import React, { useState } from "react";

import TenantAcc from "./components/tenantAcc";
import LandlordAcc from "./components/landlordAcc";
import Button from "./components/Button/button";

import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/navigation";
export default function Setup() {
  const [accountType, setAccountType] = useState("tenant");
  const router = useRouter()
  function AccountTypeHandler(val: string) {
    setAccountType(val);
  }
  const setType = useUserStore(state=> state.setType);
  return (
    <div className="">
      <h1 className="font-semibold text-xl text-center text-black">
        Choose Account Type
      </h1>
      <p className="font-[400] text-xs text-center text-[#00000066] mt-1">
        If you need more info, please check out{" "}
        <span className="text-[#E3572B]">Help Page.</span>
      </p>

      <div className="mt-6 flex flex-col gap-y-3 max-w-[390px] mx-auto">
        <TenantAcc
          AccountTypeHandler={AccountTypeHandler}
          accountType={accountType}
        />
        <LandlordAcc
          AccountTypeHandler={AccountTypeHandler}
          accountType={accountType}
        />
      </div>

      <Button
       disabled = {false}
        onClick={() => {
          setType(accountType)

          setTimeout(() => {
            router.push("/dashboard/overview")
          }, 1000)
        }}
        textStyle="text-sm font-[400] text-white"
        text={"Continue"}
        classname="max-w-[390x] w-full mt-6 bg-[#1D3639] py-2 px-4 mx-auto rounded-xl"
      />
    </div>
  );
}
