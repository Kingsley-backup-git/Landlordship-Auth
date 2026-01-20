import React from "react";
import TextField from "../form/TextField";
import ZipCode from "../form/ZipCodeField";
import Dropdown from "../form/Dropdown";
import { FormikProps } from "formik";
import { PropertyFormValues } from "@/types/auth/formik";


export default function GeneralInfo({
  formik,
}: {
  formik: FormikProps<PropertyFormValues>;
}) {
  return (
    <div className="bg-[#F9F9FA] rounded-2xl p-6">
      <h1 className="text-sm text-black font-semibold">General Information</h1>

      <div className="grid grid-cols-4 gap-6 mt-6">
        <TextField
          className=" bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl"
          type="text"
          name="propertyName"
          text="Property Name"
          onChange={formik.handleChange}
          touched={formik.touched.propertyName}
          value={formik.values.propertyName}
          error={formik.errors.propertyName}
          onBlur={formik.handleBlur}
          placeholder="Property name"
        />

        <TextField
          className="col-span-1 bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl"
          text="Year built"
          type="number"
          name="year_built"
          min="1800"
          touched={formik.touched. year_built}
          value={formik.values. year_built}
          error={formik.errors. year_built}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          max={new Date().getFullYear()}
          pattern="^\d*$"
          placeholder="1990"
        />

        
        <TextField
          className="col-span-1 bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl"
          text="Renovation year"
          type="number"
          name="renovation_year"
          min="1800"
          touched={formik.touched.renovation_year}
          value={formik.values.renovation_year}
          error={formik.errors.renovation_year}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          max={new Date().getFullYear()}
          pattern="^\d*$"
          placeholder="1990"
        />

      

        <TextField
          className="col-span-2 col-start-1 col-end-3  bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl"
          type="text"
          name="address"
          onChange={formik.handleChange}
          touched={formik.touched.address}
          value={formik.values.address}
          error={formik.errors.address}
          onBlur={formik.handleBlur}
          text="State Address"
          placeholder="95A Gate 65,Leicester, LE4"
        />

        <TextField
          className="col-span-2 col-start-3 col-end-5  bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl"
          type="text"
          name="city"
          touched={formik.touched.city}
          error={formik.errors.city}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          text="City"
          value={formik.values.city}
          placeholder="Enter city"
        />

        <TextField
          className="col-span-1  bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl"
          type="text"
          text="State/Region"
          touched={formik.touched.state}
          error={formik.errors.state}
          onBlur={formik.handleBlur}
          name="state"
          onChange={formik.handleChange}
          value={formik.values.state}
          placeholder="Enter city"
        />

        <ZipCode
          className="col-span-1  bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.postalcode}
          touched={formik.touched.postalcode}
          error={formik.errors.postalcode}
          onBlur={formik.handleBlur}
          name="postalcode"
          text="Zip"
          placeholder="Enter Zip/Postal code"
        />

        <Dropdown
          touched={formik.touched.country}
          error={formik.errors.country}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.country}
          text="Country"
          name="country"
          className="col-span-2  bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl"
        />


         <TextField
          className="col-span-1 bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl"
          text="Last Appraisal date"
          type="date"
          name="last_appraisal_date"
          touched={formik.touched.last_appraisal_date}
          value={formik.values.last_appraisal_date as unknown as string}
          error={formik.errors.last_appraisal_date}
          onBlur={formik.handleBlur}
          placeholder=""
          onChange={formik.handleChange}
        
        
          
        />

      </div>
    </div>
  );
}
