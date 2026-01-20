"use client";
import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { PiCheckCircle } from "react-icons/pi";
import { Application, PropertyData } from "./types";
import { getStatusBadge } from "./utils";
import PropertyApplicationDetails from "./PropertyApplicationDetails";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaRegFolderOpen } from "react-icons/fa";
interface PropertyApplicationsTabProps {
  propertyData: PropertyData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  applications: any;
  copied: boolean;
  onCopy: () => void;
  setApplicationStatus: Dispatch<SetStateAction<string>>;
  filteredStatus: Application[];
}





export default function PropertyApplicationsTab({
  propertyData,
  applications,
  copied,
  onCopy,
  setApplicationStatus,
  filteredStatus,
}: PropertyApplicationsTabProps) {
  const queryClient = useQueryClient();
  const [selectedApplication, setSelectedApplication] =
    useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isApproving, setIsApproving] = useState(false);
  const [isRejecting, setIsRejecting] = useState(false);

  // Approve mutation
  const approveMutation = useMutation({
    mutationFn: async (applicationId: string) => {
      // Replace with your actual API call
      // await new ApplicationService().approveApplication(applicationId);
      return applicationId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["applications", propertyData?.Properties?._id],
      });
      setIsApproving(false);
      setShowDetails(false);
      setSelectedApplication(null);
    },
  });

  // Reject mutation
  const rejectMutation = useMutation({
    mutationFn: async (applicationId: string) => {
      // Replace with your actual API call
      // await new ApplicationService().rejectApplication(applicationId);
      return applicationId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["applications", propertyData?.Properties?._id],
      });
      setIsRejecting(false);
      setShowDetails(false);
      setSelectedApplication(null);
    },
  });

  const handleViewApplication = () => {
   
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedApplication(null);
  };

  const handleApprove = async (applicationId: string) => {
    setIsApproving(true);
    approveMutation.mutate(applicationId);
  };

  const handleReject = async (applicationId: string) => {
    setIsRejecting(true);
    rejectMutation.mutate(applicationId);
  };
  const pendingApplications = useCallback((val:string) => {
    if (val === "pending") {
      const pending = applications.filter((item: { status: string }) => (item.status === "pending"))
      return pending
    } else if (val === "approved") {
      const approved = applications.filter((item: { status: string }) => (item.status === "approved"))
      return approved
      
    } else {
        const rejected = applications.filter((item: { status: string }) => (item.status === "rejected"))
      return rejected
    }

    
    
  },[applications]) 
  // Show details component if selected
  if (showDetails) {
    return (
      <PropertyApplicationDetails
        applications={applications}
        onClose={handleCloseDetails}
        onApprove={handleApprove}
        onReject={handleReject}
        isApproving={isApproving}
        isRejecting={isRejecting}
      />
    );
  }

  // Use filteredStatus if provided, otherwise use applications
  const displayApplications = filteredStatus && filteredStatus.length > 0 
    ? filteredStatus 
    : (applications || []);

  // Show main list view


  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-[#E6F1FD] p-4 sm:p-5 rounded-xl border-[.5px] border-[#0000000A]">
          <h3 className="text-xs font-[400] text-[#00000066] mb-2">
            Total Applications
          </h3>
          <h1 className="text-black font-semibold text-xl sm:text-xl">{applications?.length}</h1>
        </div>
        <div className="bg-[#EDEEFC] p-4 sm:p-5 rounded-xl border-[.5px] border-[#0000000A]">
          <div className="flex items-center">
            <h3 className="text-xs font-[400] text-[#00000066] mb-2 flex-1">
              Pending Review
            </h3>
            <div className="w-[8px] h-[8px] bg-yellow-500 rounded-full"></div>
          </div>
          <h1 className="text-black font-semibold text-xl sm:text-xl">{pendingApplications("pending").length}</h1>
        </div>

        <div className=" bg-[#E6F1FD] p-4 sm:p-5 rounded-xl border-[.5px] border-[#0000000A]">
          <div className="flex items-center">
            <h3 className="text-xs font-[400] text-[#00000066] mb-2 flex-1">
              Approved
            </h3>
            <div className="w-[8px] h-[8px] bg-green-500 rounded-full"></div>
          </div>
          <h1 className="text-black font-semibold text-xl sm:text-xl">{pendingApplications("approved").length}</h1>
        </div>
        <div className="bg-[#EDEEFC] p-4 sm:p-5 rounded-xl border-[.5px] border-[#0000000A]">
          <div className="flex items-center">
            <h3 className="text-xs font-[400] text-[#00000066] mb-2 flex-1">
              Rejected
            </h3>
            <div className="w-[8px] h-[8px] bg-red-500 rounded-full"></div>
          </div>
          <h1 className="text-black font-semibold text-xl sm:text-xl">{pendingApplications("rejected").length}</h1>
        </div>
      </div>

      {/* Application Link Card */}
      <div className="bg-[#F9F9FA] w-full sm:p-6 p-4 rounded-2xl">
        <h1 className="font-semibold text-sm text-black mb-4">
          Application Link
        </h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <input
            type="text"
            value={`https://landlordship-auth.vercel.app/properties/${propertyData?.Properties?._id}/apply`}
            readOnly
            className="flex-1 bg-white border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:ring-opacity-20 truncate"
          />
          <button
            onClick={onCopy}
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

      {/* Applications Table */}
      <div className="bg-[#F9F9FA] sm:p-6 p-4 rounded-2xl">
        <div className="flex flex-row justify-between mb-5">
          <h1 className="font-semibold text-sm text-black mb-6">
            Recent Applications
          </h1>
          <select
            className="border-gray-500 border rounded-lg  text-black outline-none text-xs"
            onChange={(e) => setApplicationStatus(e.target.value)}
          >
            <option value={"all"}>All applications</option>
            <option value={"Pending"}>Pending</option>
            <option value={"Approved"}>Success</option>
            <option value={"Rejected"}>Rejected</option>
          </select>
        </div>
        {/* Desktop Table */}
        {displayApplications.length > 0 ?
          (
            <div className="sm:block hidden overflow-x-auto w-full px-6">
              <div className="w-full min-w-[1200px]">
                {/* Table Header */}
                <div className="grid grid-cols-11 w-full gap-4 pb-3 border-b-[1px] border-[#0000000A] mb-4">
                  <div className="col-span-1 text-[#00000066] font-[400] text-xs">
                    ID
                  </div>
                  <div className="col-span-2 text-[#00000066] font-[400] text-xs">
                    Applicant
                  </div>
                  <div className="col-span-2 text-[#00000066] font-[400] text-xs">
                    Applied Date
                  </div>
                  <div className="col-span-2 text-[#00000066] font-[400] text-xs">
                    Move-in Date
                  </div>
                  <div className="col-span-1 justify-center flex text-[#00000066] font-[400] text-xs">
                    Status
                  </div>
                  <div className="col-span-2 justify-center flex text-[#00000066] font-[400] text-xs">
                    Reference Check
                  </div>
                  <div className="col-span-1 justify-center flex text-[#00000066] font-[400] text-xs">
                    Credit
                  </div>
                 
                </div>

                {/* Table Rows */}
                <div className="space-y-4 w-full">
           
                  {/*eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {displayApplications?.map((app: any, index: number) => (
                    <div
                         onClick={() => handleViewApplication()}
                      key={index}
                      className="grid grid-cols-11 w-full gap-4 items-center cursor-pointer hover:bg-[#0000000A]  py-3 border-b-[1px] border-[#0000000A] last:border-0"
                    >
                      <div className="col-span-1 text-black font-[400] text-sm truncate">
                        {app?._id}
                      </div>
                      <div className="col-span-2 text-black font-[400] text-sm truncate">
                        {app.firstName + " " + app.lastName}
                      </div>
                      <div className="col-span-2 text-black font-[400] text-sm">
                        {new Date(app?.createdAt).toLocaleDateString()}
                      </div>
                      <div className="col-span-2 text-black font-[400] text-sm">
                        {new Date(app.move_in_date).toLocaleDateString()}
                      </div>
                      <div className="col-span-1 justify-center flex">
                        {getStatusBadge("pending")}
                      </div>
                      <div className="col-span-2 justify-center flex">
                        {getStatusBadge("pending")}
                      </div>
                      <div className="col-span-1 justify-center flex">
                        {getStatusBadge("pending")}
                      </div>
                    
                    </div>
                  ))}
                </div>
              </div>
            </div> ) : <div className="py-4 w-full flex justify-center flex-col items-center">
                       <FaRegFolderOpen className="text-5xl text-black"/>
                      <h1 className="text-black font-bold">No Applications yet</h1>
                      </div>}

        {/* Mobile Cards */}
        <div className="sm:hidden block space-y-4">
          {/*eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
          {displayApplications.map((app:any, index:number) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl border-[.5px] border-[#0000001A]"
            >
              <div className="flex items-center justify-between mb-3">
                <h1 className="text-black font-semibold text-sm">
                     {app.firstName + " " + app.lastName}
                </h1>
                {getStatusBadge(app.status)}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#00000066] text-xs">ID:</span>
                  <span className="text-black text-xs font-[400]">
                    {app._id}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#00000066] text-xs">Applied:</span>
                  <span className="text-black text-xs font-[400]">
                    {new Date(app.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#00000066] text-xs">Move-in:</span>
                  <span className="text-black text-xs font-[400]">
                    {new Date(app.move_in_date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t-[1px] border-[#0000000A]">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[#00000066] text-xs">
                        Reference:
                      </span>
                      {getStatusBadge("pending")}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00000066] text-xs">Credit:</span>
                      {getStatusBadge("pending")}
                    </div>
                  </div>
                  <button
                    onClick={() => handleViewApplication()}
                    className="text-[#007AFF] hover:text-[#0056CC] text-sm font-[400] transition-colors"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



