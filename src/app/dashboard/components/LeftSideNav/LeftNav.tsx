'use client'
import Image from 'next/image'
import React from 'react'
import User from "../../../../../public/user.png"
import DashboardList from './dashboard/dashboard'
import PeopleList from './People/people'
import DocList from './Documentation/documentation'
import Logo from "../../../../../public/Logo.png"
import { useMyContext } from '@/context/NavProvider'
import { useQuery } from '@tanstack/react-query'
import { UserService } from '@/services/user'
export default function LeftNav() {
  const type:string = "landlord"
  const userQuery = useQuery({
    queryKey : ['user'],
    queryFn : async ()=> await new UserService().getUser()
  })
  const {leftNav} = useMyContext()
  return (
    <div className='w-[100%] py-5 flex flex-col h-screen gap-y-6 '>
      <div className='flex-1'>
<div className={`flex gap-x-3 items-center truncate ${!leftNav && "justify-center"} px-2`}>
<Image src = {User} alt = "user" className='w-[24px] h-[24px] rounded-full'/>

{(leftNav && userQuery.isSuccess) ? <h1 className='text-[#1C1C1C] font-[400] text-sm'>{userQuery?.data?.data?.email}</h1> : null }
</div> 

<DashboardList leftNav = {leftNav}/>

{type !== "tenant" && <PeopleList leftNav = {leftNav}/> }

{type !== "tenant" &&  <DocList leftNav = {leftNav}/> }
</div>
<Image src = {Logo} alt = "logo" className='mt-auto mx-auto' width={130} height={130} />
    </div>
  )
}
