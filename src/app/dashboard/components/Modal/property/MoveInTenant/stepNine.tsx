import Image from "next/image";
import React from "react";
import CheckedImg from "../../../../../../../public/CircleWavyCheck.png";
import Button from "@/app/components/ui/Button";
export default function StepNine({
  header,
  stepHandler,
}: {
  header: string;
  stepHandler: (num: number) => void;
}) {
  return (
    <div className="sm:p-6 py-2 px-4  sm:max-w-[960px] mx-auto w-[100%]">
      <h1 className="text-black  font-semibold sm:flex hidden text-sm">
        {header}
      </h1>

      <div className="max-w-[600px] w-full mx-auto  mt-16 block justify-center items-center ">
        <Image
          src={CheckedImg}
          className="mx-auto"
          width={54}
          height={24}
          alt="final  check image"
        />

        <div className="max-w-[340px] w-full mx-auto mt-5">
          <h1 className="text-xl text-center text-black font-semibold">
            Great job!
          </h1>
          <p className="text-[#00000066] text-center text-xs font-[400] mt-2">
            You have created a Lease #1 for First Property. Finalize the lease
            agreement and send it for e-signatures.
          </p>
        </div>

        <Button
          classname="text-white text-xs max-w-[280px] w-full mx-auto block font-[400] bg-[#1D3639] rounded-lg py-2 px-4 mt-5"
          text="Send for e-signature"
        />

        <Button
          onClick={() => stepHandler(-1)}
          text="Back to Home"
          classname="text-[#E3572B] block mx-auto bg-transparent border-0 outline-0 text-center cursor-pointer font-[400] mt-5 text-xs"
        />
      </div>
    </div>
  );
}
