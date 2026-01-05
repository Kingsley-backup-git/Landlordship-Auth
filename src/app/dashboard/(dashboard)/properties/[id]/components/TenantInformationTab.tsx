import React from "react";
import { PiCalendarBlank } from "react-icons/pi";
import { TenantData } from "./types";
import { getStatusBadge } from "./utils";

interface TenantInformationTabProps {
  tenantData: TenantData;
}

export default function TenantInformationTab({
  tenantData,
}: TenantInformationTabProps) {
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
                {tenantData.primaryTenant}
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
                {tenantData.email}
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
                {tenantData.phoneNumber}
              </h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
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
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">
                Lease Status
              </h1>
            </div>
            <div className="sm:flex-[75%]">
              {getStatusBadge(tenantData.leaseStatus)}
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
                {tenantData.moveInDate}
              </h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
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
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
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
          </div>

          <div className="border-t-[1px] border-[#0000000A] pt-6 mt-2">
            <h1 className="font-semibold text-sm text-black mb-4">
              Emergency Contact
            </h1>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="sm:flex-[25%]">
                  <h1 className="text-xs font-[400] text-[#00000066]">Name</h1>
                </div>
                <div className="sm:flex-[75%]">
                  <h1 className="text-black font-[400] text-sm">
                    {tenantData.emergencyContact.name}
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
                    {tenantData.emergencyContact.phoneNumber}
                  </h1>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="sm:flex-[25%]">
                  <h1 className="text-xs font-[400] text-[#00000066]">
                    Relationship
                  </h1>
                </div>
                <div className="sm:flex-[75%]">
                  <h1 className="text-black font-[400] text-sm">
                    {tenantData.emergencyContact.relationship}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


