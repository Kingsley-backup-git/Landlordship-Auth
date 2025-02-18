'use client'
import React, { useEffect,useState } from 'react'
import Checkbox from '../../../unit/components/inputs/checkbox'
import Img1 from "../../../../../../../public/contact1.png"
import Image from 'next/image'
import { PiFilePdf } from "react-icons/pi";
import { PiCalendarBlank } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import styles from "../../../dashboard.module.css"
import FileHistoryMobile from './mobileDevices/fileHistory'
export default function FileHistory() {
const [show, setShow] = useState<number | null>(null)
const [indexes, setIndexes] = useState<number[]>([])
const [allChecked, setallChecked] = useState<boolean>(false)
function addIndex(index:number) {
    if(indexes.includes(index)) {
const checked = indexes.filter(val => val !== index)
setIndexes(checked)
    } else {
        setIndexes([...indexes, index])
    }

}

useEffect(()=> {
if(indexes.length < 1 && allChecked) {
    setallChecked(false)
} else if(indexes.length === fileHistory.length) {
    setallChecked(true)
}
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[indexes])

function toggleAll() {
    setallChecked(prev => !prev)
}
  
    
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

     useEffect(()=>  {
    const addAllIndexes = () => {
        if (allChecked) {
        
          const allIndexes = fileHistory.map((_, index) => index);
          setIndexes(allIndexes);
        } else {
        
          setIndexes([]);
        }
        
      };

      addAllIndexes()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[allChecked])
  return (
    <>
     <div className='col-span-12 overflow-auto'>
    <div className='w-full sm:min-w-[900px]  1/2md:min-w-[100%] md:min-w-[900px] 1md:min-w-[970px] min-w-[100%] lg:min-w-[100%]  mt-4 sm:flex hidden flex-col h-[400px] select-none'>


        <div className='flex items-center w-[100%] py-3 border-b-[1px] border-[#0000000A]'>
        <div className='flex-[5%] ps-1'>
        <Checkbox clicked = {()=> toggleAll()} checked ={allChecked} classname={`w-[14px] cursor-pointer h-[14px] border-[#00000033] flex justify-center items-center  border-[1px] ${(allChecked) ? "bg-black" : ""}`} />
        </div>
        
        
        
        <div className='flex-[28%] text-[#00000066] font-[400] text-xs'>
            File
        </div>
        
        
        
        
        <div className='flex-[17%] text-[#00000066] font-[400] text-xs'>
          Tenant  
        </div>
        
        
        
        
        <div className='flex-[20%] text-[#00000066] font-[400] text-xs'>
           Property
        </div>
        
        
        
        
        <div className='flex-[12%] text-[#00000066] font-[400] text-xs'>
           File Size
        </div>
        
        
        
        <div className='flex-[15%] 1md:flex hidden text-[#00000066] font-[400] text-xs'>
            Upload Time
        </div>
        <div className='flex-[5%]'></div>
        </div>



        <div className={`flex flex-col overflow-y-auto  ${styles.overflow}`}>
            {fileHistory.map((history, index)=> {
        return <div key={index}  onClick = {()=> null}  className={`flex z-[-1px]  gap-x-5 items-center cursor-pointer py-3 w-full  hover:rounded-xl border-b-[1px] border-[#0000000A] hover:bg-[#0000000A]`} onMouseLeave={()=>  setShow(null)} onMouseEnter={()=> setShow(index)}>
            <div className='flex-[3%]  w-full ps-1'>
        <Checkbox clicked={()=> addIndex(index)}  checked ={indexes.includes(index) }  classname={`w-[14px] h-[14px] cursor-pointer border-[#00000033] flex justify-center items-center  border-[1px] ${(indexes.includes(index)) ? "bg-black" : ""} rounded`}/>
        </div>
        
        
        <div className='flex-[28%]  gap-x-1 flex items-center text-black font-[400] text-xs'>
            <PiFilePdf className='p-1 text-black rounded-lg bg-[#EDEEFC] w-[24px] h-[24px]'/>
            {history.file}
        </div>
        
        
        <div className='flex-[17%] text-black font-[400] text-xs flex items-center gap-x-1'>
            <Image src = {history.img} className = "w-[24px] h-[24px] rounded-full" alt = "tenant-img" width={24} height = {24} />
          {history.tenant} 
        </div>
        
        
        <div className='flex-[20%] text-black font-[400] text-xs'>
            {history.property}
        </div>
        
        
        <div className='flex-[12%] text-black font-[400] text-xs'>
           {history.size} MB
        </div>

         <div className='flex-[15%] 1md:flex hidden text-black font-[400] text-xs  items-center gap-x-1'>
<PiCalendarBlank  className='text-xl'/>
<h1>{history.time}</h1>
            </div>
        <div className='flex-[5%] '>
        <BsThreeDots  className={`text-lg  ${(show === index) ? "visible":"invisible"} text-black`}   onClick={(event) => {
                event.stopPropagation();
                
              }}/>
        </div>
        </div>
      
            })}
        </div>
        
        </div>

        </div>

        <div className='sm:flex hidden col-span-12 items-center gap-x-2 mt-3'>
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

        <FileHistoryMobile />
        </>
  )
}
