import React from 'react'
import { FiPlus } from "react-icons/fi";
import RadioInput from './components/radioInput';
import { PiMapPin } from "react-icons/pi";
import { PiEnvelopeSimple } from "react-icons/pi";
import { PiPhone } from "react-icons/pi";
import Img1 from "../../../../../../public/user.png"
import Img2 from "../../../../../../public/contact4.png"
import Img3 from "../../../../../../public/Req1015.png"
import Img4 from "../../../../../../public/contact5.png"
import { RiAddLargeLine } from "react-icons/ri";
import Image from 'next/image';
import { FaChevronLeft } from 'react-icons/fa6';
import { PiFunnelSimple } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { PiArrowsDownUp } from "react-icons/pi";
import { BsThreeDots } from 'react-icons/bs';
import Link from 'next/link';
export default function Agents() {
    const agents = [
        {
            name : "Andre Cage",
            email : "andrewcage19547@gmail.com",
            location : "Meadow Lane Oakland",
            img : Img1,
            no : 4100922932903,
            isSelected:true
        },
        {
            name : "Kate Morrison",
            email : "melody@altbox.com",
            img : Img2,
            location : "Larry San Francisco",
            no : 4100922932903,
            isSelected:false
        },
        {
            name : "Drew Cano",
            email : "max@kt.com",
            img : Img3,
            location : "Bagwell Avenue Ocala",
            no : 4100922932903,
            isSelected:false
        },
        {
            name : "Diggs",
            email : "sean@dellito.com",
            img : Img4,
            location : "Washburn Baton Rouge",
            no : 4100922932903,
            isSelected:false
        },
        {
            name : "Andre Cage",
            email : "andrewcage@gmail.com",
            location : "Bagwell Avenue Ocala",
            img : Img1,
            no : 4100922932903,
            isSelected:false
        },

        {
            name : "Andre Cage",
            email : "andrewcage@gmail.com",
            location : "Bagwell Avenue Ocala",
            img : Img2,
            no : +4100922932903,
            isSelected:false
        },
        {
            name : "Andre Cage",
            email : "andrewcage@gmail.com",
            img : Img3,
            location : "Bagwell Avenue Ocala",
            no : +4100922932903,
            isSelected:false
        },
        {
            name : "Andre Cage",
            email : "andrewcage@gmail.com",
            location : "Bagwell Avenue Ocala",
            img : Img4,
            no : +4100922932903,
            isSelected:false
        },
        {
            name : "Andre Cage",
            email : "andrewcage@gmail.com",
            location : "Bagwell Avenue Ocala",
            img : Img1,
            no : +4100922932903,
            isSelected:false
        },
    ]
  return (
    <div className='sm:p-6 py-2 px-4 sm:max-w-[960px] mx-auto w-[100%]'>
        <div className='flex justify-between items-center'>

        <Link href="/dashboard/" className='flex items-center sm:hidden gap-x-[1px]'>
          <FaChevronLeft className='text-[#007AFF] text-lg'/>
          <h1 className='font-[400] sm:text-base text-sm tracking-[-0.43px] text-[#007AFF]'>Home</h1>
          </Link>


            <h1 className='font-semibold sm:text-sm text-base text-black'>Agents</h1>


            <div className = "sm:flex hidden items-center gap-x-1 max-w-fit w-[100%] cursor-pointer">
            <FiPlus className='text-[#00000066] w-[10px] h-[10px]'/>
            <h1 className='text-[#00000066] font-[400] text-sm'>Add Agent</h1>
            </div>


            <BsThreeDots className='text-[#007AFF] text-lg sm:hidden flex'/>
        </div>



<div className='sm:hidden flex gap-x-6 ps-4 pe-4 bg-white rounded-full py-4 items-center my-5'>
<RiAddLargeLine className='text-black  text-lg'/>

<PiFunnelSimple className='text-black  text-lg' />

<PiArrowsDownUp className='text-black  text-lg'/>


<FiSearch className='text-black text-lg ms-auto'/>
</div>



        <div className={`grid grid-cols-11 sm:mt-10 mt-2 gap-y-6 gap-x-4 w-full`}>
<div className='flex flex-col sm:gap-y-6 gap-y-4 sm:col-span-5 col-span-11'>
{agents.map((agent,index)=> {
    return <div className={`sm:bg-[#F9F9FA] break-words w-[100%] text-wrap whitespace-normal xs:flex-row flex-col items-center relative bg-white hover:border-[2px] cursor-pointer transition-[border] ease-in-out duration-100 border-black p-3 xs:p-4 rounded-2xl flex gap-x-4 ${agent.isSelected && "border-[2px]"}`} key={index}>
        {/* <div className="flex xs:flex-row justify-center flex-col items-center xs:gap-x-4"> */}
<Image src={agent.img} className='xs:max-w-[70px] max-w-[60px] self-center w-full xs:h-[70px] h-[60px] rounded-2xl' width={70} height={70} alt='agent-picture' />
       


        <div>
            <h1 className="text-black xs:text-start text-center font-semibold xs:text-base text-sm">{agent.name}</h1>
            <p className="text-[#00000066] text-xs xs:text-start text-center font-[400] mt-[2px] text-break"><PiEnvelopeSimple className='inline-block align-middle'/> <span className='break-words'>{agent.email}</span></p>
            <p className="text-[#00000066] text-xs xs:text-start text-center font-[400] mt-1"><PiMapPin className='inline-block align-middle'/> {agent.location}</p>
            <p className="text-[#00000066] text-xs xs:text-start text-center font-[400] mt-1"><PiPhone className='inline-block align-middle'/> +{agent.no}</p>
            </div>
{/* </div> */}

          {agent.isSelected ?  <RadioInput /> : null}
    </div>
})}
</div>

<div className = "w-[100%] sm:flex hidden col-span-6 ">
<div className='w-full flex flex-col justify-center items-center  h-[454px] bg-[#F9F9FA] sticky top-[40px] rounded-2xl'>
<div className='w-[75px] h-[75px] rounded-xl p-4 bg-[#0000000A]'>

</div>

<h1 className='text-black font-semibold text-sm mt-5'>No property added</h1>
<p className='text-sm text-[#00000066] font-[400] mt-1'>Allocate property</p>
</div>
</div>
        </div>
      
    </div>
  )
}
