import RadioInput from "@/app/auth/setup/components/inputs/radioButton";
import Checkbox from "@/app/dashboard/(dashboard)/properties/components/inputs/checkbox";
import React from "react";
import { FormikProps } from "formik";
import { PropertyFormValues } from "@/types/auth/formik";

export default function PropertyType({
  formik,
  propertyTypeHandler,
}: {
  formik: FormikProps<PropertyFormValues>;
  propertyTypeHandler: (val: string) => void;
}) {
  return (
    <div className="bg-[#F9F9FA] p-6 rounded-2xl mt-6">
      <h1 className="font-semibold text-sm text-black">
        Choose Your Property Type
      </h1>

      <div className="grid grid-cols-2 items-stretch gap-4  mt-4">
        <div
          className={`bg-[#FFFFFFCC]  relative cursor-pointer flex-1  ${formik.values.propertyType === "apartment" ? "border-[#000000] border-[2px]" : "border-[.5px] #0000001A"}  py-6 px-6 rounded-2xl`}
          onClick={() => propertyTypeHandler("apartment")}
        >
          <div className="">
            <h1 className="font-semibold text-sm text-black">
          Apartment
            </h1>
            <p className="text-[#00000066] font-[400] text-xs mt-2">
              Perfect for standalone homes, condos, or single rental units.
            </p>
          </div>

          <RadioInput
            id={"apartment"}
            onChange={formik.handleChange}
            checked={formik.values.propertyType === "apartment"}
          />
        </div>

       
{/* "apartment"|
      "duplex" |
      "studio" |
      "condominium" |
      "serviced-apartment" |
      "office" |
      "hotel" |
      "warehouse" |
  "townhouse", */}

         <div
          className={`bg-[#FFFFFFCC]  cursor-pointer ${formik.values.propertyType === "duplex" ? "border-[#000000] border-[2px]" : "border-[.5px] #0000001A"}  relative flex-1 py-6  px-6 rounded-2xl`}
          onClick={() => propertyTypeHandler("duplex")}
         >
          <div className="">
            <h1 className="font-semibold text-sm text-black">
        Duplex
            </h1>
            <p className="text-[#00000066] font-[400] text-xs mt-2">
              Ideal for managing apartments, duplexes, or buildings with
              multiple rental units.
            </p>
          </div>

          <RadioInput
            id={"duplex"}
            onChange={formik.handleChange}
            checked={formik.values.propertyType === "duplex"}
          />
         </div>



         <div
          className={`bg-[#FFFFFFCC]  cursor-pointer ${formik.values.propertyType === "studio" ? "border-[#000000] border-[2px]" : "border-[.5px] #0000001A"} relative flex-1 py-6  px-6 rounded-2xl`}
          onClick={() => propertyTypeHandler("studio")}
         >
          <div className="">
            <h1 className="font-semibold text-sm text-black">
            Studio
            </h1>
            <p className="text-[#00000066] font-[400] text-xs mt-2">
              Ideal for managing apartments, duplexes, or buildings with
              multiple rental units.
            </p>
          </div>

          <RadioInput
            id={"studio"}
            onChange={formik.handleChange}
            checked={formik.values.propertyType === "studio"}
          />
         </div>
      


         <div
          className={`bg-[#FFFFFFCC]  relative cursor-pointer flex-1 ${formik.values.propertyType === "condominium" ? "border-[#000000] border-[2px]" : "border-[.5px] #0000001A"} py-6 px-6 rounded-2xl`}
          onClick={() => propertyTypeHandler("condominium")}
        >
          <div className="">
            <h1 className="font-semibold text-sm text-black">
           Apartment
            </h1>
            <p className="text-[#00000066] font-[400] text-xs mt-2">
              Perfect for standalone homes, condos, or single rental units.
            </p>
          </div>

          <RadioInput
            id={"condominium"}
            onChange={formik.handleChange}
            checked={formik.values.propertyType === "condominium"}
          />
        </div>
      </div>

      {/* <div className="bg-[#FFFFFFCC] py-4 px-5 border-[.5px] border-[#0000001A] mt-4 rounded-2xl">
        <h1 className="text-[#00000066] text-xs font-[400]">
          Does this property have special requirements?
        </h1>
        <div className="flex gap-x-5 mt-2 items-center">
          <div className="flex gap-x-3 items-center">
            <Checkbox
              classname={`w-[14px] h-[14px] cursor-pointer border-[#00000033] flex justify-center items-center  border-[1px] rounded`}
              checked={false}
              clicked={() => null}
            />
            <h1 className="text-black font-[400] text-sm">
              Yes (e.g., manufactured/mobile home)
            </h1>
          </div>

          <div className="flex gap-x-3 items-center">
            <Checkbox
              classname={`w-[14px] h-[14px] cursor-pointer border-[#00000033] flex justify-center items-center  border-[1px] rounded`}
              checked={false}
              clicked={() => null}
            />
            <h1 className="text-black font-[400] text-sm">No</h1>
          </div>
        </div>
      </div> */}
    </div>
  );
}
