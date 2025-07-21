import React from "react";

export default function InProgress() {
  return (
    <div className="bg-[#F9F9FA] rounded-2xl sm:p-6 p-4 ">
      <div className="flex items-center">
        <h1 className="text-sm text-black font-[400] flex-1">Pending</h1>
      </div>

      <div className="mt-4 flex gap-x-2 items-center">
        <h1 className="sm:text-xl text-base font-semibold text-black">10</h1>
      </div>
    </div>
  );
}
