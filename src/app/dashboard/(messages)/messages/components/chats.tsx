"use client"
import React,{useState, useEffect} from "react";
import { useQuery } from "@tanstack/react-query";
import { ChatService } from "@/services/chats";
import { useUser } from "@/app/components/Providers/UserProvider";
import { PiUserCircleDuotone } from "react-icons/pi";
import Link from "next/link";
import { useSocket } from "@/app/components/Providers/socketProvider";
import { timeAgo } from "@/utils/functions";
import Skeleton from "@/app/components/ui/loaders/Skeleton";
import ErrorDisplay from "@/app/components/ui/ErrorDisplay";
import EmptyState from "@/app/components/ui/EmptyState";
import { PiChatCircle } from "react-icons/pi";
export default function Chats() {
    const { socket } = useSocket()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [chatList, setChatList] = useState<any[]>([])
  const {data:userdata, query} = useUser()
  const { data, isSuccess, isError, isPending, refetch } = useQuery({
    queryKey: ['chats'],
    queryFn : async()=> await new ChatService().getChatList()
  })

  useEffect(() => {
    if (isSuccess) {
       setChatList([...data])
    }
 
},[isSuccess, data])

 useEffect(() => {
  if (!socket) return;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  socket.on("chat_list_update", (newData:any) => {
    setChatList((prevChats) =>
      prevChats.map((val) =>
        newData?._id === val._id ? newData : val
      )
    );
  });
   socket.on("refresh-chat", (result:{acknowledged:boolean}) => {
     if (result.acknowledged) {
       refetch()
     }
  })

  return () => {
    socket.off("chat_list_update");
  };
 }, [socket]);

  
  function joinChat(data : {chatId : string; userId : string}) {
    socket.emit("join_chat", data)
  }
  
  if (isPending) {
      return (
          <div className="flex flex-col gap-4 p-2">
              <Skeleton className="h-16 w-full rounded-lg" />
              <Skeleton className="h-16 w-full rounded-lg" />
              <Skeleton className="h-16 w-full rounded-lg" />
              <Skeleton className="h-16 w-full rounded-lg" />
          </div>
      )
  }

  if (isError) {
      return (
          <div className="p-4">
              <ErrorDisplay onRetry={() => refetch()} />
          </div>
      )
  }

  return (
    <>
      {chatList?.length === 0 ? (
        <div className="pt-10">
          <EmptyState message="No chats found" icon={PiChatCircle} className="border-none bg-transparent" />
        </div>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ) : (chatList?.map((chat: { _id: string; participants: any; unreadMessages: number; lastMessage: { message: string; receiverId:string; read:boolean };  lastMessageAt:string}) => {
        return (
          <Link
            key={chat?._id}
            onClick = {()=> joinChat({chatId:chat?._id, userId : userdata?.data?._id})}
            className="flex items-stretch gap-x-2 hover:rounded-lg px-2 pt-2 cursor-pointer pb-4 hover:bg-[#0000000A]"
href = {`/dashboard/messages/${chat?._id}`}
          >
            {/* <Image
             src={Img1}
             className="w-[28px] h-[28px] self-center rounded-full"
             alt="profile-picture"
              width={24}
             height={24}
            /> */}
 <PiUserCircleDuotone className="min-w-[30px] min-h-[30px] max-w-[30px] w-[100%] h-[100%] text-[#1C1C1C]" />
            <div className="flex-1">
              <h1 className="text-sm font-[400] text-black">{(chat?.participants?.find((item: { _id: string; lastMessage: { message: string };  lastMessageAt:string})=> item?._id !== userdata?.data?._id)?.userName)}</h1>
            <p className="text-[#00000066] text-[11px] font-[400] break-keep line-clamp-1">
                {chat?.lastMessage?.message}
              </p>
            </div>

           <div className="max-w-fit w-[100%] self-start text-xs text-[#00000066] font-[400] flex flex-col items-center">
              <h1>{ chat?.lastMessageAt && timeAgo(new Date( chat?.lastMessageAt))}</h1>
           {(chat?.unreadMessages > 0) && <p className="bg-[#5856D6] flex items-center justify-center  p-2 py-1 rounded-full text-white">
    {chat?.unreadMessages}
            </p>}
          </div>
          </Link>
        );
      }))}
    </>
  );
}
