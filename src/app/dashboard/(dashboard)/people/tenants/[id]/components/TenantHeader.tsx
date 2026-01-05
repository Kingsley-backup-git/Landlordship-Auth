import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { PiCalendarBlank } from "react-icons/pi";
import { useRouter } from "next/navigation";
import UserImg from "../../../../../../../../public/user.png";
import { TenantData } from "./types";

interface TenantHeaderProps {
  tenantData: TenantData;
}

export default function TenantHeader({ tenantData }: TenantHeaderProps) {
  const { push } = useRouter();

  return (
    <>
      {/* Header */}
      <div className="flex sm:block items-center justify-between mb-6">
        <Link
          href="/dashboard/people/tenants"
          className="flex items-center sm:hidden gap-x-[1px]"
        >
          <FaChevronLeft className="text-[#007AFF] text-lg" />
          <h1 className="font-[400] sm:text-base text-sm tracking-[-0.43px] text-[#007AFF]">
            Back
          </h1>
        </Link>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-x-3">
            <button
              onClick={() => push("/dashboard/people/tenants")}
              className="sm:flex hidden items-center gap-x-1 text-[#007AFF]"
            >
              <FaChevronLeft className="text-[#007AFF] text-lg" />
              <h1 className="font-[400] text-sm text-[#007AFF]">Back</h1>
            </button>
            <h1 className="text-black font-semibold sm:tracking-normal tracking-[-0.43px] sm:text-lg text-base">
              Tenant Details
            </h1>
          </div>

          <BsThreeDots className="text-[#007AFF] text-lg sm:hidden flex" />
        </div>
      </div>

      {/* Tenant Overview Card */}
      <div className="bg-[#F9F9FA] p-6 rounded-2xl mb-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-x-4 flex-1">
            <div className="relative">
              <Image
                src={UserImg}
                alt="Tenant"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#94E9B8] border-2 border-white rounded-full"></div>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-semibold text-lg">{tenantData.name}</h1>
              <div className="flex items-center gap-x-2 mt-1">
                <PiCalendarBlank className="text-sm text-[#00000066]" />
                <h1 className="font-[400] text-xs text-[#00000066]">
                  Joined {tenantData.dateJoined}
                </h1>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div
              className={`px-3 py-1 rounded-lg text-xs font-[400] ${
                tenantData.leaseStatus === "Active"
                  ? "bg-[#e5efea] text-green-500"
                  : "bg-[#f5f5f5] text-[#00000066]"
              }`}
            >
              {tenantData.leaseStatus}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


