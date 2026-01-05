"use client";
import React, { useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { LeaseData } from "./types";

interface LeaseEditFormProps {
  leaseData: LeaseData;
  setLeaseData: React.Dispatch<React.SetStateAction<LeaseData>>;
  isOpen: boolean;
  onClose: () => void;
}

export default function LeaseEditForm({
  leaseData,
  setLeaseData,
  isOpen,
  onClose,
}: LeaseEditFormProps) {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        formRef.current &&
        !formRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0  justify-center items-center flex bg-black bg-opacity-20 z-40"
       
      >

<div
        ref={formRef}
        className="w-[500px] z-50  bg-white rounded-t-xl sm:rounded-xl border-[.5px] border-[#0000001A] shadow-lg p-6 animate-fadeIn max-h-[80vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-semibold text-sm text-black">Edit Lease Information</h2>
          <button
            onClick={onClose}
            className="text-[#00000066] hover:text-black transition-colors"
          >
            <MdClose className="text-xl" />
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Lease Status</label>
            <select
              value={leaseData.leaseStatus}
              onChange={(e) => setLeaseData({ ...leaseData, leaseStatus: e.target.value })}
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            >
              <option value="Active">Active</option>
              <option value="Expired">Expired</option>
              <option value="Terminated">Terminated</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Security Deposit</label>
            <input
              type="number"
              value={leaseData.securityDeposit}
              onChange={(e) => setLeaseData({ ...leaseData, securityDeposit: Number(e.target.value) })}
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            />
          </div>
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Rent Review</label>
            <input
              type="text"
              value={leaseData.rentReview}
              onChange={(e) => setLeaseData({ ...leaseData, rentReview: e.target.value })}
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            />
          </div>
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Break Clause</label>
            <input
              type="text"
              value={leaseData.breakClause}
              onChange={(e) => setLeaseData({ ...leaseData, breakClause: e.target.value })}
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            />
          </div>
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Lease Start Date</label>
            <input
              type="text"
              value={leaseData.leaseStartDate}
              onChange={(e) => setLeaseData({ ...leaseData, leaseStartDate: e.target.value })}
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            />
          </div>
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Lease End Date</label>
            <input
              type="text"
              value={leaseData.leaseEndDate}
              onChange={(e) => setLeaseData({ ...leaseData, leaseEndDate: e.target.value })}
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            />
          </div>
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Lease Term</label>
            <input
              type="text"
              value={leaseData.leaseTerm}
              onChange={(e) => setLeaseData({ ...leaseData, leaseTerm: e.target.value })}
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            />
          </div>
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Monthly Rent</label>
            <input
              type="number"
              value={leaseData.monthlyRent}
              onChange={(e) => setLeaseData({ ...leaseData, monthlyRent: Number(e.target.value) })}
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            />
          </div>
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Payment Due Day</label>
            <input
              type="text"
              value={leaseData.paymentDueDay}
              onChange={(e) => setLeaseData({ ...leaseData, paymentDueDay: e.target.value })}
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            />
          </div>
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Late Fee</label>
            <input
              type="text"
              value={leaseData.lateFee}
              onChange={(e) => setLeaseData({ ...leaseData, lateFee: e.target.value })}
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            />
          </div>
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Special Terms & Conditions</label>
            <textarea
              value={leaseData.specialTerms}
              onChange={(e) => setLeaseData({ ...leaseData, specialTerms: e.target.value })}
              rows={4}
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-[#F9F9FA] border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-lg py-2 px-4 hover:bg-[#F5F5F5] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-black text-white text-sm font-[400] rounded-lg py-2 px-4 hover:bg-[#333] transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      </div>
    
    </>
  );
}


