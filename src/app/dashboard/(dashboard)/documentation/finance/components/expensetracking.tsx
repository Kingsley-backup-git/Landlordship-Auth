import React from 'react'

export default function Expensetracking() {
    const expenses = [
        {
            name : "ASOS Ridley High Waist",
            price : "$79.49",
            quantity : 82,
            amount : "$6,518.18"
        },
        {
            name : "ASOS Ridley High Waist",
            price : "$79.49",
            quantity : 82,
            amount : "$6,518.18"
        },
        {
            name : "ASOS Ridley High Waist",
            price : "$79.49",
            quantity : 82,
            amount : "$6,518.18"
        },
        {
            name : "ASOS Ridley High Waist",
            price : "$79.49",
            quantity : 82,
            amount : "$6,518.18"
        }, {
            name : "ASOS Ridley High Waist",
            price : "$79.49",
            quantity : 82,
            amount : "$6,518.18"
        }, {
            name : "ASOS Ridley High Waist",
            price : "$79.49",
            quantity : 82,
            amount : "$6,518.18"
        }, {
            name : "ASOS Ridley High Waist",
            price : "$79.49",
            quantity : 82,
            amount : "$6,518.18"
        },
    ]
  return (
    <div className='bg-[#F9F9FA] rounded-2xl p-5 flex flex-col  col-span-9 w-[100%]'>

        <h1 className='font-semibold text-black text-sm'>Expense tracking</h1>

        <div className='grid grid-cols-10 w-[100%] gap-x-1 border-b-[1px] border-[#00000033] py-3 mt-1'>
            <div className='text-[#00000066] font-[400] text-xs col-span-4'>
    Name
            </div>



            <div className='text-[#00000066] font-[400] text-xs col-span-2'>
                Price
            </div>



            <div className='text-[#00000066] font-[400] text-xs col-span-2'>
                Quantity
            </div>


            <div className='text-[#00000066] font-[400] text-xs col-span-2'>
                Amount
            </div>


        </div>
      <div className='overflow-y-auto flex-1'>
{expenses.map((expense, index)=> {
    return <div key={index} className='grid grid-cols-10 w-[100%] py-3  gap-x-1'>

            <div className='text-black font-[400] text-xs col-span-4'>
    {expense.name}
            </div>



            <div className='text-black   font-[400] text-xs col-span-2'>
                {expense.price}
            </div>



            <div className='text-black    font-[400] text-xs col-span-2'>
                {expense.quantity}
            </div>


            <div className='text-black   font-[400] text-xs col-span-2'>
                {expense.amount}
            </div>


        </div>
})}
</div>
    </div>
  )
}
