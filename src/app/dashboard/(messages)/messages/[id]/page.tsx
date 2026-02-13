'use client'
import { ChatService } from '@/services/chats'
import { useQuery } from '@tanstack/react-query'
import React, {use, useEffect, useState} from 'react'

import SelectedChats from '../components/selectedChats'
import SendMessage from '../components/sendMessage'
import MessageLayout from '../components/messageLayout'
import { useUser } from '@/app/components/Providers/UserProvider'
import { useSocket } from '@/app/components/Providers/socketProvider'
import MaintenanceNotificationIcon from '../components/MaintenanceNotificationIcon'
import MaintenancePopover from '../components/MaintenancePopover'

import Spinner from "@/app/components/ui/loaders/Spinner";
import ErrorDisplay from "@/app/components/ui/ErrorDisplay";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ChatId({ params }: { params: Promise<{ id: string }> }) {
  const { socket } = useSocket()
 const [typingUser, setTypingUser] = useState<string| null>(null)
  const id = use(params)?.id 
    const {data:userdata} = useUser()
 
 const { data, isSuccess, isPending, isError } = useQuery({
        queryKey: ['chatsId', id],
        queryFn : async()=> await new ChatService().getEachChat(id)
    })
 
   const { data:messagesData, isSuccess:messageSuccess, isPending:messagePending, isError:messageError } = useQuery({
        queryKey: ['messages', id],
        queryFn : async()=> await new ChatService().getMessages(id)
    })
   
   // State for maintenance notification
   const [isMaintenanceOpen, setIsMaintenanceOpen] = useState(false);

  
    useEffect(() => {
    
      socket.on("user-typing", (data: {chatId:string, userId:string}) => {
            setTypingUser(data?.userId)
          })
         socket.on("user-stop-typing", (data: {chatId:string, userId:string}) => {
            setTypingUser(null)
          })
      
   
  },[socket])
   
  if (isPending || messagePending) {
      return (
          <div className="flex items-center justify-center h-full bg-white">
              <Spinner size="lg" className="border-black" />
          </div>
      )
  }

  if (isError || messageError) {
      return (
          <div className="flex items-center justify-center h-full bg-white">
              <ErrorDisplay />
          </div>
      )
  }
   
  return (
    <div className="relative flex flex-col h-full">
  
      <SelectedChats typingUser = {typingUser} data={data} isSuccess={isSuccess} userdata={userdata} />
      <MessageLayout  socket={socket} messagesData={messagesData} messageSuccess={messageSuccess} userdata={userdata} />
      <SendMessage socket={socket} userdata={userdata} id={id} data={data} />
      
      {/* Maintenance Notification System */}
      <MaintenanceNotificationIcon 
        count={data?.maintenanceRequests?.filter((r:{status:string}) => r?.status === 'assigned_pending').length}
        onClick={() => setIsMaintenanceOpen(!isMaintenanceOpen)}
        isOpen={isMaintenanceOpen}
      />
      <MaintenancePopover 
        isOpen={isMaintenanceOpen}
        onClose={() => setIsMaintenanceOpen(false)}
        requests={data?.maintenanceRequests} 
        isSuccess={isSuccess}
        id = {id}
      />
    </div>
  )
}

export default ChatId