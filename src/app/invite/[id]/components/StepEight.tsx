"use client";
import React from "react";
import { FormikProps } from "formik";
import { ApplicationFormValues } from "../page";

export default function StepEight({
  formik,
}: {
  formik: FormikProps<ApplicationFormValues>;
}) {
  return (
    <div>
      <h1 className="text-lg font-semibold text-black mb-6">8. Declarations & Consents</h1>

      <div className="space-y-6">
        {/* GDPR & Privacy Notice */}
        <div className="bg-[#F9F9FA] rounded-2xl p-6">
          <h2 className="text-sm font-semibold text-black mb-3">
            GDPR & Privacy Notice
          </h2>
          <div className="text-xs text-[#00000066] space-y-2">
            <p>
              We are committed to protecting your personal data and privacy. In accordance with the
              General Data Protection Regulation (GDPR) and the Data Protection Act 2018, we will
              process your personal information for the purpose of assessing your rental
              application.
            </p>
            <p>
              Your data will be used to conduct credit checks, reference checks, and Right to Rent
              verification as required by UK law. We may share your information with credit reference
              agencies, previous landlords, employers, and relevant authorities.
            </p>
            <p>
              Your data will be retained for the duration of your tenancy and for a reasonable
              period thereafter as required by law. You have the right to access, rectify, or erase
              your personal data, and to object to or restrict processing. For more information,
              please contact our Data Protection Officer.
            </p>
          </div>
        </div>

        {/* Consent Checkboxes */}
        <div className="space-y-4">
          <div className="flex items-start gap-x-3">
            <input
              type="checkbox"
              name="consentToCreditReferenceChecks"
              checked={formik.values.consentToCreditReferenceChecks}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 w-4 h-4 rounded border-[#00000033] text-black focus:ring-black"
            />
            <label className="text-sm text-black font-[400]">
              I consent to credit and reference checks being carried out{" "}
              <span className="text-red-500">*</span>
            </label>
          </div>
          {formik.touched.consentToCreditReferenceChecks &&
            formik.errors.consentToCreditReferenceChecks && (
              <div className="text-red-500 text-xs mt-1 ml-7">
                {formik.errors.consentToCreditReferenceChecks}
              </div>
            )}

          <div className="flex items-start gap-x-3">
            <input
              type="checkbox"
              name="consentToContactEmployerLandlord"
              checked={formik.values.consentToContactEmployerLandlord}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 w-4 h-4 rounded border-[#00000033] text-black focus:ring-black"
            />
            <label className="text-sm text-black font-[400]">
              I consent to my employer/landlord being contacted for references{" "}
              <span className="text-red-500">*</span>
            </label>
          </div>
          {formik.touched.consentToContactEmployerLandlord &&
            formik.errors.consentToContactEmployerLandlord && (
              <div className="text-red-500 text-xs mt-1 ml-7">
                {formik.errors.consentToContactEmployerLandlord}
              </div>
            )}

          <div className="flex items-start gap-x-3">
            <input
              type="checkbox"
              name="declareInformationAccurate"
              checked={formik.values.declareInformationAccurate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 w-4 h-4 rounded border-[#00000033] text-black focus:ring-black"
            />
            <label className="text-sm text-black font-[400]">
              I declare that all information provided is true and accurate{" "}
              <span className="text-red-500">*</span>
            </label>
          </div>
          {formik.touched.declareInformationAccurate &&
            formik.errors.declareInformationAccurate && (
              <div className="text-red-500 text-xs mt-1 ml-7">
                {formik.errors.declareInformationAccurate}
              </div>
            )}

          <div className="flex items-start gap-x-3">
            <input
              type="checkbox"
              name="agreeToDataProtection"
              checked={formik.values.agreeToDataProtection}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 w-4 h-4 rounded border-[#00000033] text-black focus:ring-black"
            />
            <label className="text-sm text-black font-[400]">
              I agree to the data protection and privacy terms outlined above{" "}
              <span className="text-red-500">*</span>
            </label>
          </div>
          {formik.touched.agreeToDataProtection && formik.errors.agreeToDataProtection && (
            <div className="text-red-500 text-xs mt-1 ml-7">
              {formik.errors.agreeToDataProtection}
            </div>
          )}
        </div>

        {/* Signature Fields */}
        <div className="pt-4 border-t border-[#0000000A] space-y-4">
          <div>
            <label className="text-[#00000066] text-xs font-normal block mb-2">
              Digital Signature <span className="text-red-500">*</span>
            </label>
            <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5">
              <input
                type="text"
                name="digitalSignature"
                value={formik.values.digitalSignature}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Type your full name"
                className="w-full py-1 text-black text-sm placeholder:text-[#00000033] placeholder:opacity-70 rounded-lg outline-none border-0"
              />
            </div>
            <p className="text-xs text-[#00000066] mt-1">
              By typing your name, you are providing your digital signature
            </p>
            {formik.touched.digitalSignature && formik.errors.digitalSignature && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.digitalSignature}</div>
            )}
          </div>

          <div>
            <label className="text-[#00000066] text-xs font-normal block mb-2">
              Date <span className="text-red-500">*</span>
            </label>
            <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5">
              <input
                type="date"
                name="signatureDate"
                value={formik.values.signatureDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                max={new Date().toISOString().split("T")[0]}
                className="w-full py-1 text-black text-sm placeholder:text-[#00000033] placeholder:opacity-70 rounded-lg outline-none border-0"
              />
            </div>
            {formik.touched.signatureDate && formik.errors.signatureDate && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.signatureDate}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

