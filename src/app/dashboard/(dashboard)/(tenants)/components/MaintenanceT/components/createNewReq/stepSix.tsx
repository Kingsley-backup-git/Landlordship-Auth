import React from "react";
import Options from "../options";
import Button from "@/app/components/ui/ButtonTwo";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { requestTypes } from "../../maintenanceT";
import { LuLoaderCircle } from "react-icons/lu";

export default function StepSix({
  stepHandler,
  urgencyHandler,
    urgency,
  CreateReqHandler,
  createReqMutation
}: {
  stepHandler: (num: number) => void;
  urgencyHandler: (str: "Low" | "Normal" | "High" | "Critical") => void;
        urgency: "Low" | "Normal" | "High" | "Critical";
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
            urgencyHandler("Low");
          }}
        >
          <Options
            Icon={""}
            subClassName=""
            className={`flex gap-x-3 ${urgency === "Low" ? "border-2 border-black" : ""} relative  bg-[#F9F9FA] rounded-2xl p-4`}
            header={"Low"}
            checked = {urgency === "Low"}
            text={""}
          />
        </div>

        <div
          className="w-full  cursor-pointer"
          onClick={() => {
            urgencyHandler("Normal");
          }}
        >
          <Options
            Icon={""}
            subClassName=""
                      checked = {urgency === "Normal"}
            className={`flex gap-x-3 ${urgency === "Normal" ? "border-2 border-black" : ""} relative  bg-[#F9F9FA] rounded-2xl p-4`}
            header={"Normal"}
            text={""}
          />
        </div>

        <div
          className="w-full  cursor-pointer"
          onClick={() => {
            urgencyHandler("High");
          }}
        >
          <Options
            Icon={""}
             checked = {urgency === "High"}
            subClassName=""
            className={`flex gap-x-3 ${urgency === "High" ? "border-2 border-black" : ""} relative  bg-[#F9F9FA] rounded-2xl p-4`}
            header={"High"}
            text={""}
          />
        </div>

        <div
          className="w-full  cursor-pointer"
          onClick={() => {
            urgencyHandler("Critical");
          }}
        >
          <Options
            Icon={""}
              checked = {urgency === "Critical"}
            subClassName=""
            className={`flex gap-x-3 ${urgency === "Critical" ? "border-2 border-black" : ""} relative  bg-[#F9F9FA] rounded-2xl p-4`}
            header={"Critical"}
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
          {createReqMutation.isPending ? <LuLoaderCircle className="animate-spin  text-xl" /> :
            <h1 className="text-sm font-[400] text-white">Create Request</h1>}
                                    <FaAngleRight className="text-[#00000066] text-white text-base" />
                                  </Button>
                                </div>
    </div>
  );
}
