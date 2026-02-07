import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SecondSection({data} : {data:any}) {
  return (
    <div className="bg-[#F9F9FA]  p-6 rounded-2xl mt-6">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold flex-1 text-sm text-black">
          Profile Details
        </h1>

       
      </div>

      <div className="mt-6 flex flex-col gap-y-6">
        <div className="flex items-center">
          <div className="flex-[25%]">
            <h1 className="text-xs font-[400] text-[#00000066]">Name</h1>
          </div>
          <div className="flex-[75%]">
            <h1 className="text-black font-[400] text-sm">{data?.tenantId?.firstName + " " + data?.tenantId?.lastName} </h1>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex-[25%] flex gap-x-2 items-center">
            <h1 className="text-xs font-[400] text-[#00000066]">
              Contact Phone
            </h1>
            <IoIosInformationCircleOutline className="text-[#00000033]" />
          </div>
          <div className="flex-[75%]">
            <span className="text-black font-[400] text-sm">{data?.tenantId?.phone || ""}</span>{" "}
            
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex-[25%]">
            <h1 className="text-xs font-[400] text-[#00000066]">
             Email
            </h1>
          </div>
          <div className="flex-[75%]">
            <h1 className="text-black font-[400] text-sm">
              {data?.tenantId?.email || " "}
            </h1>
          </div>
        </div>

      

        <div className="flex items-center">
          <div className="flex-[25%]">
            <h1 className="text-xs font-[400] text-[#00000066]">
              Description
            </h1>
          </div>
          <div className="flex-[75%]">
            <h1 className="text-black font-[400] text-sm">{data?.description || ""}</h1>
          </div>
        </div>


      </div>
    </div>
  );
}
