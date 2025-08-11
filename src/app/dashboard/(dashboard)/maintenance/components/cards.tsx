import React from "react";

import Img8 from "../../../../../../public/Reg0215.png";

import { GoPaperclip } from "react-icons/go";
import { PiChatText } from "react-icons/pi";

import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Cards({data} : {data:any}) {
  
  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {data?.map((card:any, index: React.Key | null | undefined) => {
        return (
          <div
            key={index}
            className="sm:bg-[#F9F9FA] flex flex-col bg-white rounded-2xl sm:p-6 xs:p-5 p-4"
          >
            <div className="flex items-center justify-between">
              <h1 className="font-[400] text-xs text-[#00000066] bg-[#EDEEFC] max-w-fit w-full rounded-lg py-[2px] px-2">
                {card?.propertyId?.propertyName}
              </h1>
              <div
                className={`w-[9px] h-[9px] rounded-full ${card.status === "pending" ? "bg-[#8A8CD9]" : card.status === "Complete" ? "bg-[#94E9B8]" : card.status === "Pending" ? "bg-[#92BFFF]" : card.status === "Approved" ? "bg-[#FFDB56]" : card.status === "Rejected" ? "bg-[#00000066]" : null}`}
              ></div>
            </div>
            <div className="mt-2 flex-1">
              {" "}
              <h1 className="sm:text-sm  text-base font-semibold text-black">
                {card?.category}-{card?.subCategory}
              </h1>
              <p className="text-xs font-[400] text-[#00000066] mt-1">
                {card?.description}
              </p>
            </div>
            <div className="mt-[9px] flex items-center gap-x-4">
              <div className="flex items-center flex-1">
                 <Image
                      key={index}
                      src={Img8}
                      className={`rounded-full border-[1px] border-white w-[23px] h-[23px] ${index === 1 && "relative left-[-4px]"}  ${Number(index) > 1 && "hidden"}`}
                      alt="assignedto-img"
                      width={23}
                      height={23}
                    />
                {/* {card.img.map((images, index) => {
                  return (
                    <Image
                      key={index}
                      src={Img8}
                      className={`rounded-full border-[1px] border-white w-[23px] h-[23px] ${index === 1 && "relative left-[-4px]"}  ${index > 1 && "hidden"}`}
                      alt="assignedto-img"
                      width={23}
                      height={23}
                    />
                  );
                })} */}
                {/* {card.img.length > 2 && (
                  <div className="w-[22px] border-[1px] border-white h-[22px] rounded-full bg-[#EDEEFC] items-center p-2 relative left-[-8px] flex justify-center text-black font-[400] text-xs">
                    +{card.img.length - 2}
                  </div>
                )} */}
              </div>

              <div className="cursor-pointer max-w-fit w-full">
                <GoPaperclip className="text-lg text-[#00000066] inline-block align-middle" />{" "}
                <span className="text-xs  text-[#00000066] font-[400]">
                  {card.link}
                </span>
              </div>

              <div className="max-w-fit w-full cursor-pointer ">
                <PiChatText className="text-lg text-[#00000066] inline-block align-middle" />{" "}
                <span className="text-xs inline-block text-[#00000066] font-[400]">
                  {card.comment}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
