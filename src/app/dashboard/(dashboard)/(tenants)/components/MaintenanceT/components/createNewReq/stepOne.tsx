/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { SetStateAction } from "react";
import Options from "../options";
import Button from "@/app/components/ui/ButtonTwo";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


export default function StepOne({
  MaintenanceOptions,
  stepHandler,
  typeHandler,
  type,
  setRequest,
}: {
  MaintenanceOptions: any;
  stepHandler: (num: number) => void;
  typeHandler: (val: string) => void;
  type: string;
  setRequest: SetStateAction<any>;
}) {
  return (
    <div className="mt-8">
      <h1 className="text-black font-semibold text-2xl text-center">
        Basic Info
      </h1>
      <p className="font-normal text-[#00000066] text-sm text-center">
        Choose a category to define the issue or use the search feature.
      </p>

      <div className="max-w-[400px] w-full mx-auto block mt-8">
        <h1 className="text-sm text-black font-semibold">Select An Issue</h1>
        <div className="flex flex-col gap-y-4 mt-4">
          {MaintenanceOptions.map(
            (option: any, index: React.Key | null | undefined) => {
              const Icon = option?.icon;
              return (
                <div
                  key={index}
                  className="w-full max-w-fit cursor-pointer"
                  onClick={() => typeHandler(option?.header)}
                >
                  <Options
                    Icon={Icon}
                    subClassName=""
                    checked = {type === option?.header}
                    className={`flex gap-x-3 ${type === option?.header ? "border-2 border-black" : ""} relative  bg-[#F9F9FA] rounded-2xl p-4`}
                    header={option?.header}
                    text={option?.text}
                  />
                </div>
              );
            }
          )}
        </div>

        <div className="flex items-center gap-x-4 mt-6 justify-between">
          <Button
            onClick={() => stepHandler(0)}
            classname="bg-[#0000000A] flex items-center justify-center gap-x-2 max-w-[170px] w-full rounded-xl py-2 px-4"
          >
            <FaAngleLeft className="text-[#00000066] text-base" />
            <h1 className="text-sm font-[400] text-black">Previous</h1>
          </Button>

          <Button
            onClick={() => {
              setRequest((req: any)=> ({...req, category : type}));
              stepHandler(2);
            }}
            classname={`bg-[#1D3639] cursor-pointer flex items-center gap-x-2 justify-center max-w-[170px] w-full rounded-xl py-2 px-4`}
          >
            <h1 className="text-sm font-[400] text-white">Continue</h1>
            <FaAngleRight className="text-[#00000066] text-white text-base" />
          </Button>
        </div>
      </div>
    </div>
  );
}
