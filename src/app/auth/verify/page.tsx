import Button from '@/app/components/Button';
import PinTextInput from '@/app/components/PinTextInput';
import Link from 'next/link';
import React from 'react'
import { MdSmartphone } from "react-icons/md";
export default function Verify() {
  return (
    <div className='w-[100%] py-12'>
<MdSmartphone className='text-6xl mx-auto block text-black'/>
<h1 className = "font-semibold text-2xl mt-5 text-black text-center">Two Step Verification</h1>
<p className='text-[#00000066] text-center mt-1 text-sm fontt-[400]'>Enter the verification code we sent to</p>
<p className='text-black font-semibold text-lg text-center mt-5'>+852 19850622</p>
<p className='text-black font-semibold text-sm text-center mt-5'>Type your 4 digit security code</p>

<PinTextInput
          
          numberOfDigits={4}
         
        />

<Button classname='bg-[#1D3639] max-w-[384px] mx-auto block w-[100%] mt-6 p-2  text-white font-[400] text-base rounded-2xl' text='Submit'/>
<p className='text-[#00000066] text-center mt-5  text-sm font-[400]'>Didn&apos;t get the code ? <Link href="/auth/signin" className='text-[#E3572B]'>Resend</Link> or <Link href="/auth/signin" className='text-[#E3572B]'>Call Us</Link></p>
    </div>
  )
}
