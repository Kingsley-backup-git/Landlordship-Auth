'use client'
import React from "react";

import { PiCalendarDotsDuotone } from "react-icons/pi";
import { LuBell } from "react-icons/lu";
import { PiChatsDuotone } from "react-icons/pi";
// import { usePathname } from "next/navigation";
import { PiHouseFill } from "react-icons/pi";
import UserImg from "../../../public/user.png"
import Link from "next/link";
import Image from "next/image";
const BottomNav: React.FC = () => {
//   const pathName = usePathname();
  return (
    <div className="h-[60px] bg-[#FFFFFF0A] shadow-lg border-t-[5px] border-r-1 border-l-1 border-b-1 border-dark rounded-t-3xl w-[100%] fixed  bottom-0 left-0 sm:hidden z-[9999] flex justify-between items-center py-2  px-4">
      <Link
        href="/dashboard"
        className={`flex-1 cursor-pointer grow max-w-fit w-[100%]`}
      >
        <PiHouseFill
          className={`text-black text-2xl`}
        />
      </Link>
      <Link
        href="/dashboard/"
        className={`flex-1 grow max-w-fit w-[100%] `}
      >
        <PiCalendarDotsDuotone
          className={`text-black text-2xl `}
        />{" "}
      </Link>

      <Link
        href="/dashboard/"
        className={`flex-1 grow max-w-fit w-[100%] `}
      >
        <LuBell 
          className={`text-black text-2xl`}
        />{" "}
      </Link>
      <Link
        href="/dashboard/"
        className={`flex-1 grow max-w-fit w-[100%] `}
      > <PiChatsDuotone  className={`text-black text-2xl`}
    /></Link> 


      <Link
        href="/user"
        className={` flex-1 grow max-w-fit w-[100%] `}
      >
        <Image src = {UserImg} className = "w-[26px] h-[26px] rounded-full" alt="user image" width={26} height = {26} />
      </Link>
    </div>
  );
};
export default BottomNav;