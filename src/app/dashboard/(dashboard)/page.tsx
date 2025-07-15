// import Image from 'next/image'
import React from 'react'
import MobileHome from '../components/Home/mobile/home'
import { PiIdentificationCardDuotone } from 'react-icons/pi'
import DashboardImage from "../../../../public/Overview22 1.svg"
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiUserPlusDuotone } from "react-icons/pi";
import Image from 'next/image';
import UserProvider from '@/app/components/Providers/UserProvider';

export default function Dashboard() {
  return (
    <>
    <UserProvider>
    <div className='sm:p-6 py-2 px-4 sm:block hidden sm:max-w-[960px] mx-auto w-[100%]'>
<h1 className='font-semibold text-2xl text-[#1C1C1C]'>Welcome to YourLandlordship</h1>
<p className='font-[400] text-[15px] text-[#1C1C1C] pt-1'>Getting started is very easy</p>

<div className='mt-8'>
  <h1 className='fot-[400] text-sm text-[#1C1C1C]'>You&apos;re almost there! Let&apos;s get started.</h1>

<div className='bg-[#0000000D] mt-1 w-[100%] rounded-lg relative  h-[28px]'>
  <div className='h-[100%] w-[14px] bg-[#E3572BCC]  rounded-l-lg'>
<h1 className='text-[#1C1C1C] font-semibold text-lg absolute text-center left-[0px] right-[0px]'>0%</h1>
  </div>
</div>

</div>

<div className='mt-10 grid grid-cols-2 w-[100%] gap-4 items-stretch'>
  <div className='flex-col col-span-1 gap-y-3 flex'>
<div className='bg-[#F7F9FB] p-4 flex gap-x-2 w-[100%] max-w-[278px] rounded-2xl'>

<HiOutlineBuildingOffice2 className='text-[#1C1C1C] text-2xl'/>
<div>
  <h1 className='font-semibold text-sm text-[#1C1C1C]'>Create Property</h1>
  <p className='text-[#00000066] font-[400] text-sm'>Add a new property for easy management.</p>
</div>
</div>





<div className='bg-[#F7F9FB] p-4 flex gap-x-2 w-[100%] max-w-[278px] rounded-2xl'>

<PiUserPlusDuotone className='text-[#1C1C1C] text-2xl'/>
<div>
  <h1 className='font-semibold text-sm text-[#1C1C1C]'>Create Tenant</h1>
  <p className='text-[#00000066] font-[400] text-sm'>Add tenant details for easy management.</p>
</div>
</div>






<div className='bg-[#F7F9FB] p-4 flex gap-x-2 w-[100%] max-w-[278px] rounded-2xl'>

<PiIdentificationCardDuotone className='text-[#1C1C1C] text-2xl'/>
<div>
  <h1 className='font-semibold text-sm text-[#1C1C1C]'>Create Tenancy</h1>
  <p className='text-[#00000066] font-[400] text-sm'>Link property to a tenant for easy management</p>
</div>
</div>
  </div>


  <div className='col-span-1'>
  

  <Image src = {DashboardImage} className='w-full h-[100%]' width={800} height={800} alt="dashboard-img"/>
  

</div>

</div>
</div>


<MobileHome />
</UserProvider>
    </>
  )
}
