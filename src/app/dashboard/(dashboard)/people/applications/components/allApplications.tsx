import Image from 'next/image'
import React from 'react'
import Img1 from "../../../../../../../public/contact3.png"
import Img2 from "../../../../../../../public/Req2215.png";
import Img3 from "../../../../../../../public/contact4.png"
export default function AllApplications() {
    const allApplications = [
        {
            propertyName : "New Property #101",
            address : "Property Address, date, 2024",
            img : [Img1, Img2, Img3],
            status : "In Progress",
            time : "30 min ago",
            completionRate : 75
        },
        {
            propertyName : "New Property #101",
            address : "Property Address, date, 2024",
            img : [Img1, Img2],
            status : "Pending",
            time : "30 min ago",
            completionRate : 85
        },
        {
            propertyName : "New Property #101",
            address : "Property Address, date, 2024",
            img : [Img1, Img2, Img3,Img2,Img1],
            status : "Complete",
            time : "30 min ago",
            completionRate : 100
        },
        {
            propertyName : "New Property #101",
            address : "Property Address, date, 2024",
            img : [Img1, Img2, Img3],
            status : "In Progress",
            time : "30 min ago",
            completionRate : 75
        },   {
            propertyName : "New Property #101",
            address : "Property Address, date, 2024",
            img : [Img1, Img2, Img3],
            status : "Complete",
            time : "30 min ago",
            completionRate : 100
        },   {
            propertyName : "New Property #101",
            address : "Property Address, date, 2024",
            img : [Img1],
            status : "In Progress",
            time : "30 min ago",
            completionRate : 55
        },   {
            propertyName : "New Property #101",
            address : "Property Address, date, 2024",
            img : [Img1],
            status : "Approved",
            time : "30 min ago",
            completionRate : 35
        },   {
            propertyName : "New Property #101",
            address : "Property Address, date, 2024",
            img : [Img1, Img2, Img3,Img1,Img2],
            status : "Pending",
            time : "30 min ago",
            completionRate : 95
        },   {
            propertyName : "New Property #101",
            address : "Property Address, date, 2024",
            img : [Img1, Img2, Img3],
            status : "Rejected",
            time : "30 min ago",
            completionRate : 5
        },   {
            propertyName : "New Property #101",
            address : "Property Address, date, 2024",
            img : [Img1, Img2],
            status : "Approved",
            time : "30 min ago",
            completionRate : 65
        },   {
            propertyName : "New Property #101",
            address : "Property Address, date, 2024",
            img : [Img1, Img2, Img3],
            status : "In Progress",
            time : "30 min ago",
            completionRate : 45
        },   {
            propertyName : "New Property #101",
            address : "Property Address, date, 2024",
            img : [Img1, Img2, Img3, Img1],
            status : "Pending",
            time : "30 min ago",
            completionRate : 15
        }
    ]
  return (
    <div className='grid lg:grid-cols-3 1md:grid-cols-2 md:grid-cols-2 2sm:grid-cols-2 grid-cols-1 sm:grid-cols-1 mt-5 gap-x-5 gap-y-6 sm:gap-y-8'>
    {allApplications.map((application, index)=> {
    return <div className='sm:bg-[#F9F9FA] bg-white rounded-2xl p-5' key={index}>
        <div className='flex items-center justify-between gap-x-1'>
            <div>
                <h1 className='font-semibold text-sm text-black'>{application.propertyName}</h1>
                <p className='text-xs font-[400] text-[#00000066] mt-[.5px]'>{application.address}</p>
            </div>

            <div className='bg-[#0000000A] min-w-[35px] max-w-[35px] h-[35px] rounded-lg'>

            </div>
        </div>

        <div className='flex justify-between my-4 gap-x-1 items-center'>
            {/* <Image src = {Img1} className='rounded-full w-[24px] h-[24px]' width={24} height={24} alt='profile-img' /> */}



 <div className='flex items-center'>
        {application.img.map((images, index)=> {
            return  <Image key = {index} src = {images} className={`rounded-full border-[1px] border-white w-[23px] h-[23px] ${index === 1 && "relative left-[-4px]"}  ${index > 1 && "hidden"}`} alt = "assignedto-img" width={23} height={23} />
        })}
{application.img.length > 2 && <div className='w-[22px] border-[1px] border-white h-[22px] rounded-full bg-[#EDEEFC] items-center p-2 relative left-[-8px] flex justify-center text-black font-[400] text-xs'>+{application.img.length - 2 }</div> }
    </div>





            <div className={`font-[400] text-xs flex items-center gap-x-1 ${application.status === "In Progress" ? "text-[#8A8CD9]" : application.status === "Complete" ? "text-[#94E9B8]" : application.status === "Pending" ? "text-[#92BFFF]" : application.status === "Approved" ? "text-[#FFDB56]" : application.status === "Rejected" ? "text-[#00000066]" : null}`}>
<div className={`w-[7px] h-[7px] rounded-full ${application.status === "In Progress" ? "bg-[#8A8CD9]" : application.status === "Complete" ? "bg-[#94E9B8]" : application.status === "Pending" ? "bg-[#92BFFF]" : application.status === "Approved" ? "bg-[#FFDB56]" : application.status === "Rejected" ? "bg-[#00000066]" : null}`}></div>
<h1 className='font-[400] text-xs'>{application.status}</h1>
</div>
        </div>


        <div className='bg-[#0000000A] w-[100%] rounded-full h-[2px]'>
<div  style={{ width: `${application.completionRate}%` }}  className={`h-full ${application.status === "In Progress" ? "bg-[#8A8CD9]" : application.status === "Complete" ? "bg-[#94E9B8]" : application.status === "Pending" ? "bg-[#92BFFF]" : application.status === "Approved" ? "bg-[#FFDB56]" : application.status === "Rejected" ? "bg-[#00000066]" : null}`}></div>
        </div>


        <div className='flex justify-between items-center mt-2'>
<h1 className='text-[#00000066] text-xs font-[400]'>{application.time}</h1>

<h1 className='text-black text-xs font-[400]'>{application.completionRate}%</h1>
            </div>
    </div>
 })}
</div>
  )
}
