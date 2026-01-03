"use client";
import React from "react";
import { FormikProps } from "formik";
import { ApplicationFormValues } from "../page";
import FileUpload from "./FileUpload";
import { LuChevronsUpDown } from "react-icons/lu";

export default function StepTwo({
  formik,
}: {
  formik: FormikProps<ApplicationFormValues>;
}) {
  return (
    <div>
      <h1 className="text-xl sm:text-2xl font-semibold text-black mb-8">
        2. Identification & Right to Rent
      </h1>

      <div className="space-y-6 lg:space-y-8">
        {/* Proof of ID Type */}
        <div>
          <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
            Proof of ID Type <span className="text-red-500">*</span>
          </label>
          <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 relative hover:border-black/20 transition-colors">
            <select
              name="proofOfIdType"
              value={formik.values.proofOfIdType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full appearance-none text-sm sm:text-base py-1 outline-none border-0 text-black bg-transparent"
            >
              <option value="">Select ID type</option>
              <option value="passport">Passport</option>
              <option value="driving-license">UK Driving License</option>
              <option value="biometric-residence">Biometric Residence Permit</option>
              <option value="national-id">National ID Card</option>
            </select>
            <LuChevronsUpDown className="absolute pointer-events-none top-[20px] sm:top-[24px] right-5 sm:right-6 text-black/50" />
          </div>
          {formik.touched.proofOfIdType && formik.errors.proofOfIdType && (
            <div className="text-red-500 text-sm mt-2 font-medium">{formik.errors.proofOfIdType}</div>
          )}
        </div>

        {/* ID Number */}
        <div>
          <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
            ID Number <span className="text-red-500">*</span>
          </label>
          <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
            <input
              type="text"
              name="idNumber"
              value={formik.values.idNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter ID number"
              className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
            />
          </div>
          {formik.touched.idNumber && formik.errors.idNumber && (
            <div className="text-red-500 text-sm mt-2 font-medium">{formik.errors.idNumber}</div>
          )}
        </div>

        {/* Visa / Residency Status */}
        <div>
          <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
            Visa / Residency Status <span className="text-red-500">*</span>
          </label>
          <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 relative hover:border-black/20 transition-colors">
            <select
              name="visaResidencyStatus"
              value={formik.values.visaResidencyStatus}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full appearance-none text-sm sm:text-base py-1 outline-none border-0 text-black bg-transparent"
            >
              <option value="">Select status</option>
              <option value="uk-citizen">UK Citizen</option>
              <option value="eu-settled">EU Settled Status</option>
              <option value="visa">Visa Holder</option>
              <option value="indefinite-leave">Indefinite Leave to Remain</option>
              <option value="other">Other</option>
            </select>
            <LuChevronsUpDown className="absolute pointer-events-none top-[20px] sm:top-[24px] right-5 sm:right-6 text-black/50" />
          </div>
          {formik.touched.visaResidencyStatus && formik.errors.visaResidencyStatus && (
            <div className="text-red-500 text-sm mt-2 font-medium">{formik.errors.visaResidencyStatus}</div>
          )}
        </div>

        {/* Share Code */}
        <div>
          <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
            Share Code (if applicable)
          </label>
          <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
            <input
              type="text"
              name="shareCode"
              value={formik.values.shareCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter share code"
              className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
            />
          </div>
        </div>

        {/* Upload Proof of ID */}
        <FileUpload
          label="Upload Proof of ID"
          required
          accept="image/*,.pdf"
          files={formik.values.proofOfIdFile ? [formik.values.proofOfIdFile] : []}
          onChange={(files) => {
            formik.setFieldValue("proofOfIdFile", files[0] || null);
            formik.setFieldTouched("proofOfIdFile", true);
          }}
          error={
            formik.touched.proofOfIdFile && formik.errors.proofOfIdFile
              ? String(formik.errors.proofOfIdFile)
              : undefined
          }
          touched={!!formik.touched.proofOfIdFile}
        />

        {/* Upload Proof of Address */}
        <FileUpload
          label="Upload Proof of Address"
          required
          accept="image/*,.pdf"
          files={formik.values.proofOfAddressFile ? [formik.values.proofOfAddressFile] : []}
          onChange={(files) => {
            formik.setFieldValue("proofOfAddressFile", files[0] || null);
            formik.setFieldTouched("proofOfAddressFile", true);
          }}
          error={
            formik.touched.proofOfAddressFile && formik.errors.proofOfAddressFile
              ? String(formik.errors.proofOfAddressFile)
              : undefined
          }
          touched={!!formik.touched.proofOfAddressFile}
        />

        {/* Consent Checkbox */}
        <div className="flex items-start gap-x-3 pt-6 border-t border-[#0000000A]">
          <input
            type="checkbox"
            name="consentToRightToRent"
            checked={formik.values.consentToRightToRent}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 w-5 h-5 rounded border-[#00000033] text-black focus:ring-black cursor-pointer"
          />
          <label className="text-sm sm:text-base text-black font-medium cursor-pointer">
            I consent to a Right to Rent check as required by UK law{" "}
            <span className="text-red-500">*</span>
          </label>
        </div>
        {formik.touched.consentToRightToRent && formik.errors.consentToRightToRent && (
          <div className="text-red-500 text-sm mt-2 ml-8 font-medium">
            {formik.errors.consentToRightToRent}
          </div>
        )}
      </div>
    </div>
  );
}

