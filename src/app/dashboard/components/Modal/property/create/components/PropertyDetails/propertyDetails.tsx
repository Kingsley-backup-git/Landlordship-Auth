import React from "react";
import TextField from "../form/TextField";
import CurrencyInput from "../form/CurrencyInput";

export default function PropertyDetails() {
  return (
    <div className="bg-[#F9F9FA] p-6 rounded-2xl mt-6">
      <h1 className="font-semibold text-sm text-black">Property</h1>
      <div className="grid grid-cols-6 gap-4 mt-4">
        <TextField
          className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5"
          text="Beds"
          type="number"
          placeholder="0"
        />
        <TextField
          className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5"
          text="Beds"
          type="number"
          placeholder="0"
        />
        <TextField
          className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5"
          text="Beds"
          type="number"
          placeholder="0"
        />

        <CurrencyInput
          className="bg-[#FFFFFFCC] col-span-2 border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5"
          text="Market Rent"
          type="number"
          placeholder="0"
        />

        <CurrencyInput
          className="bg-[#FFFFFFCC] col-span-2 border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5"
          text="Market Rent"
          type="number"
          placeholder="0"
        />
      </div>
    </div>
  );
}
