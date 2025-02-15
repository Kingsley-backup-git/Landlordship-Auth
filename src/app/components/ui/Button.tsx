import React from 'react'
interface ButtonProps { 
    text:string;
    classname :  string;
  onClick? : ()=> void;

}
export default function Button({text, classname, ...props} : ButtonProps) {

  return (
    <button {...props} type='button'  className={classname}>{text}</button>
  )
}
