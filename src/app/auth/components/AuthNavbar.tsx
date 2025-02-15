
import Image from 'next/image'
import React from 'react'
import Logo from "../../../../public/Logo.png"
import Button from '@/app/components/ui/Button'
import Link from 'next/link'

export default function AuthNavbar() {
    
    const Links = [
        {
name : "Product",
href : "/"
        }, {
name : "Solutions",
href : "/"
        }, {
name : "Resources",
href : "/"
        }, {
name : "Download",
href : "/"
        },
        {
            name : "Pricing",
            href : "/"
                    },
    ]
  return (
    <div className='flex justify-between items-center'>
     <Image alt = "logo-image" src = {Logo} width={150} height={150}  />

     <div className='lg:flex hidden  items-center'>
       {Links.map((item, index)=> {
        return <Link href={item.href} className='list-none cursor-pointer text-sm text-black leading-[20px] font-[400] px-4' key = {index}>{item.name}</Link>
        
       })}

     </div>

     <div className='flex items-center space-x-4'>
<Link href = "/auth/signup" className='max-w-fit w-[100%]'><Button text = "Sign up"  classname = "text-black font-medium text-sm px-3 py-2 bg-[#0000000A] rounded-xl"/></Link>
<Link href = "/auth/signin" className='max-w-fit w-[100%]'><Button text = "Sign in"  classname = "text-white px-3 font-medium text-sm py-2 bg-[#1D3639] rounded-xl"/></Link>
     </div>
    </div>
  )
}
