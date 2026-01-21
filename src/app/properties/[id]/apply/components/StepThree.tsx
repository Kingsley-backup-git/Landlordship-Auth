"use client";
import React from "react";
import { FormikProps } from "formik";
import { ApplicationFormValues } from "../page";
import FileUpload from "./FileUpload";
import { LuChevronsUpDown } from "react-icons/lu";

export default function StepThree({
  formik,
}: {
  formik: FormikProps<ApplicationFormValues>;
}) {
  return (
    <div>
      <h1 className="text-xl sm:text-2xl font-semibold text-black mb-8">3. Employment & Income Details</h1>

      <div className="space-y-6 lg:space-y-8">
        {/* Employment Status */}
        <div>
          <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
            Employment Status <span className="text-red-500">*</span>
          </label>
          <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 relative hover:border-black/20 transition-colors">
            <select
              name="employmentStatus"
              value={formik.values.employmentStatus}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full appearance-none text-sm sm:text-base py-1 outline-none border-0 text-black bg-transparent"
            >
              <option value="">Select employment status</option>
              <option value="employed_fulltime">Employed Fulltime</option>
                 <option value="employed_partime">Employed Fulltime</option>
              <option value="self_employed">Self-Employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="student">Student</option>
              <option value="retired">Retired</option>
            
            </select>
            <LuChevronsUpDown className="absolute pointer-events-none top-[20px] sm:top-[24px] right-5 sm:right-6 text-black/50" />
          </div>
          {formik.touched.employmentStatus && formik.errors.employmentStatus && (
            <div className="text-red-500 text-sm mt-2 font-medium">{formik.errors.employmentStatus}</div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Job Title */}
          <div>
            <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">Job Title</label>
            <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
              <input
                type="text"
                name="jobTitle"
                value={formik.values.jobTitle}
                onChange={formik.handleChange}
                placeholder="Enter job title"
                className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
              />
            </div>
          </div>

          {/* Employer Name */}
          <div>
            <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
              Employer Name
            </label>
            <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
              <input
                type="text"
                name="employerName"
                value={formik.values.employerName}
                onChange={formik.handleChange}
                placeholder="Enter employer name"
                className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
              />
            </div>
          </div>
        </div>

        {/* Employer Address */}
        <div>
          <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
            Employer Address
          </label>
          <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
            <textarea
              name="employerAddress"
              value={formik.values.employerAddress}
              onChange={formik.handleChange}
              placeholder="Enter employer address"
              rows={3}
              className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0 resize-none"
            />
          </div>
        </div>

        {/* Employer Contact */}
        <div>
          <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
            Employer Contact
          </label>
          <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
            <input
              type="text"
              name="employerContact"
              value={formik.values.employerContact}
              onChange={formik.handleChange}
              placeholder="Enter employer contact"
              className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
            />
          </div>
        </div>

        {/* Length of Employment */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">Years</label>
            <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
              <input
                type="number"
                name="lengthOfEmploymentYears"
                value={formik.values.lengthOfEmploymentYears}
                onChange={formik.handleChange}
                placeholder="Years"
                className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
              />
            </div>
          </div>
          <div>
            <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">Months</label>
            <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
              <input
                type="number"
                name="lengthOfEmploymentMonths"
                value={formik.values.lengthOfEmploymentMonths}
                onChange={formik.handleChange}
                placeholder="Months"
                className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
              />
            </div>
          </div>
        </div>

        {/* Income Information Section */}
        <div className="pt-6 border-t border-[#0000000A]">
          <h2 className="text-lg sm:text-xl font-semibold text-black mb-6">Income Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Monthly Income (Net) */}
            <div>
              <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
                Monthly Income (Net) <span className="text-red-500">*</span>
              </label>
              <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
                <input
                     type="text"
              
                  name="monthlyIncomeNet"
                  value={formik.values.monthlyIncomeNet}
                  onChange={(e) => {
                        const onlyNumbers = e.target.value.replace(/\D/g, "");
    formik.setFieldValue("monthlyIncomeNet", onlyNumbers);
                  }
                 
                  }
                  onBlur={formik.handleBlur}
                  placeholder="Enter monthly income"
                  className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
                />
              </div>
              <p className="text-sm text-black/70 mt-2 font-[400]">After tax and deductions</p>
              {formik.touched.monthlyIncomeNet && formik.errors.monthlyIncomeNet && (
                <div className="text-red-500 text-sm mt-2 font-medium">
                  {formik.errors.monthlyIncomeNet}
                </div>
              )}
            </div>

            {/* Annual Income (Gross) */}
            <div>
              <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
                Annual Income (Gross)
              </label>
              <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
                <input
                  type="text"
                  pattern="[0-9]*"
                  onBlur={formik.handleBlur}
                  name="annualIncomeGross"
                  value={formik.values.annualIncomeGross}
                   onChange={(e) => {
                        const onlyNumbers = e.target.value.replace(/\D/g, "");
    formik.setFieldValue("annualIncomeGross", onlyNumbers);
                  }
                 
                  }
                  placeholder="Enter annual income"
                  className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
                />
              </div>
              <p className="text-sm text-black/70 mt-2 font-[400]">Gross annual income</p>
                {formik.touched.annualIncomeGross && formik.errors.annualIncomeGross && (
                <div className="text-red-500 text-sm mt-2 font-medium">
                  {formik.errors.annualIncomeGross}
                </div>
              )}
            </div>
          </div>

          {/* Upload Payslips */}
          <div className="mt-6">
            <FileUpload
              label="Upload Recent Payslips (Last 3 months)"
              accept="image/*,.pdf"
              multiple
              files={formik.values.payslipsFiles}
              onChange={(files) => formik.setFieldValue("payslipsFiles", files)}
            />
          </div>

          {/* Upload Bank Statements */}
          <div className="mt-6">
            <FileUpload
              label="Upload Bank Statements (Last 3 months)"
              accept="image/*,.pdf"
              multiple
              files={formik.values.bankStatementsFiles}
              onChange={(files) => formik.setFieldValue("bankStatementsFiles", files)}
            />
          </div>

          {/* Accountant Contact (if self-employed) */}
          {/* {formik.values.employmentStatus === "self-employed" && (
            <div className="mt-8 pt-6 border-t border-[#0000000A] space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-black">Accountant Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                <div>
                  <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">Name</label>
                  <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
                    <input
                      type="text"
                      name="accountantName"
                      value={formik.values.accountantName}
                      onChange={formik.handleChange}
                      placeholder="Accountant name"
                      className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">Email</label>
                  <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
                    <input
                      type="email"
                      name="accountantEmail"
                      value={formik.values.accountantEmail}
                      onChange={formik.handleChange}
                      placeholder="Accountant email"
                      className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">Phone</label>
                  <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
                    <input
                      type="tel"
                      name="accountantPhone"
                      value={formik.values.accountantPhone}
                      onChange={formik.handleChange}
                      placeholder="Accountant phone"
                      className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}

