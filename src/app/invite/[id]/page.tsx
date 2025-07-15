'use client';

import { use } from 'react';
import Button from '@/app/components/ui/Button'
import TextInput from '@/app/components/ui/TextInput'
import { TenantService } from '@/services/tenant'
import { useQuery } from '@tanstack/react-query'
import { notFound, useRouter } from 'next/navigation'
import React from 'react'
import { FaUserGroup } from "react-icons/fa6";
import MainLoader from '@/app/components/ui/loaders/mainLoader';
import useAcceptInvite from '@/hooks/tenant/useAcceptInvite';
import { RiLoader5Line } from "react-icons/ri";
export default function Invite({params} : { params: Promise<{ id: string }>}) {
  const {push} = useRouter()
const { id } = use(params); 
  const {AcceptInviteMutation, doAcceptInvite} = useAcceptInvite()
  const CheckInviteQuery = useQuery({
    queryKey : ['getInvite'],
    queryFn : async()=>await new TenantService().getInvite(id)
  })
if(!id) {
   notFound()
}
if(CheckInviteQuery?.isLoading) {
 return  <MainLoader />
}

  if(CheckInviteQuery?.isError) {
    notFound()
  }




 
      if(CheckInviteQuery?.isSuccess) 
        {
  return (
    <div className='bg-[#FFFFFF] rounded-2xl  p-6  w-[100%]'>
      {AcceptInviteMutation?.isPending ? <RiLoader5Line className="block mx-auto text-3xl text-black"/> :
      <>
   <h1 className='font-bold text-2xl text-center mb-4 text-black'>{CheckInviteQuery?.data?.status ==="success" ? "Invite Accepted" : "Accept Invite"}</h1>
<div className="flex items-center justify-center">
  <FaUserGroup className="text-4xl text-black"/>

</div>
 <p className="font-[400] py-3 text-sm text-[#00000066] text-center">You&apos;ve been invited by <strong>{CheckInviteQuery?.data?.landlord} </strong>
<br /> Click <q>Accept</q> below to accept and get started</p> 
      <TextInput readOnly value = {CheckInviteQuery?.data?.email}  name="email" repeat={false} type='email' placeholder="Email" classname='p-2 bg-transparent opacity-50 text-sm font-[400] flex-1 placeholder:text-[#00000033] text-black outline-none w-[100%]' isShow={false} showHandler={function (): void {
              throw new Error('Function not implemented.')
          } }/>


      
        
     {CheckInviteQuery?.data?.status ==="pending"   &&   <Button onClick={()=> doAcceptInvite(id)} disabled = {AcceptInviteMutation?.isPending}  type="button"classname={`${AcceptInviteMutation?.isPending || CheckInviteQuery?.data?.status ==="success"  ? "bg-gray-300 cursor-not-allowed pointer-events-none" : "bg-[#1D3639] cursor-pointer"}  mt-6 p-2 w-[100%] text-white font-[400] text-base rounded-2xl`} text={"Accept"}/> }
           {CheckInviteQuery?.data?.status ==="success"   &&   <Button onClick={()=> push("/dashboard/overview")}   type="button"classname={` bg-[#1D3639] cursor-pointer mt-6 p-2 w-[100%] text-white font-[400] text-base rounded-2xl`} text={"Proceed to Dashboard"}/> }
    </>
        }
    </div>
  )
}
}
