"use client";
import Button from "@/app/components/ui/Button";
import OTP from "@/app/components/ui/OTP";
import TextInput from "@/app/components/ui/TextInput";
import { useAuth } from "@/hooks/useAuth";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Forgot() {
  const [loading, setLoading] = useState(false);

  const setResetEmail = useAuthStore((state) => state.setResetEmail);
  const email = useAuthStore((state) => state.resetEmail);
  function handleLoader(val: boolean) {
    setLoading(val);
  }
  const otp = useAuthStore((state) => state.otp);
  const { push, back } = useRouter();
  const { ForgotPasswordMutation, doForgotPassword, ValidateOTP } = useAuth(
    handleLoader,
    push,
  );
  const validateOTP = () => {
    ValidateOTP({ email, otp });
  };
  const disabled = loading || ForgotPasswordMutation.isPending;
  return (
    <div className="w-full">
      <h1 className="text-xl font-semibold text-center text-black">
        Forgot Password ?
      </h1>
      <>
        {ForgotPasswordMutation.isSuccess ? (
          <OTP
            email={email}
            // handleResendOTP={handleResendOtp}
            handleNextStep={validateOTP}
          />
        ) : (
          <>
            <p className="font-[400] text-xs text-center text-[#00000066] mt-1">
              Enter your email to reset your password.
            </p>
            <div className="max-w-[395px] w-[100%] mx-auto mt-6">
              <TextInput
                onChange={(event) => setResetEmail(event.target.value)}
                isShow={false}
                showHandler={() => null}
                repeat={false}
                type="email"
                placeholder="Please enter your email address"
                name="email"
                classname="p-2 bg-transparent text-sm font-[400] flex-1 placeholder:text-[#00000033] text-black outline-none w-[100%]"
              />
            </div>

            <Button
              onClick={() => doForgotPassword({
                email,
            
              })}
              disabled={disabled}
              type="button"
              classname={`max-w-[395px] w-full mx-auto block rounded-xl  ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-black cursor-pointer"} py-2 px-4 mt-6 text-white`}
              text="Submit"
            />

            <div
              onClick={() => back()}
              className="max-w-fit w-full cursor-pointer text-[#9F9FF8] mx-auto block mt-6 text-sm font-[400]"
            >
              Back
            </div>
          </>
        )}
      </>
    </div>
  );
}
