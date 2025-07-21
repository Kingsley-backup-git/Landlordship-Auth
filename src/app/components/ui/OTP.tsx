import React from "react";
import PinTextInput from "./PinTextInput";
import Button from "./Button";
import { useAuthStore } from "@/store/useAuthStore";

export interface OTPprops {
  handleNextStep: () => void;
  showHeader?: boolean;
  email?: string;
  setPinString?: (str: string) => void;
  //   handleResendOTP?: () => void;
}
const OTP = ({
  handleNextStep,
  showHeader,
  email,
  //   handleResendOTP,
}: OTPprops) => {
  const setOtp = useAuthStore(({ setOtp }) => setOtp);

  return (
    <div>
      {showHeader && (
        <h1 className="headerThree text-center mb-8">Input OTP</h1>
      )}
      <div className="text-center">
        <h4 className="my-4 text-[#6B7887] text-center">
          Input the 6-digit OTP(One-time password) sent to <br />
          <strong>{email}</strong>
        </h4>
        <h6 className="text-[#3FA9FD] underline font-light">
          <a href="#">Not my Email Address</a>
        </h6>
      </div>

      <div className="my-12">
        <PinTextInput handleFn={setOtp} numberOfDigits={6} />
        <div className="flex justify-end mt-2">
          <h6
            // onClick={handleResendOTP}
            className="text-[#3FA9FD] cursor-pointer underline font-light"
          >
            Resend OTP
          </h6>
        </div>
      </div>
      <div>
        <Button
          type="button"
          disabled={false}
          onClick={handleNextStep}
          classname="bg-[#001F3F] text-white mt-6 p-2 max-w-[400px] block mx-auto w-full font-[400] text-base rounded-2xl"
          text="continue"
        />
      </div>
    </div>
  );
};

export default OTP;
