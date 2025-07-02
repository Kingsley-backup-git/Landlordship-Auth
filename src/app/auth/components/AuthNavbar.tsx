
import Image from 'next/image'
import React from 'react'
import Logo from "../../../../public/Logo.png"

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

     <div className='md:flex hidden  items-center'>
       {Links.map((item, index)=> {
        return <Link href={item.href} className='list-none cursor-pointer text-sm text-black leading-[20px] font-[400] px-4' key = {index}>{item.name}</Link>
        
       })}

     </div>

     <div className='flex items-center space-x-4'>
       

 

     </div>
    </div>
  )
}
