'use client'
import React, { useState } from 'react'
import Checkbox from '../../../unit/components/inputs/checkbox'
import Img1 from "../../../../../../../public/contact1.png"
import Image from 'next/image'
import { PiFilePdf } from "react-icons/pi";
import { PiCalendarBlank } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import styles from "../../../dashboard.module.css"
export default function FileHistory() {
const [show, setShow] = useState<number | null>(null)

      const fileHistory = [
            {
    property : "New Porperty #001",
    tenant : "Natali Craig",
    img : Img1,
    file : "Project tech requirements.pdf",
    size: 1.5,
    time : "Just now"
            },{
                property : "New Porperty #001",
                tenant : "Natali Craig",
                img : Img1,
                file : "Project tech requirements.pdf",
                size: 1.5,
                time : "1 hour ago"
                        },{
                            property : "New Porperty #001",
                            tenant : "Natali Craig",
                            img : Img1,
                            file : "Project tech requirements.pdf",
                            size: 1.5,
                            time : "Yesterday"
                                    },
                                    {
                                        property : "New Porperty #001",
                                        tenant : "Natali Craig",
                                        img : Img1,
                                        file : "Project tech requirements.pdf",
                                        size: 1.5,
                                        time : "Just now"
                                                },
            {
      property : "New Porperty #001",
          tenant : "Natali Craig",
          img : Img1,
          file : "Project tech requirements.pdf",
       size: 1.5,
      time : "Feb 24, 2024"
                   }, 
                   {
                    property : "New Porperty #001",
                    tenant : "Natali Craig",
                    img : Img1,
                    file : "Project tech requirements.pdf",
                    size: 1.5,
                    time : "Just now"
                            },{
                                property : "New Porperty #001",
                                tenant : "Natali Craig",
                                img : Img1,
                                file : "Project tech requirements.pdf",
                                size: 1.5,
                                time : "Just now"
                                        },{
                                            property : "New Porperty #001",
                                            tenant : "Natali Craig",
                                            img : Img1,
                                            file : "Project tech requirements.pdf",
                                            size: 1.5,
                                            time : "Just now"
                                                    },{
                                                        property : "New Porperty #001",
                                                        tenant : "Natali Craig",
                                                        img : Img1,
                                                        file : "Project tech requirements.pdf",
                                                        size: 1.5,
                                                        time : "Just now"
                                                                }]
  return (
    <>
    <div className='w-full mt-4 flex flex-col h-[400px]'>


        <div className='flex items-center w-[100%] py-3 border-b-[1px] border-[#0000000A]'>
        <div className='flex-[4%] ps-1'>
        <Checkbox checked ={false} clicked = {()=> null} classname='w-[14px] h-[14px] border-[#00000033] flex justify-center items-center  border-[1px]  rounded' />
        </div>
        
        
        
        <div className='flex-[28%] text-[#00000066] font-[400] text-xs'>
            File
        </div>
        
        
        
        
        <div className='flex-[16%] text-[#00000066] font-[400] text-xs'>
          Tenant  
        </div>
        
        
        
        
        <div className='flex-[20%] text-[#00000066] font-[400] text-xs'>
           Property
        </div>
        
        
        
        
        <div className='flex-[12%] text-[#00000066] font-[400] text-xs'>
           File Size
        </div>
        
        
        
        <div className='flex-[15%] text-[#00000066] font-[400] text-xs'>
            Upload Time
        </div>
        <div className='flex-[5%]'></div>
        </div>



        <div className={`flex flex-col overflow-y-auto ${styles.overflow}`}>
            {fileHistory.map((history, index)=> {
        return <div key = {index} className='flex items-center cursor-pointer py-3  hover:rounded-xl border-b-[1px] border-[#0000000A]'onMouseLeave={()=>  setShow(index)} onMouseEnter={()=> setShow(index)}>
            <div className='flex-[4%] ps-1'>
        <Checkbox checked ={false} clicked = {()=> null} classname='w-[14px] h-[14px]  border-[#00000033] flex justify-center items-center  border-[1px]  rounded' />
        </div>
        
        
        <div className='flex-[28%]  gap-x-1 flex items-center text-black font-[400] text-xs'>
            <PiFilePdf className='p-1 text-black rounded-lg bg-[#EDEEFC] w-[24px] h-[24px]'/>
            {history.file}
        </div>
        
        
        <div className='flex-[16%] text-black font-[400] text-xs flex items-center gap-x-1'>
            <Image src = {history.img} className = "w-[24px] h-[24px] rounded-full" alt = "tenant-img" width={24} height = {24} />
          {history.tenant} 
        </div>
        
        
        <div className='flex-[20%] text-black font-[400] text-xs'>
            {history.property}
        </div>
        
        
        <div className='flex-[12%] text-black font-[400] text-xs'>
           {history.size} MB
        </div>

         <div className='flex-[15%] text-black font-[400] text-xs flex items-center gap-x-1'>
<PiCalendarBlank  className='text-xl'/>
<h1>{history.time}</h1>
            </div>
        <div className='flex-[5%]'>
        <BsThreeDots className={`text-lg ${(show === index) ? "visible":"invisible"} text-black`}/>
        </div>
        </div>
            })}
        </div>
        
        </div>



        <div className='flex items-center gap-x-2 mt-3'>
        <div className='py-1 text-center cursor-pointer flex-1 rounded-lg border-[#0000001A] border-[0.5px] font-[400] text-sm text-black'>
        1
        </div>
        
        
        <div className='py-1 flex-1 text-center cursor-pointer flex-1- rounded-lg border-[#0000001A] border-[0.5px] font-[400] text-sm text-black'>
            2
        </div>
        
        
        
        <div className='py-1 text-center flex-1 cursor-pointer rounded-lg border-[#0000001A] border-[0.5px] font-[400] text-sm text-black'>
           3 
        </div>
        
        
        
        <div className='py-1 text-center flex-1 cursor-pointer rounded-lg border-[#0000001A] border-[0.5px] font-[400] text-sm text-black'>
            4
        </div>
        
        
        
        <div className='py-1 text-center flex-1 cursor-pointer rounded-lg border-[#0000001A] border-[0.5px] font-[400] text-sm text-black'>
            5
        </div>
        
        
        
        <div className='py-1 text-center cursor-pointer rounded-lg border-[#0000001A] border-[0.5px] flex-1'>
        <IoIosArrowBack className='text-black mx-auto text-xl'/>
        </div>
        
        
        
        <div className='py-1 text-center cursor-pointer rounded-lg border-[#0000001A] border-[0.5px] flex-1'>
        <IoIosArrowForward className='text-black mx-auto text-xl'/>
        </div>
        </div>
        </>
  )
}
