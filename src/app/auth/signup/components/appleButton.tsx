import React from "react";
import { FaApple } from "react-icons/fa";
interface ButtonProps {
  text: string;
  classname: string;
}
export default function AppleButton({ text, classname }: ButtonProps) {
  return (
    <button type="button" className={classname}>
      <FaApple className="text-xl" /> <h1>{text}</h1>
    </button>
  );
}
