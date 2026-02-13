/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useRef, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { PiImage } from "react-icons/pi";
import { GoPaperclip } from "react-icons/go";
import Button from "@/app/components/ui/Button";
import TextInput from "./inputs/TextInput";

export default function SendMessage({ socket, userdata, id, data }: { socket: any; userdata: any; id: string;  data:any}) {
  const [message, setMessage] = useState<string>("")
  const typingTimeoutRef: React.RefObject<any> = useRef(null)
  function sendHandler() {
    socket.emit("send_message", {

      chatId: id,
      senderId: userdata?.data?._id,
      receiverId: (data?.participants?.find((item: { _id: string; }) => item?._id !== userdata?.data?._id)?._id),
  message: message.trim()
    })
    
   setMessage("")
}
   
  return (
    <div className="p-4 border-[1px] border-[#0000000A]  flex gap-x-4 items-center">
      <TextInput
        onChange={(e) => {
          
          setMessage(e.target.value)

          socket.emit("typing", { chatId: id, userId: userdata?.data?._id })
          
           clearTimeout(typingTimeoutRef.current);

  typingTimeoutRef.current = setTimeout(() => {
    socket.emit("stop-typing", {
      chatId: id,
      userId: userdata?.data?._id,
    });
  }, 2000);
        }}
        value={message}
        classname="flex-1 outline-none w-[100%] border-0 font-[400] text-sm text-black p-1" />
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
        onClick={sendHandler}

      />
    </div>
  );
}
