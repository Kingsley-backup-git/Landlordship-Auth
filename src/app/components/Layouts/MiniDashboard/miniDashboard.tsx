'use client'
import React from 'react'
import MiniLeftNav from './components/miniLeftNav/miniLeftNav'
import MiniTopNav from './components/miniTopNav/miniTopNav'
import MiniRightNav from './components/miniRightNav/miniRightNav'
import { Canvas } from '@react-three/fiber'
import {Stars} from "@react-three/drei"
import MiniOverview from './components/overview/overview'
import FiftyPercent from "../../../../../public/50PercentImg.png"
import NintyEightPercent from "../../../../../public/98PercentImg.png"
import Image from 'next/image'
import MiniFinance from './components/finance/finance'


export default function MiniDashboard({type}:{type:string}) {
 
  return (
    <div className={`  max-w-[1000px] transform scale-[.95] hover:scale-[1] transition-transform duration-500 ease-in-out border-[1px] rounded-[30px] border-white/10 w-full mx-auto backdrop-blur-2xl sm:mt-8 mt-5 bg-white/5 ${type=== "overview" ? "h-[711px]" : "h-[800px]"} border-r-[.5px] flex relative`}>
      <Image src={FiftyPercent} className='absolute bottom-3 left-[-88px] z-[99999]' alt='' width={160} height={160} />
      <Image src={NintyEightPercent} className='absolute top-0 right-[-88px] z-[99999]' alt='' width={160} height={160} />
        <div className="absolute inset-0 z-[0px]">
<Canvas>
<Stars radius={100} depth={500} count={550} factor={4}  fade/>
</Canvas>
        </div>
    <div className={`min-w-[160px]  max-w-[160px] w-[100%] transition-all duration-100 ease-in-out sm:flex  hidden  px-3 overflow-hidden h-full  sticky top-0 border-r-[.5px] border-white/10`}>
<MiniLeftNav />
    </div>

    <div className="flex-1 w-[100%]  overflow-y-hidden py-4 relative" >
        <MiniTopNav />
        {type === "overview" ? 
    <MiniOverview />
    : <MiniFinance />}

    
    </div>
     

    <div className={`min-w-[170px] max-w-[170px]  w-[100%] 1md:flex  hidden px-4  overflow-hidden h-full sticky top-0 border-l-[.5px] border-white/10`}>
<MiniRightNav />
</div>
 
        
      
      
   
    </div>
  )
}
