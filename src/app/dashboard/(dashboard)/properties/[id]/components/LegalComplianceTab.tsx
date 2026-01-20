import React from "react";
import { IoDownloadOutline } from "react-icons/io5";
import { PiPlus } from "react-icons/pi";
import { ComplianceData, LegalDocument } from "./types";
import AddDocumentForm from "./AddDocumentForm";

interface LegalComplianceTabProps {
  complianceData: ComplianceData;
  legalDocuments: LegalDocument[];
  onAddDocument: (document: Omit<LegalDocument, "uploadDate">) => void;
  onDownloadDocument: (document: LegalDocument) => void;
}

export default function LegalComplianceTab({
  complianceData,
  legalDocuments,
  onAddDocument,
  onDownloadDocument,
}: LegalComplianceTabProps) {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Compliance Certificates */}
      <div className="bg-[#F9F9FA] sm:p-6 p-4 rounded-2xl">
        <h1 className="font-semibold text-sm text-black mb-6">
          Compliance Certificates
        </h1>

        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">
                Gas Safety Certificate Date
              </h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">
                {new Date(
                  complianceData.gasSafetyCertificateDate
                ).toLocaleDateString()}
              </h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">
                EPC Rating
              </h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">
                {complianceData.epcRating}
              </h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">
                EPC Expiry Date
              </h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">
                {new Date(complianceData.epcExpiryDate).toLocaleDateString()}
              </h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">
                Electrical Safety Date
              </h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">
                {new Date(
                  complianceData.electricalSafetyDate
                ).toLocaleDateString()}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Documents Table */}
      <div className="bg-[#F9F9FA] sm:p-6 p-4 rounded-2xl relative">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h1 className="font-semibold text-sm text-black">
            Legal Documents
          </h1>
          <AddDocumentForm onAddDocument={onAddDocument} />
        </div>

        {/* Desktop Table */}
        <div className="sm:block hidden overflow-x-auto -mx-6 px-6">
          <div className="min-w-[700px]">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 pb-3 border-b-[1px] border-[#0000000A] mb-4">
              <div className="col-span-4 text-[#00000066] font-[400] text-xs">
                Document Name
              </div>
              <div className="col-span-2 text-[#00000066] font-[400] text-xs">
                Type
              </div>
              <div className="col-span-2 text-[#00000066] font-[400] text-xs">
                Upload Date
              </div>
              <div className="col-span-2 text-[#00000066] font-[400] text-xs">
                Expiry Date
              </div>
              <div className="col-span-2 text-[#00000066] font-[400] text-xs">
                Actions
              </div>
            </div>

            {/* Table Rows */}
            <div className="space-y-4">
              {legalDocuments.map((doc, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 items-center py-3 border-b-[1px] border-[#0000000A] last:border-0"
                >
                  <div className="col-span-4 text-black font-[400] text-sm truncate">
                    {doc.documentName}
                  </div>
                  <div className="col-span-2 text-black font-[400] text-sm">
                    {doc.type}
                  </div>
                  <div className="col-span-2 text-black font-[400] text-sm">
                    {new Date(doc.uploadDate).toLocaleDateString()}
                  </div>
                  <div className="col-span-2 text-black font-[400] text-sm">
                    {new Date(doc.expiryDate).toLocaleDateString()}
                  </div>
                  <div className="col-span-2">
                    <button
                      onClick={() => onDownloadDocument(doc)}
                      className="flex items-center gap-x-2 text-[#007AFF] hover:text-[#0056CC] text-sm font-[400] transition-colors whitespace-nowrap"
                    >
                      <IoDownloadOutline className="text-lg" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="sm:hidden block space-y-4">
          {legalDocuments.map((doc, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl border-[.5px] border-[#0000001A]"
            >
              <div className="flex items-center justify-between mb-3">
                <h1 className="text-black font-semibold text-sm flex-1 truncate pr-2">
                  {doc.documentName}
                </h1>
                <span className="text-[#00000066] text-xs bg-[#F9F9FA] px-2 py-1 rounded">
                  {doc.type}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#00000066] text-xs">Uploaded:</span>
                  <span className="text-black text-xs font-[400]">
                    {new Date(doc.uploadDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#00000066] text-xs">Expires:</span>
                  <span className="text-black text-xs font-[400]">
                    {new Date(doc.expiryDate).toLocaleDateString()}
                  </span>
                </div>
                <button
                  onClick={() => onDownloadDocument(doc)}
                  className="w-full mt-3 flex items-center justify-center gap-x-2 text-[#007AFF] hover:text-[#0056CC] text-sm font-[400] transition-colors bg-[#F9F9FA] py-2 rounded-lg"
                >
                  <IoDownloadOutline className="text-lg" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}





