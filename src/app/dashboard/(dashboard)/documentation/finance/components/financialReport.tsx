import React from 'react'
import { PiCalendarBlank, PiDownloadSimple } from "react-icons/pi";
import styles from "../../../dashboard.module.css"
export default function FinancialReport() {
    const reports = [
        {
            id : 678935899,
            details : "Darknight transparency 36 Icons Pack",
            time : "Just now",
            amount : "$123.79"
        }, {
            id : 678935899,
            details : "Seller Fee",
            time : "A minute ago",
            amount : "$123.79"
        }, {
            id : 678935899,
            details : "Cartoon Mobile Emoji Phone Pack",
            time : "1 hour ago",
            amount : "$123.79"
        }, {
            id : 678935899,
            details : "Iphone 12 Pro Mockup Mega Bundle",
            time : "Yesterday",
            amount : "$123.79"
        },{
            id : 678935899,
            details : "Darknight transparency 36 Icons Pack",
            time : "Just now",
            amount : "$123.79"
        },{
            id : 678935899,
            details : "Darknight transparency 36 Icons Pack",
            time : "Just now",
            amount : "$123.79"
        },
        {
            id : 678935899,
            details : "Darknight transparency 36 Icons Pack",
            time : "Just now",
            amount : "$123.79"
        },
    ]
  return (
 <div className='bg-[#F9F9FA] rounded-2xl p-6 mt-6 flex flex-col h-[312px]  w-[100%]'>

<div className='flex items-center gap-x-2'>
<div className='font-semibold text-black text-sm flex-1'>Financial report</div>


<div className='flex items-center gap-x-3'>
    <li className='font-[400] text-sm list-none text-black cursor-pointer'>This Year</li>
    <li className='text-[#00000066] list-none font-[400] text-sm cursor-pointer'>2023</li>
    <li className='font-[400] text-sm list-none text-[#00000066] cursor-pointer'>2022</li>
</div>
</div>



<div className='flex items-center w-[100%] gap-x-1 border-b-[1px] border-[#00000033] py-3 mt-1'>
            <div className='text-[#00000066] flex-[15%] font-[400] text-xs col-span-4'>
    Transaction ID
            </div>



            <div className='text-[#00000066] flex-[34%] font-[400] text-xs col-span-2'>
                Details
            </div>



            <div className='text-[#00000066] flex-[22%] font-[400] text-xs col-span-2'>
                Date
            </div>


            <div className='text-[#00000066] flex-[16%] font-[400] text-xs col-span-2'>
                Amount
            </div>

            <div className='text-[#00000066] flex-[13%] font-[400] text-xs col-span-2'>
              Invoice
            </div>


        </div>


<div className = {`overflow-y-auto w-[100%] mt-2 ${styles.overflow}`}>
{reports.map((report, index)=> {
return <div key ={index} className='flex items-center w-[100%] gap-x-1  pb-5'>
            <div className='text-black  flex-[15%] font-[400] text-xs col-span-4'>
    {report.id}
            </div>



            <div className='text-black  flex-[34%] font-[400] text-xs col-span-2'>
                {report.details}
            </div>



            <div className='text-black flex items-center gap-x-2 flex-[22%] font-[400] text-xs col-span-2'>
            <PiCalendarBlank  className='text-lg'/>   {report.time}
            </div>


            <div className='text-black  flex-[16%] font-[400] text-xs col-span-2'>
               {report.amount}
            </div>

            <div className='text-black flex-[13%] font-[400] text-xs col-span-2'>
            <div className='flex items-center gap-x-1 cursor-pointer max-w-fit w-[100%]'><PiDownloadSimple className='text-lg '/>  <h1>PDF</h1></div>
            </div>


        </div>
        })}
</div>
 </div>
  )
}
