import React from 'react'
interface ButtonProps { 
    text:string;
    classname :  string;
  

}
export default function Button({text, classname} : ButtonProps) {

  return (
    <button type='button'  className={classname}>{text}</button>
  )
}
