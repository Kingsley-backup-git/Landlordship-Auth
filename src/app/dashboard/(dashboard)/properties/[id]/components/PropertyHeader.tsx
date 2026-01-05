import React from "react";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";

export default function PropertyHeader() {
  return (
    <div className="flex sm:block items-center justify-between mb-4 sm:mb-6">
      <Link
        href="/dashboard/properties"
        className="flex items-center sm:hidden gap-x-[1px]"
      >
        <FaChevronLeft className="text-[#007AFF] text-lg" />
        <h1 className="font-[400] sm:text-base text-sm tracking-[-0.43px] text-[#007AFF]">
          Back
        </h1>
      </Link>

      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-x-3">
          <h1 className="text-black font-semibold sm:tracking-normal tracking-[-0.43px] sm:text-lg text-base">
            Property Details
          </h1>
        </div>

        <BsThreeDots className="text-[#007AFF] text-lg sm:hidden flex" />
      </div>
    </div>
  );
}


