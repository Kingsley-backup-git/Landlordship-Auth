'use client'
import React, { useState } from 'react'
import { PiUserFill } from "react-icons/pi";
import TextField from '../create/components/form/TextField';
import PhoneInput from './components/form/PhoneInput';
import Button from '@/app/components/ui/ButtonTwo';
interface tenantProps {
    firstname: string; 
    lastname:string;
     email: string 
}
export default function StepFour({header, closeFormHandler, addNewTenants}:{header:string, closeFormHandler : ()=>void, addNewTenants:(payload:{ firstname: string; lastname:string; email: string;})=>void}) {
    const [tenant, setTenant] = useState<tenantProps>({
        firstname: '',
        lastname: '',
        email: '',
      })
  return (
    <div className='sm:p-6 py-2 px-4  sm:max-w-[960px] mx-auto w-[100%]'>
       <h1 className = "text-black  font-semibold sm:flex hidden text-sm">{header}</h1>


       <div className="mt-16 block mx-auto max-w-[400px] w-full">
<PiUserFill className='text-black text-6xl bg-[#0000000A] rounded-full p-[12px]'/>
<div className='grid grid-cols-2 gap-4 mt-6'>
<TextField onChange = {(e)=> setTenant({...tenant, firstname:e.target.value})} className="border-[.5px] border-[#0000001A] py-3 px-4 rounded-2xl bg-[#FFFFFFCC]" text="" type="text" placeholder = "First Name"/>
<TextField onChange = {(e)=> setTenant({...tenant, lastname:e.target.value})} className="border-[.5px] border-[#0000001A] py-3 px-4 rounded-2xl bg-[#FFFFFFCC]" text="" type="text" placeholder = "Last Name"/>

<TextField onChange = {(e)=> setTenant({...tenant, email:e.target.value})} className="border-[.5px] col-span-2 border-[#0000001A] py-3 px-4 rounded-2xl bg-[#FFFFFFCC]" text="Email" type="email" placeholder = "Please enter your email address."/>


<TextField className="border-[.5px] col-span-2 border-[#0000001A] py-3 px-4 rounded-2xl bg-[#FFFFFFCC]" text="Company name" type="text" placeholder = "Company name"/>

<PhoneInput className="border-[.5px] col-span-2 border-[#0000001A] py-3 px-4 rounded-2xl bg-[#FFFFFFCC]" text="Phone" type="tel" placeholder = ""/>



</div>


<div className="flex items-center gap-x-4 mt-6 w-full">
<Button classname='bg-[#0000000A] flex-1 items-center  w-full rounded-xl py-2 px-4' onClick={closeFormHandler}>

  <h1 className="text-sm font-[400] text-black">Cancel</h1>
</Button>

<Button classname='bg-[#1D3639]  items-center flex-1 w-full rounded-xl py-2 px-4' onClick={()=> addNewTenants(tenant)}>

  <h1 className="text-sm font-[400] text-white">Save</h1>

</Button>
</div>
       </div>
       </div>
  )
}
