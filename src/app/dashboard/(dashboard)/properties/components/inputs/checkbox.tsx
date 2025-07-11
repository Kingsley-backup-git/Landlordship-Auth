import React from 'react'
import { FaCheck } from "react-icons/fa";
interface CheckboxProps {
    classname? : string;
    checked? : boolean;
    clicked? : React.ChangeEventHandler<HTMLInputElement> ;
    value?:string;
    id? : string;
    name ? :string
    
}
export default function Checkbox({classname, checked, clicked, value, id, name}: CheckboxProps) {
  return (
    <div className='max-w-[16px] w-full'>
   <label htmlFor={id} className='inline-block'>
    <input type = "checkbox" id = {id} onChange={clicked} value={value} name={name} className={"hidden"} />
    <div className={classname}>
   {checked ? <FaCheck className='text-green-500 text-[12px]'/> : null}
    </div>
   </label>
   </div>
  )
}
