"use client";
import React, { useEffect, useState } from "react";
import GeneralInfo from "./components/GeneralInformation/generalInfo";
import PropertyType from "./components/PropertyType/propertyType";
import PropertyDetails from "./components/PropertyDetails/propertyDetails";
import PropertyFeature from "./components/PropertyFeatures/propertyFeature";
import PropertyAmenities from "./components/PropertyAmenities/propertyAmenity";
import UploadAttachment from "./components/UploadAttachments/uploadAttachment";
import Button from "@/app/components/ui/Button";
import Completed from "./components/completed";
import { useFormik } from "formik";
import * as Yup from "yup";
import useCreateProperty from "@/hooks/property/useCreateProperty";
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
}
export default function CreateProperty({
  stepHandler,
}: {
  stepHandler: (num: number) => void;
}) {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const { doCreateProperty, createPropertyMutation } = useCreateProperty();
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
    onSubmit: async (values, { resetForm, setValues }) => {
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

      await doCreateProperty(formData);
      resetForm({ values: propertydata });
      setValues({ ...propertydata });
    },
  });
  useEffect(() => {
    if (createPropertyMutation.isSuccess) {
      setIsCompleted(true);
      formik.resetForm({ values: propertydata });
      formik.setValues({ ...propertydata });
    }
  }, [createPropertyMutation.isSuccess]);

  function propertyTypeHandler(val: string) {
    formik.setFieldValue("propertyType", val);
  }
  function createPropertyHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    formik.handleSubmit();
  }
  function closeMoodal() {
    setIsCompleted(false);
  }

  const disabled = createPropertyMutation.isPending;

  return (
    <form className="py-10 px-6">
      <GeneralInfo formik={formik} />
      <PropertyType formik={formik} propertyTypeHandler={propertyTypeHandler} />

      <PropertyDetails />

      <PropertyFeature formik={formik} />

      <PropertyAmenities formik={formik} />

      <UploadAttachment formik={formik} />

      <div className="p-4 rounded-2xl bg-[#F9F9FA] flex justify-end mt-6 gap-x-4">
        <Button
          type="button"
          onClick={() => stepHandler(-1)}
          classname=" bg-transparent border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-lg py-2 px-4 mt-4"
          text="Cancel"
        />

        <Button
          disabled={disabled}
          type="submit"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            createPropertyHandler(e)
          }
          classname={` ${disabled || Object.keys(formik.errors).length > 0 ? "bg-gray-400 cursor-not-allowed" : "bg-black cursor-pointer"}text-white  text-sm font-[400]  rounded-lg py-1 px-2 mt-4`}
          text="Create"
        />
      </div>
      {isCompleted ? (
        <Completed closeMoodal={closeMoodal} stepHandler={stepHandler} />
      ) : null}
    </form>
  );
}
