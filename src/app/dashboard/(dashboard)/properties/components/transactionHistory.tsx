/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
// import Checkbox from './inputs/checkbox'
import Img1 from "./../../../../../../public/contact1.png";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import MobileDevice from "./mobileDevices";
import { BsThreeDots } from "react-icons/bs";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { PropertyService } from "@/services/property";
export default function TransactionHistory() {
  const [page, setPage] = useState(1);
  const { data, isSuccess } = useQuery({
    queryKey: ["properties", page],
    queryFn: async () =>
      await new PropertyService().getPaginatedProperties(page),
    placeholderData: keepPreviousData,
  });

  //     useEffect(()=> {
  // console.log(getProperties?.data)
  //     },[page])
  const [show, setShow] = useState<number | null>(null);
  // const [indexes, setIndexes] = useState<number[]>([])
  // const [allChecked, setallChecked] = useState<boolean>(false)
  // function addIndex(index:number) {
  //     if(indexes.includes(index)) {
  // const checked = indexes.filter(val => val !== index)
  // setIndexes(checked)
  //     } else {
  //         setIndexes([...indexes, index])
  //     }

  // }

  // useEffect(()=> {
  // if(indexes.length < 1 && allChecked) {
  //     setallChecked(false)
  // } else if(indexes.length === transactions.length) {
  //     setallChecked(true)
  // }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[indexes])

  // function toggleAll() {
  //     setallChecked(prev => !prev)
  // }

  // useEffect(()=>  {
  //     const addAllIndexes = () => {
  //         if (allChecked) {

  //           const allIndexes = transactions.map((_, index) => index);
  //           setIndexes(allIndexes);
  //         } else {

  //           setIndexes([]);
  //         }

  //       };

  //       addAllIndexes()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   },[allChecked])

  return (
    <>
      <div className="col-span-12 overflow-auto">
        <div className="mt-4 w-full  sm:flex hidden flex-col max-h-[350px]  select-none">
          <div className="flex items-center w-[100%] py-3 border-b-[1px] gap-x-4 border-[#0000000A]">
            {/* <div className='flex-[4%] ps-1'>
<Checkbox  clicked = {()=> toggleAll()} checked ={allChecked}   classname={`w-[14px] h-[14px] cursor-pointer border-[#00000033] flex justify-center items-center  border-[1px] ${(allChecked) ? "bg-black" : ""} rounded`}/>
</div> */}

            <div className="flex-[26%] text-[#00000066] font-[400] text-xs">
              Property
            </div>

            <div className="flex-[23%] text-[#00000066] font-[400] text-xs">
              Tenant
            </div>

            <div className="flex-[20%] text-[#00000066] font-[400] text-xs">
              Address
            </div>

            {/* <div className='flex-[13%] text-[#00000066] font-[400] text-xs'>
    Rent
</div> */}

            {/* <div className='flex-[11%] text-[#00000066] font-[400] text-xs'>
    Status
</div> */}
            <div className="flex-[2%]"></div>
          </div>

          <div className="flex flex-col overflow-y-auto">
            {isSuccess &&
              data?.data?.map((property: any) => {
                return (
                  <div
                    key={property._id}
                    className="flex gap-x-4 items-center cursor-pointer hover:bg-[#0000000A]  py-3 border-b-[1px] border-[#0000000A]"
                    onMouseLeave={() => setShow(null)}
                    onMouseEnter={() => setShow(property._id)}
                  >
                    {/* <div className='flex-[4%] ps-1'>
<Checkbox clicked={()=> addIndex(index)}  checked ={indexes.includes(index) }  classname={`w-[14px] h-[14px] cursor-pointer border-[#00000033] flex justify-center items-center  border-[1px] ${(indexes.includes(index)) ? "bg-black" : ""} rounded`}/>
</div> */}

                    <div className="flex-[26%] text-black font-[400] text-xs">
                      {property.propertyName}
                    </div>

                    <div className="flex-[23%] text-black font-[400] text-xs flex items-center gap-x-2">
                      {property.tenantId?.email && (
                        <Image
                          src={Img1}
                          className="w-[24px] h-[24px] rounded-full"
                          alt="tenant-img"
                          width={24}
                          height={24}
                        />
                      )}
                      {property.tenantId?.email && property.tenantId?.email}
                      {!property.tenantId?.email && "No Tenant"}
                    </div>

                    <div className="flex-[20%] text-black font-[400] text-xs">
                      {property?.stateAddress}, {property?.city}
                    </div>

                    {/* <div className='flex-[13%] text-black font-[400] text-xs'>
   ${transaction.rent}
</div> */}

                    {/* <div className={`flex-[11%]  font-[400] text-xs flex items-center gap-x-2 ${transaction.status === "In Progress" ? "text-[#8A8CD9]" : transaction.status === "Complete" ? "text-[#94E9B8]" : transaction.status === "Pending" ? "text-[#92BFFF]" : transaction.status === "Approved" ? "text-[#FFDB56]" : transaction.status === "Rejected" ? "text-[#00000066]" : null}`}>
<div className={`w-[7px] h-[7px] rounded-full ${transaction.status === "In Progress" ? "bg-[#8A8CD9]" : transaction.status === "Complete" ? "bg-[#94E9B8]" : transaction.status === "Pending" ? "bg-[#92BFFF]" : transaction.status === "Approved" ? "bg-[#FFDB56]" : transaction.status === "Rejected" ? "bg-[#00000066]" : null}`}></div>
<h1 className='font-[400] text-xs'>{transaction.status}</h1>
</div> */}

                    <div className="flex-[2%]">
                      <BsThreeDots
                        className={`text-lg  ${show === property._id ? "visible" : "invisible"} text-black`}
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="sm:flex sm:max-w-[300px] sm:justify-end w-full col-span-12 sm:ms-auto hidden items-center gap-x-2 mt-3">
        <div
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          className={`py-1 ${page === 1 ? "pointer-events-none" : "cursor-pointer"} text-center cursor-pointer rounded-lg border-[#0000001A] border-[0.5px]  sm:flex-[.5] flex-1`}
        >
          <IoIosArrowBack className="text-black mx-auto text-xl" />
        </div>{" "}
        ?
        <div
          onClick={() => setPage((prev) => prev + 1)}
          className={`py-1 text-center ${!data?.hasMore ? "pointer-events-none" : "cursor-pointer"}  rounded-lg border-[#0000001A] border-[0.5px]  sm:flex-[.5] flex-1`}
        >
          <IoIosArrowForward className="text-black mx-auto text-xl" />
        </div>
      </div>

      <MobileDevice />
    </>
  );
}
