"use client";
import React from "react";
import { FormikProps } from "formik";
import { ApplicationFormValues } from "../page";

export default function StepSix({
  formik,
}: {
  formik: FormikProps<ApplicationFormValues>;
}) {
  return (
    <div>
      <h1 className="text-lg font-semibold text-black mb-6">6. References</h1>

      <div className="space-y-8">
        {/* Current/Most Recent Landlord */}
        <div>
          <h2 className="text-base font-semibold text-black mb-4">
            Current/Most Recent Landlord
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-gray-500 text-xs font-normal block mb-2">
                Landlord/Agent Name
              </label>
              <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5">
                <input
                  type="text"
                  name="currentLandlordName"
                  value={formik.values.currentLandlordName}
                  onChange={formik.handleChange}
                  placeholder="Enter landlord/agent name"
                  className="w-full py-1 text-black text-sm placeholder:text-[#00000033] placeholder:opacity-70 rounded-lg outline-none border-0"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-500 text-xs font-normal block mb-2">
                Contact Email/Phone
              </label>
              <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5">
                <input
                  type="text"
                  name="currentLandlordContact"
                  value={formik.values.currentLandlordContact}
                  onChange={formik.handleChange}
                  placeholder="Enter contact details"
                  className="w-full py-1 text-black text-sm placeholder:text-[#00000033] placeholder:opacity-70 rounded-lg outline-none border-0"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-500 text-xs font-normal block mb-2">
                  Duration of Tenancy
                </label>
                <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5">
                  <input
                    type="text"
                    name="currentLandlordDuration"
                    value={formik.values.currentLandlordDuration}
                    onChange={formik.handleChange}
                    placeholder="e.g., 2 years"
                    className="w-full py-1 text-black text-sm placeholder:text-[#00000033] placeholder:opacity-70 rounded-lg outline-none border-0"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-500 text-xs font-normal block mb-2">
                  Rent Amount Paid
                </label>
                <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5">
                  <input
                    type="number"
                    name="currentLandlordRentAmount"
                    value={formik.values.currentLandlordRentAmount}
                    onChange={formik.handleChange}
                    placeholder="Enter rent amount"
                    className="w-full py-1 text-black text-sm placeholder:text-[#00000033] placeholder:opacity-70 rounded-lg outline-none border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Landlord */}
        <div className="pt-4 border-t border-[#0000000A]">
          <h2 className="text-base font-semibold text-black mb-4">
            Previous Landlord (if applicable)
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-gray-500 text-xs font-normal block mb-2">
                Landlord/Agent Name
              </label>
              <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5">
                <input
                  type="text"
                  name="previousLandlordName"
                  value={formik.values.previousLandlordName}
                  onChange={formik.handleChange}
                  placeholder="Enter landlord/agent name"
                  className="w-full py-1 text-black text-sm placeholder:text-[#00000033] placeholder:opacity-70 rounded-lg outline-none border-0"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-500 text-xs font-normal block mb-2">
                Contact Email/Phone
              </label>
              <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5">
                <input
                  type="text"
                  name="previousLandlordContact"
                  value={formik.values.previousLandlordContact}
                  onChange={formik.handleChange}
                  placeholder="Enter contact details"
                  className="w-full py-1 text-black text-sm placeholder:text-[#00000033] placeholder:opacity-70 rounded-lg outline-none border-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Personal/Character Reference */}
        <div className="pt-4 border-t border-[#0000000A]">
          <h2 className="text-base font-semibold text-black mb-4">
            Personal/Character Reference (Optional)
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-500 text-xs font-normal block mb-2">
                  Reference Name
                </label>
                <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5">
                  <input
                    type="text"
                    name="personalReferenceName"
                    value={formik.values.personalReferenceName}
                    onChange={formik.handleChange}
                    placeholder="Enter reference name"
                    className="w-full py-1 text-black text-sm placeholder:text-[#00000033] placeholder:opacity-70 rounded-lg outline-none border-0"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-500 text-xs font-normal block mb-2">
                  Relationship
                </label>
                <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5">
                  <input
                    type="text"
                    name="personalReferenceRelationship"
                    value={formik.values.personalReferenceRelationship}
                    onChange={formik.handleChange}
                    placeholder="Enter relationship"
                    className="w-full py-1 text-black text-sm placeholder:text-[#00000033] placeholder:opacity-70 rounded-lg outline-none border-0"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-500 text-xs font-normal block mb-2">
                  Contact Email/Phone
                </label>
                <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5">
                  <input
                    type="text"
                    name="personalReferenceContact"
                    value={formik.values.personalReferenceContact}
                    onChange={formik.handleChange}
                    placeholder="Enter contact details"
                    className="w-full py-1 text-black text-sm placeholder:text-[#00000033] placeholder:opacity-70 rounded-lg outline-none border-0"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-500 text-xs font-normal block mb-2">
                  Years Known
                </label>
                <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5">
                  <input
                    type="text"
                    name="personalReferenceYearsKnown"
                    value={formik.values.personalReferenceYearsKnown}
                    onChange={formik.handleChange}
                    placeholder="Enter years known"
                    className="w-full py-1 text-black text-sm placeholder:text-[#00000033] placeholder:opacity-70 rounded-lg outline-none border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

