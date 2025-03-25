import React from 'react'
import { PiBugBeetle } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { PiBroadcast } from "react-icons/pi";
export default function MiniNotif() {
  return (
    <div className='w-[100%]'>
    <h1 className='text-white/80 font-[400] text-xs'>Notifications</h1>
    
    <div className={`flex flex-col mt-3 h-[180px] overflow-hidden text-white/85`}>
    <div className='p-2 flex gap-x-2'>
    <PiBugBeetle className='text-xl text-[#1C1C1C] bg-[#E3F5FF] rounded-full p-1'/>
    
    <div className='flex-1'>
        <h1 className='text-white/85 font-[400] text-[11px]'>Bin collection due</h1>
        <p className='text-white/30 text-[9px] font-[400]'>Just now</p>
    </div>
    </div>
    
    
    <div className='p-2 flex gap-x-2'>
    <AiOutlineUser className='text-xl text-[#1C1C1C] bg-[#E5ECF6] rounded-full p-1'/>
    
    <div className='flex-1'>
        <h1 className='text-white/85 font-[400] text-[11px]'>New tenant application</h1>
        <p className='text-white/30 text-[9px] font-[400]'>59 minutes ago</p>
    </div>
    </div>
    
    
    
    
    <div className='p-2 flex gap-x-2'>
    <PiBugBeetle className='text-xl text-[#1C1C1C] bg-[#E3F5FF] rounded-full p-1'/>
    
    <div className='flex-1'>
        <h1 className='text-white/85 font-[400] text-[11px]'>Contractor finished repairs</h1>
        <p className='text-white/30 text-[9px] font-[400]'>12 hours ago</p>
    </div>
    </div>
    
    
    <div className='p-2 flex gap-x-2'>
    <PiBroadcast className='text-xl text-[#1C1C1C] bg-[#E5ECF6] rounded-full p-1'/>
    
    <div className='flex-1'>
        <h1 className='text-white/85 font-[400] text-[11px]'>New repair request</h1>
        <p className='text-white/30 text-[9px] font-[400]'>Today, 11:59 AM</p>
    </div>
    </div>
    
    <div className='p-2 flex gap-x-2'>
    <PiBugBeetle className='text-xl text-[#1C1C1C] bg-[#E3F5FF] rounded-full p-1'/>
    
    <div className='flex-1'>
        <h1 className='text-white/85 font-[400] text-[11px]'>Contractor finished repairs</h1>
        <p className='text-white/30 text-[9px] font-[400]'>12 hours ago</p>
    </div>
    </div>
    
    </div>
        </div>
  )
}
