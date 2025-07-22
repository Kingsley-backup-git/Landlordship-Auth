/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { PiUserCircle } from "react-icons/pi";
import RadioInput from "./inputs/radioButton";

export default function TenantAcc({
  accountType,
  AccountTypeHandler,
}: {
  accountType: string;
  AccountTypeHandler: (val: string) => void;
}) {
  return (
    <div
      className={`${accountType === "tenant" ? "border-[2px]" : ""} cursor-pointer relative border-[#1D3639] rounded-2xl p-6 bg-[#F9F9FA] flex gap-x-2`}
      onClick={() => AccountTypeHandler("tenant")}
    >
      <PiUserCircle className="text-2xl text-black" />

      <div className="">
        <h1 className="font-semibold text-sm text-black">Tenant Account</h1>
        <p className="text-[#00000066] font-[400] text-xs">
          Setup your tenant account
        </p>
      </div>

      {accountType === "tenant" ? (
        <RadioInput
          onChange={function (
            event: React.ChangeEvent<HTMLInputElement>,
          ): void {
            throw new Error("Function not implemented.");
          }}
          checked={false}
        />
      ) : null}
    </div>
  );
}
