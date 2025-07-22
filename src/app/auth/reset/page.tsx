import React from "react";
import ResetInputs from "./components/reset";
import Link from "next/link";

export default function Reset() {
  return (
    <div className="w-full">
      <h1 className="text-xl font-semibold text-center text-black">
        Set New Password
      </h1>
      <p className="text-[#00000066] font-[400] text-xs text-center mt-1">
        Have you already reset the password ?{" "}
        <Link href="/auth/signin" className="text-[#E3572B]">
          Sign in
        </Link>
      </p>

      <ResetInputs />
    </div>
  );
}
