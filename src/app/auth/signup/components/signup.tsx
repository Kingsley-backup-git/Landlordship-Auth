'use client'
import Button from '@/app/components/ui/Button'
import CheckBox from '@/app/components/ui/checkBox'
import TextInput from '@/app/components/ui/TextInput'
import Link from 'next/link'
import React, { useState } from 'react'

export default function SignUpInputs() {
    const [isShow, setIsShow] = useState(false)
        const showHandler = ()=> {
            setIsShow(val => !val)
        }
  return (
    <div className='max-w-[404px] w-[100%] mt-6'>
    <TextInput isShow ={isShow} showHandler={()=> null} repeat = {false} type='email' placeholder = "Email" name = "email" classname='p-2 bg-transparent text-sm font-[400] flex-1 placeholder:text-[#00000033] text-black outline-none w-[100%]'/>
    <div className='mt-4 w-[100%]'><TextInput isShow = {isShow} showHandler={showHandler} type={isShow ? "text" : "password"} name = "password" repeat= {false} placeholder = "Password" classname='bg-transparent p-2 text-sm font-[400] flex-1 placeholder:text-[#00000033] text-black outline-none w-[100%]'/></div>
            
    
            <div className='flex justify-between mt-4 gap-x-2 items-center'>
            <div className='w-[100%] h-[1px]  border-[2px] border-[#0000001A]'></div>
            <div className='w-[100%] h-[1px]  border-[2px] border-[#0000001A]'></div>
            <div className='w-[100%] h-[1px] border-[2px] border-[#0000001A]'></div>
            <div className='w-[100%] h-[1px] border-[2px] border-[#0000001A]'></div>
            </div>
    
            <p className='font-[400] text-sm text-[#00000066] mt-3'>Use 8 or more characters with a mix of letters, numbers & symbols.</p>
    
    
            <div className='mt-4 w-[100%]'>
                <TextInput name = "password" isShow = {isShow} showHandler={showHandler} type='password' repeat = {true} placeholder = "Password" classname='bg-transparent p-2 text-sm font-[400] flex-1 placeholder:text-[#00000033] text-black outline-none w-[100%]'/>
                </div>
            
            <CheckBox checked = {true} spanText='Terms' spanStyle='text-[#E3572B]' classname='hidden'  textStyle='text-[#00000066] font-[400] text-sm' text='I Accept The'/>
            
            <Button classname='bg-[#1D3639] mt-6 p-2 w-[100%] text-white font-[400] text-base rounded-2xl' text='Sign Up'/>
            <p className='text-[#00000066] mt-3 text-center text-sm font-[400]'>Already have an Account? <Link href="/auth/signin" className='text-[#E3572B]'>Sign In</Link></p>
            </div>
  )
}
