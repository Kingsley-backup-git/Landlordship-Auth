import React from "react";
import { PiCalendarBlank } from "react-icons/pi";

import { getStatusBadge } from "./utils";
import { useQuery } from "@tanstack/react-query";
import { TenantService } from "@/services/tenant";

interface TenantInformationTabProps {
  propertyId: string;
}

export default function TenantInformationTab({
propertyId
}: TenantInformationTabProps) {

  const { data, isSuccess, isPending, isError } = useQuery({
    queryKey: ['landlordtenant'],
    queryFn : async()=> await new TenantService().getLandlordTenant(propertyId)
  })
  if(isSuccess)
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-[#F9F9FA] sm:p-6 p-4 rounded-2xl">
        <h1 className="font-semibold text-sm text-black mb-6">
          Tenant Information
        </h1>

        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">
                Primary Tenant
              </h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">
                {data[0].firstName + " " + data[0].lastName}
              </h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">
                Email Address
              </h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm break-all">
                {data[0].email}
              </h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">
                Phone Number
              </h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">
                {data[0].phone}
              </h1>
            </div>
          </div>

          {/* <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">
                Monthly Rent
              </h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">
                ${tenantData.monthlyRent.toLocaleString()}
              </h1>
            </div>
          </div> */}

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">
                Lease Status
              </h1>
            </div>
            <div className="sm:flex-[75%]">
              {getStatusBadge(data[0].status)}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%] flex items-center gap-x-2">
              <PiCalendarBlank className="text-[#00000066] text-sm" />
              <h1 className="text-xs font-[400] text-[#00000066]">
                Move-in Date
              </h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">
                {new Date(data[0].moveInDate).toLocaleDateString()}
              </h1>
            </div>
          </div>

          {/* <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%] flex items-center gap-x-2">
              <PiCalendarBlank className="text-[#00000066] text-sm" />
              <h1 className="text-xs font-[400] text-[#00000066]">
                Lease Start Date
              </h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">
                {tenantData.leaseStartDate}
              </h1>
            </div>
          </div> */}

          {/* <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%] flex items-center gap-x-2">
              <PiCalendarBlank className="text-[#00000066] text-sm" />
              <h1 className="text-xs font-[400] text-[#00000066]">
                Lease End Date
              </h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">
                {tenantData.leaseEndDate}
              </h1>
            </div>
          </div> */}

          </div>
        </div>
     
    </div>
  );
}





