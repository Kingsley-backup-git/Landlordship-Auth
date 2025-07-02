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
import Link from 'next/link'
import OverviewT from '../(tenants)/components/overviewT/overviewT'


export default function Overview() {
   const type:string = "landlord"
  return (
    <div className='sm:p-6 py-2 px-4 sm:max-w-[960px] mx-auto w-[100%]'>
<div className='flex sm:block items-center justify-between'>
  <Link href="/dashboard/" className='flex items-center sm:hidden gap-x-[1px]'>
  <FaChevronLeft className='text-[#007AFF] text-lg'/>
  <h1 className='font-[400] sm:text-base text-sm tracking-[-0.43px] text-[#007AFF]'>Home</h1>
  </Link>


  <h1 className = "text-black font-semibold sm:tracking-normal tracking-[-0.43px] sm:text-sm text-base">Overview</h1>


  <BsThreeDots className='text-[#007AFF] text-lg sm:hidden flex'/>
</div>


{type !== "tenant" ?
<>
<div className='grid lg:grid-cols-4 1md:grid-cols-2 1/2md:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 1sm:grid-cols-2 grid-cols-1  mt-5 sm:gap-5 gap-3'>
<Properties />


<Tenants />



<Tenancies />


<Revenue />
    </div>


    <div className='grid grid-cols-12 sm:gap-4 gap-y-6 mt-6'>
<Timeline />

<RecentlyViewed />
  

   
<Maintenance />

<RevenueChart />
    </div>

    <div className='grid grid-cols-12 mt-6'>
<FinancialOverview />
    </div>
    </>
    :

    <div className='w-full'>
    <OverviewT />
   
    </div>
}
    </div>
  )
}
