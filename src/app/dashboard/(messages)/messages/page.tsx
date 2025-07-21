import React from "react";
import Options from "./components/options";
import { PiFunnelSimple } from "react-icons/pi";
import styles from "../messages.module.css";
import Chats from "./components/chats";
import SelectedChats from "./components/selectedChats";
import MessageHeader from "./components/messageHeader";
import MessageLayout from "./components/messageLayout";
import SendMessage from "./components/sendMessage";
import Checkbox from "./components/inputs/checkbox";
import { PiNotePencil } from "react-icons/pi";
import { PiGearSix } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import TextInput from "../../components/inputs/TextInput";
import { BsThreeDots } from "react-icons/bs";
export default function Messages() {
  return (
    <div className="sm:flex gap-x-5 1md:p-6  py-2 sm:px-3 px-2 flex-1 sm:overflow-hidden">
      <div className="1md:flex-[13%]  sm:flex hidden">
        <Options />
      </div>

      <div className="sm:flex-[30%] 1md:flex sm:hidden  flex flex-col sm:h-full">
        <div className="fixed pt-6 px-3 bg-[#F9F9FA] pb-1 left-0 right-0 top-0 w-full items-center sm:hidden z-[9999]">
          <div className="flex items-center">
            <div className="flex-1"></div>
            <div className="flex-1">
              {" "}
              <h1 className="text-black text-center  font-semibold sm:hidden block  sm:tracking-normal tracking-[-0.43px] text-sm 2sm:text-lg ">
                Message
              </h1>
            </div>
            <div className="flex-1 flex justify-end">
              <BsThreeDots className="text-[#007AFF]  2sm:text-2xl text-xl sm:hidden flex" />
            </div>
          </div>
          <div className="bg-white w-full rounded-lg px-6 py-4 gap-x-4 mt-2 sm:hidden flex items-center">
            <PiNotePencil className="2sm:text-xl text-lg text-black" />
            <PiGearSix className="text-lg 2sm:text-xl text-black" />

            <div className="bg-[#0000000A] max-w-[160px] ms-auto w-[100%] rounded-lg px-2 py-[7px] gap-x-[6px] flex items-center">
              <CiSearch className="text-lg text-[#00000033]" />
              <TextInput
                type="text"
                classname="flex-1 w-[100%]  bg-transparent text-black text-sm outline-0 border-[0px] border-transparent"
                placeholder="Search"
                name={"searchinput"}
              />
            </div>
          </div>
        </div>
        <div className="bg-[#F9F9FA] rounded-lg sm:flex hidden items-center gap-x-4 p-2">
          <Checkbox classname="border-[1px] w-[17px] h-[17px] border-[#00000033] rounded" />
          <PiFunnelSimple className="text-lg text-black" />
        </div>

        <div
          className={`sm:overflow-y-auto mt-[95px] sm:mt-1 py-1 divide-y-[1px] divide-[#0000000A] ${styles.overflow} flex-1 sm:h-[160%] flex flex-col`}
        >
          <Chats />:
        </div>
        <div className="h-[60px] sm:hidden flex"></div>
      </div>

      <div className="1md:flex-[57%] flex-1 hidden sm:flex flex-col gap-y-4">
        <SelectedChats />
        <div className="overflow-y-auto flex flex-col border-[1px] w-full flex-1 border-[#0000000A] rounded-lg">
          <MessageHeader />
          <MessageLayout />
          <SendMessage />
        </div>
      </div>
    </div>
  );
}
