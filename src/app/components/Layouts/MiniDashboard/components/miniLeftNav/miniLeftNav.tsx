import Image from "next/image";
import React from "react";
import User from "../../../../../../../public/user.png";
import Logo from "../../../../../../../public/LogoWhite.png";
import MiniDashboardList from "./miniDashboardList/DashboardList";
import MiniPeopleList from "./miniPeople/PeopleList";
import MiniDocList from "./miniDocList/DocList";
export default function MiniLeftNav() {
  return (
    <div className="w-[100%] py-5 flex flex-col h-full gap-y-4">
      <div className="flex-1">
        <div className={`flex gap-x-3 items-center  px-2`}>
          <Image
            src={User}
            alt="user"
            className="w-[24px] h-[24px] rounded-full"
          />
          <h1 className="text-white/85 font-[400] text-xs">User Name</h1>
        </div>
        <MiniDashboardList />
        <MiniPeopleList />

        <MiniDocList />
      </div>
      <Image
        src={Logo}
        alt="logo"
        className="mx-auto"
        width={130}
        height={130}
      />
    </div>
  );
}
