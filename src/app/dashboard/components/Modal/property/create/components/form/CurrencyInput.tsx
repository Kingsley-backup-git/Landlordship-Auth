import React from "react";
interface TextField extends React.InputHTMLAttributes<HTMLInputElement> {
  className: string;
  text: string;
  type: string;
  placeholder: string;
  maxlength?: number;
  pattern?: string;
  touched?: boolean;
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 error?: any;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}
export default function CurrencyInput({
  className,
  text,
  type,
  placeholder,
  ...props
}: TextField) {
  return (
    <div className="col-span-2">

 
    <div className={className}>
      <label className="text-[#00000066] text-xs font-normal">{text}</label>
      <div className="flex items-center relative">
        <h1 className="absolute top-[2px] left-0 pointer-events-none">£</h1>
        <input
          {...props}
          type={type}
          className="w-full py-1 ps-4 flex-1 text-black text-sm placeholder:text-[#00000033] placeholder:opacity-70 rounded-lg outline-none border-0"
          placeholder={placeholder}
        />
      </div>
       
      </div>
        {props?.touched && props?.error && (
        <div className="text-red-500 text-xs">{props?.error}</div>
      )}
         </div>
  );
}
