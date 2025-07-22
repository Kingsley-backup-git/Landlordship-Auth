import React from "react";

export default function RadioInput({
  ...props
}: {
  id?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
}) {
  return (
    <label className="absolute top-4 right-5" htmlFor="radio-input">
      <input
        type="radio"
        value={props.id}
        className="hidden"
        name="radio-input"
        {...props}
      />
      <div
        className={`rounded-full flex justify-center  items-center border ${props.checked ? "bg-[#1D3639]" : ""} h-[16px] w-[16px] xs:h-[16px] xs:w-[16px]`}
      >
        {props.checked ? (
          <div className="bg-white rounded-full xs:w-[8px] w-[8px] h-[8px] xs:h-[8px]"></div>
        ) : null}
      </div>
    </label>
  );
}
