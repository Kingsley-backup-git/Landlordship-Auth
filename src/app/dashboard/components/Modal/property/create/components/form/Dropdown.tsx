import React from "react";
import { LuChevronsUpDown } from "react-icons/lu";
export default function Dropdown({
  className,
  text,
  ...props
}: {
  className: string;
  text: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  value?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  touched: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="col-span-2">
      <div className={className}>
        <label className="text-[#00000066] text-xs font-normal">{text}</label>
        <div className="w-full relative">
          <select
            id={props.name}
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            className="w-full appearance-none  text-sm py-1 placeholder:text-[rgba(0,0,0,0.2)] placeholder:opacity-70 outline-none border-0 text-black"
          >
            <option value="" disabled>
              Select a country
            </option>
            <option className="" value={"United Kingdom"}>
              United Kingdom
            </option>
            <option className="" value={"usa"}>
              United States of America
            </option>
            <option className="" value={"nigeria"}>
              Nigeria
            </option>
          </select>

          <LuChevronsUpDown className="absolute pointer-events-none top-0 right-3 text-[#00000066]" />
        </div>
      </div>
      {props?.touched && props?.error && (
        <div className="text-red-500 text-xs">{props?.error}</div>
      )}
    </div>
  );
}
