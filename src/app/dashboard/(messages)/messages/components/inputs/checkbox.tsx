import React from 'react'
import { FaCheck } from "react-icons/fa";
interface CheckboxProps {
    classname : string;
  
}
export default function Checkbox({classname}: CheckboxProps) {
  return (
   <label htmlFor='checkbox'>
    <input type = "checkbox" name='checkbox'  className={"hidden"} />
    <div className={classname} >
    <FaCheck className='text-white text-[6.9px]'/> 
    </div>
   </label>
  )
}
