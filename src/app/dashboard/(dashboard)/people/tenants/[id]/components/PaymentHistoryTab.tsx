import React from "react";
import { PiDownloadSimple } from "react-icons/pi";
import { PaymentHistoryItem } from "./types";
import { getStatusBadge } from "./utils";

interface PaymentHistoryTabProps {
  paymentHistoryData: PaymentHistoryItem[];
  totalPaid: number;
  avgPaymentTime: string;
  outstandingBalance: number;
  nextPayment: string;
  onDownloadReceipt: (payment: PaymentHistoryItem) => void;
}

export default function PaymentHistoryTab({
  paymentHistoryData,
  totalPaid,
  avgPaymentTime,
  outstandingBalance,
  nextPayment,
  onDownloadReceipt,
}: PaymentHistoryTabProps) {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Payment Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-[#E6F1FD] p-4 sm:p-5 rounded-xl border-[.5px] border-[#0000000A]">
          <h3 className="text-xs font-[400] text-[#00000066] mb-2">Total Paid</h3>
          <h1 className="text-black font-semibold text-xl sm:text-xl">
            ${totalPaid.toLocaleString()}
          </h1>
        </div>
        <div className="bg-[#EDEEFC] p-4 sm:p-5 rounded-xl border-[.5px] border-[#0000000A]">
          <h3 className="text-xs font-[400] text-[#00000066] mb-2">Avg. Payment Time</h3>
          <h1 className="text-black font-semibold text-xl sm:text-xl">{avgPaymentTime}</h1>
        </div>
        <div className=" bg-[#E6F1FD] p-4 sm:p-5 rounded-xl border-[.5px] border-[#0000000A]">
          <h3 className="text-xs font-[400] text-[#00000066] mb-2">Outstanding Balance</h3>
          <h1 className="text-black font-semibold text-xl sm:text-xl">
            ${outstandingBalance.toLocaleString()}
          </h1>
        </div>
        <div className="bg-[#EDEEFC] p-4 sm:p-5 rounded-xl border-[.5px] border-[#0000000A]">
          <h3 className="text-xs font-[400] text-[#00000066] mb-2">Next Payment</h3>
          <h1 className="text-black font-semibold text-xl sm:text-xl">{nextPayment}</h1>
        </div>
      </div>

      {/* Payment History Table */}
      <div className="bg-[#F9F9FA] sm:p-6 p-4 rounded-2xl">
        <h1 className="font-semibold text-sm text-black mb-6">Payment History</h1>

        {/* Desktop Table */}
        <div className="sm:block hidden overflow-x-auto -mx-6 px-6">
          <div className="min-w-[900px]">
            <div className="grid grid-cols-12 gap-4 pb-3 border-b-[1px] border-[#0000000A] mb-4">
              <div className="col-span-2 text-[#00000066] font-[400] text-xs">Date</div>
              <div className="col-span-2 text-[#00000066] font-[400] text-xs">Period</div>
              <div className="col-span-2 text-[#00000066] font-[400] text-xs">Amount</div>
              <div className="col-span-2 text-[#00000066] font-[400] text-xs">Method</div>
              <div className="col-span-2 text-[#00000066] font-[400] text-xs">Status</div>
              <div className="col-span-1 text-[#00000066] font-[400] text-xs">Reference</div>
              <div className="col-span-1 text-[#00000066] font-[400] text-xs">Receipt</div>
            </div>

            <div className="space-y-4">
              {paymentHistoryData.map((payment, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 items-center py-3 border-b-[1px] border-[#0000000A] last:border-0"
                >
                  <div className="col-span-2 text-black font-[400] text-sm">
                    {new Date(payment.date).toLocaleDateString()}
                  </div>
                  <div className="col-span-2 text-black font-[400] text-sm">{payment.period}</div>
                  <div className="col-span-2 text-black font-[400] text-sm">
                    ${payment.amount.toLocaleString()}
                  </div>
                  <div className="col-span-2 text-black font-[400] text-sm">{payment.method}</div>
                  <div className="col-span-2">{getStatusBadge(payment.status)}</div>
                  <div className="col-span-1 text-black font-[400] text-sm text-xs truncate">
                    {payment.reference}
                  </div>
                  <div className="col-span-1">
                    <button
                      onClick={() => onDownloadReceipt(payment)}
                      className="flex items-center gap-x-1 text-[#007AFF] hover:text-[#0056CC] text-sm font-[400] transition-colors whitespace-nowrap"
                    >
                      <PiDownloadSimple className="text-lg" />
                      <span>Receipt</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="sm:hidden block space-y-4">
          {paymentHistoryData.map((payment, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl border-[.5px] border-[#0000001A]"
            >
              <div className="flex items-center justify-between mb-3">
                <h1 className="text-black font-semibold text-sm">{payment.period}</h1>
                {getStatusBadge(payment.status)}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#00000066] text-xs">Date:</span>
                  <span className="text-black text-xs font-[400]">
                    {new Date(payment.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#00000066] text-xs">Amount:</span>
                  <span className="text-black text-sm font-semibold">
                    ${payment.amount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#00000066] text-xs">Method:</span>
                  <span className="text-black text-xs font-[400]">{payment.method}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#00000066] text-xs">Reference:</span>
                  <span className="text-black text-xs font-[400] truncate ml-2">
                    {payment.reference}
                  </span>
                </div>
                <button
                  onClick={() => onDownloadReceipt(payment)}
                  className="w-full mt-3 flex items-center justify-center gap-x-2 text-[#007AFF] hover:text-[#0056CC] text-sm font-[400] transition-colors bg-[#F9F9FA] py-2 rounded-lg"
                >
                  <PiDownloadSimple className="text-lg" />
                  <span>Download Receipt</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}





