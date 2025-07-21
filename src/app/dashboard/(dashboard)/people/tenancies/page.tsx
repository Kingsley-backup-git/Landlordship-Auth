import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa6";
import CurrentTenancies from "./components/currentTenancies";
import RentsPaid from "./components/rentsPaid";
import Deposits from "./components/deposit";
import { RiAddLargeLine } from "react-icons/ri";
import { PiArrowsDownUp, PiFunnelSimple } from "react-icons/pi";
import { FiPlus, FiSearch } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import TextInput from "@/app/dashboard/components/inputs/TextInput";
import Link from "next/link";
import TransactionHistory from "./components/transactionHistory";

export default function Tenancies() {
  return (
    <div className="sm:p-6 py-2 px-4 sm:max-w-[960px] mx-auto w-[100%]">
      <div className="flex sm:block items-center justify-between">
        <Link
          href="/dashboard/"
          className="flex items-center sm:hidden gap-x-[1px]"
        >
          <FaChevronLeft className="text-[#007AFF] text-lg" />
          <h1 className="font-[400] sm:text-base text-sm tracking-[-0.43px] text-[#007AFF]">
            Home
          </h1>
        </Link>

        <h1 className="text-black font-semibold sm:tracking-normal tracking-[-0.43px] sm:text-sm text-base">
          Tenancies
        </h1>

        <BsThreeDots className="text-[#007AFF] text-lg sm:hidden flex" />
      </div>

      <div className="grid 2sm:grid-cols-2 lg:grid-cols-3 1md:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 sm:gap-4 gap-3 mt-5">
        <CurrentTenancies />

        <RentsPaid />

        <Deposits />
      </div>

      <div className="sm:hidden flex gap-x-6 ps-4 pe-4 py-6 rounded-full bg-white items-center my-5">
        <RiAddLargeLine className="text-black  text-xl" />

        <PiFunnelSimple className="text-black  text-xl" />

        <PiArrowsDownUp className="text-black  text-xl" />

        <FiSearch className="text-black text-xl ms-auto" />
      </div>

      <div className="sm:flex hidden justify-between items-center bg-[#F9F9FA] rounded-lg p-2 mt-6">
        <div className="flex gap-x-5 items-center">
          <div className="flex gap-x-1 items-center">
            <FiPlus className="text-black text-sm" />

            <h1 className="text-sm font-[400] text-black">New Tenant</h1>
          </div>

          <PiFunnelSimple className="w-[17px] h-[17px] text-black" />
          <PiArrowsDownUp className="w-[17px] h-[17px] text-black" />
        </div>

        <div className="bg-[#FFFFFFCC] max-w-[160px] w-[100%] border-[.5px] rounded-lg px-2 py-[6px] gap-x-[6px] flex items-center">
          <CiSearch className="text-lg text-[#00000033]" />
          <TextInput
            type="text"
            classname="flex-1 w-[100%]  bg-transparent text-black text-sm outline-0 border-[0px] border-transparent"
            placeholder="Search"
            name={"searchinput"}
          />
        </div>
      </div>

      <div className="grid grid-cols-12">
        <TransactionHistory />
      </div>
    </div>
  );
}
