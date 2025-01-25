import React from 'react'
import { PiPencilSimpleLine } from "react-icons/pi";
import { PiTrayFill } from "react-icons/pi";
import { PiPaperPlaneRight } from "react-icons/pi";
import { LuFileText } from "react-icons/lu";
import { PiWarningOctagon } from "react-icons/pi";
import { CiTrash } from "react-icons/ci";
import { PiArchiveLight } from "react-icons/pi";
export default function Options() {
  return (
    <div className="flex flex-col gap-y-1 text-[13px]">

<div className="flex items-center gap-x-1 px-3 py-[10px] cursor-pointer bg-[#EDEEFC] rounded-lg">
<PiPencilSimpleLine className="text-black text-lg "/> <h1 className='text-[1em] font-[400] text-black'>Compose</h1>
</div>


<div className="flex items-center gap-x-1 px-3 py-[10px]">
<PiTrayFill  className="text-black text-lg"/> <h1 className='text-[1em] font-[400] text-black'>Inbox</h1>
</div>



<div className="flex items-center gap-x-1  px-3 py-[10px] text-[#00000066]">
<PiPaperPlaneRight className="text-lg"/> <h1 className='text-[1em] font-[400] '>Sent</h1>
</div>



<div className="flex items-center gap-x-1 px-3 py-[10px] text-[#00000066]">
<LuFileText  className=" text-lg"/> <h1 className='text-[1em] font-[400] '>Draft</h1>
</div>



<div className="flex items-center gap-x-1  px-3 py-[10px] text-[#00000066]">
<PiWarningOctagon className="text-lg"/> <h1 className='text-[1em] font-[400] '>Spam</h1>
</div>


<div className="flex items-center gap-x-1  px-3 py-[10px] text-[#00000066]">
<CiTrash  className=" text-lg"/> <h1 className='text-[1em] font-[400] '>Trash</h1>
</div>




<div className="flex items-center gap-x-1 px-3 py-[10px] text-[#00000066]">
<PiArchiveLight className=" text-lg"/> <h1 className='text-[1em] font-[400]'>Archive</h1>
</div>
    </div>
  )
}
