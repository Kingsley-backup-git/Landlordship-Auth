"use client";
import Button from "@/app/components/ui/Button";
import CheckBox from "@/app/components/ui/checkBox";
import TextInput from "@/app/components/ui/TextInput";
import AuthValidation from "@/utils/formik/auth";
import { findPasswordIndexes } from "@/utils/functions";
import React, { useEffect, useState } from "react";

export default function ResetInputs() {
  const { resetFormik } = AuthValidation(handleLoader);
  const [isShow, setIsShow] = useState(false);
  const [validEntries, setvalidEntries] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  function handleLoader(val: boolean) {
    setLoading(val);
  }

  useEffect(() => {
    const res = findPasswordIndexes(resetFormik?.values.password as string);
    setvalidEntries(res);
    console.log(res);
  }, [resetFormik.values.password]);

  const showHandler = () => {
    setIsShow((val) => !val);
  };

  const disabled = loading;
  return (
    <div className="max-w-[404px] mx-auto w-full mt-6">
      <TextInput
        error={resetFormik.errors.password}
        touched={resetFormik.touched.password}
        onBlur={resetFormik.handleBlur}
        onChange={resetFormik.handleChange}
        name="password"
        isShow={isShow}
        showHandler={showHandler}
        type={isShow ? "text" : "password"}
        repeat={false}
        placeholder="Password"
        classname="bg-transparent p-2 text-sm font-[400] flex-1 placeholder:text-[#00000033] text-black outline-none w-[100%]"
      />

      <div className="flex justify-between mt-4 gap-x-2 items-center">
        <div
          className={`w-[100%] h-[1px]  border-[2px] border-[#0000001A] ${validEntries.length > 0 ? "border-green-500" : "border-[#0000001A]"}`}
        ></div>
        <div
          className={`w-[100%] h-[1px]  border-[2px] border-[#0000001A] ${validEntries.length > 1 ? "border-green-500" : "border-[#0000001A]"}`}
        ></div>
        <div
          className={`w-[100%] h-[1px] border-[2px] border-[#0000001A] ${validEntries.length > 2 ? "border-green-500" : "border-[#0000001A]"}`}
        ></div>
        <div
          className={`w-[100%] h-[1px] border-[2px] border-[#0000001A] ${validEntries.length > 3 ? "border-green-500" : "border-[#0000001A]"}`}
        ></div>
      </div>

      <p className="font-[400] text-sm text-[#00000066] mt-3">
        Use 8 or more characters with a mix of letters, numbers & symbols.
      </p>

      <div className="mt-4 w-[100%]">
        <TextInput
          error={resetFormik.errors.confirmPassword}
          touched={resetFormik.touched.confirmPassword}
          onBlur={resetFormik.handleBlur}
          onChange={resetFormik.handleChange}
          name="confirmPassword"
          isShow={isShow}
          showHandler={showHandler}
          type="password"
          repeat={true}
          placeholder="Confirm Password"
          classname="bg-transparent p-2 text-sm font-[400] flex-1 placeholder:text-[#00000033] text-black outline-none w-[100%]"
        />
      </div>

      <CheckBox
        checked={true}
        spanText="Terms"
        spanStyle="text-[#E3572B]"
        classname="hidden"
        textStyle="text-[#00000066] font-[400] text-sm"
        text="I Accept The"
      />

      <Button
        onClick={() => resetFormik.handleSubmit()}
        type="button"
        disabled={disabled}
        classname={`bg-[#1D3639] mt-6 p-2 w-[100%] ${Object.keys(resetFormik.errors).length > 0 || disabled ? "bg-gray-400 cursor-not-allowed" : "bg-[#1D3639] cursor-pointer"} text-white font-[400] text-base rounded-2xl`}
        text="Submit"
      />
    </div>
  );
}
