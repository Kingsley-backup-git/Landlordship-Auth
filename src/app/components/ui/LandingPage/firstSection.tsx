'use client'
import React,{useRef} from 'react'
import MiniDashboard from '../MiniDashboard/miniDashboard'
import { HiOutlineChevronRight } from "react-icons/hi";
import Button from '../ButtonTwo';
import { motion} from "motion/react"
import { useInView } from 'react-intersection-observer';
import { useScroll, useTransform } from "motion/react";
export default function FirstSection() {
    const myRef = useRef(null); 
    const { ref: inViewRef, inView: myElementIsVisible } = useInView();
    const { ref: myRefTwo, inView: secondElementIsVisible } = useInView();
    const { ref: myRefThree, inView: ThirdElementIsVisible } = useInView();
    const {scrollYProgress} = useScroll({target : myRef,offset: ["start end", "end start"]})
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const setRef =(node: Element | null | undefined | any) => {
inViewRef(node)
myRef.current = node
    }
    const rotateX = useTransform(scrollYProgress, [0, .1], ["10deg", "0deg"]);
   
    const steps = [
        {header:"Centralized",
            content : "With your data centralised in one platform, easily track all properties, payments, reports, schedules to maximise productivity and time."
        },
        {header:"Integrated",
            content : "Boasting a tech stack that matches how you operate with best-in-cless integrations and services all within the platform"
        },
        {header:"Effortless",
            content : "Intuitive, easy-to-use design translates across devices, making every interaction feel effortless for landlords, agents & tenants - anytime and anywhere"
        },
    ]
  return (
    <div className="mt-[200px] max-w-[1200px] w-full block mx-auto ">
        <div className="w-[600px] z-[9999999999]  sticky-element  sticky top-[150px]">
<h1 className="font-medium text-[55px] text-balance leading-[60px] text-[#FFFFFF80]"><span className="text-white">One</span> platform for your entire portfolio</h1>

<div className="flex flex-col gap-y-8 mt-14">
    {steps.map((item, index)=> {
        return <div key = {index} className={`${(myElementIsVisible && index === 0 || secondElementIsVisible && index === 1 || ThirdElementIsVisible && index === 2) ? "step-text" : ""} duration-400 ease-in-out transition-all ps-3`}>
            <h1 className={`${myElementIsVisible && index === 0 ? "text-white/90" : secondElementIsVisible && index === 1 ? "text-white/90" : ThirdElementIsVisible && index === 2 ? "text-white/90" : "text-white/20"}  text-lg font-medium transition-colors duration-400 ease-in-out`}>{item.header}</h1>
            <p className={`${myElementIsVisible && index === 0 ? "text-white/60" : secondElementIsVisible && index === 1 ? "text-white/60" :  ThirdElementIsVisible && index === 2 ? "text-white/60" :"text-white/20"} text-sm leading-6 mt-2 font-normal transition-colors duration-400 ease-in-out`}>{item.content}</p>
            </div>
    })}
</div>
<Button classname="bg-[#E3572B]  flex justify-center border-[1px]  gap-x-3  shadow-2xl shadow-[#F6F9FF33] py-2 text-white border-[#FFFFFF33] mt-8 w-full items-center max-w-[230px] rounded-lg"><h1 className="text-sm font-medium text-white">Add New Properrty</h1> 
<HiOutlineChevronRight className="text-xl"/></Button>
</div>
    <div className='secondSection  z-[-1] translate-y-[-630px]'>
        
<motion.div className='translate-x-[50%] transform ' style={{perspective : "500px",  transformStyle: "preserve-3d"}} >
    <motion.div className='' ref={setRef}  style={{rotateX}}>
    <MiniDashboard type = "finance"/>
    </motion.div>
</motion.div>
</div>

<div className='secondSection  z-[-1] translate-y-[-350px]'>
        
<div className='translate-x-[45%] transform ' ref = {myRefTwo}>
    <MiniDashboard type = "finance"/>
</div>
</div>




<div className='secondSection  z-[-1] translate-y-[0px]'>
        
<div className='translate-x-[45%] transform' ref = {myRefThree}>
    <MiniDashboard type = "finance"/>
</div>
</div>

    </div>

  )
}
