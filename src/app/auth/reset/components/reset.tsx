'use client'
import Button from '@/app/components/ui/Button'
import CheckBox from '@/app/components/ui/checkBox'
import TextInput from '@/app/components/ui/TextInput'
import React,{useState} from 'react'

export default function ResetInputs() {
     const [isShow, setIsShow] = useState(false)
            const showHandler = ()=> {
                setIsShow(val => !val)
            }
  return (
     <div className='max-w-[404px] mx-auto w-full mt-6'>
     <TextInput name = "password" isShow = {isShow} showHandler={showHandler} type={isShow ? "text" : "password"} repeat = {false} placeholder = "Password" classname='bg-transparent p-2 text-sm font-[400] flex-1 placeholder:text-[#00000033] text-black outline-none w-[100%]'/>
  
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
                                 
                                 <Button classname='bg-[#1D3639] mt-6 p-2 w-[100%] text-white font-[400] text-base rounded-2xl' text='Submit'/>
                 
     </div>
  )
}
