'use client'
import React, { useState } from 'react'
import AppleButton from '../signup/components/appleButton'
import GoogleButton from '../signup/components/googleButton'
import TextInput from '@/app/components/TextInput'

import Button from '@/app/components/Button'
import Link from 'next/link'

export default function SignIn() {
       const [isShow, setIsShow] = useState(false)
        const showHandler = ()=> {
            setIsShow(val => !val)
        }
  return (
    <div className='py-12 max-w-[404px] w-[100%]'>
    <h1 className='font-bold text-2xl text-center text-black'>Sign In</h1>
    <p className='font-[400] pt-2 text-sm text-[#00000066] text-center'>Your Social Campaigns</p>

    <div className='flex gap-x-4 items-center mt-6 max-w-[404px] w-[100%]'>
<AppleButton classname='flex flex-1 items-center gap-x-2 px-4 py-2 rounded-xl border-[1px] bg-transparent text-black border-[#0000001A] text-sm font-[400]' text='Sign in with Apple'/>
   
<GoogleButton classname='flex flex-1 items-center gap-x-2 px-4 py-2 rounded-xl border-[1px] bg-transparent text-black border-[#0000001A] text-sm font-[400]' text='Sign in with Google'/>
   </div>
    
    <div className='flex mt-6 items-center max-w-[404px] justify-around w-[100%] gap-x-4'>
<div className='max-w-[126px] w-[100%] h-[1px] border-[.5px] border-[#0000001A]'></div>
<h1 className='font-[400] text-xs text-[#00000066]'>or with Email</h1>
<div className='max-w-[126px] w-[100%] h-[1px] border-[1px] border-[#0000001A]'></div>
    </div>

    <div className='max-w-[404px] w-[100%] mt-6'>
<TextInput name = "email" isShow ={isShow} showHandler={showHandler} repeat = {false} type='email' placeholder = "Email" classname='p-2 bg-transparent text-sm font-[400] flex-1 placeholder:text-[#00000033] text-black outline-none w-[100%]'/>
<div className='mt-4 w-[100%]'><TextInput name = "password" isShow ={isShow} showHandler={showHandler} type={isShow ? "text" : "password"} repeat= {false} placeholder = "Password" classname='bg-transparent p-2 text-sm font-[400] flex-1 placeholder:text-[#00000033] text-black outline-none w-[100%]'/></div>
    <h1 className='text-end text-[#E3572B] font-[400] text-sm pt-3'>Forgot Password?</h1>

  
    
    <Button  classname='bg-[#1D3639] mt-6 p-2 w-[100%] text-white font-[400] text-base rounded-2xl' text='Sign Up'/>
    <p className='text-[#00000066] mt-4 text-center text-sm font-[400]'>Not a Member yet? <Link href="/auth/signup" className='text-[#E3572B]'>Sign Up</Link></p>
    </div>

    
    </div>
  )
}
