import React from "react";
import TextField from "../form/TextField";
import CurrencyInput from "../form/CurrencyInput";
import { FormikProps } from "formik";
import { PropertyFormValues } from "@/types/auth/formik";



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
          text="Bedrooms"
          type="number"
            onChange={formik.handleChange}
          value={formik.values.bedrooms}
          touched={formik.touched.bedrooms}
          error={formik.errors.bedrooms}
          onBlur={formik.handleBlur}
          name="bedrooms"
          placeholder="Bedrooms"
        />
          <TextField
          className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5"
          text="Bathrooms"
          type="number"
              onChange={formik.handleChange}
          value={formik.values.bathrooms}
          touched={formik.touched.bathrooms}
          error={formik.errors.bathrooms}
          onBlur={formik.handleBlur}
          name="bathrooms"
          placeholder="Bathrooms"
        />
          <TextField
          className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5"
          text="Parking spaces"
          type="number"
             onChange={formik.handleChange}
          value={formik.values.parkingspaces}
          touched={formik.touched.parkingspaces}
          error={formik.errors.parkingspaces}
          onBlur={formik.handleBlur}
          name="parkingspaces"
          placeholder="Parking spaces"
        />
     
     
     <TextField
          className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5"
          text="Square Feet"
          type="number"
           onChange={formik.handleChange}
          value={formik.values.square_feet}
          touched={formik.touched.square_feet}
          error={formik.errors.square_feet}
          onBlur={formik.handleBlur}
          name="square_feet"
          placeholder="Square feet"
        />

        <CurrencyInput
          className="bg-[#FFFFFFCC] col-span-2 border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5"
          text="Rental Value"
          type="number"
             onChange={formik.handleChange}
          value={formik.values.property_value}
          touched={formik.touched.property_value}
          error={formik.errors.property_value}
          onBlur={formik.handleBlur}
          name="property_value"
          placeholder="Rental value"
        />
      </div>

      <div className="mt-4">
        <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5">
          <label className="text-[#00000066] text-xs font-normal block mb-2">
            Description
          </label>
          <textarea
            name="property_description"
            value={formik.values.property_description || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter property description"
            rows={4}
            className="w-full py-1 text-black text-sm placeholder:text-[#00000033] placeholder:opacity-70 rounded-lg outline-none border-0 resize-none"
          />
        </div>
        {formik.touched.property_description && formik.errors.property_description && (
          <div className="text-red-500 text-xs mt-1">{formik.errors.property_description}</div>
        )}
      </div>
    </div>
  );
}
