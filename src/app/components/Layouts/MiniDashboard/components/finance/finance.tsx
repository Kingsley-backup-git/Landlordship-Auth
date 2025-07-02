import React from 'react'
import StaticPaymentReceived from './components/paymentRecieved'
import TotalRentDue from './components/totalRentDue'
import StaticOutstanding from './components/outstanding'
import { FiPlus } from 'react-icons/fi'
import MiniExpensetracking from './components/expenseTracking'
import MiniFinancialReport from './components/financialReport'

export default function MiniFinance() {
  return (
    <div className='py-2 px-4 w-[100%]'>
  
  
  <div className='grid lg:grid-cols-3 1md:grid-cols-2 1/2md:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 1sm:grid-cols-2 grid-cols-1  mt-5 sm:gap-5 gap-3'>
  <TotalRentDue />
  <StaticPaymentReceived />
  
  
  <StaticOutstanding />
  
      </div>
  


    <div className='bg-[#212a2cb6]  rounded-2xl p-4 mt-6 flex  gap-x-2'>
          <FiPlus className='text-white sm:min-w-[24px] sm:min-h-[24px] sm:max-w-[24px] max-w-[26px] min-w-[26px] min-h-[26px] w-[100%] h-[100%]'/>
  
          <div>
              <h1 className='text-white font-semibold text-sm'>Auto fee calculation</h1>
              <p className='text-white/40 mt-1 font-[400] text-sm'>Automatically calculate and apply late fees for overdue rent payments</p>
          </div>
          </div>
  
  
      <div className='grid grid-cols-12 gap-4 gap-y-6 mt-6'>
  <MiniExpensetracking />
     
<MiniFinancialReport />
      </div>
  
      </div>
  )
}
