'use client'
import React,{useRef} from 'react'
import Image from "next/image";
import Bubbles from "../../../../../public/bubbles.png"
import DocumentationImg from "../../../../../public/documentation.png"
import ComponentImg from "../../../../../public/components.png"
import Courses from "../../../../../public/courses.png"
import { motion } from "motion/react"

import { useScroll, useTransform } from "motion/react";
import { VscArrowRight } from "react-icons/vsc";
export default function ThirdSection() {
  //  const { ref: Ref } = useInView();
  const Ref = useRef(null)
  const RefTwo = useRef(null)
  const RefThree = useRef(null)
  const RefFour = useRef(null)
  //  const { ref: RefTwo } = useInView();
          const {scrollYProgress} = useScroll({target : Ref, offset:["start end", "end start"]})
          const {scrollYProgress:scrollYProgressTwo} = useScroll({target : RefTwo, offset:["start end", "end start"]})
          const {scrollYProgress:scrollYProgressThree} = useScroll({target : RefThree, offset:["start end", "end start"]})
          const {scrollYProgress:scrollYProgressFour} = useScroll({target : RefFour, offset:["start end", "end start"]})
          const rotateX = useTransform(scrollYProgress, [0, .3], ["20deg", "0deg"]);
          const rotateXTwo = useTransform(scrollYProgressTwo, [0, .3], ["20deg", "0deg"]);
          const rotateXThree = useTransform(scrollYProgressThree, [0, .3], ["28deg", "0deg"]);
          const rotateXFour= useTransform(scrollYProgressFour, [0, .3], ["20deg", "0deg"]);
        
  return (
   <div className="relative px-5 section max-w-[1000px] overflow-x-hidden mt-[200px] w-full mx-auto block">
   <div className="h-[.5px]  max-w-[650px] w-full text-center mx-auto block my-3 bg-gradient-to-r from-[#D9D9D900] via-[#D9D9D9C1] via-65% to-[#D9D9D900] "></div>
   
   
   <div className="relative">
   
     <div className="line max-w-fit w-full bg-clip-text block mx-auto bg-gradient-to-r text-transparent from-white/100 to-white/10 text-2xl font-[400] tracking-tighter">Your Landlordship</div>
   
   
     <div className="max-w-fit px-4 block mt-4 mx-auto w-full font-medium text-[50px] tracking-[-2px] bg-clip-text bg-gradient-to-r text-transparent from-white/100 to-white/10   text-center">All in one software for your </div>
     <div className="max-w-fit px-4 mx-auto relative top-[-15px] w-full font-medium text-[50px] tracking-[-2px] bg-clip-text bg-gradient-to-r text-transparent from-white/100 to-white/10  text-center">convenience and efficiency</div>
   </div>
   
   
   <div className="grid 1md:gap-y-10 gap-x-4 gap-y-10 items-stretch 1md:gap-x-8 grid-cols-12 mt-16" style={{perspective:"600px"}}>
    <motion.div className="sm:col-span-4 col-span-12 self-stretch" style={{perspective:"600px"}}>
      
     <motion.div ref = {Ref} style={{rotateX}} className="px-5 pb-5 h-full pt-5 bg-white/5 backdrop-blur-sm  shadow-lg border-[#FFFFFF26]  border-[.5px] rounded-[40px]" >
   <Image src = {Bubbles} className="max-w-[900px] w-full sm:h-auto h-[100px] object-fill" width={900} height={200} alt = "" />
   <div className="bg-gradient-to-r bg-clip-text text-transparent from-white/100 to-white/30 text-lg font-medium my-4">Simplify payment choices</div>
   
   <p className="text-base text-[#FFFFFF99]">Simplify your rent management with flexible payment options, automatic reminders, and early payments.</p>
   
   <div className="border-[1px] rounded-xl border-[#FFFFFF99] mt-8 max-w-fit flex gap-x-4 items-center py-3 md:py-4 px-6">
   <h1 className="text-sm text-[#FFFFFF99] font-medium">Explore Now</h1>
   <VscArrowRight />
   </div>
     </motion.div>
     </motion.div>
   
   
   
     <motion.div ref = {RefFour} style={{rotateX:rotateXFour}} className="sm:col-span-8 col-span-12 px-5 pb-5  pt-4 bg-white/5 backdrop-blur-sm  shadow-lg border-[#FFFFFF26] border-[.5px] rounded-[40px]">
     <div className="bg-gradient-to-r bg-clip-text text-transparent from-white/100 to-white/30 text-lg font-medium my-4">Everything in one easy-to-reach place</div>
     <p className="text-base text-[#FFFFFF99]">  Have the utmost convenience with  a clear overview of all property details, payment status, and upcoming events</p>
   
     <div className="border-[1px] rounded-lg border-[#FFFFFF99] mt-7 max-w-fit flex gap-x-4 items-center py-2 px-6">
   <h1 className="text-sm text-[#FFFFFF99] font-medium">Documentation</h1>
   <VscArrowRight />
   </div>
   <Image src = {DocumentationImg} className="mt-7" width={900} height={200} alt = "" />
   
   
     </motion.div>
   
   
   
     <motion.div ref = {RefTwo} style={{rotateX:rotateXTwo}}  className="sm:col-span-8 col-span-12 px-5 pb-5  pt-5 bg-white/5 backdrop-blur-sm  shadow-lg border-[#FFFFFF26]  border-[.5px] rounded-[40px]">
   <Image src = {ComponentImg} className="max-w-[900px] w-full sm:h-auto h-[100px] object-cover" width={900} height={200} alt = "" />
   <div className="bg-gradient-to-r bg-clip-text text-transparent from-white/100 to-white/30 text-lg font-medium my-4">Easy chat</div>
   
   <p className="text-base text-[#FFFFFF99]">Communicate seamlessly with landlords and agents through integrated channels, without having to leave the platform</p>
   
   <div className="border-[1px] rounded-xl border-[#FFFFFF99] mt-8 max-w-fit flex gap-x-4 items-center py-4 px-6">
   <h1 className="text-sm text-[#FFFFFF99] font-medium">Components</h1>
   <VscArrowRight />
   </div>
     </motion.div>
   
   
   
     <motion.div ref = {RefThree} style={{rotateX:rotateXThree}} className="sm:col-span-4 col-span-12 pt-5 pb-8 px-3 bg-white/5 backdrop-blur-sm  shadow-lg border-[#FFFFFF26]  border-[.5px] rounded-[40px]">
     <div className="bg-gradient-to-r bg-clip-text text-transparent from-white/100 to-white/30 text-lg font-medium my-4">Document without hassle</div>
     <p className="text-base text-[#FFFFFF99] ">Conveniently view and manage important certificates and documents, including EPCs and ASTs.</p>
   
     <div className="border-[1px] rounded-lg border-[#FFFFFF99] mt-7 max-w-fit flex gap-x-4 items-center py-2 px-6">
   <h1 className="text-sm text-[#FFFFFF99] font-medium">Start Course</h1>
   <VscArrowRight />
   </div>
   <Image src = {Courses} className="max-w-[900px] w-full sm:h-auto h-[100px] object-fill mt-7" width={900} height={200} alt = "" />
   
   
     </motion.div>
   
    
   
   </div>
   
   
       </div>
  )
}
