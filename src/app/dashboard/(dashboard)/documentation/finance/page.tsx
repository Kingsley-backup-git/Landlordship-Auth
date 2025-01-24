'use client'
import React from 'react'
import { FiPlus } from 'react-icons/fi'
import TotalRentDue from './components/totalrentdue'
import PaymentReceived from './components/paymentReceived'
import Outstanding from './components/outgoing'
import Expensetracking from './components/expensetracking'
import FinancialReport from './components/financialReport'
import { FaChevronLeft } from 'react-icons/fa6'
import { BsThreeDots } from 'react-icons/bs'
import ExpenseCategoryChart from './components/expenseCategory'

export default function Finance() {
  return (
    <div className="sm:p-6 py-2 px-4 sm:max-w-[960px] mx-auto w-[100%]">
  <div className='sm:flex hidden justify-between items-center'>
            <h1 className='font-semibold text-sm text-black'>Finance</h1>


            <div className = "flex items-center gap-x-1 max-w-fit w-[100%] cursor-pointer">
            <FiPlus className='text-[#00000066] w-[10px] h-[10px]'/>
            <h1 className='text-[#00000066] font-[400] text-sm'>New Transaction</h1>
            </div>
        </div>




        <div className='flex sm:hidden items-center justify-between'>
          <div className='flex items-center sm:hidden gap-x-[1px]'>
          <FaChevronLeft className='text-[#007AFF] text-lg'/>
          <h1 className='font-[400] sm:text-base text-sm tracking-[-0.43px] text-[#007AFF]'>Home</h1>
          </div>
        
        
          <h1 className = "text-black font-semibold sm:tracking-normal tracking-[-0.43px] sm:text-sm text-base">Finance</h1>
        
        
          <BsThreeDots className='text-[#007AFF] text-lg sm:hidden flex'/>
        </div>


        <div className="grid grid-cols-6 sm:gap-4 gap-3 mt-5">
<TotalRentDue />

<PaymentReceived />

<Outstanding />
        </div>

        <div className='sm:bg-[#F9F9FA] bg-white rounded-2xl p-4 mt-5 flex  gap-x-2'>
        <FiPlus className='text-black sm:min-w-[23px] sm:min-h-[23px] sm:max-w-[23px] max-w-[20px] min-w-[20px] min-h-[20px] w-[100%] h-[100%]'/>

        <div>
            <h1 className='text-black font-semibold text-sm'>Auto fee calculation</h1>
            <p className='text-[#00000066] mt-1 font-[400] text-sm'>Automatically calculate and apply late fees for overdue rent payments</p>
        </div>
        </div>

       

<div className='mt-6 grid grid-cols-12 sm:auto-rows-[336px] gap-y-6  gap-x-4'>
<Expensetracking />
<ExpenseCategoryChart />
</div>


<FinancialReport />

    </div>
  )
}
