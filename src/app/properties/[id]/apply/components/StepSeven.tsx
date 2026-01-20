"use client";
import React from "react";
import { FormikProps } from "formik";
import { ApplicationFormValues } from "../page";

export default function StepSeven({
  formik,
}: {
  formik: FormikProps<ApplicationFormValues>;
}) {
  return (
    <div>
      <h1 className="text-lg font-semibold text-black mb-6">7. Guarantor Details</h1>

      <div>
        <label className="text-[#00000066] text-xs font-normal block mb-3">
          Will you need a guarantor? <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-x-6">
          <label className="flex items-center gap-x-2">
            <input
              type="radio"
              name="needsGuarantor"
              value="yes"
              checked={formik.values.needsGuarantor === "yes"}
              onChange={formik.handleChange}
              className="w-4 h-4 text-black"
            />
            <span className="text-sm text-black">Yes</span>
          </label>
          <label className="flex items-center gap-x-2">
            <input
              type="radio"
              name="needsGuarantor"
              value="no"
              checked={formik.values.needsGuarantor === "no"}
              onChange={formik.handleChange}
              className="w-4 h-4 text-black"
            />
            <span className="text-sm text-black">No</span>
          </label>
        </div>
      </div>
    </div>
  );
}







