import React from 'react'
import Options from './components/options'
import { PiFunnelSimple } from "react-icons/pi";
import styles from "../messages.module.css"
import Chats from './components/chats';
import SelectedChats from './components/selectedChats';
import MessageHeader from './components/messageHeader';
import MessageLayout from './components/messageLayout';
import SendMessage from './components/sendMessage';
import Checkbox from './components/inputs/checkbox';
export default function Messages() {
  return (
    <div className= "flex gap-x-5 p-6 flex-1 overflow-hidden">
        <div className="flex-[15%]">
<Options />
            </div>


            <div className="flex-[25%] flex flex-col h-full">
                <div className='bg-[#F9F9FA] rounded-lg flex items-center gap-x-4 p-2'>
                    <Checkbox classname='border-[1px] w-[17px] h-[17px] border-[#00000033] rounded'/>
<PiFunnelSimple className="text-lg text-black"/>
                </div>


                <div className={`overflow-y-auto mt-1 py-1 divide-y-[1px] divide-[#0000000A] ${styles.overflow} flex-1 h-[160%] flex flex-col`}>
                    <Chats />
                    </div>
            </div>



            <div className='flex-[60%] flex flex-col gap-y-4'>
               <SelectedChats />
<div className="overflow-y-auto flex flex-col border-[1px]  flex-1 border-[#0000000A] rounded-lg">
<MessageHeader />
<MessageLayout />
<SendMessage />
</div>
            </div>

    </div>
  )
}
