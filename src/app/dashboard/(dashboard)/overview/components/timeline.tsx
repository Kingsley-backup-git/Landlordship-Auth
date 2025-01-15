import React from 'react'
import Img1 from "../../../../../../public/timelineImg.png"
import Img2 from "../../../../../../public/timelineImg2.png"
import Img3 from "../../../../../../public/timelineImg3.png"
import Image from 'next/image'
import styles from "../../dashboard.module.css"
export default function Timeline() {
    const dates = [{
        day : "SU",
        date : 22
    },
    {
        day : "MO",
        date : 23,
        active : true
    },{
        day : "Tu",
        date : 24
    },{
        day : "We",
        date : 25
    },{
        day : "Th",
        date : 26
    },{
        day : "Fr",
        date : 27
    },{
        day : "Sa",
        date : 28
    },

    ]


    const timeline = [
        {
img : Img1,
req : "New daily task #211",
time : "Just now"
        },
        {
            img : Img2,
            req : "New maintenance request #0389",
            time : "59 minutes ago"
        },
        {
            img : Img3,
            req : "New maintenance request #0389",
            time : "12 hours ago"
        },
        {
            img : Img3,
            req : "New maintenance request #0389",
            time : "12 hours ago"
        },
        {
            img : Img3,
            req : "New maintenance request #0389",
            time : "12 hours ago"
        },
      
        
    ]
  return (
    <div className='bg-[#F9F9FA] rounded-2xl pt-6 px-6 flex flex-col max-h-[272px] h-[100%]'>
<h1 className='text-black font-semibold text-sm'>What&apos;s on the road?</h1>

<div className='grid grid-cols-7 mt-4 gap-4'>
{dates.map((date, index)=> {
    return <div key={index} className={`py-1 cursor-pointer px-2 max-w-fit w-[100%] rounded-lg ${date.active && "bg-black"}`}>
        <h1 className={`text-[#00000066] text-xs font-[400] ${date.active && "text-white"}`}>{date.day}</h1>
        <p className={`font-semibold text-sm text-black ${date.active && "text-white"}`}>{date.date}</p>
        </div>
})}
</div>

<div className={`overflow-y-auto flex flex-col mt-4 ${styles.overflow}`}>
{timeline.map((singletimeline, index)=> {
    return <div key = {index} className='pt-2 flex gap-x-2 ps-2'>
    <div className='flex gap-y-1 flex-col items-center'>
<Image src = {singletimeline.img} className='rounded-full' alt = "" width = {24} height={24}/>
<div className={`w-[1px] h-[14px] ${(timeline.length - 1 === index) && "hidden"} border-[1px] border-[#1C1C1C1A]`}></div>
</div>
<div className='flex-1'>
    <h1 className='text-black font-[400] text-sm'>{singletimeline.req}</h1>
    <p className='text-[#00000066] text-xs font-[400]'>{singletimeline.time}</p>
</div>
</div>
})}
</div>


    </div>
  )
}
