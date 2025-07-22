import React from "react";
import { LuLoaderCircle } from "react-icons/lu";
interface ButtonProps {
  text: string;
  classname: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}
export default function Button({
  text,
  classname,
  onClick,
  type,
  ...props
}: ButtonProps) {
  return (
    <button {...props} type={type} onClick={onClick} className={classname}>
      {props.disabled ? (
        <LuLoaderCircle className="animate-spin block mx-auto text-xl" />
      ) : (
        text
      )}
    </button>
  );
}
