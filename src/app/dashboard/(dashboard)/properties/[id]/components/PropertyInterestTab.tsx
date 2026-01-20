"use client";
import { useUser } from "@/app/components/Providers/UserProvider";
import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { PiCheckCircle } from "react-icons/pi";
import { PropertyData } from "./types";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { PropertyService } from "@/services/property";
import { getStatusBadge } from "./utils";
import PropertyInterestDetails from "./PropertyInterestDetails";
import { FaRegFolderOpen } from "react-icons/fa";
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

function PropertyInterestTab({
  propertyData,
}: {
  propertyData: PropertyData;
}) {
  const { data } = useUser();
  const queryClient = useQueryClient();
  const [selectedInterest, setSelectedInterest] = useState<Interest | null>(
    null
  );
  const [showDetails, setShowDetails] = useState(false);
  const [isApproving, setIsApproving] = useState(false);
  const [isRejecting, setIsRejecting] = useState(false);

  const { data: interestData, isSuccess, isPending, isError } = useQuery({
    queryKey: ["interests", propertyData?.Properties?._id],
    queryFn: async () =>
      await new PropertyService().getInterests(propertyData?.Properties?._id),
  });

  // Approve mutation
  const approveMutation = useMutation({
    mutationFn: async (interestId: string) => {
      // Replace with your actual API call
      // await new PropertyService().approveInterest(interestId);
      return interestId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["interests", propertyData?.Properties?._id],
      });
      setIsApproving(false);
      setShowDetails(false);
      setSelectedInterest(null);
    },
  });

  // Reject mutation
  const rejectMutation = useMutation({
    mutationFn: async (interestId: string) => {
      // Replace with your actual API call
      // await new PropertyService().rejectInterest(interestId);
      return interestId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["interests", propertyData?.Properties?._id],
      });
      setIsRejecting(false);
      setShowDetails(false);
      setSelectedInterest(null);
    },
  });

  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `https://landlordship-auth.vercel.app/public/properties/${data?.data?.slug}/${propertyData?.Properties?._id}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleViewInterest = (interest: Interest) => {
    setSelectedInterest(interest);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedInterest(null);
  };

  const handleApprove = async (interestId: string) => {
    setIsApproving(true);
    approveMutation.mutate(interestId);
  };

  const handleReject = async (interestId: string) => {
    setIsRejecting(true);
    rejectMutation.mutate(interestId);
  };

  // Show details component if selected
  if (showDetails && selectedInterest) {
    return (
      <PropertyInterestDetails
        interest={selectedInterest}
        onClose={handleCloseDetails}
        onApprove={handleApprove}
        onReject={handleReject}
        isApproving={isApproving}
        isRejecting={isRejecting}
      />
    );
  }

  // Show main list view
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-[#E6F1FD] p-4 sm:p-5 rounded-xl border-[.5px] border-[#0000000A]">
          <h3 className="text-xs font-[400] text-[#00000066] mb-2">
            Total Interest
          </h3>
          <h1 className="text-black font-semibold text-xl sm:text-xl">
            {interestData?.length || 0}
          </h1>
        </div>
      </div>

      {data && (
        <div className="bg-[#F9F9FA] w-full sm:p-6 p-4 rounded-2xl">
          <h1 className="font-semibold text-sm text-black mb-4">
            Application Link
          </h1>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <input
              type="text"
              value={`https://landlordship-auth.vercel.app/public/properties/${data?.data?.slug}/${propertyData?.Properties?._id}`}
              readOnly
              className="flex-1 bg-white border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:ring-opacity-20 truncate"
            />
            <button
              onClick={copyToClipboard}
              className="flex items-center justify-center gap-x-2 bg-white border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] hover:bg-[#F9F9FA] transition-colors whitespace-nowrap"
            >
              {copied ? (
                <>
                  <PiCheckCircle className="text-green-500 text-lg" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <IoCopyOutline className="text-lg" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
<h1 className= "text-2xl font-medium text-black/80">Interests</h1>
      {/* Loading State */}
      {isPending && (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto mb-3"></div>
            <p className="text-[#00000066] font-[400] text-sm">Loading interests...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="bg-[#FFE5E5] border border-red-200 rounded-xl p-6 text-center">
          <p className="text-red-600 font-[400] text-sm">
            Failed to load interests. Please try again later.
          </p>
        </div>
      )}

      {isSuccess && (

        interestData.length < 1 ? <div className="py-4 w-full flex justify-center flex-col items-center">
           <FaRegFolderOpen className="text-5xl text-black"/>
          <h1 className="text-black font-bold">No Interest yet</h1>
          </div>: 
        <div className="sm:block hidden overflow-x-auto w-full px-6">
          <div className="w-full">
            {/* Table Header */}
            <div className="grid grid-cols-12 w-full gap-4 pb-3 border-b-[1px] border-[#0000000A] mb-4">
              <div className="col-span-3 text-[#00000066] font-[400] text-xs">
                Applicant
              </div>
              <div className="col-span-3 text-[#00000066] font-[400] text-xs">
                Applied Date
              </div>
              <div className="col-span-3 text-[#00000066] font-[400] text-xs">
                Move-in Date
              </div>
              <div className="col-span-2 justify-center flex text-[#00000066] font-[400] text-xs">
                Status
              </div>
              <div className="col-span-1 justify-center flex text-[#00000066] font-[400] text-xs">
                Actions
              </div>
            </div>

            {/* Table Rows */}
            <div className="space-y-4 w-full">
              {interestData?.map((intr: Interest, index: number) => (
                <div
                  key={intr._id || index}
                  className="grid grid-cols-12 w-full gap-4 items-center py-3 border-b-[1px] border-[#0000000A] last:border-0"
                >
                  <div className="col-span-3 text-black font-[400] text-sm truncate">
                    {intr.firstName + " " + intr.lastName}
                  </div>
                  <div className="col-span-3 text-black font-[400] text-sm">
                    {new Date(intr.createdAt).toLocaleDateString()}
                  </div>
                  <div className="col-span-3 text-black font-[400] text-sm">
                    {new Date(intr.moveInDate).toLocaleDateString()}
                  </div>
                  <div className="col-span-2 justify-center flex">
                    {getStatusBadge(intr.status)}
                  </div>
                  <div className="col-span-1 justify-center flex">
                    <button
                      onClick={() => handleViewInterest(intr)}
                      className="text-[#007AFF] hover:text-[#0056CC] text-sm font-[400] transition-colors"
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Cards */}
      {isSuccess && (
        <div className="sm:hidden block space-y-4">
          {interestData?.map((intr: Interest, index: number) => (
            <div
              key={intr._id || index}
              className="bg-white p-4 rounded-xl border-[.5px] border-[#0000001A]"
            >
              <div className="flex items-center justify-between mb-3">
                <h1 className="text-black font-semibold text-sm">
                  {intr.firstName + " " + intr.lastName}
                </h1>
                {getStatusBadge(intr.status)}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#00000066] text-xs">Applied:</span>
                  <span className="text-black text-xs font-[400]">
                    {new Date(intr.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#00000066] text-xs">Move-in:</span>
                  <span className="text-black text-xs font-[400]">
                    {new Date(intr.moveInDate).toLocaleDateString()}
                  </span>
                </div>
                <button
                  onClick={() => handleViewInterest(intr)}
                  className="w-full mt-3 text-[#007AFF] hover:text-[#0056CC] text-sm font-[400] transition-colors border-t-[1px] border-[#0000000A] pt-3"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PropertyInterestTab;
