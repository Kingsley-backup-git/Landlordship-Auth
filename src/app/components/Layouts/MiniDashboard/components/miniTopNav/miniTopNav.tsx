import React from "react";
import { PiSidebar } from "react-icons/pi";
import { PiChatsDuotone } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { BsCommand } from "react-icons/bs";

import { PiSunDuotone } from "react-icons/pi";
import { PiCalendarDuotone } from "react-icons/pi";
import { PiSidebarDuotone } from "react-icons/pi";
import { VscBell } from "react-icons/vsc";
import TextInput from "@/app/dashboard/components/inputs/TextInput";
export default function MiniTopNav() {
  return (
    <div className="sm:flex hidden items-center px-4 gap-x-4 border-b-[1px] border-[#1C1C1C1A]  pb-4 w-[100%]">
      <div className="me-auto flex gap-x-3 items-center">
        <PiSidebar className="text-white/80  text-base" />
        <PiChatsDuotone className="text-base  text-white/85" />

        <div className="1md:flex hidden gap-x-3 items-center">
          <h1 className="text-white/50 font-[400] text-[10px] capitalize">
            Dashboard
          </h1>
          <div className="text-sm font-[400] text-white/80">/</div>
          <h1 className="font-[400] text-[10px] text-white/80 capitalize">
            Overview
          </h1>
        </div>
      </div>

      <div className="ms-auto flex items-center gap-x-4">
        <div className="bg-[#0000000A] max-w-[160px] w-[100%] rounded-lg px-2 py-[6px] gap-x-[6px] flex items-center">
          <CiSearch className="text-lg text-[#00000033]" />
          <TextInput
            type="text"
            classname="flex-1 w-[100%]  bg-transparent text-black text-sm outline-0 border-[0px] border-transparent"
            placeholder="Search"
            name={"searchinput"}
          />
          <BsCommand className="text-sm text-white/85" />
        </div>

        <PiSunDuotone className="text-white/80 text-base" />

        <PiCalendarDuotone className="text-white/80 text-base" />

        <VscBell className="text-white/80 text-base" />

        <PiSidebarDuotone className="text-white/80 1md:flex hidden text-base" />
      </div>
    </div>
  );
}
