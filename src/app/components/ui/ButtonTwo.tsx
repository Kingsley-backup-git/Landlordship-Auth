import React, { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  classname: string;
  onClick?: () => void;
}
export default function Button({ children, classname, ...props }: ButtonProps) {
  return (
    <button {...props} type="button" className={classname}>
      {children}
    </button>
  );
}
