import React from 'react'
import { FiPlus } from 'react-icons/fi'
import TotalRentDue from './components/totalrentdue'
import PaymentReceived from './components/paymentReceived'
import Outstanding from './components/outstanding'
import Expensetracking from './components/expensetracking'
import FinancialReport from './components/financialReport'

export default function Finance() {
  return (
    <div className="p-6">
  <div className='flex justify-between items-center'>
            <h1 className='font-semibold text-sm text-black'>Finance</h1>


            <div className = "flex items-center gap-x-1 max-w-fit w-[100%] cursor-pointer">
            <FiPlus className='text-[#00000066] w-[10px] h-[10px]'/>
            <h1 className='text-[#00000066] font-[400] text-sm'>New Transaction</h1>
            </div>
        </div>


        <div className="grid grid-cols-3 gap-4 mt-5">
<TotalRentDue />

<PaymentReceived />

<Outstanding />
        </div>

        <div className='bg-[#F9F9FA] rounded-2xl p-4 mt-5 flex items-center gap-x-2'>
        <FiPlus className='text-[#00000066] text-xl'/>

        <div>
            <h1 className='text-black font-semibold text-sm'>Auto fee calculation</h1>
            <p className='text-[#00000066] mt-1 font-[400] text-sm'>Automatically calculate and apply late fees for overdue rent payments</p>
        </div>
        </div>

       

<div className='mt-5 grid grid-cols-12 auto-rows-[336px]'>
<Expensetracking />

</div>


<FinancialReport />

    </div>
  )
}
