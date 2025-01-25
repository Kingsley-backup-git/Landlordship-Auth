import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function Button({classname, text, textStyle} : {classname : string, text:string,  textStyle: string}) {
  return (
 <button type="button" className={classname}>
    <h1 className={textStyle}>{text}</h1> <MdOutlineKeyboardArrowRight className="text-sm text-[#FFFFFF66]" />
 </button>
  )
}
