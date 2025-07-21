"use client";
import React, { useState } from "react";
import TextField from "../create/components/form/TextField";
import DatePickerInput from "./components/form/DatePicker";
import Button from "@/app/components/ui/ButtonTwo";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function StepEight({
  header,
  stepHandler,
}: {
  header: string;
  stepHandler: (num: number) => void;
}) {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  function startDateHandler(date: Date | null) {
    setStartDate(date);
  }

  function endDateHandler(date: Date | null) {
    setEndDate(date);
  }
  return (
    <div className="sm:p-6 py-2 px-4  sm:max-w-[960px] mx-auto w-[100%]">
      <h1 className="text-black  font-semibold sm:flex hidden text-sm">
        {header}
      </h1>

      <div className="max-w-[600px] w-full mx-auto  mt-16 block justify-center items-center ">
        <h1 className="font-semibold text-xl text-black text-center">
          Add automatic recurring rent
        </h1>
        <p className="mt-1 text-sm font-[400] text-center text-[#00000066]">
          Enable the automatic lease rent invoicing.
        </p>

        <div className="max-w-[400px] mt-6 w-full mx-auto">
          <TextField
            className="w-full  bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl"
            type="number"
            text="Amount"
            placeholder="Please enter your amount"
          />

          <DatePickerInput
            startDate={startDate}
            startDateHandler={startDateHandler}
            className="w-full mt-4 bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl"
            text="Start"
          />

          <DatePickerInput
            startDate={endDate}
            startDateHandler={endDateHandler}
            className="w-full mt-4 bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl"
            text="End"
          />

          <div className="flex items-center w-full  gap-x-4 mt-6 justify-center">
            <Button
              onClick={() => stepHandler(7)}
              classname="bg-[#0000000A] flex flex-1 items-center justify-center gap-x-2 rounded-xl py-2 px-4"
            >
              <FaAngleLeft className="text-[#00000066] text-base" />
              <h1 className="text-sm font-[400] text-black">Previous</h1>
            </Button>

            <Button
              onClick={() => stepHandler(9)}
              classname="bg-[#1D3639] flex flex-1 items-center gap-x-2 justify-center rounded-xl py-2 px-4"
            >
              <h1 className="text-sm font-[400] text-white">Continue</h1>
              <FaAngleRight className="text-[#00000066] text-white text-base" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
