import React from 'react'
interface TextField extends React.InputHTMLAttributes<HTMLInputElement> {
    className : string,
    text : string;
    type : string 
    placeholder : string;
  maxlength? : number;
  pattern? : string

}
export default function TextField({className, text, type, placeholder, ...props} : TextField) {
  return (
    <div className={className}>
<label className='text-[#00000066] text-xs font-normal'>{text}</label>
<input {...props} type= {type} className='w-full py-1 text-black text-sm placeholder:text-[#00000033] placeholder:opacity-70 rounded-lg outline-none border-0' placeholder={placeholder} />
    </div>
  )
}
