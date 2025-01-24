import React from 'react'
import styles from "../../../../dashboard.module.css"
import { PiDownloadSimple } from 'react-icons/pi'
export default function FinancialReportMobile() {
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
        }]
  return (
    <>
    
    <div className='bg-white rounded-2xl p-4 mt-6 sm:hidden flex flex-col h-[312px]  w-[100%]'>

    <div className='flex items-center gap-x-2'>
    <div className='font-semibold text-black text-sm flex-1'>Financial report</div>
    
    
    <div className='flex items-center gap-x-4'>
        <li className='font-[400] xs:text-sm text-xs list-none text-black cursor-pointer'>This Year</li>
        <li className='text-[#00000066] list-none font-[400] xs:text-sm text-xs cursor-pointer'>2023</li>
        <li className='font-[400] xs:text-sm text-xs list-none text-[#00000066] cursor-pointer'>2022</li>
    </div>
    </div>


    <div className={`overflow-y-auto flex flex-col gap-y-2 mt-4 ${styles.overflow}`}>
{reports.map((report, index)=> {
  return <div key={index} className= {`${index % 2 === 0 ? "bg-[#00000008]" : "bg-[#00000003]"} flex items-center px-3 py-2 gap-x-2 rounded-2xl`}>
<div className='flex-1 text-black font-[400] text-sm'>{report.id}</div>



<div className='text-black  font-[400] text-sm'>
            <div className='flex items-center gap-x-1 cursor-pointer max-w-fit w-[100%]'><PiDownloadSimple className='text-lg '/>  <h1>PDF</h1></div>
            </div>
  </div>
})}
 </div>


    </div>
    </>
  )
}
