import Image from "next/image";
import React from "react";
import { PiHouseSimple } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import UserImg from "../../../../../../../public/user.png";
export default function FirstSection() {
  return (
    <div className="bg-[#F9F9FA] flex  p-6 rounded-2xl mt-6">
      <div className="flex-1">
        <h1 className="text-black font-semibold text-lg">
          Plumbing- Bathroom-Leak
        </h1>

        <div className="flex items-center gap-x-4 mt-4">
          <div className="flex items-center gap-x-1">
            <PiHouseSimple className="text-sm text-[#00000066]" />{" "}
            <h1 className="font-[400] text-xs text-[#00000066]">
              First property 101
            </h1>
          </div>

          <div className="flex items-center gap-x-1">
            <IoLocationOutline className="text-sm text-[#00000066]" />{" "}
            <h1 className="font-[400] text-xs text-[#00000066]">
              SF, Bay Area
            </h1>
          </div>
        </div>

        <div className="flex divide-x-[1px] divide-[#0000001A] mt-6">
          <div className="pe-6">
            <h1 className="font-[400] text-sm text-black">Task Completion</h1>
            <div className="bg-[#0000000A] max-w-[160px]   mt-1 relative rounded-lg  h-[28px]">
              <div className="bg-[#C3DF93] w-[51%] rounded-l-lg  h-[28px]">
                <h1 className="font-semibold text-base text-black absolute top-[1px] bottom-0 text-center left-0 right-0 ">
                  51%
                </h1>
              </div>
            </div>
          </div>

          <div className="px-6">
            <h1 className="font-[400] text-sm text-black">Cost</h1>
            <p className="font-semibold mt-1 text-base text-black">£4,500</p>
          </div>

          <div className="ps-6">
            <h1 className="font-[400] text-sm text-black">Timeline</h1>
            <p className="font-semibold mt-1 text-base text-black">2 days</p>
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
