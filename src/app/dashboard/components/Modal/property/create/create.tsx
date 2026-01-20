"use client";
import React, { useEffect, useState } from "react";
import GeneralInfo from "./components/GeneralInformation/generalInfo";
import PropertyType from "./components/PropertyType/propertyType";
import PropertyDetails from "./components/PropertyDetails/propertyDetails";
import PropertyFeature from "./components/PropertyFeatures/propertyFeature";
import PropertyAmenities from "./components/PropertyAmenities/propertyAmenity";
import UploadAttachment from "./components/UploadAttachments/uploadAttachment";
import UploadFiles from "./components/UploadAttachments/uploadFiles";
import Button from "@/app/components/ui/Button";
import Completed from "./components/completed";
import { useFormik } from "formik";
import * as Yup from "yup";
import useCreateProperty from "@/hooks/property/useCreateProperty";
import { PropertyFormValues } from "@/types/auth/formik";
export default function CreateProperty({
  stepHandler,
}: {
  stepHandler: (num: number) => void;
}) {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const { doCreateProperty, createPropertyMutation } = useCreateProperty();
  const [propertydata] = useState<PropertyFormValues>({
    propertyName: "",
    year_built: "",
    renovation_year: "",
    address: "",
    city: "",
    state: "",
    postalcode: "",
    country: "",
    propertyType: "apartment",
    square_feet: "",
    bedrooms: "",
    bathrooms: "",
    parkingspaces: "",
    last_appraisal_date: "",
    additional_feature: [],
    property_images: [],
    property_value: "",
    property_documents: null,
    document_name: "Ownership",
    property_description: "",
  });

  const propertyValidationSchema = Yup.object().shape({
    propertyName: Yup.string().trim().required("Property name is required"),

    year_built: Yup.number()
      .typeError("Year built must be a number")
      .min(1800, "Year built is too old")
      .max(new Date().getFullYear(), "Year built cannot be in the future")
      .required("Year built is required"),

    renovation_year: Yup.number()
      .typeError("Renovation year must be a number")
      .min(Yup.ref("year_built"), "Renovation year cannot be before year built")
      .max(new Date().getFullYear(), "Renovation year cannot be in the future")
      .required("Renovation year is required"),

    address: Yup.string().trim().required("Address is required"),

    city: Yup.string().trim().required("City is required"),

    state: Yup.string().trim().required("State is required"),

    postalcode: Yup.string().trim().required("Postal code is required"),

    country: Yup.string().trim().required("Country is required"),

    propertyType: Yup.string()
      .oneOf(
        [
          "apartment",
          "duplex",
          "studio",
          "condominium",
          "serviced-apartment",
          "office",
          "hotel",
          "warehouse",
          "townhouse",
        ],
        "Invalid property type"
      )
      .required("Property type is required"),

    square_feet: Yup.number()
      .typeError("Square feet must be a number")
      .positive("Square feet must be greater than zero")
      .required("Square feet is required"),

    bedrooms: Yup.number()
      .typeError("Bedrooms must be a number")
      .min(0, "Bedrooms cannot be negative")
      .required("Bedrooms is required"),

    bathrooms: Yup.number()
      .typeError("Bathrooms must be a number")
      .min(0, "Bathrooms cannot be negative")
      .required("Bathrooms is required"),

    parkingspaces: Yup.number()
      .typeError("Parking spaces must be a number")
      .min(0, "Parking spaces cannot be negative")
      .required("Parking spaces is required"),

    last_appraisal_date: Yup.date()
      .nullable()
      .max(new Date(), "Appraisal date cannot be in the future"),

    additional_feature: Yup.array().of(Yup.string().trim()).optional(),

    property_images: Yup.array().of(Yup.mixed<File>()).optional(),

    property_documents: Yup.mixed<File>()
      .nullable()
      .required("Property document is required"),

    document_name: Yup.string()
      .oneOf(["Ownership"], "Invalid document name")
      .required(),
    property_value: Yup.number()
      .positive("Rental value cannot be negative")
      .required("Rental value is required"),
    property_description: Yup.string()
      .trim()
      .max(1000, "Description cannot exceed 1000 characters")
      .optional(),
  });

  const formik = useFormik<PropertyFormValues>({
    initialValues: propertydata,
    validationSchema: propertyValidationSchema,
    onSubmit: async (values: PropertyFormValues, { resetForm, setValues }) => {
      const formData = new FormData();
      if (formData) {
        formData.append("propertyName", values.propertyName);
        formData.append("year_built", values.year_built.toString());
        formData.append("address", values.address);
        formData.append("city", values.city);
        if (values.postalcode) {
          formData.append("postalcode", values.postalcode);
        }
        if (values.square_feet) {
          formData.append("square_feet", String(values.square_feet));
        }
        if (values.bedrooms) {
          formData.append("bedrooms", String(values.bedrooms));
        }

        if (values.bathrooms) {
          formData.append("bathrooms", String(values.bathrooms));
        }
        if (typeof values.parkingspaces) {
          formData.append("parkingspaces", String(values.parkingspaces));
        }

        
          formData.append("property_value", String(values.property_value));
        


        if (typeof values.last_appraisal_date === "string") {
          formData.append("last_appraisal_date", values.last_appraisal_date);
        }

        if (values.property_description) {
          formData.append("property_description", values.property_description);
        }

        formData.append("country", values.country)
        formData.append("state", values.state)

        if (
          values.propertyType === "apartment" ||
          "duplex" ||
          "studio" ||
          "condominium" ||
          "serviced-apartment" ||
          "office" ||
          "hotel" ||
          "warehouse" ||
          "townhouse"
        ) {
          formData.append("propertyType", values.propertyType);
        }

        values.additional_feature?.forEach((item) => {
          formData.append(`additional_feature`, item);
        });
        if (values.property_images !== undefined) {
          values.property_images.forEach((file) => {
            formData.append("property_images", file);
          });
        }
      }
      if (values.property_documents !== null) {
          formData.append("property_documents", values.property_documents)
      }
    

    
      await doCreateProperty(formData);
      resetForm();
    
    },
  });
  useEffect(() => {
    if (createPropertyMutation.isSuccess) {
      formik.resetForm();
      formik.setValues({...propertydata})
    stepHandler(-1)
  
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

      <PropertyDetails formik={formik} />

      <PropertyFeature formik={formik} />
      {/* 
      <PropertyAmenities formik={formik} /> */}

      <UploadAttachment formik={formik} />
      <UploadFiles formik={formik} />

      <div className="p-4 rounded-2xl bg-[#F9F9FA] flex justify-end mt-6 gap-x-4">
        <Button
          type="button"
          onClick={() => stepHandler(-1)}
          classname=" bg-transparent border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-lg py-2 px-4 mt-4"
          text="Cancel"
        />

        <Button
          disabled={false}
          type="submit"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            createPropertyHandler(e)
          }
          classname={` ${disabled || Object.keys(formik.errors).length > 0 ? "bg-gray-400 cursor-not-allowed" : "bg-black cursor-pointer"} text-white  text-sm font-[400]  rounded-lg py-1 px-2 mt-4`}
          text="Create"
        />
      </div>
      {isCompleted ? (
        <Completed closeMoodal={closeMoodal} stepHandler={stepHandler} />
      ) : null}
    </form>
  );
}
