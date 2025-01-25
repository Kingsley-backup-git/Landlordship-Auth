'use client'
import React from 'react'
import styles from "../../../dashboard.module.css"

import dynamic from 'next/dynamic';

const DonutChart = dynamic(() => import('./charts/expenseCategory'), { ssr: false });

export default function ExpenseCategoryChart() {
  return (
    <div className='sm:bg-[#F9F9FA] sm:order-last order-first sm:mt-0  flex flex-col  bg-white rounded-2xl sm:py-6 sm:px-6 p-4   sm:col-span-3 col-span-12'>

<h1 className='font-semibold text-black text-sm '>Expense Category</h1>
<div className='flex sm:flex-col flex-row items-center mt-1 overflow-auto flex-1  gap-x-4'>
<div className="flex">
        <DonutChart />
        </div>
        <div className={`flex flex-col overflow-y-auto overflow-x-auto h-[105px] max-w-[200px] mx-auto w-[100%]  sm:mt-1 gap-x-2 gap-y-3   ${styles.overflow}`}>
<div className='flex justify-between items-center gap-x-4'>
    <div className='flex gap-x-1 items-center'>
 <div className={`w-[5px] h-[5px] rounded-full bg-black`}></div>
    <h1 className='text-xs font-[400] text-black'>Direct</h1>
    </div>

    <h1 className='text-xs font-[400] text-black'>$200.56</h1>
</div>



<div className='flex justify-between items-center gap-x-4'>
    <div className='flex gap-x-1 items-center'>
 <div className={`w-[5px] h-[5px] rounded-full bg-[#94E9B8]`}></div>
    <h1 className='text-xs font-[400] text-black'>Affiliate</h1>
    </div>

    <h1 className='text-xs font-[400] text-black'>$180.16</h1>
</div>



<div className='flex justify-between items-center gap-x-4'>
    <div className='flex gap-x-1 items-center'>
 <div className={`w-[5px] h-[5px] rounded-full bg-[#94E9B8]`}></div>
    <h1 className='text-xs font-[400] text-black'>Sponsored</h1>
    </div>

    <h1 className='text-xs font-[400] text-black'>$78.02</h1>
</div>










<div className='flex justify-between items-center gap-x-4'>
    <div className='flex gap-x-1 items-center'>
 <div className={`w-[5px] h-[5px] rounded-full bg-[#94E9B8]`}></div>
    <h1 className='text-xs font-[400] text-black'>Overdue</h1>
    </div>

    <h1 className='text-xs font-[400] text-black'>$6.2</h1>
</div>

<div className='flex justify-between items-center'>
    <div className='flex gap-x-1 items-center'>
 <div className={`w-[5px] h-[5px] rounded-full bg-[#94E9B8]`}></div>
    <h1 className='text-xs font-[400] text-black'>Overdue</h1>
    </div>

    <h1 className='text-xs font-[400] text-black'>$6.2</h1>
</div>

<div className='flex justify-between items-center gap-x-4'>
    <div className='flex gap-x-1 items-center'>
 <div className={`w-[5px] h-[5px] rounded-full bg-[#94E9B8]`}></div>
    <h1 className='text-xs font-[400] text-black'>Overdue</h1>
    </div>

    <h1 className='text-xs font-[400] text-black'>$6.2</h1>
</div>



        </div>
        </div>
        </div>
  )
}

