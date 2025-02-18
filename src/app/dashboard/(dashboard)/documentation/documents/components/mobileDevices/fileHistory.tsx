import React from 'react'
import Img1 from "../../../../../../../../public/contact4.png"
import Img2 from "../../../../../../../../public/contact5.png"
import Img3 from "../../../../../../../../public/contact2.png"
import Img4 from "../../../../../../../../public/Req0125.png"
import { VscFolder } from "react-icons/vsc";
import { PiFilePdf } from "react-icons/pi";
import { PiFileJpg } from "react-icons/pi";
import Image from 'next/image';
export default function FileHistoryMobile() {
    const fileHistory = [
        {
property : "New Porperty #001",
tenant : "Natali Craig",
img : Img1,
file : "Project tech requirements.pdf",
size: 1.5,
time : "Just now",
type : "pdf"
        },{
            property : "New Porperty #001",
            tenant : "Andi Lane",
            img : Img2,
            file : "Dashboard-design.jpg",
            size: 1.5,
            time : "1 hour ago",
            type : "jpeg"
                    },{
                        property : "New Porperty #001",
                        tenant : "Kate Morrison",
                        img : Img3,
                        file : "Create Project Wireframes.xls",
                        size: 1.5,
                        time : "Yesterday",
                        type : "file"
                                },
                                {
                                    property : "New Porperty #001",
                                    tenant : "Natali Craig",
                                    img : Img4,
                                    file : "Project tech requirements.pdf",
                                    size: 1.5,
                                    time : "Just now",
                                    type: "pdf"
                                            }]
  return (
    <div className='w-full mt-4 sm:hidden gap-y-4 col-span-12 flex flex-col '>
{
    fileHistory.map((file, index) => {
        return <div className='bg-white rounded-2xl p-4' key={index}>
<div className='flex items-center gap-x-2'>
{file.type === "pdf" ? <PiFilePdf className='text-black text-3xl bg-[#0000000A] rounded-lg p-1'/> : file.type === "file"? <VscFolder className='text-black text-3xl bg-[#0000000A] rounded-lg p-1'/> : file.type === "jpeg"  ? <PiFileJpg className='text-black text-3xl bg-[#0000000A] rounded-lg p-1'/> : null} <h1 className='font-semibold text-black text-sm'>{file.file}</h1>
</div>


<div className='flex flex-col divide-y-[1px] mt-1'>
<div className='flex items-center justify-between py-2'>
<h1 className='font-[400px] text-[#00000066] flex-1 xs:text-sm text-xs'>Uploader</h1>
<div className='flex gap-x-1 items-center'>
                <Image src = {file.img} className = "w-[24px] h-[24px] rounded-full" alt = "tenant-img" width={24} height = {24} />
                <h1 className='xs:text-sm text-xs font-[400] text-black'>{file.tenant}</h1>
</div>
</div>





<div className='flex items-center justify-between py-2'>
<h1 className='font-[400px] text-[#00000066] flex-1 xs:text-sm text-xs'>Property</h1>
<div className='flex gap-x-1 items-center'>
               
                <h1 className='xs:text-sm text-xs font-[400] text-black'>{file.property}</h1>
</div>
</div>




<div className='flex items-center justify-between py-2'>
<h1 className='font-[400px] text-[#00000066] flex-1 xs:text-sm text-xs'>File Size</h1>
<div className='flex gap-x-1 items-center'>
               
                <h1 className='xs:text-sm text-xs font-[400] text-black'>{file.size}MB</h1>
</div>
</div>




<div className='flex items-center justify-between py-2'>
<h1 className='font-[400px] text-[#00000066] flex-1 xs:text-sm text-xs'>Upload Time</h1>
<div className='flex gap-x-1 items-center'>
               
                <h1 className='xs:text-sm text-xs font-[400] text-black'>{file.time}</h1>
</div>
</div>
    </div>

        </div>
    })
}
    </div>
  )
}
