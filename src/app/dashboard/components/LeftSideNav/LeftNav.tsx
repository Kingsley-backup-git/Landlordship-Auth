import Image from 'next/image'
import React from 'react'
import User from "../../../../../public/user.png"
import DashboardList from './dashboard/dashboard'
import PeopleList from './People/people'
import DocList from './Documentation/documentation'
import Logo from "../../../../../public/Logo.png"
export default function LeftNav() {
  return (
    <div className='w-[100%] py-5 flex flex-col h-screen gap-y-6'>
      <div className='flex-1'>
<div className='flex gap-x-3 items-center px-2'>
<Image src = {User} alt = "user" className='w-[24px] h-[24px] rounded-full'/>

<h1 className='text-[#1C1C1C] font-[400] text-sm'>User Name</h1>
</div>

<DashboardList />

<PeopleList />

<DocList />
</div>
<Image src = {Logo} alt = "logo" className='mt-auto mx-auto' width={130} height={130} />
    </div>
  )
}
