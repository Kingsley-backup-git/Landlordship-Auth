'use client'
import { isNumber } from "@/utils/functions";

import React, { useEffect, useRef, useState } from "react";

export interface pinTextInpProps {
  numberOfDigits: number;
  handleFn?: (str: string) => void;

}
function PinTextInput({ numberOfDigits, }: pinTextInpProps) {
  const [pin, setPin] = useState(new Array(numberOfDigits).fill(""));
  const [pinError, setPinError] = useState(false);
  const pinBoxReference = useRef<Array<HTMLInputElement | null>>([]);

  function handleChange(value: string, index: number) {
    const newArr = [...pin];
    newArr[index] = value;
    setPin(newArr);
    // if (handleFn) {
    //   handleFn(newArr.join(""));
    // }

    if (value && index < numberOfDigits - 1) {
      pinBoxReference.current[index + 1]?.focus();
    }
  }
  function handleBackspaceAndEnter(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    if (
      e.key === "Backspace" &&
      !(e.target as HTMLInputElement).value &&
      index > 0
    ) {
      pinBoxReference.current[index - 1]?.focus();
    }
    if (
      e.key === "Enter" &&
      (e.target as HTMLInputElement).value &&
      index < numberOfDigits - 1
    ) {
      pinBoxReference.current[index + 1]?.focus();
    }
  }

  // set pin error
  useEffect(() => {
    if (pin.length > 0) {
      setPinError(isNumber(pin.join(",")));
    }
  }, [pin]);
  console.log({ pin, pinError });

  return (
    <div>
      <div className="flex items-center gap-x-2 mt-5 justify-center">
        {pin.map((digit, index) => (
          <input
            key={index}
            value={digit}
            maxLength={1}
            onChange={(e) => {
              handleChange(e.target.value, index)
             
            }}
            onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
            ref={(reference) => {
                
                pinBoxReference.current[index] = reference;
              }}
             
            className={`border ${
              isNumber(pin[index])
                ? "bg-lightgreen border-streamgreen"
                : "bg-red-200 border-red-600"
            } max-w-[8%] h-14   text-black text-center sm:p-3 w-full justify-between rounded-2xl block focus:border-2 focus:outline-none appearance-none`}
          />
        ))}
      </div>

      {pinError && (
        <p
          className={`text-lg text-red-600 mt-4 ${
            pinError ? "error-show" : ""
          }`}
        >
          Invalid OTP
        </p>
      )}
    </div>
  );
}

export default PinTextInput;