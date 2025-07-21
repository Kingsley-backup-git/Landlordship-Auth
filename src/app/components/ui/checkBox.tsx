import React from "react";
import { FaCheck } from "react-icons/fa";
interface CheckboxProps {
  text?: string;
  classname?: string;
  textStyle?: string;
  spanStyle?: string;
  spanText?: string;
  checked?: boolean;
}
export default function CheckBox({
  text,
  classname,
  textStyle,
  spanText,
  spanStyle,
  checked,
}: CheckboxProps) {
  return (
    <div className="flex gap-x-2 items-center mt-4">
      <label htmlFor="" className="">
        <div className="flex gap-x-2 max-w-fit cursor-pointer items-center">
          <input type="checkbox" className={classname} />
          <div
            className={`rounded border-2  border-[#00000033] w-[18px] h-[18px] p-[3px] flex items-center justify-center`}
          >
            {checked ? <FaCheck className="text-white text-4xl" /> : null}
          </div>
        </div>
      </label>
      <h1 className={textStyle}>
        {text} <span className={spanStyle}>{spanText}</span>
      </h1>
    </div>
  );
}
