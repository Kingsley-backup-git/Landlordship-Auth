import React from "react";
import Options from "../options";
import Button from "@/app/components/ui/ButtonTwo";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { requestTypes } from "../../maintenanceT";

import Spinner from "@/app/components/ui/loaders/Spinner";

export default function StepSix({
  stepHandler,
  urgencyHandler,
    urgency,
  CreateReqHandler,
  createReqMutation
}: {
  stepHandler: (num: number) => void;
  urgencyHandler: (str:  "low"| "medium" | "high" | "urgent") => void;
        urgency:  "low"| "medium" | "high" | "urgent";
    request: requestTypes;
    CreateReqHandler: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createReqMutation :any
}) {
  return (
    <div className="mt-8 max-w-[400px] w-full mx-auto block">
      <h1 className="text-black font-semibold text-2xl text-center">
        Request Urgency
      </h1>
      <p className="font-normal mt-3 text-[#00000066] text-sm text-center">
        How urgent is your request?
      </p>

      <div className="flex flex-col gap-y-4 mt-4">
        <div
          className="w-full  cursor-pointer"
          onClick={() => {
            urgencyHandler("low");
          }}
        >
          <Options
            Icon={""}
            subClassName=""
            className={`flex gap-x-3 ${urgency === "low" ? "border-2 border-black" : ""} relative  bg-[#F9F9FA] rounded-2xl p-4`}
            header={"Low"}
            checked = {urgency === "low"}
            text={""}
          />
        </div>

        <div
          className="w-full  cursor-pointer"
          onClick={() => {
            urgencyHandler("medium");
          }}
        >
         
          <Options
            Icon={""}
            subClassName=""
                      checked = {urgency === "medium"}
            className={`flex gap-x-3 ${urgency === "medium" ? "border-2 border-black" : ""} relative  bg-[#F9F9FA] rounded-2xl p-4`}
            header={"Medium"}
            text={""}
          />
        </div>

        <div
          className="w-full  cursor-pointer"
          onClick={() => {
            urgencyHandler("high");
          }}
        >
          <Options
            Icon={""}
             checked = {urgency === "high"}
            subClassName=""
            className={`flex gap-x-3 ${urgency === "high" ? "border-2 border-black" : ""} relative  bg-[#F9F9FA] rounded-2xl p-4`}
            header={"High"}
            text={""}
          />
        </div>

        <div
          className="w-full  cursor-pointer"
          onClick={() => {
            urgencyHandler("urgent");
          }}
        >
          <Options
            Icon={""}
              checked = {urgency === "urgent"}
            subClassName=""
            className={`flex gap-x-3 ${urgency === "urgent" ? "border-2 border-black" : ""} relative  bg-[#F9F9FA] rounded-2xl p-4`}
            header={"Urgent"}
            text={""}
          />
        </div>
          </div>
          

              <div className="flex items-center gap-x-4 mt-6 justify-between">
                                  <Button
                                    onClick={() => stepHandler(4)}
                                    classname="bg-[#0000000A] flex items-center justify-center gap-x-2 max-w-[170px] w-full rounded-xl py-2 px-4"
                                  >
                                    <FaAngleLeft className="text-[#00000066] text-base" />
                                    <h1 className="text-sm font-[400] text-black">Previous</h1>
                                  </Button>
                          
                                  <Button
                                    onClick={() => {
                                    
                                     CreateReqHandler()
                                     
                                    }}
                                    classname={`bg-[#1D3639] cursor-pointer flex items-center gap-x-2 justify-center max-w-[170px] w-full rounded-xl py-2 px-4`}
        >
          {createReqMutation.isPending ? <Spinner className="w-5 h-5 text-white" /> :
            <h1 className="text-sm font-[400] text-white">Create Request</h1>}
                                    <FaAngleRight className="text-[#00000066] text-white text-base" />
                                  </Button>
                                </div>
    </div>
  );
}
