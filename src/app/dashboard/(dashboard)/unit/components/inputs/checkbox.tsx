import React from 'react'
import { FaCheck } from "react-icons/fa";
interface CheckboxProps {
    classname : string;
    checked : boolean
    clicked : (val:unknown)=> void
}
export default function Checkbox({classname, checked,clicked}: CheckboxProps) {
  return (
   <label htmlFor='checkbox'>
    <input type = "checkbox" name='checkbox'  className={"hidden"} />
    <div className={classname} onClick={clicked}>
    {checked ? <FaCheck className='text-white text-[6.9px]'/> : null }
    </div>
   </label>
  )
}
