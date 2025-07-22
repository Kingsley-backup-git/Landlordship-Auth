import React from "react";
interface TextField {
  className: string;
  text: string;
  type: string;
  placeholder: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  touched: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
}
export default function ZipCode({
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
        <input
          type={type}
          className="w-full py-1 text-black text-sm placeholder:text-[#00000033] placeholder:opacity-70 rounded-lg outline-none border-0"
          placeholder={placeholder}
          maxLength={10}
          {...props}
        />
      </div>
      {props?.touched && props?.error && (
        <div className="text-red-500 text-xs">{props?.error}</div>
      )}
    </div>
  );
}
