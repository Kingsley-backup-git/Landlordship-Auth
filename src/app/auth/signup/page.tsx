'use client'
import React from 'react'
import AppleButton from './components/appleButton'
import GoogleButton from './components/googleButton'
import TextInput from '@/app/components/TextInput'
import CheckBox from '@/app/components/checkBox'
import Button from '@/app/components/Button'
import Link from 'next/link'
import { useState } from 'react'

export default function Signup() {
    const [isShow, setIsShow] = useState(false)
    const showHandler = ()=> {
        setIsShow(val => !val)
    }
  return (
    <div className='py-10'>
        <h1 className='font-bold text-2xl text-center text-black'>Sign Up</h1>
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
<TextInput isShow ={isShow} showHandler={showHandler} repeat = {false} type='email' placeholder = "Email" name = "email" classname='p-2 bg-transparent text-sm font-[400] flex-1 placeholder:text-[#00000033] text-black outline-none w-[100%]'/>
<div className='mt-4 w-[100%]'><TextInput isShow = {isShow} showHandler={showHandler} type={isShow ? "text" : "password"} name = "password" repeat= {false} placeholder = "Password" classname='bg-transparent p-2 text-sm font-[400] flex-1 placeholder:text-[#00000033] text-black outline-none w-[100%]'/></div>
        

        <div className='flex justify-between mt-4 gap-x-2 items-center'>
        <div className='w-[100%] h-[1px]  border-[2px] border-[#0000001A]'></div>
        <div className='w-[100%] h-[1px]  border-[2px] border-[#0000001A]'></div>
        <div className='w-[100%] h-[1px] border-[2px] border-[#0000001A]'></div>
        <div className='w-[100%] h-[1px] border-[2px] border-[#0000001A]'></div>
        </div>

        <p className='font-[400] text-sm text-[#00000066] mt-3'>Use 8 or more characters with a mix of letters, numbers & symbols.</p>


        <div className='mt-4 w-[100%]'><TextInput name = "password" isShow = {isShow} showHandler={showHandler} type='password' repeat = {true} placeholder = "Password" classname='bg-transparent p-2 text-sm font-[400] flex-1 placeholder:text-[#00000033] text-black outline-none w-[100%]'/></div>
        
        <CheckBox checked = {true} spanText='Terms' spanStyle='text-[#E3572B]' classname='hidden'  textStyle='text-[#00000066] font-[400] text-sm' text='I Accept The'/>
        
        <Button classname='bg-[#1D3639] mt-6 p-2 w-[100%] text-white font-[400] text-base rounded-2xl' text='Sign Up'/>
        <p className='text-[#00000066] mt-3 text-center text-sm font-[400]'>Already have an Account? <Link href="/auth/signin" className='text-[#E3572B]'>Sign In</Link></p>
        </div>

        
        </div>
  )
}
