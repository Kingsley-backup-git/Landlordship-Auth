import React from "react";
import { FcGoogle } from "react-icons/fc";
interface ButtonProps {
  text: string;
  classname: string;
}
export default function GoogleButton({ text, classname }: ButtonProps) {
  return (
    <button type="button" className={classname}>
      <FcGoogle className="text-xl" /> <h1>{text}</h1>
    </button>
  );
}
