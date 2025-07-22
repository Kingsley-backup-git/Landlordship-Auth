import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function SecondSection() {
  return (
    <div className="bg-[#F9F9FA]  p-6 rounded-2xl mt-6">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold flex-1 text-sm text-black">
          Profile Details
        </h1>

        <h1 className="text-[#00000066] font-[400] text-xs">Edit Profile</h1>
      </div>

      <div className="mt-6 flex flex-col gap-y-6">
        <div className="flex items-center">
          <div className="flex-[25%]">
            <h1 className="text-xs font-[400] text-[#00000066]">Company</h1>
          </div>
          <div className="flex-[75%]">
            <h1 className="text-black font-[400] text-sm">Snow UI</h1>
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
            <span className="text-black font-[400] text-sm">+852 19850622</span>{" "}
            <span className="bg-[#e5efea] text-[#94E9B8] text-xs font-[400] rounded-lg px-2 py-1">
              Verified
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex-[25%]">
            <h1 className="text-xs font-[400] text-[#00000066]">
              Company Site
            </h1>
          </div>
          <div className="flex-[75%]">
            <h1 className="text-black font-[400] text-sm">
              snowui.byewind.com
            </h1>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex-[25%] flex gap-x-2 items-center">
            <h1 className="text-xs font-[400] text-[#00000066]">Country</h1>
            <IoIosInformationCircleOutline className="text-[#00000033]" />
          </div>
          <div className="flex-[75%]">
            <span className="text-black font-[400] text-sm">United States</span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex-[25%]">
            <h1 className="text-xs font-[400] text-[#00000066]">
              Communication
            </h1>
          </div>
          <div className="flex-[75%]">
            <h1 className="text-black font-[400] text-sm">Email, Phone</h1>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex-[25%]">
            <h1 className="text-xs font-[400] text-[#00000066]">
              Allow Changes
            </h1>
          </div>
          <div className="flex-[75%]">
            <h1 className="text-black font-[400] text-sm">Yes</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
