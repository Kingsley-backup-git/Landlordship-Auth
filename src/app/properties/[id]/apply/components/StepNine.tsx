"use client";
import React from "react";
import { FormikProps } from "formik";
import { ApplicationFormValues } from "../page";
import Button from "@/app/components/ui/Button";

export default function StepNine({
  formik,
  onSubmit,
  propertyAddress,
  ApplyPropertyMutation
}: {
  formik: FormikProps<ApplicationFormValues>;
    onSubmit: () => void;
    propertyAddress: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ApplyPropertyMutation : any
}) {
  return (
    <div>
      <h1 className="text-lg font-semibold text-black mb-6">9. Review & Submit</h1>

      <div className="space-y-6">
        {/* Personal Info Summary */}
        <div className="bg-[#F9F9FA] rounded-2xl p-6">
          <h2 className="text-sm font-semibold text-black mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-[#00000066]">Name: </span>
              <span className="text-black">
                {formik.values.firstName} {formik.values.middleName} {formik.values.lastName}
              </span>
            </div>
            <div>
              <span className="text-[#00000066]">Email: </span>
              <span className="text-black">{formik.values.emailAddress}</span>
            </div>
            <div>
              <span className="text-[#00000066]">Phone: </span>
              <span className="text-black">{formik.values.contactNumber}</span>
            </div>
            <div>
              <span className="text-[#00000066]">Date of Birth: </span>
              <span className="text-black">{formik.values.dateOfBirth}</span>
            </div>
            <div className="md:col-span-2">
              <span className="text-[#00000066]">Address: </span>
              <span className="text-black">{formik.values.currentAddress}</span>
            </div>
          </div>
        </div>

        {/* Tenancy Details Summary */}
        <div className="bg-[#F9F9FA] rounded-2xl p-6">
          <h2 className="text-sm font-semibold text-black mb-4">Tenancy Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-[#00000066]">Move-in Date: </span>
              <span className="text-black">{formik.values.desiredMoveInDate}</span>
            </div>
            <div>
              <span className="text-[#00000066]">Tenancy Length: </span>
              <span className="text-black">{formik.values.preferredTenancyLength}</span>
            </div>
            <div>
              <span className="text-[#00000066]">Property: </span>
              <span className="text-black">{propertyAddress}</span>
            </div>
            <div>
              <span className="text-[#00000066]">Number of Tenants: </span>
              <span className="text-black">{formik.values.numberOfTenants}</span>
            </div>
          </div>
        </div>

        {/* Employment & Income Summary */}
        <div className="bg-[#F9F9FA] rounded-2xl p-6">
          <h2 className="text-sm font-semibold text-black mb-4">Employment & Income</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-[#00000066]">Employment Status: </span>
              <span className="text-black">{formik.values.employmentStatus}</span>
            </div>
            <div>
              <span className="text-[#00000066]">Monthly Income (Net): </span>
              <span className="text-black">
                {formik.values.monthlyIncomeNet
                  ? `£${parseFloat(formik.values.monthlyIncomeNet).toLocaleString()}`
                  : "N/A"}
              </span>
            </div>
            {formik.values.jobTitle && (
              <div>
                <span className="text-[#00000066]">Job Title: </span>
                <span className="text-black">{formik.values.jobTitle}</span>
              </div>
            )}
            {formik.values.employerName && (
              <div>
                <span className="text-[#00000066]">Employer: </span>
                <span className="text-black">{formik.values.employerName}</span>
              </div>
            )}
          </div>
        </div>

        {/* Uploaded Documents Summary */}
        <div className="bg-[#F9F9FA] rounded-2xl p-6">
          <h2 className="text-sm font-semibold text-black mb-4">Uploaded Documents</h2>
          <div className="space-y-2 text-sm">
            {formik.values.proofOfIdFile && (
              <div>
                <span className="text-[#00000066]">Proof of ID: </span>
                <span className="text-black">{formik.values.proofOfIdFile[0].name}</span>
              </div>
            )}
            {formik.values.proofOfAddressFile && (
              <div>
                <span className="text-[#00000066]">Proof of Address: </span>
                <span className="text-black">{formik.values.proofOfAddressFile[0].name}</span>
              </div>
            )}
            {formik.values.payslipsFiles.length > 0 && (
              <div>
                <span className="text-[#00000066]">Payslips: </span>
                <span className="text-black">{formik.values.payslipsFiles.length} file(s)</span>
              </div>
            )}
            {formik.values.bankStatementsFiles.length > 0 && (
              <div>
                <span className="text-[#00000066]">Bank Statements: </span>
                <span className="text-black">
                  {formik.values.bankStatementsFiles.length} file(s)
                </span>
              </div>
            )}
            {formik.values.additionalProofOfIncomeFiles.length > 0 && (
              <div>
                <span className="text-[#00000066]">Additional Income Proof: </span>
                <span className="text-black">
                  {formik.values.additionalProofOfIncomeFiles.length} file(s)
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <Button
            type="button"
            disabled = {ApplyPropertyMutation?.isPending || Object.keys(formik.errors).length > 0}
            onClick={onSubmit}
            classname={`w-full bg-black text-white text-sm disabled:cursor-not-allowed disabled:bg-gray-300 font-[400] rounded-lg py-3 px-4`}
            text="Submit Application"
          />
        </div>
      </div>
    </div>
  );
}







