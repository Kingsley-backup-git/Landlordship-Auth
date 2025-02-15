'use client'
import React from "react";

import { PiCalendarDotsDuotone } from "react-icons/pi";
import { LuBell } from "react-icons/lu";
import { PiChatsDuotone } from "react-icons/pi";
// import { usePathname } from "next/navigation";
import { GrHomeRounded } from "react-icons/gr";
import UserImg from "../../../../public/user.png"
import Link from "next/link";
import Image from "next/image";
const BottomNav: React.FC = () => {
//   const pathName = usePathname();
  return (
    <div className="h-[70px] bg-white/30 backdrop-blur-sm  shadow-lg px-10  rounded-full w-[100%] fixed  bottom-0 left-0 sm:hidden z-[9999] flex justify-between items-center py-1">
      <Link
        href="/dashboard/"
        className={`flex-1 cursor-pointer grow max-w-fit w-[100%]`}
      >
        <GrHomeRounded
          className={`text-black  text-xl xs:text-2xl`}
        />
      </Link>
      <Link
        href="/dashboard/"
        className={`flex-1 grow opacity-10 pointer-events-none max-w-fit w-[100%] `}
      >
        <PiCalendarDotsDuotone
          className={`text-black  text-xl xs:text-2xl`}
        />{" "}
      </Link>

      <Link
        href="/dashboard/"
        className={`flex-1 grow opacity-10 pointer-events-none max-w-fit w-[100%] `}
      >
        <LuBell 
          className={`text-black  text-xl xs:text-2xl`}
        />{" "}
      </Link>
      <Link
        href="/dashboard/messages"
        className={`flex-1 grow max-w-fit w-[100%] `}
      > <PiChatsDuotone  className={`text-black text-xl xs:text-2xl`}
    /></Link> 


      <Link
        href="/dashboard"
        className={` flex-1 grow opacity-10 pointer-events-none max-w-fit w-[100%] `}
      >
        <Image src = {UserImg} className = "w-[26px] h-[26px] rounded-full" alt="user image" width={26} height = {26} />
      </Link>
    </div>
  );
};
export default BottomNav;