"use client";
import Button from "@/app/components/ui/Button";
import CheckBox from "@/app/components/ui/checkBox";
import TextInput from "@/app/components/ui/TextInput";

import AuthValidation from "@/utils/formik/auth";
import { findPasswordIndexes } from "@/utils/functions";
import Link from "next/link";
import React, { useEffect, useState } from "react";
export default function SignUpInputs() {
  const { authFormik } = AuthValidation(handleLoader);

  const [validEntries, setvalidEntries] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  function handleLoader(val: boolean) {
    setLoading(val);
  }
  //    const {RegisterMutation} = useAuth()
  useEffect(() => {
    const res = findPasswordIndexes(authFormik?.values.password as string);
    setvalidEntries(res);
    console.log(res);
  }, [authFormik.values.password]);

  const showHandler = () => {
    setIsShow((val) => !val);
  };

  function submitHandler() {
    authFormik.handleSubmit();
  }
  const disabled = loading;
  return (
    <form className={`max-w-[404px] w-[100%] mt-6 `}>
      <TextInput
        error={authFormik.errors.email}
        touched={authFormik.touched.email}
        onBlur={authFormik.handleBlur}
        onChange={authFormik.handleChange}
        isShow={isShow}
        showHandler={() => null}
        repeat={false}
        type="email"
        placeholder="Email"
        name="email"
        classname="p-2 bg-transparent text-sm font-[400] flex-1 placeholder:text-[#00000033] text-black outline-none w-[100%]"
      />
      <div className="mt-4 w-[100%]">
        <TextInput
          error={authFormik.errors.password}
          touched={authFormik.touched.password}
          onBlur={authFormik.handleBlur}
          onChange={authFormik.handleChange}
          isShow={isShow}
          showHandler={showHandler}
          type={isShow ? "text" : "password"}
          name="password"
          repeat={false}
          placeholder="Password"
          classname="bg-transparent p-2 text-sm font-[400] flex-1 placeholder:text-[#00000033] text-black outline-none w-[100%]"
        />
      </div>

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
        {/* 
            {items.map((item, i)=> {
                return <div key = {i} className={`w-[100%] h-[1px] border-[2px] ${!validEntries.includes(i) ? "border-[#0000001A]" : "border-green-500"}`}></div>
            })} */}
      </div>

      <p className="font-[400] text-sm text-[#00000066] mt-3">
        Use 8 or more characters with a mix of letters, numbers & symbols.
      </p>

      <div className="mt-4 w-[100%]">
        <TextInput
          error={authFormik.errors.confirmPassword}
          touched={authFormik.touched.confirmPassword}
          onBlur={authFormik.handleBlur}
          onChange={authFormik.handleChange}
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
        onClick={() => {
          submitHandler();
        }}
        type="button"
        disabled={disabled}
        classname={` ${Object.keys(authFormik.errors).length > 0 || disabled ? "bg-gray-400 cursor-not-allowed" : "bg-[#1D3639] cursor-pointer"} mt-6 p-2 w-[100%] text-white font-[400] text-base rounded-2xl`}
        text="Sign Up"
      />
      <p className="text-[#00000066] mt-3 text-center text-sm font-[400]">
        Already have an Account?{" "}
        <Link href="/auth/signin" className="text-[#E3572B]">
          Sign In
        </Link>
      </p>
    </form>
  );
}
