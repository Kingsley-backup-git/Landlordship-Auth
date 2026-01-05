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

export default function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState<TabType>("applications");
  const [copied, setCopied] = useState(false);
const [applicationStatus, setApplicationStatus] = useState<string>("all")
  // Dummy data
  const propertyData: PropertyData = {
    propertyName: "Sunset Apartments - Unit 4B",
    propertyType: "Apartment",
    squareFeet: 1200,
    bedrooms: 2,
    bathrooms: 2,
    parkingSpaces: 1,
    description:
      "Beautiful modern apartment with stunning city views. Recently renovated with high-end finishes throughout.",
    keyFeatures: [
      "Hardwood floors",
      "Granite countertops",
      "Stainless steel appliances",
      "In-unit laundry",
      "Balcony with city view",
      "Central air conditioning",
      "Pet-friendly",
    ],
    applicationLink: "https://yourlandlordship.com/apply/property-12345",
  };

  const tenantData: TenantData = {
    primaryTenant: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phoneNumber: "+1 (555) 123-4567",
    monthlyRent: 2500,
    leaseStatus: "Active",
    moveInDate: "February 1, 2023",
    leaseStartDate: "February 1, 2023",
    leaseEndDate: "January 31, 2024",
    emergencyContact: {
      name: "Michael Johnson",
      phoneNumber: "+1 (555) 987-6543",
      relationship: "Spouse",
    },
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const applications: Application[] = [
    {
      id: "APP-001",
      applicant: "John Smith",
      appliedDate: "2024-01-15",
      moveInDate: "2024-02-01",
      status: "Pending",
      referenceCheck: "Completed",
      creditCheck: "Completed",
    },
    {
      id: "APP-002",
      applicant: "Emily Davis",
      appliedDate: "2024-01-10",
      moveInDate: "2024-02-15",
      status: "Approved",
      referenceCheck: "Completed",
      creditCheck: "Completed",
    },
    {
      id: "APP-003",
      applicant: "Michael Brown",
      appliedDate: "2024-01-08",
      moveInDate: "2024-01-25",
      status: "Rejected",
      referenceCheck: "Failed",
      creditCheck: "Completed",
    },
    {
      id: "APP-004",
      applicant: "Jessica Wilson",
      appliedDate: "2024-01-20",
      moveInDate: "2024-02-10",
      status: "Pending",
      referenceCheck: "In Progress",
      creditCheck: "In Progress",
    },
  ];

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
    { id: "applications" as TabType, label: "Property Applications" },
    { id: "property-info" as TabType, label: "Property Info" },
    { id: "tenant-info" as TabType, label: "Tenant Information" },
    { id: "legal-compliance" as TabType, label: "Legal & Compliance" },
    { id: "rent-history" as TabType, label: "Rent History" },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(propertyData.applicationLink);
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

  const filteredStatus = useMemo(() => {
    if(applicationStatus === "all") {
      return applications
    } else {
const data = applications.filter((item) => item?.status === applicationStatus)
return data
    }

},[applicationStatus, applications])
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
            propertyData={propertyData}
            applications={applications}
            copied={copied}
            onCopy={copyToClipboard}
            setApplicationStatus={setApplicationStatus}
            filteredStatus={filteredStatus}
          />
        )}

        {activeTab === "property-info" && (
          <PropertyInfoTab propertyData={propertyData} />
        )}

        {activeTab === "tenant-info" && (
          <TenantInformationTab tenantData={tenantData} />
        )}

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
