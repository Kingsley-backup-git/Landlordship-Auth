/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { LuChevronsUpDown } from "react-icons/lu";
export default function Dropdown({
  className,
  text,
  properties,
  setPropertyIdHandler,
}: {
  className: string;
  text: string;
  properties: any;
  setPropertyIdHandler: (id: string) => void;
}) {
  return (
    <div className={className}>
      <label className="text-[#00000066] text-xs font-normal">{text}</label>
      <div className="w-full relative">
        <select
          onChange={(e) => setPropertyIdHandler(e.target.value)}
          className="w-full appearance-none  text-sm py-1 placeholder:text-[#00000033] placeholder:opacity-70 outline-none border-0 text-black"
        >
          <option selected disabled className="" value={"first"}>
            {"select a property"}
          </option>
          {properties &&
            properties?.map((property: any) => {
              return (
                <option key={property._id} className="" value={property._id}>
                  {property.propertyName}
                </option>
              );
            })}
        </select>

        <LuChevronsUpDown className="absolute pointer-events-none top-[5px] right-3 text-[#00000066]" />
      </div>
    </div>
  );
}
