"use client";
import React, { useEffect, useState } from "react";
import Checkbox from "../../../properties/components/inputs/checkbox";
import Img1 from "./../../../../../../../public/contact1.png";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import styles from "../../../dashboard.module.css";
import MobileDevice from "./mobile/mobileDevice";
export default function TransactionHistory() {
  const [indexes, setIndexes] = useState<number[]>([]);
  const [allChecked, setallChecked] = useState<boolean>(false);
  function addIndex(index: number) {
    if (indexes.includes(index)) {
      const checked = indexes.filter((val) => val !== index);
      setIndexes(checked);
    } else {
      setIndexes([...indexes, index]);
    }
  }

  useEffect(() => {
    if (indexes.length < 1 && allChecked) {
      setallChecked(false);
    } else if (indexes.length === transactions.length) {
      setallChecked(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexes]);

  function toggleAll() {
    setallChecked((prev) => !prev);
  }
  const transactions = [
    {
      property: "New Porperty #001",
      tenant: "Natali Craig",
      img: Img1,
      type: "Individual",
      email: "ChrisPaul@gmai.com",
      balance: 200,
      status: "In Progress",
    },
    {
      property: "New Porperty #001",
      tenant: "Natali Craig",
      img: Img1,
      type: "Individual",
      email: "ChrisPaul@gmai.com",
      balance: 200,
      status: "In Progress",
    },
    {
      property: "New Porperty #001",
      tenant: "Natali Craig",
      img: Img1,
      type: "Individual",
      email: "ChrisPaul@gmai.com",
      balance: 200,
      status: "In Progress",
    },
    {
      property: "New Porperty #001",
      tenant: "Natali Craig",
      img: Img1,
      type: "Individual",
      email: "ChrisPaul@gmai.com",
      balance: 200,
      status: "In Progress",
    },
    {
      property: "New Porperty #001",
      tenant: "Natali Craig",
      img: Img1,
      type: "Individual",
      email: "ChrisPaul@gmai.com",
      balance: 200,
      status: "In Progress",
    },
    {
      property: "New Porperty #001",
      tenant: "Natali Craig",
      img: Img1,
      type: "Individual",
      email: "ChrisPaul@gmai.com",
      balance: 200,
      status: "In Progress",
    },

    {
      property: "New Porperty #001",
      tenant: "Natali Craig",
      img: Img1,
      type: "Individual",
      email: "ChrisPaul@gmai.com",
      balance: 200,
      status: "In Progress",
    },
  ];

  useEffect(() => {
    const addAllIndexes = () => {
      if (allChecked) {
        const allIndexes = transactions.map((_, index) => index);
        setIndexes(allIndexes);
      } else {
        setIndexes([]);
      }
    };

    addAllIndexes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allChecked]);
  return (
    <>
      <div className="col-span-12 overflow-auto">
        <div className="w-full 1/2md:min-w-[100%] sm:min-w-[800px] 1md:min-w-[900px] mt-4 sm:flex hidden flex-col h-[350px] select-none">
          <div className="flex items-center w-[100%] py-3 px-1 border-b-[1px]  border-[#0000000A]">
            <div className="flex-[4%] ps-1">
              <Checkbox
                clicked={() => toggleAll()}
                checked={allChecked}
                classname={`w-[14px] h-[14px] border-[#00000033] flex justify-center items-center cursor-pointer border-[1px] ${allChecked ? "bg-black" : ""} rounded`}
              />
            </div>

            <div className="flex-[24%] text-[#00000066] font-[400] text-xs">
              Tenant
            </div>

            <div className="flex-[12%] text-[#00000066] font-[400] text-xs">
              Type
            </div>

            <div className="1md:flex-[17%] flex-[20%] text-[#00000066] font-[400] text-xs">
              Property
            </div>

            <div className="flex-[17%] text-[#00000066] font-[400] 1md:flex hidden text-xs">
              Email
            </div>

            <div className="flex-[10%] text-[#00000066] font-[400] text-xs">
              Balance
            </div>
            <div className="flex-[11%] text-[#00000066] font-[400] text-xs">
              Status
            </div>
            <div className="flex-[4%]"></div>
          </div>

          <div className={`flex flex-col overflow-y-auto ${styles.overflow}`}>
            {transactions.map((transaction, index) => {
              return (
                <div
                  key={index}
                  onClick={() => null}
                  className={`flex cursor-pointer hover:bg-[#0000000A] items-center py-3 px-1 border-b-[1px] border-[#0000000A]`}
                >
                  <div className="flex-[4%] ps-1">
                    <Checkbox
                      clicked={() => addIndex(index)}
                      checked={indexes.includes(index)}
                      classname={`w-[14px] cursor-pointer  h-[14px] border-[#00000033] flex justify-center items-center border-[1px] ${indexes.includes(index) ? "bg-black" : ""} rounded`}
                    />
                  </div>

                  <div className="flex-[24%] text-black font-[400] text-xs flex items-center gap-x-1">
                    <Image
                      src={transaction.img}
                      className="w-[24px] h-[24px] rounded-full"
                      alt="tenant-img"
                      width={24}
                      height={24}
                    />
                    {transaction.tenant}
                  </div>

                  <div className="flex-[12%] text-black font-[400] text-xs ">
                    {transaction.type}
                  </div>

                  <div className="1md:flex-[17%] flex-[20%] text-black font-[400] text-xs">
                    {transaction.property}
                  </div>

                  <div className="flex-[17%] text-black font-[400] 1md:flex hidden text-xs">
                    {transaction.email}
                  </div>
                  <div className="flex-[10%] text-black font-[400] text-xs">
                    ${transaction.balance}
                  </div>

                  <div
                    className={`flex-[11%] font-[400] text-xs flex items-center gap-x-2 ${transaction.status === "In Progress" ? "text-[#8A8CD9]" : transaction.status === "Complete" ? "text-[#94E9B8]" : transaction.status === "Pending" ? "text-[#92BFFF]" : transaction.status === "Approved" ? "text-[#FFDB56]" : transaction.status === "Rejected" ? "text-[#00000066]" : null}`}
                  >
                    <div
                      className={`w-[7px] h-[7px] rounded-full ${transaction.status === "In Progress" ? "bg-[#8A8CD9]" : transaction.status === "Complete" ? "bg-[#94E9B8]" : transaction.status === "Pending" ? "bg-[#92BFFF]" : transaction.status === "Approved" ? "bg-[#FFDB56]" : transaction.status === "Rejected" ? "bg-[#00000066]" : null}`}
                    ></div>
                    <h1 className="font-[400] text-xs">{transaction.status}</h1>
                  </div>

                  <div className="flex-[4%]"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="sm:flex col-span-12 hidden items-center gap-x-2 mt-3">
        <div className="py-1 text-center cursor-pointer flex-1 rounded-lg border-[#0000001A] border-[0.5px] font-[400] text-sm text-black">
          1
        </div>

        <div className="py-1 flex-1 text-center cursor-pointer flex-1- rounded-lg border-[#0000001A] border-[0.5px] font-[400] text-sm text-black">
          2
        </div>

        <div className="py-1 text-center flex-1 cursor-pointer rounded-lg border-[#0000001A] border-[0.5px] font-[400] text-sm text-black">
          3
        </div>

        <div className="py-1 text-center flex-1 cursor-pointer rounded-lg border-[#0000001A] border-[0.5px] font-[400] text-sm text-black">
          4
        </div>

        <div className="py-1 text-center flex-1 cursor-pointer rounded-lg border-[#0000001A] border-[0.5px] font-[400] text-sm text-black">
          5
        </div>

        <div className="py-1 text-center cursor-pointer rounded-lg border-[#0000001A] border-[0.5px] flex-1">
          <IoIosArrowBack className="text-black mx-auto text-xl" />
        </div>

        <div className="py-1 text-center cursor-pointer rounded-lg border-[#0000001A] border-[0.5px] flex-1">
          <IoIosArrowForward className="text-black mx-auto text-xl" />
        </div>
      </div>

      <MobileDevice />
    </>
  );
}
