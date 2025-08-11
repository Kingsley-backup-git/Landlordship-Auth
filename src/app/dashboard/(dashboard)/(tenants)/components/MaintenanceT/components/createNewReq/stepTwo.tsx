import React, { SetStateAction } from "react";
import Options from "../options";
import Button from "@/app/components/ui/ButtonTwo";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


export default function StepTwo({
  stepHandler,
  type,
  MaintenanceOptions,
  subtypeHandler,
  setRequest,
  subType,
}: {
  stepHandler: (num: number) => void;
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  MaintenanceOptions: any;
  subtypeHandler: (val: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setRequest: SetStateAction<any>;
  subType: string;
}) {
  const subCategory = MaintenanceOptions.find(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (item: any) => item?.header === type
  );

  return (
    <div className="mt-8 max-w-[400px] w-full mx-auto block">
      <h1 className="text-black font-semibold text-2xl text-center">
        Request Details
      </h1>
      <p className="font-normal mt-3 text-[#00000066] text-sm text-center">
        Choose the issue&apos;s sub-category from the options below.
      </p>
      <div className="flex flex-col gap-y-4 mt-4">
        {subCategory?.subType?.map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (option: any, index: React.Key | null | undefined) => {
            return (
              <div
                key={index}
                className="w-full  cursor-pointer"
                onClick={() => {
                  subtypeHandler(option?.header);
                }}
              >
                <Options
                  Icon={""}
                  subClassName=""
                  className={`flex gap-x-3 ${subType === option?.header ? "border-2 border-black" : ""} relative  bg-[#F9F9FA] rounded-2xl p-4`}
                  header={option?.header}
                  checked = {subType === option?.header}
                  text={""}
                />
              </div>
            );
          }
        )}
      </div>

      <p className="text-[#00000066] text-sm mt-3 text-center">
        None of the above options apply?{" "}
        <span className="text-red-500 cursor-pointer" onClick={()=> stepHandler(3)}>Skip</span>
      </p>

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
             // eslint-disable-next-line @typescript-eslint/no-explicit-any
             setRequest((req: any)=> ({...req, subCategory : subType}))
            stepHandler(3);
           
          }}
          classname={`bg-[#1D3639] cursor-pointer flex items-center gap-x-2 justify-center max-w-[170px] w-full rounded-xl py-2 px-4`}
        >
          <h1 className="text-sm font-[400] text-white">Continue</h1>
          <FaAngleRight className="text-[#00000066] text-white text-base" />
        </Button>
      </div>
    </div>
  );
}
