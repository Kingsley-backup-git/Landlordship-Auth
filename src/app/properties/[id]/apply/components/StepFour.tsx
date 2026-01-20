"use client";
import React from "react";
import { FormikProps } from "formik";
import { ApplicationFormValues } from "../page";
import { LuChevronsUpDown } from "react-icons/lu";

export default function StepFour({
  formik,
  data
}: {
    formik: FormikProps<ApplicationFormValues>;
    data: {
      Properties: {
        property_value : string
    }
  }
}) {
  // Dummy property list
  const properties = [
    "Sunset Apartments - Unit 4B",
    "Downtown Loft - Unit 2A",
    "Garden View Condo - Unit 5C",
    "Riverside Villa - Unit 1",
    "City Center Apartment - Unit 3B",
  ];

  return (
    <div>
      <h1 className="text-xl sm:text-2xl font-semibold text-black mb-8">4. Tenancy Details</h1>

      <div className="space-y-6 lg:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Desired Move-in Date */}
          <div>
            <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
              Desired Move-in Date <span className="text-red-500">*</span>
            </label>
            <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
              <input
                type="date"
                name="desiredMoveInDate"
                value={formik.values.desiredMoveInDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                min={new Date().toISOString().split("T")[0]}
              className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
            />
          </div>
          {formik.touched.desiredMoveInDate && formik.errors.desiredMoveInDate && (
            <div className="text-red-500 text-sm mt-2 font-medium">{formik.errors.desiredMoveInDate}</div>
          )}
        </div>

          {/* Preferred Tenancy Length */}
          <div>
            <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
              Preferred Tenancy Length <span className="text-red-500">*</span>
            </label>
            <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 relative hover:border-black/20 transition-colors">
              <select
                name="preferredTenancyLength"
                value={formik.values.preferredTenancyLength}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full appearance-none text-sm py-1 outline-none border-0 text-black bg-transparent"
              >
                <option value="">Select length</option>
                <option value="6-months">6 months</option>
                <option value="12-months">12 months</option>
                <option value="18-months">18 months</option>
                <option value="24-months">24 months</option>
                <option value="other">Other</option>
              </select>
              <LuChevronsUpDown className="absolute pointer-events-none top-[20px] sm:top-[24px] right-5 sm:right-6 text-black/50" />
            </div>
            {formik.touched.preferredTenancyLength && formik.errors.preferredTenancyLength && (
              <div className="text-red-500 text-sm mt-2 font-medium">
                {formik.errors.preferredTenancyLength}
              </div>
            )}
          </div>
        </div>

        {/* Property Address */}
        {/* <div>
          <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
            Property Address <span className="text-red-500">*</span>
          </label>
          <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 relative hover:border-black/20 transition-colors">
            <select
              name="propertyAddress"
              value={formik.values.propertyAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full appearance-none text-sm sm:text-base py-1 outline-none border-0 text-black bg-transparent"
            >
              <option value="">Select property</option>
              {properties.map((prop, idx) => (
                <option key={idx} value={prop}>
                  {prop}
                </option>
              ))}
            </select>
            <LuChevronsUpDown className="absolute pointer-events-none top-[20px] sm:top-[24px] right-5 sm:right-6 text-black/50" />
          </div>
          {formik.touched.propertyAddress && formik.errors.propertyAddress && (
            <div className="text-red-500 text-sm mt-2 font-medium">{formik.errors.propertyAddress}</div>
          )}
        </div> */}

        {/* Monthly Rent */}
        <div>
          <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">Monthly Rent</label>
          <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
            <input
              type="text"
              name="monthlyRent"
              readOnly
              value={data.Properties.property_value}
          
              placeholder="Enter monthly rent"
              className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
            />
          </div>
        </div>

        {/* Number of Tenants */}
        <div>
          <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
            Number of Tenants <span className="text-red-500">*</span>
          </label>
          <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
            <input
              type="number"
              name="numberOfTenants"
              value={formik.values.numberOfTenants}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter number of tenants"
              min="1"
              className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0"
            />
          </div>
          <p className="text-sm text-black/70 mt-2 font-[400]">Including yourself</p>
          {formik.touched.numberOfTenants && formik.errors.numberOfTenants && (
            <div className="text-red-500 text-sm mt-2 font-medium">{formik.errors.numberOfTenants}</div>
          )}
        </div>

        {/* Co-tenants Names */}
        {parseInt(formik.values.numberOfTenants) > 1 && (
          <div>
            <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
              Names of Co-tenants
            </label>
            <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
              <textarea
                name="coTenantsNames"
                value={formik.values.coTenantsNames}
                onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                placeholder="Full names and relationship"
                rows={3}
                className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0 resize-none"
              />
            </div>
             {formik.touched.coTenantsNames && formik.errors.coTenantsNames && (
            <div className="text-red-500 text-sm mt-2 font-medium">{formik.errors.coTenantsNames}</div>
          )}
          </div>
        )}

        {/* Radio Groups */}
        <div className="space-y-6 pt-6 border-t border-[#0000000A]">
          {/* Pets */}
          <div>
            <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
              Do you have pets?
            </label>
            <div className="flex gap-x-6">
              <label className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="hasPets"
                  value="yes"
                  checked={formik.values.hasPets === "yes"}
                  onChange={formik.handleChange}
                  className="w-4 h-4 text-black"
                />
                <span className="text-sm sm:text-base text-black font-medium">Yes</span>
              </label>
              <label className="flex items-center gap-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="hasPets"
                  value="no"
                  checked={formik.values.hasPets === "no"}
                  onChange={formik.handleChange}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-black cursor-pointer"
                />
                <span className="text-sm sm:text-base text-black font-medium">No</span>
              </label>
            </div>
          </div>

          {/* Smoking */}
          <div>
            <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">Do you smoke?</label>
            <div className="flex gap-x-6">
              <label className="flex items-center gap-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="smokes"
                  value="yes"
                  checked={formik.values.smokes === "yes"}
                  onChange={formik.handleChange}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-black cursor-pointer"
                />
                <span className="text-sm sm:text-base text-black font-medium">Yes</span>
              </label>
              <label className="flex items-center gap-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="smokes"
                  value="no"
                  checked={formik.values.smokes === "no"}
                  onChange={formik.handleChange}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-black cursor-pointer"
                />
                <span className="text-sm sm:text-base text-black font-medium">No</span>
              </label>
            </div>
          </div>

          {/* Parking */}
          <div>
            <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
              Will you require parking?
            </label>
            <div className="flex gap-x-6">
              <label className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="requiresParking"
                  value="yes"
                  checked={formik.values.requiresParking === "yes"}
                  onChange={formik.handleChange}
                  className="w-4 h-4 text-black"
                />
                <span className="text-sm sm:text-base text-black font-medium">Yes</span>
              </label>
              <label className="flex items-center gap-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="requiresParking"
                  value="no"
                  checked={formik.values.requiresParking === "no"}
                  onChange={formik.handleChange}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-black cursor-pointer"
                />
                <span className="text-sm sm:text-base text-black font-medium">No</span>
              </label>
            </div>
          </div>
        </div>

        {/* Special Requests */}
        <div>
          <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
            Any Special Requests or Requirements
          </label>
          <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 sm:py-5 px-5 sm:px-6 hover:border-black/20 transition-colors">
            <textarea
              name="specialRequests"
              value={formik.values.specialRequests}
              onChange={formik.handleChange}
              placeholder="Accessibility needs, furniture requirements etc."
              rows={4}
              className="w-full py-1 text-black text-sm sm:text-base placeholder:text-black/40 rounded-lg outline-none border-0 resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

