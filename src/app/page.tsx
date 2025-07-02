'use client'
import Button from "./components/ui/ButtonTwo";
import Navbar from "./components/Layouts/Navbar";
import { HiOutlineChevronRight } from "react-icons/hi";

import MiniDashboard from "./components/Layouts/MiniDashboard/miniDashboard";
import { motion} from "motion/react"
import ThirdSection from "./components/Layouts/LandingPage/thirdSection";
import FirstSection from "./components/Layouts/LandingPage/firstSection";
import Footer from "./components/Layouts/LandingPage/footer";

export default function Home() {
  
  return (
    <div className="bg-black w-full min-h-screen    py-6">
   <Navbar />

   <div className="w-full">
<div className="firstSection pt-[130px] 1md:overflow-x-auto overflow-x-hidden px-4">
  <motion.div 
  initial = {{y:50, opacity: 0}} 
  whileInView={{y:0, opacity:1}}
  viewport={{ once: true }}
  className="sm:max-w-[500px] max-w-[680px] break-words  px-4 block mx-auto w-full  font-medium leading-snug sm:text-[60px] 1sm:text-[50px] text-[45px]  tracking-[-2px] bg-clip-text bg-gradient-to-r text-transparent from-white/100 to-white/5   text-center">Organize Your Entire Portfolio</motion.div>
  {/* <motion.div
   initial = {{y:50, opacity: 0}} 
   whileInView={{y:0, opacity:1, transition:{delay:.3,duration: 2, ease: 'easeInOut'}}}
   viewport={{ once: true }}
   className="max-w-fit px-4 mx-auto relative top-[-8px] leading-snug w-full font-medium sm:text-[60px] 1sm:text-[50px] text-[45px] tracking-[-2px] bg-clip-text bg-gradient-to-r text-transparent from-white/100 to-white/5  text-center">Entire Portfolio</motion.div> */}

  <motion.div
   initial = {{y:50, opacity: 0}} 
   whileInView={{y:0, opacity:1, transition:{delay:.4,duration: 2, ease: 'easeInOut'}}}
   viewport={{ once: true }}
  className="text-[#FFFFFFB2] text-balance leading-[24px] mt-5 block mx-auto text-sm px-4  xs:text-base font-[400]  text-center max-w-[512px] w-full">
  Empowering property managers, landlords, and tenants — supercharging the speed of daily operations and unlocking insights to boost revenue. It&apos;s the future of property management.
  </motion.div>

<motion.div
 initial = {{y:50, opacity: 0, scale:0}} 
 whileInView={{y:0, opacity:1, scale:1, transition:{delay:.5,  type:"spring",duration: 2, ease: 'easeInOut'}}}
 viewport={{ once: true }}
>  <Button classname="bg-[#E3572B] text-base  flex mx-auto border-[1px]  gap-x-3 justify-center shadow-2xl shadow-[#F6F9FF33] xs:py-3 py-2 text-white border-[#FFFFFF33] mt-6 w-full items-center max-w-[220px] rounded-lg"><h1>Add New Property</h1> <HiOutlineChevronRight className="text-xl"/></Button>


</motion.div>

   <motion.div
    initial = {{y:50, opacity: 0}} 
    whileInView={{y:0, opacity:1, transition:{delay:.6,duration: 2, ease: 'easeInOut'}}}
    viewport={{ once: true }}
   >

  
<MiniDashboard type = "overview"/>
</motion.div>
</div>

<FirstSection />

<ThirdSection />

<div className="h-[.5px]  max-w-[650px] w-full text-center mx-auto block mt-[150px] mb-2 bg-gradient-to-r from-[#D9D9D900] via-[#D9D9D9C1] via-65% to-[#D9D9D900] "></div>


<Footer />
   </div>
   </div>
  );
}
