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
import { PiNotePencil } from "react-icons/pi";
import { PiGearSix } from "react-icons/pi";
import { CiSearch } from 'react-icons/ci';
import TextInput from '../../components/inputs/TextInput';
export default function Messages() {
  return (
    <div className= "sm:flex gap-x-5 sm:p-6 py-2 px-4 flex-1 overflow-hidden">
        <div className="flex-[15%] sm:flex hidden">
<Options />
            </div>

            <h1 className = "text-black text-center  font-semibold sm:hidden block mx-auto sm:tracking-normal tracking-[-0.43px] sm:text-sm text-base">Message</h1>
           
            <div className="flex-[25%] flex flex-col h-full">
                <div className='bg-[#F9F9FA] rounded-lg sm:flex hidden items-center gap-x-4 p-2'>
                    <Checkbox classname='border-[1px] w-[17px] h-[17px] border-[#00000033] rounded'/>
<PiFunnelSimple className="text-lg text-black"/>
                </div>
<div className='bg-white rounded-lg p-2 gap-x-4 mt-2 sm:hidden flex items-center'>
<PiNotePencil className='text-lg text-black'/>
<PiGearSix className='text-lg text-black'/>


<div className='bg-[#0000000A] max-w-[160px] ms-auto w-[100%] rounded-lg px-2 py-[6px] gap-x-[6px] flex items-center'>
<CiSearch className='text-lg text-[#00000033]'/>
<TextInput type='text' classname='flex-1 w-[100%]  bg-transparent text-black text-sm outline-0 border-[0px] border-transparent' placeholder='Search'  name={'searchinput'}/>

</div>
</div>

                <div className={`overflow-y-auto  mt-1 py-1 divide-y-[1px] divide-[#0000000A] ${styles.overflow} flex-1 h-[160%] flex flex-col`}>
                    <Chats />
                    </div>
            </div>



            <div className='flex-[60%] hidden sm:flex flex-col gap-y-4'>
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
