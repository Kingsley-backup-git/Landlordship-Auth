import Button from '@/app/components/ui/Button'
import TextInput from '@/app/components/ui/TextInput'
import Link from 'next/link'
import React from 'react'

export default function Forgot() {
  return (
    <div className="w-full">
        <h1 className="text-xl font-semibold text-center text-black">Forgot Password ?</h1>

        <p className="font-[400] text-xs text-center text-[#00000066] mt-1">Enter your email to reset your password.</p>
<div className='max-w-[395px] w-[100%] mx-auto mt-6'>
<TextInput isShow ={false} showHandler={()=> null} repeat = {false} type='email' placeholder = "Please enter your email address" name = "email" classname='p-2 bg-transparent text-sm font-[400] flex-1 placeholder:text-[#00000033] text-black outline-none w-[100%]'/>
</div>


            <Button classname='max-w-[395px] w-full mx-auto block rounded-xl bg-black py-2 px-4 mt-6 text-white' text='Submit'/>

            <Link href = "" className='max-w-fit w-full text-[#9F9FF8] mx-auto block mt-6 text-sm font-[400]'>
                Back
            </Link>
    </div>
  )
}
