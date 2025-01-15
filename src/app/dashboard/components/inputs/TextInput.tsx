import React from 'react'

interface InputProps {
    type:string;
    classname:string;
    placeholder : string;

    name : string;
    
}
export default function TextInput({type, classname, placeholder, name} : InputProps) {
  return (
  
        <input name={name} type={type} className={classname} placeholder={placeholder}/>
     

  )
}