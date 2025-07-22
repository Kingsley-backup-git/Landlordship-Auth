import React from "react";
import { LuLoaderCircle } from "react-icons/lu";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
interface BtnProps {
  classname: string;
  text: string;
  textStyle: string;
  onClick?: () => void;
  disabled: boolean;
}
export default function Button({
  classname,
  text,
  textStyle,
  onClick,
  ...props
}: BtnProps) {
  return (
    <button type="button" className={classname} onClick={onClick} {...props}>
      {props.disabled ? (
        <LuLoaderCircle className="animate-spin block mx-auto text-xl" />
      ) : (
        <div className="flex justify-center gap-x-4 items-center w-full">
          <h1 className={textStyle}>{text}</h1>{" "}
          <MdOutlineKeyboardArrowRight className="text-sm text-[#FFFFFF66]" />{" "}
        </div>
      )}
    </button>
  );
}
