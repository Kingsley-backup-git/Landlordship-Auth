"use client";
import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { getStatusBadge } from "./utils";

interface Interest {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  moveInDate: string;
  reason?: string;
  status: string;
  createdAt: string;
}

interface PropertyInterestDetailsProps {
  interest: Interest | null;
  onClose: () => void;
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
  isApproving?: boolean;
  isRejecting?: boolean;
}

export default function PropertyInterestDetails({
  interest,
  onClose,
  onApprove,
  onReject,
  isApproving = false,
  isRejecting = false,
}: PropertyInterestDetailsProps) {
  if (!interest) return null;

  const handleApprove = () => {
    if (onApprove) {
      onApprove(interest._id);
    }
  };

  const handleReject = () => {
    if (onReject) {
      onReject(interest._id);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="flex items-center gap-x-1 text-[#007AFF] hover:text-[#0056CC] transition-colors group"
          >
            <FaChevronLeft className="text-lg group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-[400] text-sm">Back</span>
          </button>
          <div>
            <h1 className="text-black font-semibold text-lg sm:text-xl">
              Interest Details
            </h1>
            <p className="text-[#00000066] font-[400] text-xs sm:text-sm mt-1">
              Review and manage this application
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-[#F9F9FA] sm:p-6 p-4 rounded-2xl border-[.5px] border-[#0000001A] shadow-sm">
        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {/* First Name */}
          <div>
            <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
              First Name
            </label>
            <p className="text-black font-semibold text-sm sm:text-base">
              {interest.firstName || "N/A"}
            </p>
          </div>

          {/* Last Name */}
          <div>
            <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
              Last Name
            </label>
            <p className="text-black font-semibold text-sm sm:text-base">
              {interest.lastName || "N/A"}
            </p>
          </div>

          {/* Email Address */}
          <div className="sm:col-span-2">
            <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
              Email Address
            </label>
            <p className="text-black font-semibold text-sm sm:text-base break-all">
              {interest.email || "N/A"}
            </p>
          </div>

          {/* Phone Number */}
          <div className="sm:col-span-2">
            <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
              Phone Number
            </label>
            <p className="text-black font-semibold text-sm sm:text-base">
              {interest.phone || "N/A"}
            </p>
          </div>

          {/* Preferred Move-In Date */}
          <div>
            <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
              Preferred Move-In Date
            </label>
            <p className="text-black font-semibold text-sm sm:text-base">
              {interest.moveInDate
                ? new Date(interest.moveInDate).toLocaleDateString()
                : "N/A"}
            </p>
          </div>

          {/* Application Status */}
          <div>
            <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
              Application Status
            </label>
            <div className="mt-1">
              {getStatusBadge(interest.status)}
            </div>
          </div>

          {/* Date Applied */}
          <div className="sm:col-span-2">
            <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
              Date Applied
            </label>
            <p className="text-black font-semibold text-sm sm:text-base">
              {interest.createdAt
                ? new Date(interest.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "N/A"}
            </p>
          </div>

          {/* Reason for Interest */}
          {interest.reason && (
            <div className="sm:col-span-2 pt-6 border-t-[1px] border-[#0000000A]">
              <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                Reason for Interest
              </label>
              <p className="text-black font-[400] text-sm sm:text-base leading-relaxed">
                {interest.reason}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        {interest.status === "pending" && (
          <div className="flex flex-col sm:justify-end sm:flex-row gap-3 sm:gap-4 pt-6 border-t-[1px] border-[#0000000A]">
            <button
              onClick={handleApprove}
              disabled={isApproving || isRejecting}
              className=" bg-green-600 text-white font-medium text-sm sm:text-base py-3 px-6 rounded-lg hover:bg-green-500 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black"
            >
              {isApproving ? "Approving..." : "Approve Interest"}
            </button>
            <button
              onClick={handleReject}
              disabled={isApproving || isRejecting}
              className=" bg-red-600 border-[.5px] border-[#0000001A] text-white font-medium text-sm sm:text-base py-3 px-6 rounded-lg hover:bg-red-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isRejecting ? "Rejecting..." : "Reject Interest"}
            </button>
          </div>
        )}

        {/* Status Message for Approved/Rejected */}
        {(interest.status === "approved" || interest.status === "rejected") && (
          <div className="pt-6 border-t-[1px] border-[#0000000A]">
            <p className="text-[#00000066] font-[400] text-xs sm:text-sm text-center">
              This application has been {interest.status.toLowerCase()}. No further action required.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
