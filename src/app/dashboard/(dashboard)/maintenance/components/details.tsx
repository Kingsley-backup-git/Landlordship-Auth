import React from "react";
import { GrFormDown } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import FirstSection from "./detailsSection/firstSection";
import SecondSection from "./detailsSection/secondSection";
import ThirdSection from "./detailsSection/thirdSection";
export default function Details() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-black font-semibold text-sm">Back</h1>

        <div className="flex items-center gap-x-4">
          <li className="list-none">
            <span className="text-[#00000066] font-[400] text-sm">
              Change Status
            </span>{" "}
            <GrFormDown className="inline-block align-middle text-lg text-[#00000066]" />
          </li>

          <li className="text-[#00000066] list-none text-sm font-[400]">
            Send message
          </li>

          <BsThreeDots className="text-lg text-[#00000066]" />
        </div>
      </div>

      <FirstSection />

      <SecondSection />

      <ThirdSection />
    </div>
  );
}
