'use client'
import Button from '@/app/components/Button'
import TextInput from '@/app/components/TextInput'
import React, { useState } from 'react'
import Link from "next/link"
export default function SigninInputs() {
    const [isShow, setIsShow] = useState(false)
            const showHandler = ()=> {
                setIsShow(val => !val)
            }
  return (
    <div className='max-w-[404px] w-[100%] mt-6'>
    <TextInput name = "email" isShow ={isShow} showHandler={showHandler} repeat = {false} type='email' placeholder = "Email" classname='p-2 bg-transparent text-sm font-[400] flex-1 placeholder:text-[#00000033] text-black outline-none w-[100%]'/>
    <div className='mt-4 w-[100%]'><TextInput name = "password" isShow ={isShow} showHandler={showHandler} type={isShow ? "text" : "password"} repeat= {false} placeholder = "Password" classname='bg-transparent p-2 text-sm font-[400] flex-1 placeholder:text-[#00000033] text-black outline-none w-[100%]'/></div>
        <h1 className='text-end text-[#E3572B] font-[400] text-sm pt-3'>Forgot Password?</h1>
    
      
        
        <Button  classname='bg-[#1D3639] mt-6 p-2 w-[100%] text-white font-[400] text-base rounded-2xl' text='Sign Up'/>
        <p className='text-[#00000066] mt-4 text-center text-sm font-[400]'>Not a Member yet? <Link href="/auth/signup" className='text-[#E3572B]'>Sign Up</Link></p>
        </div>
  )
}
