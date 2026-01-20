import React from "react";
import { PiCalendarBlank, PiDownloadSimple } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";
import Button from "@/app/components/ui/Button";
import { LeaseData } from "./types";
import { getStatusBadge } from "./utils";

interface LeaseInformationTabProps {
  leaseData: LeaseData;
  onEditClick: () => void;
  onDownloadLeaseAgreement: () => void;
}

export default function LeaseInformationTab({
  leaseData,
  onEditClick,
  onDownloadLeaseAgreement,
}: LeaseInformationTabProps) {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Lease Details */}
      <div className="bg-[#F9F9FA] sm:p-6 p-4 rounded-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h1 className="font-semibold text-sm text-black">Lease Details</h1>
          <Button
            type="button"
            onClick={onEditClick}
            classname="bg-white border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-lg py-2 px-4 hover:bg-[#F9F9FA] transition-colors flex items-center gap-x-2 w-full sm:w-auto justify-center"
            text="Edit"
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">Lease Status</h1>
            </div>
            <div className="sm:flex-[75%]">
              {getStatusBadge(leaseData.leaseStatus)}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">Security Deposit</h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">
                ${leaseData.securityDeposit.toLocaleString()}
              </h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">Rent Review</h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">{leaseData.rentReview}</h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">Break Clause</h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">{leaseData.breakClause}</h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%] flex items-center gap-x-2">
              <PiCalendarBlank className="text-[#00000066] text-sm" />
              <h1 className="text-xs font-[400] text-[#00000066]">Lease Start Date</h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">{leaseData.leaseStartDate}</h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%] flex items-center gap-x-2">
              <PiCalendarBlank className="text-[#00000066] text-sm" />
              <h1 className="text-xs font-[400] text-[#00000066]">Lease End Date</h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">{leaseData.leaseEndDate}</h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">Lease Term</h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">{leaseData.leaseTerm}</h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">Monthly Rent</h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">
                ${leaseData.monthlyRent.toLocaleString()}
              </h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">Payment Due Day</h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">{leaseData.paymentDueDay}</h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">Late Fee</h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">{leaseData.lateFee}</h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">Special Terms & Conditions</h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">{leaseData.specialTerms}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Lease Documents Section */}
      <div className="bg-[#F9F9FA] sm:p-6 p-4 rounded-2xl">
        <h1 className="font-semibold text-sm text-black mb-6">Lease Documents</h1>
        <div className="bg-white p-4 rounded-xl border-[.5px] border-[#0000001A]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <IoDocumentTextOutline className="text-2xl text-[#00000066]" />
              <div>
                <h3 className="text-black font-[400] text-sm">Lease Agreement</h3>
                <p className="text-[#00000066] font-[400] text-xs mt-1">PDF Document</p>
              </div>
            </div>
            <button
              onClick={onDownloadLeaseAgreement}
              className="flex items-center gap-x-2 text-[#007AFF] hover:text-[#0056CC] text-sm font-[400] transition-colors bg-[#F9F9FA] px-4 py-2 rounded-lg"
            >
              <PiDownloadSimple className="text-lg" />
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}





