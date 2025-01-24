import React from 'react'
import LineChart from './chart/financialOverview'

export default function FinancialOverview() {
  return (
    <div className='sm:bg-[#F9F9FA]  bg-white rounded-2xl py-6 sm:px-6 p-3 items-stretch flex flex-col   col-span-12'>
        <h1 className='font-semibold text-black text-sm'>Financial Overview</h1>

        <LineChart />
        </div>
  )
}
