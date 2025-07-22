import React from "react";
import { IoSearchOutline } from "react-icons/io5";
export default function SearchInput() {
  return (
    <div
      className={
        "flex items-center gap-x-1 border-b-[1px] border-[#0000000A] pb-4"
      }
    >
      <IoSearchOutline className="text-2xl text-black" />
      <input
        type="text"
        className="border-0 outline-0 py-1 placeholder:text-base placeholder:text-[##00000033] text-black"
        placeholder="Search tenant"
        name="search"
      />
    </div>
  );
}
