"use client";
import Button from "@/app/components/ui/Button";
import { PropertyFormValues } from "@/types/auth/formik";
import { FormikProps } from "formik";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { PiCloudArrowUpDuotone } from "react-icons/pi";
import { LuDownload } from "react-icons/lu";

export default function UploadFiles({
  formik,
}: {
  formik: FormikProps<PropertyFormValues>;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [document, setDocument] = useState<File| null>(null);
  const handleClick = () => {
    fileRef.current?.click();
  };
  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e?.target?.files[0];
      if (file !== null) {
        formik.setFieldValue("property_documents", file);
        setDocument(file);
      }
    }
  }
  return (
    <div className="bg-[#F9F9FA] rounded-2xl p-6 mt-6">
      <h1 className="font-semibold text-sm text-black">Upload Proof of Property Ownership</h1>

      <div className="bg-[#FFFFFFCC] relative rounded-2xl mt-4 p-4 flex gap-x-3 items-center">
        {!document && (
          <PiCloudArrowUpDuotone className="text-xl text-black" />
        )}
        {!document && (
          <h1 className="font-[400] text-sm text-black">
            Store important documents and ready made templates
          </h1>
        )}
        <div className="inset-y-0 my-auto absolute flex w-full flex-wrap items-center gap-x-2">
          {document &&
            <div className=" flex items-center gap-4">
             <h1 className="text-black font-medium text-sm"> {document?.name}</h1>
               <a href = {URL.createObjectURL(document)} className="" download={true}><LuDownload  className="text-black text-sm"/></a>
              </div>
             
              
          }
        </div>
      </div>
      <label htmlFor="upload">
        <input
          multiple={true}
          ref={fileRef}
         
          type="file"
          accept="application/pdf"
          className="hidden"
          id="upload"
          onChange={(e) => handleImageUpload(e)}
        />
        <Button
          type="button"
          onClick={handleClick}
          classname="text-white cursor-pointer text-xs font-[400] bg-black rounded-lg py-1 px-2 mt-4"
          text="Upload"
        />
      </label>
    </div>
  );
}
