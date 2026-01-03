"use client";
import React, { useState } from "react";
import { use } from "react";
import GeneralInfo from "@/app/dashboard/components/Modal/property/create/components/GeneralInformation/generalInfo";
import PropertyType from "@/app/dashboard/components/Modal/property/create/components/PropertyType/propertyType";
import PropertyDetails from "@/app/dashboard/components/Modal/property/create/components/PropertyDetails/propertyDetails";
import UploadAttachment from "@/app/dashboard/components/Modal/property/create/components/UploadAttachments/uploadAttachment";
import Button from "@/app/components/ui/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

interface PropertyFormValues {
  propertyName: string;
  yearBuilt: number;
  uniqueId: string;
  stateAddress: string;
  city: string;
  region: string;
  zip: string;
  country: string;
  propertyType?: "individual" | "multi-unit";
  amenities?: string[];
  features?: string[];
  attachments?: File[];
  description?: string;
}

export default function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { push } = useRouter();
  const [propertydata] = useState<PropertyFormValues>({
    propertyName: "",
    yearBuilt: 0,
    uniqueId: "",
    stateAddress: "",
    city: "",
    region: "",
    zip: "",
    country: "",
    propertyType: "individual",
    amenities: [],
    features: [],
    attachments: [],
    description: "",
  });

  const propertyValidationSchema = Yup.object().shape({
    propertyName: Yup.string()
      .required("Property name is required")
      .min(3, "Property name must be at least 3 characters"),

    yearBuilt: Yup.number()
      .typeError("Year built must be a number")
      .required("Year built is required")
      .min(1700, "Year must be after 1700")
      .max(new Date().getFullYear(), "Year can't be in the future"),

    uniqueId: Yup.string().required("Unique ID is required"),

    stateAddress: Yup.string().required("State address is required"),

    city: Yup.string().required("City is required"),

    region: Yup.string().required("Region is required"),

    zip: Yup.string()
      .required("ZIP code is required")
      .matches(/^[0-9A-Za-z\s\-]{3,10}$/, "Invalid ZIP/postal code"),

    country: Yup.string().required("Country is required"),

    propertyType: Yup.string()
      .oneOf(["individual", "multi-unit"], "Invalid property type")
      .required("Property type is required"),

    amenities: Yup.array()
      .of(Yup.string())
      .min(1, "Select at least one amenity"),

    features: Yup.array()
      .of(Yup.string())
      .min(1, "Select at least one feature")
  });

  const formik = useFormik<PropertyFormValues>({
    initialValues: propertydata,
    validationSchema: propertyValidationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      if (formData) {
        formData.append("propertyName", values.propertyName);
        formData.append("yearBuilt", values.yearBuilt.toString());
        formData.append("uniqueId", values.uniqueId);
        formData.append("stateAddress", values.stateAddress);
        formData.append("city", values.city);
        formData.append("region", values.region);
        formData.append("zip", values.zip);
        formData.append("country", values.country);

        if (values.description) {
          formData.append("description", values.description);
        }

        if (
          values.propertyType === "individual" ||
          values.propertyType === "multi-unit"
        ) {
          formData.append("propertyType", values.propertyType);
        }
        values.amenities?.forEach((item) => {
          formData.append("amenities", item);
        });

        values.features?.forEach((item) => {
          formData.append(`features`, item);
        });
        if (values.attachments !== undefined) {
          values.attachments.forEach((file) => {
            formData.append("attachments", file);
          });
        }
      }

      // TODO: Implement update property API call
      // await doUpdateProperty(id, formData);
      console.log("Updating property with id:", id, formData);
    },
  });

  function propertyTypeHandler(val: string) {
    formik.setFieldValue("propertyType", val);
  }

  function editPropertyHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    formik.handleSubmit();
  }

  function cancelHandler() {
    push("/dashboard/properties");
  }

  const disabled = false; // TODO: Set based on update mutation pending state

  return (
    <form className="py-10 px-6">
        <h1 className="font-semibold text-sm text-black mb-4">Property Details</h1>
      <GeneralInfo formik={formik} />
      <PropertyType formik={formik} propertyTypeHandler={propertyTypeHandler} />

      <PropertyDetails formik={formik} />

      {/* Applications Section */}
      <div className="bg-[#F9F9FA] p-6 rounded-2xl mt-6">
        <h1 className="font-semibold text-sm text-black mb-6">Applications</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {/* Total Applications */}
          <div className="bg-[#E6F1FD] rounded-2xl p-4">
            <div className="flex items-center">
              <h1 className="text-xs text-black font-[400] flex-1">Total Applications</h1>
        
            </div>
            <h1 className="sm:text-xl text-base mt-4 font-semibold text-black">12</h1>
          </div>

          {/* Pending Review */}
          <div className="bg-[#E6F1FD] rounded-2xl p-4">
            <div className="flex items-center">
              <h1 className="text-xs text-black font-[400] flex-1">Pending Review</h1>
              <div className="w-[10px] h-[10px] rounded-full bg-[#FFDB56]"></div>
            </div>
            <h1 className="sm:text-xl text-base mt-4 font-semibold text-black">4</h1>
          </div>

          {/* Approved */}
          <div className="bg-[#E6F1FD] rounded-2xl p-4">
            <div className="flex items-center">
              <h1 className="text-xs text-black font-[400] flex-1">Approved</h1>
              <div className="w-[10px] h-[10px]  rounded-full bg-green-500"></div>
            </div>
            <h1 className="sm:text-xl text-base mt-4 font-semibold text-black">6</h1>
          </div>

          {/* Rejected */}
          <div className="bg-[#E6F1FD] rounded-2xl p-4">
            <div className="flex items-center">
              <h1 className="text-xs text-black font-[400] flex-1">Rejected</h1>
              <div className="w-[10px] h-[10px] rounded-full bg-red-600"></div>
            </div>
            <h1 className="sm:text-xl text-base mt-4 font-semibold text-black">2</h1>
          </div>
        </div>
      </div>

{/* 
      <PropertyFeature formik={formik} />

      <PropertyAmenities formik={formik} /> */}

      <UploadAttachment formik={formik} />

      <div className="p-4 rounded-2xl bg-[#F9F9FA] flex justify-end mt-6 gap-x-4">
        <Button
          type="button"
          onClick={cancelHandler}
          classname=" bg-transparent border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-lg py-2 px-4 mt-4"
          text="Cancel"
        />

        <Button
          disabled={disabled}
          type="submit"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            editPropertyHandler(e)
          }
          classname={` ${disabled || Object.keys(formik.errors).length > 0 ? "bg-gray-400 cursor-not-allowed" : "bg-black cursor-pointer"}text-white  text-sm font-[400]  rounded-lg py-1 px-2 mt-4`}
          text="Edit"
        />
      </div>
    </form>
  );
}
