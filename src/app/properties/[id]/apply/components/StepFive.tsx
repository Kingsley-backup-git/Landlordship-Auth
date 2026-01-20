"use client";
import React from "react";
import { FormikProps } from "formik";
import { ApplicationFormValues } from "../page";
import FileUpload from "./FileUpload";

export default function StepFive({
  formik,
}: {
  formik: FormikProps<ApplicationFormValues>;
}) {
  return (
    <div>
      <h1 className="text-lg font-semibold text-black mb-6">5. Financial Background</h1>

      <div className="space-y-6">
        {/* CCJs */}
        <div>
          <label className="text-[#00000066] text-xs font-normal block mb-3">
            Do you have any County Court Judgements (CCJs)?{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-x-6">
            <label className="flex items-center gap-x-2">
              <input
                type="radio"
                name="hasCCJs"
                value="yes"
                checked={formik.values.hasCCJs === "yes"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-4 h-4 text-black"
              />
              <span className="text-sm text-black">Yes</span>
            </label>
            <label className="flex items-center gap-x-2">
              <input
                type="radio"
                name="hasCCJs"
                value="no"
                checked={formik.values.hasCCJs === "no"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-4 h-4 text-black"
              />
              <span className="text-sm text-black">No</span>
            </label>
          </div>
          {formik.touched.hasCCJs && formik.errors.hasCCJs && (
            <div className="text-red-500 text-xs mt-1">{formik.errors.hasCCJs}</div>
          )}
        </div>

        {/* Bankruptcy */}
        <div>
          <label className="text-[#00000066] text-xs font-normal block mb-3">
            Have you ever been declared bankrupt? <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-x-6">
            <label className="flex items-center gap-x-2">
              <input
                type="radio"
                name="declaredBankrupt"
                value="yes"
                checked={formik.values.declaredBankrupt === "yes"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-4 h-4 text-black"
              />
              <span className="text-sm text-black">Yes</span>
            </label>
            <label className="flex items-center gap-x-2">
              <input
                type="radio"
                name="declaredBankrupt"
                value="no"
                checked={formik.values.declaredBankrupt === "no"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-4 h-4 text-black"
              />
              <span className="text-sm text-black">No</span>
            </label>
          </div>
          {formik.touched.declaredBankrupt && formik.errors.declaredBankrupt && (
            <div className="text-red-500 text-xs mt-1">{formik.errors.declaredBankrupt}</div>
          )}
        </div>

        {/* Housing Benefits */}
        <div>
          <label className="text-[#00000066] text-xs font-normal block mb-3">
            Are you receiving housing benefits / Universal Credit?{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-x-6">
            <label className="flex items-center gap-x-2">
              <input
                type="radio"
                name="receivingHousingBenefits"
                value="yes"
                checked={formik.values.receivingHousingBenefits === "yes"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-4 h-4 text-black"
              />
              <span className="text-sm text-black">Yes</span>
            </label>
            <label className="flex items-center gap-x-2">
              <input
                type="radio"
                name="receivingHousingBenefits"
                value="no"
                checked={formik.values.receivingHousingBenefits === "no"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-4 h-4 text-black"
              />
              <span className="text-sm text-black">No</span>
            </label>
          </div>
          {formik.touched.receivingHousingBenefits && formik.errors.receivingHousingBenefits && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.receivingHousingBenefits}
            </div>
          )}
        </div>

        {/* Credit Check Consent */}
        <div>
          <label className="text-[#00000066] text-xs font-normal block mb-3">
            Do you consent to a credit check? <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-x-6">
            <label className="flex items-center gap-x-2">
              <input
                type="radio"
                name="consentToCreditCheck"
                value="yes"
                checked={formik.values.consentToCreditCheck === "yes"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-4 h-4 text-black"
              />
              <span className="text-sm text-black">Yes</span>
            </label>
            <label className="flex items-center gap-x-2">
              <input
                type="radio"
                name="consentToCreditCheck"
                value="no"
                checked={formik.values.consentToCreditCheck === "no"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-4 h-4 text-black"
              />
              <span className="text-sm text-black">No</span>
            </label>
          </div>
          {formik.touched.consentToCreditCheck && formik.errors.consentToCreditCheck && (
            <div className="text-red-500 text-xs mt-1">{formik.errors.consentToCreditCheck}</div>
          )}
        </div>

        {/* Additional Proof of Income */}
        <div className="pt-4">
          <FileUpload
            label="Additional Proof of Income (if not already uploaded)"
            accept="image/*,.pdf"
            multiple
            files={formik.values.additionalProofOfIncomeFiles}
            onChange={(files) => formik.setFieldValue("additionalProofOfIncomeFiles", files)}
          />
        </div>
      </div>
    </div>
  );
}







