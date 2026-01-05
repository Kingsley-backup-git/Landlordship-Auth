"use client";
import React, { useState } from "react";
import { use } from "react";
import { TabType, TenantData, LeaseData, PersonalData, PaymentHistoryItem } from "./components/types";
import TenantHeader from "./components/TenantHeader";
import TabNavigation from "./components/TabNavigation";
import OverviewTab from "./components/OverviewTab";
import PaymentHistoryTab from "./components/PaymentHistoryTab";
import PersonalInformationTab from "./components/PersonalInformationTab";
import LeaseInformationTab from "./components/LeaseInformationTab";
import PersonalEditForm from "./components/PersonalEditForm";
import LeaseEditForm from "./components/LeaseEditForm";
import {
  downloadLeaseAgreement,
  downloadPaymentReceipt,
  exportPaymentHistory,
  downloadReceipt,
} from "./components/downloadHelpers";

export default function TenantDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [showLeaseEditForm, setShowLeaseEditForm] = useState(false);
  const [showPersonalEditForm, setShowPersonalEditForm] = useState(false);

  // Dummy data
  const tenantData: TenantData = {
    name: "Sarah Johnson",
    dateJoined: "January 15, 2023",
    email: "sarah.johnson@email.com",
    phoneNumber: "+1 (555) 123-4567",
    dateOfBirth: "March 22, 1990",
    occupation: "Software Engineer",
    employer: "Tech Corp Inc.",
    monthlyIncome: 8500,
    leaseStatus: "Active",
    propertyName: "Sunset Apartments - Unit 4B",
    propertyAddress: "123 Sunset Boulevard, San Francisco, CA 94102",
    leaseStartDate: "February 1, 2023",
    leaseEndDate: "January 31, 2024",
    leaseTerm: "12 months",
    monthlyRent: 2500,
    paymentDueDay: "1st of each month",
    securityDeposit: 5000,
    rentReview: "Annual review on lease anniversary",
    breakClause: "6 months notice required",
    lateFee: "$50 after 5 days",
    specialTerms: "Pet-friendly unit, no smoking allowed",
    additionalNotes: "Tenant prefers email communication. Very responsive and maintains property well.",
    emergencyContact: {
      name: "Michael Johnson",
      phoneNumber: "+1 (555) 987-6543",
      relationship: "Spouse",
    },
    paymentHistory: [
      { month: "January 2024", amount: 2500, status: "Paid", date: "Jan 1, 2024" },
      { month: "December 2023", amount: 2500, status: "Paid", date: "Dec 1, 2023" },
      { month: "November 2023", amount: 2500, status: "Paid", date: "Nov 1, 2023" },
      { month: "October 2023", amount: 2500, status: "Paid", date: "Oct 1, 2023" },
    ],
  };

  // Payment history data
  const paymentHistoryData: PaymentHistoryItem[] = [
    {
      date: "2024-01-01",
      period: "January 2024",
      amount: 2500,
      method: "Bank Transfer",
      status: "Paid",
      reference: "TXN-20240101-001",
    },
    {
      date: "2023-12-01",
      period: "December 2023",
      amount: 2500,
      method: "Bank Transfer",
      status: "Paid",
      reference: "TXN-20231201-001",
    },
    {
      date: "2023-11-01",
      period: "November 2023",
      amount: 2500,
      method: "Bank Transfer",
      status: "Paid",
      reference: "TXN-20231101-001",
    },
    {
      date: "2023-10-01",
      period: "October 2023",
      amount: 2500,
      method: "Credit Card",
      status: "Paid",
      reference: "TXN-20231001-001",
    },
    {
      date: "2023-09-01",
      period: "September 2023",
      amount: 2500,
      method: "Bank Transfer",
      status: "Late",
      reference: "TXN-20230901-001",
    },
  ];

  // Payment summary calculations
  const totalPaid = paymentHistoryData
    .filter((p) => p.status === "Paid")
    .reduce((sum, p) => sum + p.amount, 0);
  const avgPaymentTime = "2.5 days";
  const outstandingBalance = 0;
  const nextPayment = "February 1, 2024";

  // State for editable data
  const [leaseData, setLeaseData] = useState<LeaseData>({
    leaseStatus: tenantData.leaseStatus,
    securityDeposit: tenantData.securityDeposit,
    rentReview: tenantData.rentReview,
    breakClause: tenantData.breakClause,
    leaseStartDate: tenantData.leaseStartDate,
    leaseEndDate: tenantData.leaseEndDate,
    leaseTerm: tenantData.leaseTerm,
    monthlyRent: tenantData.monthlyRent,
    paymentDueDay: tenantData.paymentDueDay,
    lateFee: tenantData.lateFee,
    specialTerms: tenantData.specialTerms,
  });

  const [personalData, setPersonalData] = useState<PersonalData>({
    name: tenantData.name,
    email: tenantData.email,
    phoneNumber: tenantData.phoneNumber,
    dateOfBirth: tenantData.dateOfBirth,
    occupation: tenantData.occupation,
    employer: tenantData.employer,
    monthlyIncome: tenantData.monthlyIncome,
    additionalNotes: tenantData.additionalNotes,
    emergencyContact: {
      name: tenantData.emergencyContact.name,
      phoneNumber: tenantData.emergencyContact.phoneNumber,
      relationship: tenantData.emergencyContact.relationship,
    },
  });

  const tabs = [
    { id: "overview" as TabType, label: "Overview" },
    { id: "payment-history" as TabType, label: "Payment History" },
    { id: "personal" as TabType, label: "Personal Information" },
    { id: "lease" as TabType, label: "Lease Information" },
  ];

  // Handlers
  const handleExportPaymentHistory = () => {
    exportPaymentHistory(tenantData.paymentHistory, tenantData.name);
  };

  const handleDownloadReceipt = (payment: { month: string; amount: number; status: string; date: string }) => {
    downloadReceipt(payment, tenantData);
  };

  const handleDownloadPaymentReceipt = (payment: PaymentHistoryItem) => {
    downloadPaymentReceipt(payment, personalData, tenantData.propertyName);
  };

  const handleDownloadLeaseAgreement = () => {
    downloadLeaseAgreement(personalData, leaseData);
  };

  return (
    <div className="sm:p-6 py-2 px-4 sm:max-w-[960px] mx-auto w-[100%]">
      <TenantHeader tenantData={tenantData} />

      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Tab Content */}
      {activeTab === "overview" && (
        <OverviewTab
          tenantData={tenantData}
          onExportPaymentHistory={handleExportPaymentHistory}
          onDownloadReceipt={handleDownloadReceipt}
        />
      )}

      {activeTab === "payment-history" && (
        <PaymentHistoryTab
          paymentHistoryData={paymentHistoryData}
          totalPaid={totalPaid}
          avgPaymentTime={avgPaymentTime}
          outstandingBalance={outstandingBalance}
          nextPayment={nextPayment}
          onDownloadReceipt={handleDownloadPaymentReceipt}
        />
      )}

      {activeTab === "personal" && (
        <PersonalInformationTab
          personalData={personalData}
          onEditClick={() => setShowPersonalEditForm(true)}
        />
      )}

      {activeTab === "lease" && (
        <LeaseInformationTab
          leaseData={leaseData}
          onEditClick={() => setShowLeaseEditForm(true)}
          onDownloadLeaseAgreement={handleDownloadLeaseAgreement}
        />
      )}

      {/* Edit Forms */}
      <PersonalEditForm
        personalData={personalData}
        setPersonalData={setPersonalData}
        isOpen={showPersonalEditForm}
        onClose={() => setShowPersonalEditForm(false)}
      />

      <LeaseEditForm
        leaseData={leaseData}
        setLeaseData={setLeaseData}
        isOpen={showLeaseEditForm}
        onClose={() => setShowLeaseEditForm(false)}
      />
    </div>
  );
}
