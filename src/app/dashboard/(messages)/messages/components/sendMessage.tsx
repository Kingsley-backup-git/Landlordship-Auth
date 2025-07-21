import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { PiImage } from "react-icons/pi";
import { GoPaperclip } from "react-icons/go";
import Button from "@/app/components/ui/Button";
import TextInput from "./inputs/TextInput";
export default function SendMessage() {
  return (
    <div className="p-4 border-[1px] border-[#0000000A]  flex gap-x-4 items-center">
      <TextInput classname="flex-1 outline-none w-[100%] border-0 font-[400] text-sm text-black p-1" />
      <FiTrash2 className="text-lg text-black cursor-pointer" />

      <PiImage className="text-lg text-black cursor-pointer" />

      <GoPaperclip className="text-lg text-black cursor-pointer" />

      <Button
        classname="bg-[#0000000A] py-1 px-2 font-[400] text-sm rounded-lg text-black"
        text="Send late"
      />

      <Button
        classname="bg-[#E3572B] py-1 px-2 font-[400] text-sm rounded-lg text-white"
        text="Send"
      />
    </div>
  );
}
