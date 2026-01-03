"use client";
import React, { useEffect, useState } from "react";
import Checkbox from "../../../properties/components/inputs/checkbox";
import Img1 from "./../../../../../../../public/contact1.png";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import styles from "../../../dashboard.module.css";
import MobileDevice from "./mobile/mobileDevice";
import { useRouter } from "next/navigation";
export default function TransactionHistory() {
  const [indexes, setIndexes] = useState<number[]>([]);
  const [allChecked, setallChecked] = useState<boolean>(false);
  const router = useRouter()
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
      _id: "1",
      property: "New Porperty #001",
      tenant: "Natali Craig",
      img: Img1,
      type: "Individual",
      email: "ChrisPaul@gmai.com",
      lease_Period : "01/01/23 - 31/12/26",
      monthly_Rent: "€200/mo",
      payment_status : "Pending",
      tenant_status : "active",
      next_payment_due : "01/04/24",
      status: "In Progress",
    },
    {
      _id: "2",
      property: "New Porperty #001",
      tenant: "Natali Craig",
      img: Img1,
      type: "Individual",
      email: "ChrisPaul@gmai.com",
      lease_Period : "01/01/23 - 31/12/26",
      monthly_Rent: "€200/mo",
      payment_status : "Pending",
      tenant_status : "active",
      next_payment_due : "01/04/24",
      status: "In Progress",
    },
    {
      _id: "3",
      property: "New Porperty #001",
      tenant: "Natali Craig",
      img: Img1,
      type: "Individual",
      email: "ChrisPaul@gmai.com",
      lease_Period : "01/01/23 - 31/12/26",
      monthly_Rent: "€200/mo",
      payment_status : "Pending",
      tenant_status : "active",
      next_payment_due : "01/04/24",
      status: "In Progress",
    },
    {
      property: "New Porperty #001",
      tenant: "Natali Craig",
      img: Img1,
      type: "Individual",
      email: "ChrisPaul@gmai.com",
      lease_Period : "01/01/23 - 31/12/26",
      monthly_Rent: "€200/mo",
      payment_status : "Pending",
      tenant_status : "active",
      next_payment_due : "01/04/24",
      status: "In Progress",
    },
    {
      _id: "4",
      property: "New Porperty #001",
      tenant: "Natali Craig Natali CraigNatali CraigNatali Craig",
      img: Img1,
      type: "Individual",
      email: "ChrisPaul@gmai.com",
      lease_Period : "01/01/23 - 31/12/26",
      monthly_Rent: "€200/mo",
      payment_status : "Pending",
      tenant_status : "active",
      next_payment_due : "01/04/24",
      status: "In Progress",
    },
    {
      _id: "5",
      property: "New Porperty #001",
      tenant: "Natali Craig",
      img: Img1,
      type: "Individual",
      email: "ChrisPaul@gmai.com",
      lease_Period : "01/01/23 - 31/12/26",
      monthly_Rent: "€200/mo",
      payment_status : "Pending",
      tenant_status : "active",
      next_payment_due : "01/04/24",
      status: "In Progress",
    },

    {
      _id: "6",
      property: "New Porperty #001",
      tenant: "Natali Craig",
      img: Img1,
      type: "Individual",
      email: "ChrisPaul@gmai.comChrisPaul@gmai.comChrisPaul@gmai.com",
      lease_Period : "01/01/23 - 31/12/26",
      monthly_Rent: "€200/mo",
      payment_status : "Pending",
      tenant_status : "active",
      next_payment_due : "01/04/24",
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
        <div className="w-full min-w-[1200px] max-w-[1200px]  mt-4 sm:flex hidden flex-col h-[350px] select-none">
          <div className="flex items-center w-full py-3 px-1 gap-4 border-b-[1px]  border-[#0000000A]">
        

            <div className="basis-[250px] text-center text-[#00000066] font-[400] text-xs">
              Tenant
            </div>

            <div className="basis-[150px]  text-center text-[#00000066] font-[400] text-xs">
              Type
            </div>

            <div className="basis-[200px]  text-center text-[#00000066] font-[400] text-xs">
              Property
            </div>

            <div className="basis-[250px]  text-center text-[#00000066] font-[400] 1md:flex hidden text-xs">
              Email
            </div>

            <div className="basis-[200px] text-balance text-center  text-[#00000066] font-[400] 1md:flex hidden text-xs">
           Lease Period
            </div>


            <div className="basis-[150px] text-balance text-center text-[#00000066] font-[400] 1md:flex hidden text-xs">
        Monthly Rent
            </div>


              <div className="basis-[150px] text-balance text-center text-[#00000066] font-[400] 1md:flex hidden text-xs">
        Payment Status
            </div>


            <div className="basis-[150px] text-balance text-center text-[#00000066] font-[400] 1md:flex hidden text-xs">
        Tenant Status
            </div>


            <div className="basis-[150px] text-balance text-center text-[#00000066] font-[400] 1md:flex hidden text-xs">
          Next Payment Due
            </div>

           
            
            <div className="flex-[4%]"></div>
          </div>

          <div className={`flex flex-col flex-1 overflow-y-auto ${styles.overflow}`}>
            {transactions.map((transaction, index) => {
              return (
                <div
                  key={index}
                  onClick={() => router.push(`/dashboard/people/tenants/${transaction._id}`)}
                  className={`flex cursor-pointer gap-4 hover:bg-[#0000000A] items-center py-3 px-1 border-b-[1px] border-[#0000000A]`}
                >
               

                  <div className="basis-[250px] break-all  text-black font-[400] text-xs flex items-center gap-x-1">
                    <Image
                      src={transaction.img}
                      className="w-[24px] h-[24px] rounded-full"
                      alt="tenant-img"
                      width={24}
                      height={24}
                    />
                    {transaction.tenant}
                  </div>

                  <div className="basis-[150px] break-all text-center text-black font-[400] text-xs ">
                    {transaction.type}
                  </div>

                  <div className="basis-[200px] break-all text-center text-black font-[400] text-xs">
                    {transaction.property}
                  </div>

                  <div className="basis-[250px] break-all text-center flex-wrap    whitespace-wrap text-black font-[400] 1md:flex hidden text-xs">
                    {transaction.email}
                  </div>
                  <div className="basis-[200px]  break-all text-center text-black font-[400] text-xs">
                    {transaction.lease_Period}
                  </div>
                  <div className="basis-[150px] break-all text-center text-black font-[400] text-xs">
                    {transaction.monthly_Rent}
                  </div>

                  <div className="basis-[150px] break-all text-center text-black font-[400] text-xs">
                    {transaction.payment_status}
                  </div>

                  <div className="basis-[150px] break-all text-center text-black font-[400] text-xs">
                    {transaction.tenant_status}
                  </div>

                   <div className="basis-[150px] break-all text-center text-black font-[400] text-xs">
                    {transaction.next_payment_due}
                  </div>
                  {/* <div
                    className={`flex-[11%] font-[400] text-xs flex items-center gap-x-2 ${transaction.status === "In Progress" ? "text-[#8A8CD9]" : transaction.status === "Complete" ? "text-[#94E9B8]" : transaction.status === "Pending" ? "text-[#92BFFF]" : transaction.status === "Approved" ? "text-[#FFDB56]" : transaction.status === "Rejected" ? "text-[#00000066]" : null}`}
                  >
                    <div
                      className={`w-[7px] h-[7px] rounded-full ${transaction.status === "In Progress" ? "bg-[#8A8CD9]" : transaction.status === "Complete" ? "bg-[#94E9B8]" : transaction.status === "Pending" ? "bg-[#92BFFF]" : transaction.status === "Approved" ? "bg-[#FFDB56]" : transaction.status === "Rejected" ? "bg-[#00000066]" : null}`}
                    ></div>
                    <h1 className="font-[400] text-xs">{transaction.status}</h1>
                  </div> */}

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
