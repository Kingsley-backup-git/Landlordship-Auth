import Image from 'next/image'
import React from 'react'
import Req1 from "../../../../../../../../public/Req2215.png"
import Req2 from "../../../../../../../../public/Req0125.png"
import Req3 from "../../../../../../../../public/Reg0215.png"
import Req4 from "../../../../../../../../public/Req2805.png"
import Req5 from "../../../../../../../../public/Req1015.png"
export default function MiniReq() {
    const requests = [
        {
img : Req1,
req : "Request #2215",
time : "Just now"
        },
        {
            img : Req2,
            req : "Request #0125",
            time : "59 minutes ago"
        },
        {
            img : Req3,
            req : "Request #0215",
            time : "12 hours ago"
        },
        {
            img : Req4,
            req : "Request #2805",
            time : "Today, 11:59 AM"
        },
        {
            img : Req5,
            req : "Request #1015",
            time : "Feb 2, 2024"
        },
        {
            img : Req5,
            req : "Request #1015",
            time : "Feb 2, 2024"
        },
        {
            img : Req5,
            req : "Request #1015",
            time : "Feb 2, 2024"
        },
        
    ]
  return (
    <div className='mt-6 w-[100%]'>
<h1 className='text-white/80 font-[400] text-xs'>Maintenance Requests</h1>

<div className={`flex flex-col mt-4 h-[238px] overflow-hidden`}>



{requests.map((request, index)=> {
    return <div key = {index} className='pt-2 flex gap-x-2 ps-2'>
    <div className='flex gap-y-1 flex-col items-center'>
<Image src = {request.img} className='rounded-full' alt = "" width = {28} height={24}/>
<div className={`w-1px] h-[20px] ${(requests.length - 1 === index) && "hidden"} border-[.5px] border-white/20`}></div>
</div>
<div className='flex-1'>
    <h1 className='text-white/80 font-[400] text-[11px]'>{request.req}</h1>
    <p className='text-white/30 text-xs font-[400]'>{request.time}</p>
</div>
</div>
})}



</div>
    </div>
  )
}
