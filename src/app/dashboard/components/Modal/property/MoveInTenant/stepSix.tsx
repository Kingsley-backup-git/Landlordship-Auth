/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Button from "@/app/components/ui/ButtonTwo";
// import ToggleButton from '@/app/components/ui/ToggleButton'
import React, { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function StepSix({
  header,
  stepHandler,
  sendInviteMutation,
}: {
  header: string;
  stepHandler: (num: number) => void;
  sendInviteMutation: any;
}) {
  useEffect(() => {
    console.log(sendInviteMutation?.data?.data);
  }, [sendInviteMutation]);
  return (
    <div className="sm:p-6 py-2 px-4  sm:max-w-[960px] mx-auto w-[100%]">
      <h1 className="text-black  font-semibold sm:flex hidden text-sm">
        {header}
      </h1>

      <div className="mt-16 max-w-[650px] w-full mx-auto px-4">
        <h1 className="font-semibold text-xl text-black text-center">
          Shared lease
        </h1>
        <p className="text-[#00000066] font-[400] text-sm mt-1 text-center">
          Share the lease with tenants who aren&apos;t yet connected.
        </p>

        <div className="w-full mt-6">
          <div className="flex gap-x-2  items-center border-b-[1px] border-[#00000033] py-4">
            <div className="flex-[25%] text-[#00000066]  font-normal text-xs">
              Properties
            </div>
            <div className=" text-[#00000066] font-normal flex-[25%] text-xs text-center">
              Tenant Email
            </div>
            {/* <div className='flex-[28%] text-[#00000066] font-normal text-xs'>Share</div> */}
            <div className="text-[#00000066] flex-[25%] font-normal  text-center text-xs">
              Status
            </div>
          </div>

          {sendInviteMutation?.isSuccess &&
            sendInviteMutation?.data?.data.map((tenant: any) => {
              return (
                <div
                  key={tenant._id}
                  className="flex gap-x-2 items-center  border-b-[.5px]  border-[#00000033] py-2"
                >
                  <div className="flex-[25%] text-black  font-normal text-xs">
                    {tenant?.property?.propertyName}
                  </div>
                  <div className="flex-[25%] text-black font-normal text-xs text-center">
                    {tenant?.email}
                  </div>
                  {/* <div className='flex-[28%]'><ToggleButton /></div> */}
                  <div className=" text-[#8A8CD9] flex-[25%] justify-center font-normal text-xs flex items-center gap-x-1">
                    <div className="w-[5px] h-[5px] bg-[#8A8CD9] rounded-full"></div>
                    <h1>{tenant?.status === "pending" && "In Progress"}</h1>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="flex items-center mx-auto max-w-[350px] w-full  gap-x-4 mt-7 justify-center">
          <Button
            onClick={() => stepHandler(4)}
            classname="bg-[#0000000A] flex flex-1 items-center justify-center gap-x-2 rounded-xl py-2 px-4"
          >
            <FaAngleLeft className="text-[#00000066] text-base" />
            <h1 className="text-sm font-[400] text-black">Add new Email</h1>
          </Button>

          <Button
            onClick={() => stepHandler(9)}
            classname="bg-[#1D3639] flex flex-1 items-center gap-x-2 justify-center rounded-xl py-2 px-4"
          >
            <h1 className="text-sm font-[400] text-white">Continue</h1>
            <FaAngleRight className="text-[#00000066] text-white text-base" />
          </Button>
        </div>
      </div>
    </div>
  );
}
