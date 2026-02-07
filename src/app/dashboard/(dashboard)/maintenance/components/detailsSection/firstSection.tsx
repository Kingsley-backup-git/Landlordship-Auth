import Image from "next/image";
import React from "react";
import { PiHouseSimple } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import UserImg from "../../../../../../../public/user.png";
import { getStatusBadge } from "../../../properties/[id]/components/utils";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FirstSection({data} : {data:any}) {
  console.log(data)
  return (
    <div className="bg-[#F9F9FA] flex  p-6 rounded-2xl mt-6">
      <div className="flex-1">
        <h1 className="text-black font-semibold text-lg">
         {data?.title}
        </h1>

        <div className="flex items-center gap-x-4 mt-4">
          <div className="flex items-center gap-x-1">
            <PiHouseSimple className="text-sm text-[#00000066]" />{" "}
            <h1 className="font-[400] text-xs text-[#00000066]">
           {data?.propertyId?.propertyName}
            </h1>
          </div>

          <div className="flex items-center gap-x-1">
            <IoLocationOutline className="text-sm text-[#00000066]" />{" "}
            <h1 className="font-[400] text-xs text-[#00000066]">
               {data?.propertyId?.address},       {data?.propertyId?.state}
            </h1>
          </div>
        </div>

        <div className="flex divide-x-[1px] divide-[#0000001A] mt-6">
          <div className="pe-6">
            <h1 className="font-[400] text-sm text-black">Status</h1>
            <div className="max-w-[160px]   mt-1 relative ">
             {getStatusBadge(data?.status)}
            </div>
          </div>

          <div className="px-6">
            <h1 className="font-[400] text-sm text-black">Cost</h1>
            <p className="font-semibold mt-1 text-base text-black">£4,500</p>
          </div>

          <div className="ps-6">
            <h1 className="font-[400] text-sm text-black">Priority</h1>
            <p className="font-semibold mt-1 text-base text-black">{data?.priority}</p>
          </div>
        </div>
      </div>

      <Image
        src={UserImg}
        className="max-w-[40px] w-[100%] h-[40px] rounded-full"
        width={30}
        height={30}
        alt="user image"
      />
    </div>
  );
}
