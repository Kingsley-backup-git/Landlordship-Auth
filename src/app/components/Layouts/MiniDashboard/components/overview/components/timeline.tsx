import React from "react";
import Img1 from "../../../../../../../../public/timelineImg.png";
import Img2 from "../../../../../../../../public/timelineImg2.png";
import Img3 from "../../../../../../../../public/timelineImg3.png";
import Image from "next/image";
// import styles from "../../dashboard.module.css"
export default function Timeline() {
  const dates = [
    {
      day: "SU",
      date: 22,
    },
    {
      day: "MO",
      date: 23,
      active: true,
    },
    {
      day: "Tu",
      date: 24,
    },
    {
      day: "We",
      date: 25,
    },
    {
      day: "Th",
      date: 26,
    },
    {
      day: "Fr",
      date: 27,
    },
    {
      day: "Sa",
      date: 28,
    },
  ];

  const timeline = [
    {
      img: Img1,
      req: "New daily task #211",
      time: "Just now",
    },
    {
      img: Img2,
      req: "New maintenance request #0389",
      time: "59 minutes ago",
    },
    {
      img: Img3,
      req: "New maintenance request #0389",
      time: "12 hours ago",
    },
    {
      img: Img3,
      req: "New maintenance request #0389",
      time: "12 hours ago",
    },
    {
      img: Img3,
      req: "New maintenance request #0389",
      time: "12 hours ago",
    },
  ];
  return (
    <div className="bg-[#212a2c6a] shadow-lg  rounded-lg pt-6 2sm:col-span-6 col-span-12  p-3 flex flex-col h-[210px] xs:h-[250px]">
      <h1 className="text-white font-semibold text-xs">
        What&apos;s on the road?
      </h1>

      <div
        className={`grid grid-flow-col  pt-4 justify-between overflow-x-auto  gap-x-3 `}
      >
        {dates.map((date, index) => {
          return (
            <div
              key={index}
              className={`py-1 col-span-4 cursor-pointer px-2 max-w-fit w-[100%] rounded-lg ${date.active && "bg-[#e3572d]"}`}
            >
              <h1
                className={` text-[10px] font-[400] ${date.active ? "text-white" : "text-[#4d5253]"}`}
              >
                {date.day}
              </h1>
              <p
                className={`font-semibold text-[11px] text-white  ${date.active && "text-white"}`}
              >
                {date.date}
              </p>
            </div>
          );
        })}
      </div>

      <div className={`overflow-y-hidden flex-1  flex flex-col `}>
        {timeline.map((singletimeline, index) => {
          return (
            <div key={index} className="pt-2 flex gap-x-2 ps-2">
              <div className="flex gap-y-1 flex-col items-center">
                <Image
                  src={singletimeline.img}
                  className="rounded-full"
                  alt=""
                  width={24}
                  height={24}
                />
                <div
                  className={`w-[1px] h-[14px] ${timeline.length - 1 === index && "hidden"} border-[1px] border-[#1C1C1C1A]`}
                ></div>
              </div>
              <div className="flex-1">
                <h1 className="text-white font-[400] text-[9px]">
                  {singletimeline.req}
                </h1>
                <p className="text-[#4d5253] text-[8px] font-[400]">
                  {singletimeline.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
