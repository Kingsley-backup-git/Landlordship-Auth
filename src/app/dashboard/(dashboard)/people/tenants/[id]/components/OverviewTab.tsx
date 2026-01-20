import React from "react";
import { PiHouseSimple, PiCalendarBlank, PiDownloadSimple } from "react-icons/pi";
import { MdOutlineSchedule, MdOutlineRefresh } from "react-icons/md";
import { PiNotePencil, PiFileText } from "react-icons/pi";
import { TenantData } from "./types";
import { getStatusBadge } from "./utils";

interface OverviewTabProps {
  tenantData: TenantData;
  onExportPaymentHistory: () => void;
  onDownloadReceipt: (payment: { month: string; amount: number; status: string; date: string }) => void;
}

export default function OverviewTab({
  tenantData,
  onExportPaymentHistory,
  onDownloadReceipt,
}: OverviewTabProps) {
  return (
    <div className="space-y-6">
      {/* Property & Status Section */}
      <div className="bg-[#F9F9FA] p-6 rounded-2xl">
        <h1 className="font-semibold text-sm text-black mb-6">Property & Status</h1>
        <div className="flex flex-col gap-y-6">
          <div className="flex items-center">
            <div className="flex-[25%] flex items-center gap-x-2">
              <PiHouseSimple className="text-[#00000066] text-sm" />
              <h1 className="text-xs font-[400] text-[#00000066]">Property</h1>
            </div>
            <div className="flex-[75%]">
              <h1 className="text-black font-[400] text-sm">{tenantData.propertyName}</h1>
              <h1 className="text-[#00000066] font-[400] text-xs mt-1">
                {tenantData.propertyAddress}
              </h1>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">Tenant Status</h1>
            </div>
            <div className="flex-[75%]">
              {getStatusBadge(tenantData.leaseStatus)}
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">Monthly Rent</h1>
            </div>
            <div className="flex-[75%]">
              <h1 className="text-black font-[400] text-sm">
                ${tenantData.monthlyRent.toLocaleString()}
              </h1>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex-[25%] flex items-center gap-x-2">
              <PiCalendarBlank className="text-[#00000066] text-sm" />
              <h1 className="text-xs font-[400] text-[#00000066]">Lease Period</h1>
            </div>
            <div className="flex-[75%]">
              <h1 className="text-black font-[400] text-sm">
                {tenantData.leaseStartDate} - {tenantData.leaseEndDate}
              </h1>
              <h1 className="text-[#00000066] font-[400] text-xs mt-1">
                ({tenantData.leaseTerm})
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Payment History */}
      {/* <div className="bg-[#F9F9FA] p-6 rounded-2xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-semibold text-sm text-black">Payment History</h1>
          <button
            type="button"
            onClick={onExportPaymentHistory}
            className="flex items-center gap-x-2 text-sm text-black font-[400] hover:text-[#007AFF] transition-colors"
          >
            <PiDownloadSimple className="text-lg" />
            <span>Export</span>
          </button>
        </div>
        <div className="space-y-4">
          {tenantData.paymentHistory.map((payment, index) => (
            <div
              key={index}
              className="flex items-center justify-between pb-4 border-b-[1px] border-[#0000000A] last:border-0 last:pb-0"
            >
              <div className="flex-1">
                <h1 className="text-black font-[400] text-sm">{payment.month}</h1>
                <h1 className="text-[#00000066] font-[400] text-xs mt-1">
                  Paid on {payment.date}
                </h1>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="text-right">
                  <h1 className="text-black font-[400] text-sm">
                    ${payment.amount.toLocaleString()}
                  </h1>
                  {getStatusBadge(payment.status)}
                </div>
                <button
                  type="button"
                  onClick={() => onDownloadReceipt(payment)}
                  className="flex items-center gap-x-1 text-xs text-[#00000066] hover:text-[#007AFF] transition-colors px-2 py-1 rounded hover:bg-white"
                  title="Download Receipt"
                >
                  <PiDownloadSimple className="text-sm" />
                  <span className="sm:inline hidden">Receipt</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Quick Actions */}
      <div className="bg-[#F9F9FA] p-6 rounded-2xl">
        <h1 className="font-semibold text-sm text-black mb-6">Quick Actions</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <button
            type="button"
            onClick={() => console.log("Renew Lease")}
            className="bg-white border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-lg py-3 px-4 flex items-center justify-center gap-x-2 hover:bg-[#F9F9FA] transition-colors"
          >
            <MdOutlineRefresh className="text-lg" />
            <span>Renew Lease</span>
          </button>
          <button
            type="button"
            onClick={() => console.log("Schedule Inspection")}
            className="bg-white border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-lg py-3 px-4 flex items-center justify-center gap-x-2 hover:bg-[#F9F9FA] transition-colors"
          >
            <MdOutlineSchedule className="text-lg" />
            <span>Schedule Inspection</span>
          </button>
          <button
            type="button"
            onClick={() => console.log("Add Note")}
            className="bg-white border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-lg py-3 px-4 flex items-center justify-center gap-x-2 hover:bg-[#F9F9FA] transition-colors"
          >
            <PiNotePencil className="text-lg" />
            <span>Add Note</span>
          </button>
          <button
            type="button"
            onClick={() => console.log("Generate Statement")}
            className="bg-white border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-lg py-3 px-4 flex items-center justify-center gap-x-2 hover:bg-[#F9F9FA] transition-colors"
          >
            <PiFileText className="text-lg" />
            <span>Generate Statement</span>
          </button>
        </div>
      </div>
    </div>
  );
}





