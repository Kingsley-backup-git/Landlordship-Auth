'use client'
import Button from '@/app/components/ui/Button'
import React, { useState, useEffect } from 'react'
import styles from "../tools.module.css"
export default function Card() {
  const [currentIndex, setCurrentIndex] = useState(0)

  
    const cards = [
        {
name : "GoCardless",
content : "Simplifying payments with effortless direct debit solutions.",
date : "Jun 11 2024"
        },
        {
          name : "Fixflo",
          content : "Stay on top of repairs, manage issues smoothly, and ensure seamless maintenance tracking.",
          date : "Jun 11 2024"
        },{
          name : "Asana/Slack",
          content : "Manage projects, track tasks, and keep teams aligned effortlessly.",
          date : "Jun 11 2024"
        }
    ]

function scrollHandler(index:number) {
 setCurrentIndex(index)
}
useEffect(()=> {
   const interval = setInterval(()=> {
    if(currentIndex === cards.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(prev => prev + 1)
    }
   }, 3000) 

   return ()=> clearInterval(interval)
})
  return (
    <div className='sm:bg-[#F9F9FA] bg-white p-4 rounded-2xl relative  overflow-hidden '>
{
  cards.map((card, index)=> {
    return <div key = {index} className={`w-[100%] transition ${currentIndex === index ? "opacity-100 block" : "opacity-0 hidden"} ${styles.card}`}>
      <div className={`flex justify-between transition-opacity  duration-[.8s] ease-in-out items-center ${currentIndex === index ? "opacity-100" : "opacity-0"}`}>
        <h1 className="text-sm text-black font-semibold flex-1">{card.name}</h1>


        <div className='flex gap-x-1 items-center absolute top-[20px] right-[20px]'>
          <div className={`text-[#00000033]  rounded-full  ${currentIndex === 0? "bg-black w-[10px] h-[7px]" : "w-[7px] h-[7px] bg-[#00000033]"}`} onClick={()=> scrollHandler(0)}></div>
          <div className={`text-[#00000033] ${currentIndex === 1 ? "bg-black w-[10px] h-[7px]" : "w-[7px] h-[7px] bg-[#00000033]"} rounded-full`} onClick={()=> scrollHandler(1)}></div>
          <div className={`text-[#00000033] ${currentIndex === 2? "bg-black w-[10px] h-[7px]" : "w-[7px] h-[7px] bg-[#00000033]"} rounded-full `} onClick={()=> scrollHandler(2)}></div>
          </div>
        </div>


        <p className='xs:text-sm text-xs mt-4 text-black font-[400]'>{card.content}</p>

        <div className='flex justify-between items-center mt-4'>
          <h1 className='text-[#00000066] text-xs font-[400]'>{card.date}</h1>

          <Button text='Setup' classname='bg-[#0000000A] rounded-lg px-2 py-1 text-xs font-[400] text-black'/>
          </div>
      </div>
  })
}
    </div>
  )
}
