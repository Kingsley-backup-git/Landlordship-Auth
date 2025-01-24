import React from 'react'
import Img1 from "../../../../../../public/contact4.png"
import Img2 from "../../../../../../public/contact1.png"
import Img3 from "../../../../../../public/contact2.png"
import Img4 from "../../../../../../public/contact4.png"
import Img5 from "../../../../../../public/contact5.png"
import Img6 from "../../../../../../public/user.png"
import Img7 from "../../../../../../public/Req2215.png"
import Img8 from "../../../../../../public/Reg0215.png"
import Img9 from "../../../../../../public/Req2805.png"
import { GoPaperclip } from "react-icons/go";
import { PiChatText } from "react-icons/pi";

import Image from 'next/image'
export default function Cards() {
    const cards = [
        {
            content : "The toilet keeps running water after flush and does not refill for the next flush",
            issue : "Plumbing-toilet-leak",
           propertyName : "First property 101",
            img : [Img1],
            status: "In Progress",
            comment :12,
            link : 6
        }, {
            content : "The toilet keeps running water after flush and does not refill for the next flush",
            issue : "Plumbing-toilet-leak",
           propertyName : "First property 101",
            img : [Img4],
            status: "In Progress",
            comment : 15,
            link : 8
        }, {
            content : "The toilet keeps running water after flush and does not refill for the next flush",
            issue : "Garden clearing",
           propertyName : "First property 101",
            img : [Img2, Img3, Img6, Img7],
            status: "Approved",
            comment : 15,
            link : 8
        }, {
            content : "The toilet keeps running water after flush and does not refill for the next flush",
            issue : "Plumbing-toilet-leak",
           propertyName : "First property 101",
            img : [Img5, Img4],
            status: "Completed",
            comment : 15,
            link : 8
        }, {
            content : "The toilet keeps running water after flush and does not refill for the next flush",
            issue : "Plumbing-toilet-leak",
           propertyName : "First property 101",
            img : [Img9],
            status: "Approved",
            comment : 15,
            link : 8
        }, {
            content : "The toilet keeps running water after flush and does not refill for the next flush",
            issue : "Plumbing-toilet-leak",
           propertyName : "First property 101",
            img : [Img1],
            status: "Completed",
            comment : 15,
            link : 8
        },{
            content : "The toilet keeps running water after flush and does not refill for the next flush",
            issue : "AC Repair",
           propertyName : "First property 101",
            img : [Img7, Img4, Img9, Img6],
            status: "Rejected",
            comment : 15,
            link : 8
        },{
            content : "The toilet keeps running water after flush and does not refill for the next flush",
            issue : "Plumbing-toilet-leak",
           propertyName : "First property 101",
            img : [Img8],
            status: "Pending",
            comment : 15,
            link : 8
        },{
            content : "The toilet keeps running water after flush and does not refill for the next flush",
            issue : "Plumbing-toilet-leak",
           propertyName : "First property 101",
            img : [Img6, Img8],
            status: "In Progress",
            comment : 15,
            link : 8
        },{
            content : "The toilet keeps running water after flush and does not refill for the next flush",
            issue : "Plumbing-toilet-leak",
           propertyName : "First property 101",
            img : [Img9, Img2, Img3],
            status: "In Progress",
            comment : 15,
            link : 8
        },{
            content : "The toilet keeps running water after flush and does not refill for the next flush",
            issue : "Plumbing-toilet-leak",
           propertyName : "First property 101",
            img : [Img7, Img2],
            status: "In Progress",
            comment : 15,
            link : 8
        },{
            content : "The toilet keeps running water after flush and does not refill for the next flush",
            issue : "Plumbing-toilet-leak",
           propertyName : "First property 101",
            img : [Img8, Img2],
            status: "In Progress",
            comment : 15,
            link : 8
        },{
            content : "The toilet keeps running water after flush and does not refill for the next flush",
            issue : "Plumbing-toilet-leak",
           propertyName : "First property 101",
            img : [Img7, Img2],
            status: "In Progress",
            comment : 15,
            link : 8
        }]
  return (
    <>
    {cards.map((card, index)=> {
        return   <div key = {index} className='sm:bg-[#F9F9FA] bg-white rounded-2xl sm:p-6 xs:p-5 p-4'>
      <div className='flex items-center justify-between'>
      <h1 className='font-[400] text-xs text-[#00000066] bg-[#EDEEFC] max-w-fit w-full rounded-lg py-[2px] px-2'>{card.propertyName}</h1>
      <div className={`w-[9px] h-[9px] rounded-full ${card.status === "In Progress" ? "bg-[#8A8CD9]" : card.status === "Complete" ? "bg-[#94E9B8]" : card.status === "Pending" ? "bg-[#92BFFF]" : card.status === "Approved" ? "bg-[#FFDB56]" : card.status === "Rejected" ? "bg-[#00000066]" : null}`}></div>
        </div>  
        <h1 className='sm:text-sm  text-base font-semibold text-black mt-2'>{card.issue}</h1>
        <p className='text-xs font-[400] text-[#00000066] mt-1'>{card.content}</p>

        <div className='mt-[9px] flex items-center gap-x-4'>
<div className='flex items-center flex-1'>
        {card.img.map((images, index)=> {
            return  <Image key = {index} src = {images} className={`rounded-full border-[1px] border-white w-[23px] h-[23px] ${index === 1 && "relative left-[-4px]"}  ${index > 1 && "hidden"}`} alt = "assignedto-img" width={23} height={23} />
        })}
{card.img.length > 2 && <div className='w-[22px] border-[1px] border-white h-[22px] rounded-full bg-[#EDEEFC] items-center p-2 relative left-[-8px] flex justify-center text-black font-[400] text-xs'>+{card.img.length - 2 }</div> }
    </div>




<div className='cursor-pointer max-w-fit w-full'>
<GoPaperclip className="text-lg text-[#00000066] inline-block align-middle"/> <span className='text-xs  text-[#00000066] font-[400]'>{card.link}</span>
</div>


<div className='max-w-fit w-full cursor-pointer '>
<PiChatText  className="text-lg text-[#00000066] inline-block align-middle"/> <span className='text-xs inline-block text-[#00000066] font-[400]'>{card.comment}</span>
</div>


        </div>
    </div>
    })}
  
    </>
  )
}
