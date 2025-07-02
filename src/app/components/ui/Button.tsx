import React from 'react'
import { LuLoaderCircle } from "react-icons/lu";
interface ButtonProps { 
    text:string;
    classname :  string;
  onClick? : ()=> void;
  type? : "submit" | "reset" | "button" | undefined;
  disabled? : boolean

}
export default function Button({text, classname, type, ...props} : ButtonProps) {

  return (
    <button {...props} type={type}  className={classname}>
      {props.disabled ?  <LuLoaderCircle className='animate-spin block mx-auto text-xl'/> : text}
      </button>
  )
}
