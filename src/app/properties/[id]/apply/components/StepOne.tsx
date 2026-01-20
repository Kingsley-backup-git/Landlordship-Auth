"use client";
import React from "react";
import { FormikProps } from "formik";
import { ApplicationFormValues } from "../page";

export default function StepOne({
  formik,
}: {
  formik: FormikProps<ApplicationFormValues>;
}) {
  return (
    <div>
      <h1 className="text-xl sm:text-2xl font-semibold text-black mb-8">1. Personal Information</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* First Name */}
        <div>
          <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
            First Name <span className="text-red-500">*</span>
          </label>
          <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
            <input
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter first name"
              className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
            />
          </div>
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red-500 text-sm mt-2 font-medium">{formik.errors.firstName}</div>
          )}
        </div>

        {/* Middle Name */}
        <div>
          <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
            Middle Name
          </label>
          <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
            <input
              type="text"
              name="middleName"
              value={formik.values.middleName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter middle name"
              className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
            />
          </div>
        </div>

        {/* Last Name */}
        <div>
          <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
            Last Name <span className="text-red-500">*</span>
          </label>
          <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
            <input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter last name"
              className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
            />
          </div>
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="text-red-500 text-sm mt-2 font-medium">{formik.errors.lastName}</div>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
            <input
              type="date"
              name="dateOfBirth"
              value={formik.values.dateOfBirth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              max={new Date(new Date().setFullYear(new Date().getFullYear() - 18))
                .toISOString()
                .split("T")[0]}
              className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
            />
          </div>
          <p className="text-sm text-black/70 mt-2 font-[400]">Must be 18 years or older</p>
          {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
            <div className="text-red-500 text-sm mt-2 font-medium">{formik.errors.dateOfBirth}</div>
          )}
        </div>

        {/* Nationality */}
        <div>
          <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
            Nationality <span className="text-red-500">*</span>
          </label>
          <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
            <input
              type="text"
              name="nationality"
              value={formik.values.nationality}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter nationality"
              className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
            />
          </div>
          {formik.touched.nationality && formik.errors.nationality && (
            <div className="text-red-500 text-sm mt-2 font-medium">{formik.errors.nationality}</div>
          )}
        </div>

        {/* National Insurance Number */}
        <div>
          <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
            National Insurance Number
          </label>
          <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
            <input
              type="text"
              name="nationalInsuranceNumber"
              value={formik.values.nationalInsuranceNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter NI number"
              className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
            />
          </div>
          <p className="text-sm text-black/70 mt-2 font-[400]">
            Optional, used for verification
          </p>
        </div>

        {/* Contact Number */}
        <div>
          <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
            <input
              type="tel"
              name="contactNumber"
              value={formik.values.contactNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter contact number"
              className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
            />
          </div>
          {formik.touched.contactNumber && formik.errors.contactNumber && (
            <div className="text-red-500 text-sm mt-2 font-medium">{formik.errors.contactNumber}</div>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
            <input
              type="email"
              name="emailAddress"
              value={formik.values.emailAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter email address"
              className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
            />
          </div>
          {formik.touched.emailAddress && formik.errors.emailAddress && (
            <div className="text-red-500 text-sm mt-2 font-medium">{formik.errors.emailAddress}</div>
          )}
        </div>
      </div>

      {/* Current Address Section */}
      <div className="mt-10 pt-8 border-t border-[#0000000A]">
        <h2 className="text-lg sm:text-xl font-semibold text-black mb-6">Current Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Full Address */}
          <div className="md:col-span-2">
            <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
              Full Address <span className="text-red-500">*</span>
            </label>
            <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
              <textarea
                name="currentAddress"
                value={formik.values.currentAddress}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter full address"
                rows={3}
                className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0 resize-none"
              />
            </div>
            {formik.touched.currentAddress && formik.errors.currentAddress && (
              <div className="text-red-500 text-sm mt-2 font-medium">{formik.errors.currentAddress}</div>
            )}
          </div>

          {/* Post Code */}
          <div>
            <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
              Post Code <span className="text-red-500">*</span>
            </label>
            <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
              <input
                type="text"
                name="postCode"
                value={formik.values.postCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter post code"
                className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
              />
            </div>
            {formik.touched.postCode && formik.errors.postCode && (
              <div className="text-red-500 text-sm mt-2 font-medium">{formik.errors.postCode}</div>
            )}
          </div>

          {/* Time at Current Address */}
          {/* <div>
            <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
              Time at Current Address
            </label>
            <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
              <input
                type="text"
                name="timeAtCurrentAddress"
                value={formik.values.timeAtCurrentAddress}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="e.g., 2 years 6 months"
                className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
              />
            </div>
          </div> */}

          {/* Reason for Leaving */}
          <div className="md:col-span-2">
            <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
              Reason for Leaving
            </label>
            <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
              <textarea
                name="reasonForLeaving"
                value={formik.values.reasonForLeaving}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter reason for leaving"
                rows={2}
                className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0 resize-none"
              />
            </div>
          </div>

          {/* Previous Address */}
          <div className="md:col-span-2">
            <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
              Previous Address (if less than 3 years at current address)
            </label>
            <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
              <textarea
                name="previousAddress"
                value={formik.values.previousAddress}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter previous address"
                rows={3}
                className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0 resize-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

