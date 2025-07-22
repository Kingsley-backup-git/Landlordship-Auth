import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
export default function ThirdSection() {
  return (
    <div className="bg-[#F9F9FA]  p-6 rounded-2xl mt-6">
      <h1 className="font-semibold flex-1 text-sm text-black">Menu</h1>

      <div className="rounded-2xl p-4 flex gap-x-2 mt-4 bg-white">
        <IoIosInformationCircleOutline className="text-black text-xl" />

        <div>
          <h1 className="text-black font-[400] text-sm">No media uploaded</h1>
          <p className="text-[#00000066] font-[400] text-xs">
            This will be uploaded by the tenant showing more info about request
          </p>
        </div>
      </div>
    </div>
  );
}
