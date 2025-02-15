import React from 'react'
import { PiFlagCheckeredDuotone } from "react-icons/pi";
interface TextField extends React.InputHTMLAttributes<HTMLInputElement> {
    className : string,
    text : string;
    type : string 
    placeholder : string;
  maxlength? : number;
  pattern? : string

}
export default function PhoneInput({className, text, type, placeholder, ...props} : TextField) {
  return (
    <div className={className}>
<label className='text-[#00000066] text-xs font-normal'>{text}</label>
<div className="flex items-center  gap-x-2">
<PiFlagCheckeredDuotone className="text-lg text-black"/>
<div className="flex items-center relative gap-x-2">
<h1 className='absolute top-[2px] left-0 pointer-events-none'>+1</h1>
<input {...props}  type= {type} className='w-full py-1 ps-4 flex-1 text-black text-sm placeholder:text-[#00000033] placeholder:opacity-70 rounded-lg outline-none border-0' placeholder={placeholder} />
</div>
</div>
    </div>
  )
}