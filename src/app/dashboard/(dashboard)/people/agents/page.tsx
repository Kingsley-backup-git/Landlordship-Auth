"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { FiPlus } from "react-icons/fi";
import RadioInput from "./components/radioInput";
import { PiMapPin } from "react-icons/pi";
import { PiEnvelopeSimple } from "react-icons/pi";
import { PiPhone } from "react-icons/pi";
import { RiAddLargeLine } from "react-icons/ri";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa6";
import { PiFunnelSimple } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { PiArrowsDownUp } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";
import AddAgentModal from "./components/AddAgentModal";
import { useQuery } from "@tanstack/react-query";
import { AgentService } from "@/services/agent";
import UserImg from "../../../../../../public/user.png";

export default function Agents() {
  const [isAddAgentModalOpen, setIsAddAgentModalOpen] = useState(false);
  const { data, isSuccess, isError, isPending } = useQuery({
    queryKey: ["agents"],
    queryFn : async()=> await new AgentService().getAgent()
})

  
  return (
    <div className="sm:p-6 py-2 px-4 sm:max-w-[960px] mx-auto w-[100%]">
      <div className="flex justify-between items-center">
        <Link
          href="/dashboard/"
          className="flex items-center sm:hidden gap-x-[1px]"
        >
          <FaChevronLeft className="text-[#007AFF] text-lg" />
          <h1 className="font-[400] sm:text-base text-sm tracking-[-0.43px] text-[#007AFF]">
            Home
          </h1>
        </Link>

        <h1 className="font-semibold sm:text-sm text-base text-black">
          Agents
        </h1>

        <button
          type="button"
          onClick={() => setIsAddAgentModalOpen(true)}
          className="sm:flex hidden items-center gap-x-1 max-w-fit w-[100%] cursor-pointer"
        >
          <FiPlus className="text-[#00000066] w-[10px] h-[10px]" />
          <h1 className="text-[#00000066] font-[400] text-sm">Add Agent</h1>
        </button>

        <BsThreeDots className="text-[#007AFF] text-lg sm:hidden flex" />
      </div>

      <div className="sm:hidden flex gap-x-6 ps-4 pe-4 bg-white rounded-full py-4 items-center my-5">
        <RiAddLargeLine className="text-black  text-lg" />

        <PiFunnelSimple className="text-black  text-lg" />

        <PiArrowsDownUp className="text-black  text-lg" />

        <FiSearch className="text-black text-lg ms-auto" />
      </div>

      <div className={`grid grid-cols-12 sm:mt-10 mt-2 gap-y-6 gap-x-4 w-full`}>
        <div className="sm:flex grid 2sm:grid-cols-2 grid-cols-1 flex-col sm:gap-y-6 gap-y-4 sm:col-span-6 col-span-12">
          {isSuccess && data.map((agent: { name: string; email: string; _id: string; phone: string;  address:string}) => {
            return (
              <Link
                href={`/dashboard/people/agents/${agent._id}`}
                key={agent._id}
                className={`sm:bg-[#F9F9FA] break-words w-[100%] text-wrap whitespace-normal xs:flex-row  1/2md:flex-row 1md:flex-col lg:flex-row items-center relative bg-white hover:border-[2px] cursor-pointer transition-[border] ease-in-out duration-100 border-black/20 p-3 xs:p-3 rounded-2xl flex gap-x-4 `}
              >
                {/* <div className="flex xs:flex-row justify-center flex-col items-center xs:gap-x-4"> */}
                <Image
                  src={UserImg}
                  className="xs:max-w-[70px] max-w-[60px] self-center w-full xs:h-[70px] h-[60px] rounded-2xl"
                  width={70}
                  height={70}
                  alt="agent-picture"
                />

                <div>
                  <h1 className="text-black xs:text-start 1md:text-center lg:text-start font-semibold xs:text-base text-sm">
                    {agent.name}
                  </h1>
                  <div className="text-[#00000066] text-xs lg:text-start 1md:text-center font-[400] mt-[2px] text-break flex items-center lg:justify-start 1md:justify-center gap-x-1">
                    <PiEnvelopeSimple className="" />{" "}
                    <div className="break-all">{agent.email}</div>
                  </div>
                  <p className="text-[#00000066] text-xs lg:text-start 1md:text-center font-[400] mt-1">
                    <PiMapPin className="inline-block align-middle" />{" "}
                    {agent.address}
                  </p>
                  <p className="text-[#00000066] text-xs lg:text-start 1md:text-center font-[400] mt-1">
                    <PiPhone className="inline-block align-middle" /> 
                    {agent.phone}
                  </p>
                </div>
                {/* </div> */}

             
              </Link>
            );
          })}
        </div>

        <div className="w-[100%] sm:flex hidden col-span-6 ">
          <div className="w-full flex flex-col justify-center items-center  h-[454px] bg-[#F9F9FA] sticky top-[40px] rounded-2xl">
            <div className="w-[75px] h-[75px] rounded-xl p-4 bg-[#0000000A]"></div>

            <h1 className="text-black font-semibold text-sm mt-5">
              No property added
            </h1>
            <p className="text-sm text-[#00000066] font-[400] mt-1">
              Allocate property
            </p>
          </div>
        </div>
      </div>

      <AddAgentModal
        isOpen={isAddAgentModalOpen}
        onClose={() => setIsAddAgentModalOpen(false)}
     
      />
    </div>
  );
}
