import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
export default function SearchInput() {
  return (
    <div className="flex gap-x-2 bg-[#7878801F] mt-4 items-center p-2 rounded-xl">
      <IoIosSearch className="text-lg text-[#3C3C4399]" />

      <input
        type="text"
        placeholder="Search"
        className="flex-1 bg-transparent placeholder:text-[#3C3C4399]  text-[#3C3C4399] font-[400] text-sm outline-0 border-0"
      />

      <FaMicrophone className="text-lg text-[#3C3C4399]" />
    </div>
  );
}
