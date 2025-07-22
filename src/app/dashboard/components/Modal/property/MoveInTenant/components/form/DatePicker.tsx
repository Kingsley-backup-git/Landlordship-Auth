import React from "react";
import DatePicker from "react-datepicker";
import { PiCalendarBlank } from "react-icons/pi";
import "react-datepicker/dist/react-datepicker.css";
import { LuChevronsUpDown } from "react-icons/lu";

interface TextField extends React.InputHTMLAttributes<HTMLInputElement> {
  className: string;
  text: string;
  type?: string;
  placeholder?: string;
  maxlength?: number;
  pattern?: string;
  startDateHandler: (date: Date | null) => void;
  startDate: Date | null;
}
export default function DatePickerInput({
  className,
  text,
  startDate,
  startDateHandler,
}: TextField) {
  return (
    <div className={className}>
      <label className="text-[#00000066] block text-xs font-normal">
        {text}
      </label>
      <div className="flex gap-x-1 relative items-center mt-1 w-full">
        <PiCalendarBlank className="text-[#00000066] text-lg" />
        <div className="flex-1 ">
          <DatePicker
            selected={startDate}
            onChange={(date) => startDateHandler(date)}
            wrapperClassName="w-full"
            dateFormat="MMMM d, yyyy h:mm aa"
            showTimeSelect
            className="w-full  py-1 placeholder:text-sm text-black text-sm outline-none"
            placeholderText="Select start date"
          />
        </div>
        <LuChevronsUpDown className="absolute pointer-events-none top-[9px] right-1 text-[#00000066]" />
      </div>
    </div>
  );
}
