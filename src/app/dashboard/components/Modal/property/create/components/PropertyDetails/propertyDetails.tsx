import React from "react";
import TextField from "../form/TextField";
import CurrencyInput from "../form/CurrencyInput";
import { FormikProps } from "formik";

interface PropertyFormValues {
  propertyName: string;
  yearBuilt: number;
  uniqueId: string;
  stateAddress: string;
  city: string;
  region: string;
  zip: string;
  country: string;
  propertyType?: "individual" | "multi-unit";
  amenities?: string[];
  features?: string[];
  attachments?: File[];
  description?: string;
}

export default function PropertyDetails({
  formik,
}: {
  formik: FormikProps<PropertyFormValues>;
}) {
  return (
    <div className="bg-[#F9F9FA] p-6 rounded-2xl mt-6">
      <h1 className="font-semibold text-sm text-black">Property</h1>
      <div className="grid grid-cols-6 gap-4 mt-4">
        <TextField
          className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5"
          text="Active Units"
          type="number"
          placeholder="Active units"
        />
     
     <TextField
          className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5"
          text="Square Feet"
          type="number"
          placeholder="Square feet"
        />

        <CurrencyInput
          className="bg-[#FFFFFFCC] col-span-2 border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5"
          text="Rental Value"
          type="string"
          placeholder="Rental value"
        />
      </div>

      <div className="mt-4">
        <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5">
          <label className="text-[#00000066] text-xs font-normal block mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formik.values.description || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter property description"
            rows={4}
            className="w-full py-1 text-black text-sm placeholder:text-[#00000033] placeholder:opacity-70 rounded-lg outline-none border-0 resize-none"
          />
        </div>
        {formik.touched.description && formik.errors.description && (
          <div className="text-red-500 text-xs mt-1">{formik.errors.description}</div>
        )}
      </div>
    </div>
  );
}
