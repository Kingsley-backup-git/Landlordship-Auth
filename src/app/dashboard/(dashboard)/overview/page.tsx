import React from 'react'
import Properties from './components/properties'
import Tenants from './components/tenants'
import Tenancies from './components/tenancies'
import Revenue from './components/revenue'
import Timeline from './components/timeline'
import RecentlyViewed from './components/recentlyViewed'
import Maintenance from './components/maintenance'


export default function Overview() {
  return (
    <div className='p-6'>
<h1 className = "text-black font-semibold text-sm">Overview</h1>

<div className='grid grid-cols-4 mt-5 gap-5'>
<Properties />


<Tenants />



<Tenancies />


<Revenue />
    </div>


    <div className='grid grid-cols-2 gap-4 mt-6'>
<Timeline />

<RecentlyViewed />
    </div>

    <div className='grid grid-cols-12 gap-4 mt-6'>
<Maintenance />
<div className='col-span-2'>
  
</div>
    </div>

    </div>
  )
}
