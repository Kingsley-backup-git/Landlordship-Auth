import React from 'react'
import Img1 from "../../../../../../../../public/Reg0215.png";
import Img2 from "../../../../../../../../public/Req1015.png";
import Img3 from "../../../../../../../../public/Req2805.png";
import Img4 from "../../../../../../../../public/contact2.png";
import Image from 'next/image';

export default function Outstanding() {
    const maintenances = [
        {
            description : "Toilet leak when flushing",
            property : "Apartment 13 block avenue street",
            date : "3hr 20min",
            img : [
Img1
            ],
            status : "In Progress"
        },
        {
            description : "AC filter repair",
            property : "Apartment 13 block avenue street",
            date : "12hr 21min",
            img : [
Img4, Img2
            ],
            status : "Complete"
        },
        {
            description : "Flower garden maintenance",
            property : "Apartment 13 block avenue street",
            date : "78hr 5min",
            img : [
Img3
            ],
            status : "Pending"
        },
        {
            description : "Bin collection",
            property : "Apartment 13 block avenue street",
            date : "26hr 58min",
            img : [
Img4, Img2, Img1
            ],
            status : "Approved"
        },
        {
            description : "AC Repair",
            property : "Apartment 13 block avenue street",
            date : "17hr 22min",
            img : [
Img3
            ],
            status : "Rejected"
        },
        {
            description : "AC Repair",
            property : "Apartment 13 block avenue street",
            date : "17hr 22min",
            img : [
Img3
            ],
            status : "Rejected"
        },
        {
            description : "AC Repair",
            property : "Apartment 13 block avenue street",
            date : "17hr 22min",
            img : [
Img3
            ],
            status : "Rejected"
        },
        {
            description : "AC Repair",
            property : "Apartment 13 block avenue street",
            date : "17hr 22min",
            img : [
Img3
            ],
            status : "Rejected"
        },
        {
            description : "AC Repair",
            property : "Apartment 13 block avenue street",
            date : "17hr 22min",
            img : [
Img3
            ],
            status : "Rejected"
        }
    ]
  return (
    <div className='sm:bg-[#F9F9FA] bg-white rounded-2xl lg:order-3 sm:order-4 order-last py-6 sm:px-6 p-3 flex flex-col  max-h-[350px]  col-span-12 lg:col-span-9'>
<div className='flex justify-between items-center'>
    <h1 className='font-semibold text-black text-sm'>Outstanding</h1>

   
</div>


<div className='grid grid-cols-12 border-b-[1px] border-[#1C1C1C1A] pb-2 mt-3 mb-2'>
<div className='1md:col-span-4 sm:col-span-4 col-span-5 text-[#00000066] font-[400] text-xs'>
    Description
</div>


<div className='1md:col-span-2 sm:col-span-4 col-span-4 text-[#00000066] font-[400] text-xs'>
    Property
</div>


<div className='col-span-2 text-[#00000066] 1md:flex hidden font-[400] text-xs'>
    Date
</div>


<div className='col-span-2 sm:col-span-2 text-[#00000066] sm:flex hidden  font-[400] text-xs'>
    Assigned to
</div>





<div className='cols-span-1 text-[#00000066] font-[400] text-xs'>
    Status
</div>
</div>

<div className={`mt-1 overflow-y-auto flex flex-col  gap-y-4`}>
{maintenances.map((maintenance, index)=> {
    return <div key = {index} className='grid grid-cols-12 gap-x-2 items-center'>

    <div className='1md:col-span-4 sm:col-span-4 col-span-5 text-black font-[400] text-xs'>
    {maintenance.description}
    </div>
    
    
    <div className='1md:col-span-2 sm:col-span-4 col-span-4 text-black pe-2 font-[400] text-xs truncate'>
    {maintenance.property}
    </div>
    
    
    <div className='col-span-2 text-black 1md:flex hidden font-[400] text-xs'>
    {maintenance.date}
    </div>
    
    
    <div className='col-span-2 sm:col-span-2 sm:flex hidden items-center'>
        {maintenance.img.map((images, index)=> {
            return  <Image key = {index} src = {images} className={`rounded-full w-[18px] h-[18px] ${index === 1 && "relative left-[-4px]"}  ${index > 1 && "hidden"}`} alt = "assignedto-img" width={15} height={15} />
        })}
{maintenance.img.length > 2 && <div className='w-[18px] h-[18px] rounded-full bg-white items-center p-1 relative left-[-8px] flex justify-center text-black font-[400] text-xs'>+{maintenance.img.length - 2 }</div> }
    </div>
    
    
    <div className={`col-span-2  font-[400] sm:gap-2 gap-1 text-xs flex items-center ${maintenance.status === "In Progress" ? "text-[#8A8CD9]" : maintenance.status === "Complete" ? "text-[#94E9B8]" : maintenance.status === "Pending" ? "text-[#92BFFF]" : maintenance.status === "Approved" ? "text-[#FFDB56]" : maintenance.status === "Rejected" ? "text-[#00000066]" : null}`}>
   <div className={`w-[5px] h-[5px] rounded-full ${maintenance.status === "In Progress" ? "bg-[#8A8CD9]" : maintenance.status === "Complete" ? "bg-[#94E9B8]" : maintenance.status === "Pending" ? "bg-[#92BFFF]" : maintenance.status === "Approved" ? "bg-[#FFDB56]" : maintenance.status === "Rejected" ? "bg-[#00000066]" : null}`}></div>
    <h1 className='font-[400] text-xs'>{maintenance.status}</h1>
    </div>
    </div>
}) }
</div>

    </div>
  )
}
