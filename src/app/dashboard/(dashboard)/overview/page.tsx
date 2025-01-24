import React from 'react'
import Properties from './components/properties'
import Tenants from './components/tenants'
import Tenancies from './components/tenancies'
import Revenue from './components/revenue'
import Timeline from './components/timeline'
import RecentlyViewed from './components/recentlyViewed'
import Maintenance from './components/maintenance'
import { BsThreeDots } from 'react-icons/bs'
import { FaChevronLeft } from "react-icons/fa6";
import RevenueChart from './components/revenueChart'
import FinancialOverview from './components/financialOverview'


export default function Overview() {
  return (
    <div className='sm:p-6 py-2 px-4 sm:max-w-[960px] mx-auto w-[100%]'>
<div className='flex sm:block items-center justify-between'>
  <div className='flex items-center sm:hidden gap-x-[1px]'>
  <FaChevronLeft className='text-[#007AFF] text-lg'/>
  <h1 className='font-[400] sm:text-base text-sm tracking-[-0.43px] text-[#007AFF]'>Home</h1>
  </div>


  <h1 className = "text-black font-semibold sm:tracking-normal tracking-[-0.43px] sm:text-sm text-base">Overview</h1>


  <BsThreeDots className='text-[#007AFF] text-lg sm:hidden flex'/>
</div>

<div className='grid grid-cols-4  mt-5 sm:gap-5 gap-3'>
<Properties />


<Tenants />



<Tenancies />


<Revenue />
    </div>


    <div className='grid lg:grid-cols-2 grid-cols-1 sm:gap-4 gap-y-6 mt-6'>
<Timeline />

<RecentlyViewed />
    </div>

    <div className='grid grid-cols-12 sm:gap-4 gap-y-6 mt-6'>
<Maintenance />

<RevenueChart />
    </div>

    <div className='grid grid-cols-12 mt-6'>
<FinancialOverview />
    </div>

    </div>
  )
}
