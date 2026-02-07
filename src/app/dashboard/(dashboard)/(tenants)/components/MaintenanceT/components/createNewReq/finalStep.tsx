import Button from "@/app/components/ui/Button";
import Image from "next/image";
import React from "react";
import CheckedImg from "../../../../../../../../../public/CircleWavyCheck.png";

export default function FinalStep({
  stepHandler,

}: {
  stepHandler: (num: number) => void;

}) {
  return (
    <div className="fixed h-screen top-0 flex justify-center items-center bottom-0 left-0 right-0 bg-white/.1 z-[99] backdrop-blur-sm">
      <div className="max-w-[620px] w-full min-h-[600px] bg-white rounded-3xl flex flex-col justify-center items-center">
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
          You have created a new maintenance request #CM1020 for Property Name.
          </p>
        </div>

        <Button
          onClick={() => null}
          classname="text-white text-sm max-w-[280px] w-full mx-auto block font-[400] bg-[#1D3639] rounded-lg py-2 px-4 mt-5"
          text="Message landlord"
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
