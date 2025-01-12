import React from 'react'
import { FaRegEyeSlash } from 'react-icons/fa';
import { LuEye } from "react-icons/lu";
interface InputProps {
    type:string;
    classname:string;
    placeholder : string;
    repeat : boolean;
    isShow : boolean;
    showHandler: ()=>void;
    name : string;
    
}
export default function TextInput({type, classname, placeholder, repeat, isShow, showHandler, name} : InputProps) {
  return (
    <div className='border-[0.5px] w-[100%] items-center gap-x-1 py-1 px-3 border-[#0000001A] rounded-xl flex'>
        <input name={name} type={type} className={classname} placeholder={placeholder}/>
       {(name === "password" && !repeat && !isShow)&& <FaRegEyeSlash className='text-[#00000066]' onClick={showHandler}/>}
       {(name === "password" && !repeat && isShow)&& <LuEye className='text-[#00000066]' onClick={showHandler}/>}
    </div>
  )
}
