"use client";
import React, { useMemo, useState } from "react";
import { use } from "react";
import {
  TabType,
  PropertyData,
  TenantData,
  Application,
  ComplianceData,
  LegalDocument,
  RentHistoryItem,
} from "./components/types";
import PropertyHeader from "./components/PropertyHeader";
import TabNavigation from "./components/TabNavigation";
import PropertyApplicationsTab from "./components/PropertyApplicationsTab";
import PropertyInfoTab from "./components/PropertyInfoTab";
import TenantInformationTab from "./components/TenantInformationTab";
import LegalComplianceTab from "./components/LegalComplianceTab";
import RentHistoryTab from "./components/RentHistoryTab";
import PropertyInterestTab from "./components/PropertyInterestTab";
import { useQuery } from "@tanstack/react-query";
import { PropertyService } from "@/services/property";
import { ApplicationService } from "@/services/application";

export default function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data, isSuccess, isPending, isError } = useQuery({
    queryKey: ['eachProperty', id],
    queryFn : async()=> await new PropertyService().getEachUserProperties(id)
  })

  const { data:applicationData, isSuccess:applicationSuccess, isPending:applicationPending, isError:applicationError } = useQuery({
    queryKey: ['applications', id],
    queryFn : async()=> await new ApplicationService().getApplications(id)
  })
  const [activeTab, setActiveTab] = useState<TabType>("interest");
  const [copied, setCopied] = useState(false);
const [applicationStatus, setApplicationStatus] = useState<string>("all")
  // Dummy data
  

  // eslint-disable-next-line react-hooks/exhaustive-deps

  const complianceData: ComplianceData = {
    gasSafetyCertificateDate: "2023-12-15",
    epcRating: "B",
    epcExpiryDate: "2028-12-15",
    electricalSafetyDate: "2023-11-20",
  };

  const [legalDocuments, setLegalDocuments] = useState<LegalDocument[]>([
    {
      documentName: "Lease Agreement",
      type: "Lease",
      uploadDate: "2023-01-15",
      expiryDate: "2024-01-31",
    },
    {
      documentName: "Gas Safety Certificate",
      type: "Certificate",
      uploadDate: "2023-12-15",
      expiryDate: "2024-12-15",
    },
    {
      documentName: "EPC Certificate",
      type: "Certificate",
      uploadDate: "2023-12-15",
      expiryDate: "2028-12-15",
    },
    {
      documentName: "Electrical Safety Certificate",
      type: "Certificate",
      uploadDate: "2023-11-20",
      expiryDate: "2026-11-20",
    },
  ]);

  const rentHistory: RentHistoryItem[] = [
    {
      date: "2024-01-01",
      amount: 2500,
      status: "Paid",
      method: "Bank Transfer",
      reference: "TXN-20240101-001",
    },
    {
      date: "2023-12-01",
      amount: 2500,
      status: "Paid",
      method: "Bank Transfer",
      reference: "TXN-20231201-001",
    },
    {
      date: "2023-11-01",
      amount: 2500,
      status: "Paid",
      method: "Bank Transfer",
      reference: "TXN-20231101-001",
    },
    {
      date: "2023-10-01",
      amount: 2500,
      status: "Paid",
      method: "Credit Card",
      reference: "TXN-20231001-001",
    },
    {
      date: "2023-09-01",
      amount: 2500,
      status: "Late",
      method: "Bank Transfer",
      reference: "TXN-20230901-001",
    },
  ];

  const tabs = [
    { id: "interest" as TabType, label: "Property Interest" },
    { id: "applications" as TabType, label: "Property Applications" },
    { id: "property-info" as TabType, label: "Property Info" },
    { id: "tenant-info" as TabType, label: "Tenant Information" },
    { id: "legal-compliance" as TabType, label: "Legal & Compliance" },
    { id: "rent-history" as TabType, label: "Rent History" },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://yourlandlordship.com/properties/${data?.Properties?._id}/apply`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadReceipt = (payment: RentHistoryItem) => {
    // Placeholder for receipt download
    console.log("Downloading receipt for:", payment);
  };

  const downloadDocument = (doc: LegalDocument) => {
    // Placeholder for document download
    console.log("Downloading:", doc.documentName);
  };

  const handleAddDocument = (document: Omit<LegalDocument, "uploadDate">) => {
    const today = new Date().toISOString().split("T")[0];
    const newDocument: LegalDocument = {
      ...document,
      uploadDate: today,
    };
    setLegalDocuments([...legalDocuments, newDocument]);
  };

//   const filteredStatus = useMemo(() => {
//     if(applicationStatus === "all") {
//       return applications
//     } else {
// const data = applications.filter((item) => item?.status === applicationStatus)
// return data
//     }

// },[applicationStatus, applications])
  // Show loading state
  if (isPending) {
    return (
      <div className="sm:p-6 py-2 px-4 mx-auto w-[100%] pb-6 overflow-x-hidden">
        <PropertyHeader />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
            <p className="text-[#00000066] font-[400] text-sm">Loading property details...</p>
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (isError) {
    return (
      <div className="sm:p-6 py-2 px-4 mx-auto w-[100%] pb-6 overflow-x-hidden">
        <PropertyHeader />
        <div className="bg-[#FFE5E5] border border-red-200 rounded-xl p-8 text-center max-w-md mx-auto mt-8">
          <div className="text-4xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold text-black mb-2">Failed to Load Property</h2>
          <p className="text-red-600 font-[400] text-sm mb-6">
            We couldn&apos;t load the property details. Please try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-colors text-sm font-[400]"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="sm:p-6 py-2 px-4 mx-auto w-[100%] pb-6 overflow-x-hidden">
      <PropertyHeader />

      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Tab Content with Animation */}
      <div className="relative min-h-[400px]">
        {activeTab === "applications" && (
          <PropertyApplicationsTab
            propertyData={data}
            applications={applicationData}
            copied={copied}
            onCopy={copyToClipboard}
            setApplicationStatus={setApplicationStatus}
            filteredStatus={applicationData}
          />
        )}

          {activeTab === "interest" && (
          <PropertyInterestTab 
             propertyData={data}
          />
        )}

        {activeTab === "property-info" && (
          <PropertyInfoTab propertyData={data} />
        )}

        {/* {activeTab === "tenant-info" && (
          <TenantInformationTab tenantData={tenantData} />
        )} */}

        {activeTab === "legal-compliance" && (
          <LegalComplianceTab
            complianceData={complianceData}
            legalDocuments={legalDocuments}
            onAddDocument={handleAddDocument}
            onDownloadDocument={downloadDocument}
          />
        )}

        {activeTab === "rent-history" && (
          <RentHistoryTab
            rentHistory={rentHistory}
            onDownloadReceipt={downloadReceipt}
          />
        )}
      </div>
    </div>
  );
}
