import React from "react";
import AppleButton from "../signup/components/appleButton";
import GoogleButton from "../signup/components/googleButton";

import SigninInputs from "./components/signin";

export default function SignIn() {
  return (
    <div className=" max-w-[404px] w-[100%]">
      <h1 className="font-bold text-2xl text-center text-black">Sign In</h1>
      <p className="font-[400] pt-2 text-sm text-[#00000066] text-center">
        Your Social Campaigns
      </p>

      <div className="flex gap-x-4 items-center mt-6 max-w-[404px] w-[100%]">
        <AppleButton
          classname="flex flex-1 items-center gap-x-2 px-4 py-2 rounded-xl border-[1px] bg-transparent text-black border-[#0000001A] text-sm font-[400]"
          text="Sign in with Apple"
        />

        <GoogleButton
          classname="flex flex-1 items-center gap-x-2 px-4 py-2 rounded-xl border-[1px] bg-transparent text-black border-[#0000001A] text-sm font-[400]"
          text="Sign in with Google"
        />
      </div>

      <div className="flex mt-6 items-center max-w-[404px] justify-around w-[100%] gap-x-4">
        <div className="max-w-[126px] w-[100%] h-[1px] border-[.5px] border-[#0000001A]"></div>
        <h1 className="font-[400] text-xs text-[#00000066]">or with Email</h1>
        <div className="max-w-[126px] w-[100%] h-[1px] border-[1px] border-[#0000001A]"></div>
      </div>

      <SigninInputs />
    </div>
  );
}
