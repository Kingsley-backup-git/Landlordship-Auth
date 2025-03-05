'use client'
import React from 'react'
import Image from 'next/image'
import Logo from "../../../../../public/LogoWhite.png"
import Link from 'next/link'
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { LuArrowUp } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
export default function Footer() {
   
    function scrollToTop() {
        if (typeof window !== 'undefined')  {
            window.scrollTo({
                top:0,
                behavior:"smooth"
            })
        }
      
    }
  return (
    <>
    <div className="max-w-[1200px]  mx-auto w-full grid grid-cols-12 mt-[150px]">
<div className='col-span-4'>
<Image src = {Logo} alt = "logo" className='' width={170} height={170} />
</div>

<div className='col-span-8 flex  flex-row'>
    <div className="flex flex-col gap-y-8 flex-1">
    <h1 className='text-sm font-medium text-white'>Products</h1> 
<Link href = "#" className='text-[#FFFFFFB2] text-xs'>Courses</Link>
<Link href = "#" className='text-[#FFFFFFB2] text-xs'>Tutorials</Link>
<Link href = "#" className='text-[#FFFFFFB2] text-xs'>Pricing</Link>
    </div>



    <div className="flex flex-col gap-y-8 flex-1">
    <h1 className='text-sm font-medium text-white'>Company</h1> 
<Link href = "#" className='text-[#FFFFFFB2] text-xs'>About Us</Link>
<Link href = "#" className='text-[#FFFFFFB2] text-xs'>Contact Us</Link>

    </div>




    <div className="flex flex-col gap-y-8 flex-1">
    <h1 className='text-sm font-medium text-white'>Resources</h1> 
<Link href = "#" className='text-[#FFFFFFB2] text-xs'>Downloads</Link>
<Link href = "#" className='text-[#FFFFFFB2] text-xs'>Community</Link>

    </div>



    <div className="flex flex-col gap-y-10 flex-1">
    <h1 className='text-sm font-medium text-white'>FOLLOW US</h1> 
    <div className="flex flex-row gap-x-6">
<Link href = "#" className='text-[#FFFFFFB2] text-xs'><RiFacebookBoxLine className="text-white text-lg" /></Link>
<Link href = "#" className='text-[#FFFFFFB2] text-xs'><FaXTwitter  className="text-white text-lg" /></Link>
<Link href = "#" className='text-[#FFFFFFB2] text-xs'><FaInstagram className="text-white text-lg" /></Link>
</div>
    </div>

</div>
    </div>
<div className="flex items-center max-w-[1200px] mt-[100px]  mx-auto w-full">
    <div className='grid grid-cols-12 flex-1'>
<div className="col-span-6">
<h1 className="text-[13px] font-normal text-[#FFFFFFB2]">© 2024 Your Landlorship</h1>
</div>

<div className="col-span-6 flex flex-row items-center">
<Link href = "#" className='text-[#FFFFFFB2] text-xs flex-1'>Terms of Service</Link>
<Link href = "#" className='text-[#FFFFFFB2] text-xs flex-1'>Privacy Policy</Link>
<Link href = "#" className='text-[#FFFFFFB2] text-xs flex-1 flex gap-x-3 items-center'><h1>English</h1> <FaAngleDown className='text-white text-lg'/></Link>
</div>
    </div>
    <LuArrowUp className="text-white text-2xl cursor-pointer" onClick={()=> scrollToTop()}/>
    </div>

    </>
  )
}
