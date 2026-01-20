"use client";
import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { PiFilePdf, PiDownloadSimple } from "react-icons/pi";
import { getStatusBadge } from "./utils";



interface PropertyApplicationDetailsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  applications: any;
  onClose: () => void;
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
  isApproving?: boolean;
  isRejecting?: boolean;
}

const DocumentCard = ({ url, label }: { url: string; label: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 p-3 bg-white border-[.5px] border-[#0000001A] rounded-lg hover:bg-[#F9F9FA] transition-colors cursor-pointer group"
  >
    <PiFilePdf className="text-lg text-[#007AFF] flex-shrink-0" />
    <span className="text-black font-[400] text-xs sm:text-sm flex-1 truncate">
      {label}
    </span>
    <PiDownloadSimple className="text-lg text-[#00000066] group-hover:text-[#007AFF] transition-colors flex-shrink-0" />
  </a>
);

export default function PropertyApplicationDetails({
  applications,
  onClose,
  onApprove,
  onReject,
  isApproving = false,
  isRejecting = false,
}: PropertyApplicationDetailsProps) {
  // if (!application) return null;

  // const handleApprove = () => {
  //   if (onApprove) {
  //     onApprove(application.propertyId);
  //   }
  // };

  // const handleReject = () => {
  //   if (onReject) {
  //     onReject(application.propertyId);
  //   }
  // };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(amount);
  };

  const formatDate = (dateString: string | Date) => {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    if (isNaN(date.getTime())) return "N/A";
    return date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Type for document items
  interface DocumentItem {
    public_id?: string;
    url: string;
  }

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
              Application Details
            </h1>
            <p className="text-[#00000066] font-[400] text-xs sm:text-sm mt-1">
              Review and manage this application
            </p>
          </div>
        </div>
      </div>
      {/*eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
      {applications?.map((application: any) => {
        return <div key={application?._id}>


          {/* Application Status Badge */}
          <div className="flex items-center gap-3">
            <span className="text-[#00000066] font-[400] text-xs sm:text-sm">
              Status:
            </span>
            {getStatusBadge("pending")}
          </div>

          {/* Applicant Information */}
          <div className="bg-[#F9F9FA] sm:p-6 p-4 my-4 rounded-2xl border-[.5px] border-[#0000001A] shadow-sm">
            <h2 className="text-black font-semibold text-base sm:text-lg mb-4 pb-3 border-b-[1px] border-[#0000000A]">
              Applicant Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  First Name
                </label>
                <p className="text-black font-semibold text-sm sm:text-base">
                  {application.firstName || ""}
                </p>
              </div>
              {application?.middleName && (
                <div>
                  <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                    Middle Name
                  </label>
                  <p className="text-black font-semibold text-sm sm:text-base">
                    {application?.middleName || ""}
                  </p>
                </div>
              )}
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  Last Name
                </label>
                <p className="text-black font-semibold text-sm sm:text-base">
                  {application?.lastName || ""}
                </p>
              </div>
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  Date of Birth
                </label>
                <p className="text-black font-semibold text-sm sm:text-base">
                  {application?.dob ? formatDate(application.dob) : "N/A"}
                </p>
              </div>
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  Email Address
                </label>
                <p className="text-black font-semibold text-sm sm:text-base break-all">
                  {application?.email || ""}
                </p>
              </div>
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  Phone Number
                </label>
                <p className="text-black font-semibold text-sm sm:text-base">
                  {application?.phone || ""}
                </p>
              </div>
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  Country
                </label>
                <p className="text-black font-semibold text-sm sm:text-base">
                  {application?.country || ""}
                </p>
              </div>
              {application?.nationalInsuranceNumber && (
                <div>
                  <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                    National Insurance Number
                  </label>
                  <p className="text-black font-semibold text-sm sm:text-base">
                    {application?.nationalInsuranceNumber || ""}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Address Information */}
          <div className="bg-[#F9F9FA] sm:p-6 p-4 my-4 rounded-2xl border-[.5px] border-[#0000001A] shadow-sm">
            <h2 className="text-black font-semibold text-base sm:text-lg mb-4 pb-3 border-b-[1px] border-[#0000000A]">
              Address Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="sm:col-span-2">
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  Current Address
                </label>
                <p className="text-black font-semibold text-sm sm:text-base">
                  {application?.address || ""}
                </p>
              </div>
              {(application?.previousAddress !== "null" || application?.previousAddress !== "undefined") && (
                <div className="sm:col-span-2">
                  <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                    Previous Address
                  </label>
                  <p className="text-black font-semibold text-sm sm:text-base">
                    {application?.previousAddress || ""}
                  </p>
                </div>
              )}
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  Postal Code
                </label>
                <p className="text-black font-semibold text-sm sm:text-base">
                  {application?.postalcode}
                </p>
              </div>
              {application?.reasonforleaving && (
                <div>
                  <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                    Reason for Leaving
                  </label>
                  <p className="text-black font-semibold text-sm sm:text-base">
                    {application?.reasonforleaving || ""}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Identification & Documents */}
          <div className="bg-[#F9F9FA] sm:p-6 p-4 my-4 rounded-2xl border-[.5px] border-[#0000001A] shadow-sm">
            <h2 className="text-black font-semibold text-base sm:text-lg mb-4 pb-3 border-b-[1px] border-[#0000000A]">
              Identification & Documents
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  ID Type
                </label>
                <p className="text-black font-semibold text-sm sm:text-base capitalize">
                  {application?.idType === "passport" ? "PassPort"
                    : application?.idType === "driverlicense" ? "Driver's License" :
                      application?.idType === "nationalIdCard" ? "National Id Card" :
                        "Biometric Residence Permit"}
                </p>
              </div>
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  ID Number
                </label>
                <p className="text-black font-semibold text-sm sm:text-base">
                  {application?.idNumber}
                </p>
              </div>
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  Residency Status
                </label>
                <p className="text-black font-semibold text-sm sm:text-base capitalize">
                  {/* {application?.residencyStatus.replace(/([A-Z])/g, " $1").trim()} */}
                </p>
              </div>
              {application?.shareCode && (
                <div>
                  <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                    Share Code
                  </label>
                  <p className="text-black font-semibold text-sm sm:text-base">
                    {application?.shareCode}
                  </p>
                </div>
              )}
            </div>
            <div className="space-y-3">
              <h3 className="text-black font-semibold text-sm mb-3">
                Documents
              </h3>
              <DocumentCard
                url={application?.idDoc}
                label="Identity Document"
              />
              <DocumentCard
                url={application?.addressDoc}
                label="Proof of Address"
              />
            </div>
          </div>

          {/* Employment & Income */}
          <div className="bg-[#F9F9FA] sm:p-6 p-4 my-4 rounded-2xl border-[.5px] border-[#0000001A] shadow-sm">
            <h2 className="text-black font-semibold text-base sm:text-lg mb-4 pb-3 border-b-[1px] border-[#0000000A]">
              Employment & Income
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  Employment Status
                </label>
                <p className="text-black font-semibold text-sm sm:text-base capitalize">
                  {/* {application?.employmentStatus.replace(/_/g, " ").replace(/([A-Z])/g, " $1").trim()} */}
                </p>
              </div>
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  Job Title
                </label>
                <p className="text-black font-semibold text-sm sm:text-base">
                  {application?.jobTitle}
                </p>
              </div>
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  Employer Name
                </label>
                <p className="text-black font-semibold text-sm sm:text-base">
                  {application?.employer_name}
                </p>
              </div>
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  Length of Employment
                </label>
                <p className="text-black font-semibold text-sm sm:text-base">
                  {application?.length_of_employment_year} years,{" "}
                  {application?.length_of_employment_month} months
                </p>
              </div>
              <div className="sm:col-span-2">
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  Employer Address
                </label>
                <p className="text-black font-semibold text-sm sm:text-base">
                  {application?.employer_address}
                </p>
              </div>
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  Monthly Income
                </label>
                <p className="text-black font-semibold text-sm sm:text-base">
                  {formatCurrency(application?.monthly_income)}
                </p>
              </div>
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  Annual Income
                </label>
                <p className="text-black font-semibold text-sm sm:text-base">
                  {formatCurrency(application?.annual_income)}
                </p>
              </div>
            </div>
            <div className="space-y-3 mt-6">
              <h3 className="text-black font-semibold text-sm mb-3">
                Financial Documents
              </h3>
              {application?.recent_payment_slip?.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[#00000066] font-[400] text-xs">
                    Payment Slips ({application?.recent_payment_slip?.length})
                  </p>
                  {application?.recent_payment_slip.map((doc: DocumentItem, idx: number) => (
                    <DocumentCard
                      key={doc?.public_id}
                      url={doc.url}
                      label={`Payment Slip ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
              {application?.recent_bank_statement?.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[#00000066] font-[400] text-xs">
                    Bank Statements ({application?.recent_bank_statement.length})
                  </p>
                  {application?.recent_bank_statement.map((doc: DocumentItem, idx: number) => (
                    <DocumentCard
                      key={doc?.public_id}
                      url={doc.url}
                      label={`Bank Statement ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
              {application?.proof_of_income?.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[#00000066] font-[400] text-xs">
                    Proof of Income ({application?.proof_of_income.length})
                  </p>
                  {application?.proof_of_income.map((doc: DocumentItem, idx: number) => (
                    <DocumentCard
                      key={doc?.public_id}
                      url={doc.url}
                      label={`Proof of Income ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Tenancy Details */}
          <div className="bg-[#F9F9FA] sm:p-6 p-4 my-4 rounded-2xl border-[.5px] border-[#0000001A] shadow-sm">
            <h2 className="text-black font-semibold text-base sm:text-lg mb-4 pb-3 border-b-[1px] border-[#0000000A]">
              Tenancy Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  Preferred Move-In Date
                </label>
                <p className="text-black font-semibold text-sm sm:text-base">
                  {formatDate(application?.move_in_date)}
                </p>
              </div>
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  Preferred Tenancy Length
                </label>
                <p className="text-black font-semibold text-sm sm:text-base">
                  {application?.preferred_tenancy_length}
                </p>
              </div>
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  Number of Tenants
                </label>
                <p className="text-black font-semibold text-sm sm:text-base">
                  {application?.number_of_tenant}
                </p>
              </div>
              {application?.names_of_coTenants && (
                <div>
                  <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                    Co-Tenants Names
                  </label>
                  <p className="text-black font-semibold text-sm sm:text-base">
                    {application?.names_of_coTenants}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Lifestyle & Declarations */}
          <div className="bg-[#F9F9FA] sm:p-6 p-4 my-4 rounded-2xl border-[.5px] border-[#0000001A] shadow-sm">
            <h2 className="text-black font-semibold text-base sm:text-lg mb-4 pb-3 border-b-[1px] border-[#0000000A]">
              Lifestyle & Declarations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  Pets
                </label>
                <p className="text-black font-semibold text-sm sm:text-base capitalize">
                  {application?.pets}
                </p>
              </div>
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  Smoking
                </label>
                <p className="text-black font-semibold text-sm sm:text-base capitalize">
                  {application?.smoke}
                </p>
              </div>
              <div>
                <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                  Requires Parking
                </label>
                <p className="text-black font-semibold text-sm sm:text-base capitalize">
                  {application?.require_parking}
                </p>
              </div>
              {application?.special_request && (
                <div className="sm:col-span-2">
                  <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                    Special Requests
                  </label>
                  <p className="text-black font-semibold text-sm sm:text-base">
                    {application?.special_request}
                  </p>
                </div>
              )}
            </div>
            <div className="mt-6 pt-6 border-t-[1px] border-[#0000000A]">
              <h3 className="text-black font-semibold text-sm mb-4">
                Declarations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded border-[.5px] border-[#0000001A] flex items-center justify-center ${application?.ccjs === "yes" ? "bg-green-500" : "bg-[#F9F9FA]"}`}>
                    {application?.ccjs === "no" && (
                      <span className="text-xs text-[#00000066]">✓</span>
                    )}
                  </div>
                  <span className="text-black font-[400] text-xs sm:text-sm">
                    CCJs: {application?.ccjs === "no" ? "None" : "Yes"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded border-[.5px] border-[#0000001A] flex items-center justify-center ${application?.bankrupt === "yes" ? "bg-green-500" : "bg-[#F9F9FA]"}`}>
                    {application?.bankrupt === "no" && (
                      <span className="text-xs text-[#00000066]">✓</span>
                    )}
                  </div>
                  <span className="text-black font-[400] text-xs sm:text-sm">
                    Bankruptcy: {application?.bankrupt === "no" ? "None" : "Yes"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded border-[.5px] border-[#0000001A] flex items-center justify-center ${application?.housing_benefit === "yes" ? "bg-green-500" : "bg-[#F9F9FA]"}`}>
                    {application?.housing_benefit === "no" && (
                      <span className="text-xs text-[#00000066]">✓</span>
                    )}
                  </div>
                  <span className="text-black font-[400] text-xs sm:text-sm">
                    Housing Benefit: {application?.housing_benefit === "no" ? "No" : "Yes"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded border-[.5px] border-[#0000001A] flex items-center justify-center ${application?.consentToRent ? "bg-green-500" : "bg-[#F9F9FA]"}`}>
                    {application?.consentToRent && (
                      <span className="text-xs text-white">✓</span>
                    )}
                  </div>
                  <span className="text-black font-[400] text-xs sm:text-sm">
                    Consent to Rent: {application?.consentToRent ? "Yes" : "No"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded border-[.5px] border-[#0000001A] flex items-center justify-center ${application?.consent_credit_check ? "bg-green-500" : "bg-[#F9F9FA]"}`}>
                    {application?.consent_credit_check && (
                      <span className="text-xs text-white">✓</span>
                    )}
                  </div>
                  <span className="text-black font-[400] text-xs sm:text-sm">
                    Consent Credit Check: {application?.consent_credit_check ? "Yes" : "No"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded border-[.5px] border-[#0000001A] flex items-center justify-center ${application?.consent_contact_landlord ? "bg-green-500" : "bg-[#F9F9FA]"}`}>
                    {application?.consent_contact_landlord && (
                      <span className="text-xs text-white">✓</span>
                    )}
                  </div>
                  <span className="text-black font-[400] text-xs sm:text-sm">
                    Consent Contact Landlord: {application?.consent_contact_landlord ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* References */}

          <div className="bg-[#F9F9FA] sm:p-6 p-4 rounded-2xl border-[.5px] border-[#0000001A] shadow-sm">
            <h2 className="text-black font-semibold text-base sm:text-lg mb-4 pb-3 border-b-[1px] border-[#0000000A]">
              References
            </h2>
            <div className="space-y-6">
           
              <div>
                <h3 className="text-black font-semibold text-sm mb-4">
                  Recent Landlord
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                      Name
                    </label>
                    <p className="text-black font-semibold text-sm sm:text-base">
                      {application?.recent_landlord_name || ""}
                    </p>
                  </div>
                  <div>
                    <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                      Email
                    </label>
                    <p className="text-black font-semibold text-sm sm:text-base break-all">
                      {application?.recent_landlord_email || ""}
                    </p>
                  </div>
                  <div>
                    <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                      Duration
                    </label>
                    <p className="text-black font-semibold text-sm sm:text-base">
                      {application?.recent_landlord_duration_of_tenancy || ""}
                    </p>
                  </div>
                  <div>
                    <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                      Rent Paid
                    </label>
                    <p className="text-black font-semibold text-sm sm:text-base">
                      {application?.recent_landlord_rent_paid || ""}
                    </p>
                  </div>
                </div>
              </div>
            
       
              <div>
                <h3 className="text-black font-semibold text-sm mb-4">
                  Personal Reference
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                      Name
                    </label>
                    <p className="text-black font-semibold text-sm sm:text-base">
                      {application?.reference_name}
                    </p>
                  </div>
                  <div>
                    <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                      Relationship
                    </label>
                    <p className="text-black font-semibold text-sm sm:text-base">
                      {application?.reference_relationship || ""}
                    </p>
                  </div>
                  <div>
                    <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                      Email
                    </label>
                    <p className="text-black font-semibold text-sm sm:text-base break-all">
                      {application?.reference_email || ""}
                    </p>
                  </div>
                  <div>
                    <label className="text-[#00000066] font-[400] text-xs sm:text-sm mb-2 block">
                      Years Known
                    </label>
                    <p className="text-black font-semibold text-sm sm:text-base">
                      {application?.reference_years_known || ""}
                    </p>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
   

          {/* Action Buttons */}
          {application.status === "pending" && (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 border-t-[1px] border-[#0000000A]">
              <button
               
                disabled={isApproving || isRejecting}
                className="flex-1 bg-black text-white font-semibold text-sm sm:text-base py-3 px-6 rounded-lg hover:bg-[#333] transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black"
              >
                {isApproving ? "Approving..." : "Approve Application"}
              </button>
              <button
            
                disabled={isApproving || isRejecting}
                className="flex-1 bg-white border-[.5px] border-[#0000001A] text-black font-semibold text-sm sm:text-base py-3 px-6 rounded-lg hover:bg-[#F9F9FA] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isRejecting ? "Rejecting..." : "Reject Application"}
              </button>
            </div>
          )}

     

      {/* Status Message for Approved/Rejected */}
      {(application?.status === "success" ||
        application?.status === "rejected") && (
        <div className="pt-6 border-t-[1px] border-[#0000000A]">
          <p className="text-[#00000066] font-[400] text-xs sm:text-sm text-center">
            This application has been {application?.status?.toLowerCase() || 'processed'}. No further action
            required.
          </p>
        </div>
      )}

        </div>
      })}
    </div>
  );
}
