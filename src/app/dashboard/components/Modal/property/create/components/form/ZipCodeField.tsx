import React from 'react'
interface TextField {
    className : string,
    text : string;
    type : string 
    placeholder : string

}
export default function ZipCode({className, text, type, placeholder} : TextField) {
  return (
    <div className={className}>
<label className='text-[#00000066] text-xs font-normal'>{text}</label>
<input type= {type} 
className='w-full py-1 text-black text-sm placeholder:text-[#00000033] placeholder:opacity-70 rounded-lg outline-none border-0'
 placeholder={placeholder}
 pattern="^\d{5}(-\d{4})?$" maxLength={10}/>
    </div>
  )
}
