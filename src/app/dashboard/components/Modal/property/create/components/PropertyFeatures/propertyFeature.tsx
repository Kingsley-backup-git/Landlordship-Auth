"use client";
import Checkbox from "@/app/dashboard/(dashboard)/properties/components/inputs/checkbox";
import { FormikProps } from "formik";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
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

export default function PropertyFeature({
  formik,
}: {
  formik: FormikProps<PropertyFormValues>;
}) {
  const [allfeatures, setFeatures] = useState<string[]>([
 
  ]);
  const [showInput, setShowInput] = useState(false);
  const [customFeatureInput, setCustomFeatureInput] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, checked } = event.target;
    const features = formik.values.features ?? [];
    console.log(value, checked);
    if (checked) {
      formik.setFieldValue("features", [...features, value]);
    } else {
      formik.setFieldValue(
        "features",
        formik.values.features?.filter((v) => v !== value),
      );
    }
  }

  function handleAddCustomFeature() {
    if (customFeatureInput.trim() && !allfeatures.includes(customFeatureInput.trim())) {
      const newFeature = customFeatureInput.trim();
      setFeatures([...allfeatures, newFeature]);
      setCustomFeatureInput("");
      setShowInput(false);
    }
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddCustomFeature();
    }
  }

  return (
    <div className="bg-[#F9F9FA] rounded-2xl p-6 mt-6">
      <h1 className="font-semibold text-sm text-black">Property Features</h1>

      <div className="flex flex-wrap gap-4 items-center mt-5">
        {allfeatures.map((feature, index) => {
          return (
            <div key={index} className="flex flex-nowrap items-center gap-x-2">
              <Checkbox
                value={feature}
                name="features"
                id={`feature-${index}`}
                classname={`w-[16px] h-[16px] cursor-pointer border-[#00000033] flex justify-center items-center  border-[1px] rounded`}
                checked={formik.values.features?.includes(feature) as boolean}
                clicked={(event) => handleChange(event)}
              />
              <h1 className="text-sm font-[400] text-black">{feature}</h1>
            </div>
          );
        })}
      </div>

      {showInput && (
        <div className="flex gap-x-2 items-center mt-4">
          <input
            type="text"
            value={customFeatureInput}
            onChange={(e) => setCustomFeatureInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter custom feature (e.g., Garage, Garden/Outdoor Space)"
            className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black placeholder:text-[#00000066] outline-none flex-1"
            autoFocus
          />
          <button
            type="button"
            onClick={handleAddCustomFeature}
            className="bg-black text-white text-sm font-[400] rounded-lg py-2 px-4 cursor-pointer hover:bg-gray-800 transition-colors"
          >
            Add
          </button>
          <button
            type="button"
            onClick={() => {
              setShowInput(false);
              setCustomFeatureInput("");
            }}
            className="bg-transparent border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-lg py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
        </div>
      )}

      {!showInput && (
        <div
          className="flex gap-x-2 cursor-pointer max-w-fit w-full mt-5 items-center bg-[#0000000A] py-1 px-2 rounded-lg hover:bg-[#0000001A] transition-colors"
          onClick={() => setShowInput(true)}
        >
          <IoMdAdd className="text-white bg-black rounded-full p-1  text-xl" />
          <h1 className="text-sm  text-black font-[400]">Add custom feature</h1>
        </div>
      )}
    </div>
  );
}
