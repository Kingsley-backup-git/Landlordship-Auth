'use client'
import Button from '@/app/components/ui/Button'
import TextInput from '@/app/components/ui/TextInput'
import React, { useState } from 'react'
import Link from "next/link"
import AuthValidation from '@/utils/formik/auth'
export default function SigninInputs() {
    const [isShow, setIsShow] = useState(false)
    const [loading, setLoading] = useState(false)
     function handleLoader(val:boolean) {
            setLoading(val)
        }
            const showHandler = ()=> {
                setIsShow(val => !val)
            }
            const {loginFormik} = AuthValidation(handleLoader)
                 function submitHandler() {
loginFormik.handleSubmit()

        }
        const disabled = loading
  return (
    <div className='max-w-[404px] w-[100%] mt-6'>
    <TextInput error = {loginFormik.errors.email} touched = {loginFormik.touched.email} onBlur = {loginFormik.handleBlur} onChange = {loginFormik.handleChange} name = "email" isShow ={isShow} showHandler={showHandler} repeat = {false} type='email' placeholder = "Email" classname='p-2 bg-transparent text-sm font-[400] flex-1 placeholder:text-[#00000033] text-black outline-none w-[100%]'/>
    <div className='mt-4 w-[100%]'>
      <TextInput error = {loginFormik.errors.password} touched = {loginFormik.touched.password} onBlur = {loginFormik.handleBlur} onChange = {loginFormik.handleChange} name = "password" isShow ={isShow} showHandler={showHandler} type={isShow ? "text" : "password"} repeat= {false} placeholder = "Password" classname='bg-transparent p-2 text-sm font-[400] flex-1 placeholder:text-[#00000033] text-black outline-none w-[100%]'/></div>
        <Link href = "/auth/forgot" className='text-end ms-auto block max-w-fit  text-[#E3572B] font-[400] text-sm pt-3'>Forgot Password?</Link>
    
      
        
        <Button onClick={()=> {
                submitHandler()
                }}  type="button" disabled={disabled} classname={`  ${Object.keys(loginFormik.errors).length > 0 ||  disabled  ? "bg-gray-400 cursor-not-allowed" : "bg-[#1D3639] cursor-pointer"} mt-6 p-2 w-[100%] text-white font-[400] text-base rounded-2xl`} text='Sign In'/>
        <p className='text-[#00000066] mt-4 text-center text-sm font-[400]'>Not a Member yet? <Link href="/auth/signup" className='text-[#E3572B]'>Sign Up</Link></p>
        </div>
  )
}
