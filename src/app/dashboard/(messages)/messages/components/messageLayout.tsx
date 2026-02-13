"use client";
import React, { useEffect, useRef, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MessageLayout({

  socket,
  messagesData,
  messageSuccess,
  userdata,
}: {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  socket: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messagesData: any;
  messageSuccess: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userdata: any;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [messages, setMessages] = useState<any[]>([]);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (messageSuccess) {
      setMessages([...messagesData]);
    }
  }, [messageSuccess, messagesData]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    socket.on("receive_message", (data: any) => {
      setMessages((prevMessage) => [...prevMessage, data]);
    });

    return () => socket.off("receive_message");
  }, [socket]);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  //0% 0%, 100% 0%, 100% 89%, 10% 90%, 0 95%, 0 75%, 0% 75%
  return (
    <div className="flex-1 flex-col space-y-3 overflow-y-auto p-3 bg-white">
      {messages?.map((msg) => {
        return (
          <div
            style={{
              clipPath:
                msg?.senderId?._id === userdata?.data?._id
                  ? "polygon(0 14%, 100% 14%, 99% 68%, 100% 93%, 95% 89%, 0 89%)"
                  : msg?.receiverId?._id === userdata?.data?._id
                    ? "polygon(0% 0%, 100% 0%, 100% 89%, 10% 90%, 0 95%, 0 75%, 0% 75%)"
                    : "",
            }}
            key={msg._id}
            className={`w-fit  max-w-[350px] p-4 ${msg?.senderId?._id === userdata?.data?._id ? "bg-purple-800 ms-auto" : msg?.receiverId?._id === userdata?.data?._id ? "bg-cyan-500" : null} block text-sm  text-white rounded-md`}
          >
            {msg.message}
          </div>
        );
      })}
      <div className="" ref={ref}></div>
    </div>
  );
}
