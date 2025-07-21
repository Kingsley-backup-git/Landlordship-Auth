import React from "react";
import Img1 from "./../../../../../../public/contact1.png";
import Image from "next/image";
export default function MobileDevice() {
  const transactions = [
    {
      property: "New Porperty #001",
      tenant: "Natali Craig",
      img: Img1,
      address: "Meadow Lane Oakland",
      rent: 200,
      status: "In Progress",
    },
    {
      property: "New Porperty #001",
      tenant: "Natali Craig",
      img: Img1,
      address: "Meadow Lane Oakland",
      rent: 200,
      status: "Complete",
    },
    {
      property: "New Porperty #001",
      tenant: "Natali Craig",
      img: Img1,
      address: "Meadow Lane Oakland",
      rent: 200,
      status: "Pending",
    },
  ];
  return (
    <div className=" sm:hidden gap-y-4 col-span-12 mt-2 grid 2sm:grid-cols-2 gap-5 grid-cols-1">
      {transactions.map((property, index) => {
        return (
          <div key={index} className="bg-white rounded-2xl p-4">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold  xs:text-base text-sm text-black">
                Property Name
              </h1>

              <div className="max-w-fit w-[100%] px-[8px] py-1 rounded-xl xs:text-sm text-xs font-[400] text-[#AF52DE] bg-[#eddef3]">
                Occupied
              </div>
            </div>

            <div className="flex flex-col divide-y-[1px] mt-1 divide-[#0000001A]">
              <div className="flex justify-between items-center py-2">
                <h1 className="xs:text-sm text-xs flex-1 text-[#00000066] font-[400]">
                  Tenant
                </h1>

                <div className="flex gap-x-1 items-center">
                  <Image
                    src={Img1}
                    className="w-[24px] h-[24px] rounded-full"
                    alt="tenant-img"
                    width={24}
                    height={24}
                  />
                  <h1 className="xs:text-sm text-xs font-[400] text-black">
                    {property.tenant}
                  </h1>
                </div>
              </div>

              <div className="flex justify-between items-center py-2">
                <h1 className="xs:text-sm text-xs flex-1 text-[#00000066] font-[400]">
                  Unit
                </h1>
                <h1 className="xs:text-sm text-xs font-[400] text-black">
                  Single Apartment
                </h1>
              </div>

              <div className="flex justify-between items-center py-2">
                <h1 className="xs:text-sm text-xs flex-1 text-[#00000066] font-[400]">
                  Address
                </h1>
                <h1 className="xs:text-sm text-xs font-[400] text-black">
                  {property.address}
                </h1>
              </div>

              <div className="flex justify-between items-center py-2">
                <h1 className="xs:text-sm text-xs flex-1 text-[#00000066] font-[400]">
                  Rent
                </h1>
                <h1 className="xs:text-sm text-xs font-[400] text-black">
                  £{property.rent}
                </h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
