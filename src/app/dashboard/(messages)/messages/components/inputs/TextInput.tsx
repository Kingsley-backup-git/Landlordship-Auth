import React from "react";

export default function TextInput({
  classname,
  ...props
}: {
  classname: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    name?: string;
    value: string;
    
  
}) {
  return <input type="text" className={classname} {...props} />;
}
