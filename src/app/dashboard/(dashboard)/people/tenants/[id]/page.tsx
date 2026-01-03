"use client";
import React, { useState } from "react";
import { use } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";
import {
  PiHouseSimple,
  PiCalendarBlank,
  PiNotePencil,
  PiFileText,
  PiDownloadSimple,
} from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineSchedule, MdOutlineRefresh } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import UserImg from "../../../../../../../public/user.png";
import Button from "@/app/components/ui/Button";

type TabType = "overview" | "personal" | "lease";

export default function TenantDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { push } = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  // Dummy data
  const tenantData = {
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

  const tabs = [
    { id: "overview" as TabType, label: "Overview" },
    { id: "personal" as TabType, label: "Personal Information" },
    { id: "lease" as TabType, label: "Lease Information" },
  ];

  // Export payment history as CSV
  const exportPaymentHistory = () => {
    const csvHeaders = ["Month", "Amount", "Status", "Date Paid"];
    const csvRows = tenantData.paymentHistory.map((payment) => [
      payment.month,
      `$${payment.amount.toLocaleString()}`,
      payment.status,
      payment.date,
    ]);

    const csvContent = [
      csvHeaders.join(","),
      ...csvRows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `${tenantData.name}_Payment_History_${new Date().toISOString().split("T")[0]}.csv`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Download receipt for a specific payment
  const downloadReceipt = (payment: typeof tenantData.paymentHistory[0]) => {
    // Create a simple receipt HTML
    const receiptHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Payment Receipt - ${payment.month}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; max-width: 600px; margin: 0 auto; }
            .header { text-align: center; margin-bottom: 30px; }
            .header h1 { margin: 0; font-size: 24px; color: #000; }
            .header p { margin: 5px 0; color: #666; font-size: 14px; }
            .details { margin: 30px 0; }
            .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
            .detail-label { color: #666; font-size: 14px; }
            .detail-value { color: #000; font-size: 14px; font-weight: 600; }
            .amount { text-align: center; margin: 30px 0; padding: 20px; background: #f9f9fa; border-radius: 8px; }
            .amount-label { color: #666; font-size: 14px; margin-bottom: 5px; }
            .amount-value { color: #000; font-size: 32px; font-weight: bold; }
            .footer { margin-top: 40px; text-align: center; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Payment Receipt</h1>
            <p>${tenantData.name}</p>
            <p>${tenantData.propertyName}</p>
          </div>
          <div class="details">
            <div class="detail-row">
              <span class="detail-label">Payment Month:</span>
              <span class="detail-value">${payment.month}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Payment Date:</span>
              <span class="detail-value">${payment.date}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Status:</span>
              <span class="detail-value">${payment.status}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Property:</span>
              <span class="detail-value">${tenantData.propertyName}</span>
            </div>
          </div>
          <div class="amount">
            <div class="amount-label">Amount Paid</div>
            <div class="amount-value">$${payment.amount.toLocaleString()}</div>
          </div>
          <div class="footer">
            <p>This is a computer-generated receipt.</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
          </div>
        </body>
      </html>
    `;

    const blob = new Blob([receiptHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `Receipt_${payment.month.replace(/\s+/g, "_")}_${tenantData.name.replace(/\s+/g, "_")}.html`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="sm:p-6 py-2 px-4 sm:max-w-[960px] mx-auto w-[100%]">
      {/* Header */}
      <div className="flex sm:block items-center justify-between mb-6">
        <Link
          href="/dashboard/people/tenants"
          className="flex items-center sm:hidden gap-x-[1px]"
        >
          <FaChevronLeft className="text-[#007AFF] text-lg" />
          <h1 className="font-[400] sm:text-base text-sm tracking-[-0.43px] text-[#007AFF]">
            Back
          </h1>
        </Link>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-x-3">
            <button
              onClick={() => push("/dashboard/people/tenants")}
              className="sm:flex hidden items-center gap-x-1 text-[#007AFF]"
            >
              <FaChevronLeft className="text-[#007AFF] text-lg" />
              <h1 className="font-[400] text-sm text-[#007AFF]">Back</h1>
            </button>
            <h1 className="text-black font-semibold sm:tracking-normal tracking-[-0.43px] sm:text-lg text-base">
              Tenant Details
            </h1>
          </div>

          <BsThreeDots className="text-[#007AFF] text-lg sm:hidden flex" />
        </div>
      </div>

      {/* Tenant Overview Card */}
      <div className="bg-[#F9F9FA] p-6 rounded-2xl mb-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-x-4 flex-1">
            <div className="relative">
              <Image
                src={UserImg}
                alt="Tenant"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#94E9B8] border-2 border-white rounded-full"></div>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-semibold text-lg">{tenantData.name}</h1>
              <div className="flex items-center gap-x-2 mt-1">
                <PiCalendarBlank className="text-sm text-[#00000066]" />
                <h1 className="font-[400] text-xs text-[#00000066]">
                  Joined {tenantData.dateJoined}
                </h1>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div
              className={`px-3 py-1 rounded-lg text-xs font-[400] ${
                tenantData.leaseStatus === "Active"
                  ? "bg-[#e5efea] text-green-500"
                  : "bg-[#f5f5f5] text-[#00000066]"
              }`}
            >
              {tenantData.leaseStatus}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-x-1 border-b-[1px] border-[#0000001A] mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-[400] whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? "text-black border-b-2 border-black"
                : "text-[#00000066] hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview Tab Content */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Property & Status Section */}
          <div className="bg-[#F9F9FA] p-6 rounded-2xl">
            <h1 className="font-semibold text-sm text-black mb-6">Property & Status</h1>
            <div className="flex flex-col gap-y-6">
              <div className="flex items-center">
                <div className="flex-[25%] flex items-center gap-x-2">
                  <PiHouseSimple className="text-[#00000066] text-sm" />
                  <h1 className="text-xs font-[400] text-[#00000066]">Property</h1>
                </div>
                <div className="flex-[75%]">
                  <h1 className="text-black font-[400] text-sm">{tenantData.propertyName}</h1>
                  <h1 className="text-[#00000066] font-[400] text-xs mt-1">
                    {tenantData.propertyAddress}
                  </h1>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-[25%]">
                  <h1 className="text-xs font-[400] text-[#00000066]">Tenant Status</h1>
                </div>
                <div className="flex-[75%]">
                  <div
                    className={`inline-block px-3 py-1 rounded-lg text-xs font-[400] ${
                      tenantData.leaseStatus === "Active"
                        ? "bg-[#e5efea] text-green-500"
                        : "bg-[#f5f5f5] text-[#00000066]"
                    }`}
                  >
                    {tenantData.leaseStatus}
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-[25%]">
                  <h1 className="text-xs font-[400] text-[#00000066]">Monthly Rent</h1>
                </div>
                <div className="flex-[75%]">
                  <h1 className="text-black font-[400] text-sm">
                    ${tenantData.monthlyRent.toLocaleString()}
                  </h1>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-[25%] flex items-center gap-x-2">
                  <PiCalendarBlank className="text-[#00000066] text-sm" />
                  <h1 className="text-xs font-[400] text-[#00000066]">Lease Period</h1>
                </div>
                <div className="flex-[75%]">
                  <h1 className="text-black font-[400] text-sm">
                    {tenantData.leaseStartDate} - {tenantData.leaseEndDate}
                  </h1>
                  <h1 className="text-[#00000066] font-[400] text-xs mt-1">
                    ({tenantData.leaseTerm})
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Payment History */}
          <div className="bg-[#F9F9FA] p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <h1 className="font-semibold text-sm text-black">Payment History</h1>
              <button
                type="button"
                onClick={exportPaymentHistory}
                className="flex items-center gap-x-2 text-sm text-black font-[400] hover:text-[#007AFF] transition-colors"
              >
                <PiDownloadSimple className="text-lg" />
                <span>Export</span>
              </button>
            </div>
            <div className="space-y-4">
              {tenantData.paymentHistory.map((payment, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between pb-4 border-b-[1px] border-[#0000000A] last:border-0 last:pb-0"
                >
                  <div className="flex-1">
                    <h1 className="text-black font-[400] text-sm">{payment.month}</h1>
                    <h1 className="text-[#00000066] font-[400] text-xs mt-1">
                      Paid on {payment.date}
                    </h1>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <div className="text-right">
                      <h1 className="text-black font-[400] text-sm">
                        ${payment.amount.toLocaleString()}
                      </h1>
                      <div className="inline-block px-2 py-1 rounded-lg text-xs font-[400] bg-[#e5efea] text-green-500 mt-1">
                        {payment.status}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => downloadReceipt(payment)}
                      className="flex items-center gap-x-1 text-xs text-[#00000066] hover:text-[#007AFF] transition-colors px-2 py-1 rounded hover:bg-white"
                      title="Download Receipt"
                    >
                      <PiDownloadSimple className="text-sm" />
                      <span className="sm:inline hidden">Receipt</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-[#F9F9FA] p-6 rounded-2xl">
            <h1 className="font-semibold text-sm text-black mb-6">Quick Actions</h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <button
                type="button"
                onClick={() => console.log("Renew Lease")}
                className="bg-white border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-lg py-3 px-4 flex items-center justify-center gap-x-2 hover:bg-[#F9F9FA] transition-colors"
              >
                <MdOutlineRefresh className="text-lg" />
                <span>Renew Lease</span>
              </button>
              <button
                type="button"
                onClick={() => console.log("Schedule Inspection")}
                className="bg-white border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-lg py-3 px-4 flex items-center justify-center gap-x-2 hover:bg-[#F9F9FA] transition-colors"
              >
                <MdOutlineSchedule className="text-lg" />
                <span>Schedule Inspection</span>
              </button>
              <button
                type="button"
                onClick={() => console.log("Add Note")}
                className="bg-white border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-lg py-3 px-4 flex items-center justify-center gap-x-2 hover:bg-[#F9F9FA] transition-colors"
              >
                <PiNotePencil className="text-lg" />
                <span>Add Note</span>
              </button>
              <button
                type="button"
                onClick={() => console.log("Generate Statement")}
                className="bg-white border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-lg py-3 px-4 flex items-center justify-center gap-x-2 hover:bg-[#F9F9FA] transition-colors"
              >
                <PiFileText className="text-lg" />
                <span>Generate Statement</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Personal Information Tab Content */}
      {activeTab === "personal" && (
        <div className="bg-[#F9F9FA] p-6 rounded-2xl">
          <h1 className="font-semibold text-sm text-black mb-6">Personal Information</h1>
          <div className="flex flex-col gap-y-6">
            <div className="flex items-center">
              <div className="flex-[25%]">
                <h1 className="text-xs font-[400] text-[#00000066]">Full Name</h1>
              </div>
              <div className="flex-[75%]">
                <h1 className="text-black font-[400] text-sm">{tenantData.name}</h1>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-[25%] flex items-center gap-x-2">
                <IoMailOutline className="text-[#00000066] text-sm" />
                <h1 className="text-xs font-[400] text-[#00000066]">Email Address</h1>
              </div>
              <div className="flex-[75%]">
                <h1 className="text-black font-[400] text-sm">{tenantData.email}</h1>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-[25%] flex items-center gap-x-2">
                <IoCallOutline className="text-[#00000066] text-sm" />
                <h1 className="text-xs font-[400] text-[#00000066]">Phone Number</h1>
              </div>
              <div className="flex-[75%]">
                <h1 className="text-black font-[400] text-sm">{tenantData.phoneNumber}</h1>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-[25%] flex items-center gap-x-2">
                <PiCalendarBlank className="text-[#00000066] text-sm" />
                <h1 className="text-xs font-[400] text-[#00000066]">Date of Birth</h1>
              </div>
              <div className="flex-[75%]">
                <h1 className="text-black font-[400] text-sm">{tenantData.dateOfBirth}</h1>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-[25%] flex items-center gap-x-2">
                <HiOutlineUserGroup className="text-[#00000066] text-sm" />
                <h1 className="text-xs font-[400] text-[#00000066]">Emergency Contact</h1>
              </div>
              <div className="flex-[75%]">
                <h1 className="text-black font-[400] text-sm">
                  {tenantData.emergencyContact.name}
                </h1>
                <h1 className="text-[#00000066] font-[400] text-xs mt-1">
                  {tenantData.emergencyContact.phoneNumber} ({tenantData.emergencyContact.relationship})
                </h1>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-[25%]">
                <h1 className="text-xs font-[400] text-[#00000066]">Occupation</h1>
              </div>
              <div className="flex-[75%]">
                <h1 className="text-black font-[400] text-sm">{tenantData.occupation}</h1>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-[25%]">
                <h1 className="text-xs font-[400] text-[#00000066]">Employer</h1>
              </div>
              <div className="flex-[75%]">
                <h1 className="text-black font-[400] text-sm">{tenantData.employer}</h1>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-[25%]">
                <h1 className="text-xs font-[400] text-[#00000066]">Monthly Income</h1>
              </div>
              <div className="flex-[75%]">
                <h1 className="text-black font-[400] text-sm">
                  ${tenantData.monthlyIncome.toLocaleString()}
                </h1>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-[25%]">
                <h1 className="text-xs font-[400] text-[#00000066]">Additional Notes</h1>
              </div>
              <div className="flex-[75%]">
                <h1 className="text-black font-[400] text-sm">{tenantData.additionalNotes}</h1>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lease Information Tab Content */}
      {activeTab === "lease" && (
        <div className="space-y-6">
          {/* Action Buttons */}
          <div className="flex gap-x-4">
            <Button
              type="button"
              onClick={() => console.log("Edit Lease")}
              classname="text-black border-[.5px] text-sm font-[400] rounded-lg py-2 px-4 flex-1 hover:bg-[#F9F9FA] transition-colors"
              text="Edit Lease"
            />
            <Button
              type="button"
              onClick={() => console.log("Renew Lease")}
              classname="bg-white border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-lg py-2 px-4 flex-1 hover:bg-[#F9F9FA] transition-colors"
              text="Renew Lease"
            />
          </div>

          {/* Lease Details */}
          <div className="bg-[#F9F9FA] p-6 rounded-2xl">
            <h1 className="font-semibold text-sm text-black mb-6">Lease Details</h1>
            <div className="flex flex-col gap-y-6">
              <div className="flex items-center">
                <div className="flex-[25%]">
                  <h1 className="text-xs font-[400] text-[#00000066]">Lease Status</h1>
                </div>
                <div className="flex-[75%]">
                  <div
                    className={`inline-block px-3 py-1 rounded-lg text-xs font-[400] ${
                      tenantData.leaseStatus === "Active"
                        ? "bg-[#e5efea] text-green-500"
                        : "bg-[#f5f5f5] text-[#00000066]"
                    }`}
                  >
                    {tenantData.leaseStatus}
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-[25%]">
                  <h1 className="text-xs font-[400] text-[#00000066]">Security Deposit</h1>
                </div>
                <div className="flex-[75%]">
                  <h1 className="text-black font-[400] text-sm">
                    ${tenantData.securityDeposit.toLocaleString()}
                  </h1>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-[25%]">
                  <h1 className="text-xs font-[400] text-[#00000066]">Rent Review</h1>
                </div>
                <div className="flex-[75%]">
                  <h1 className="text-black font-[400] text-sm">{tenantData.rentReview}</h1>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-[25%]">
                  <h1 className="text-xs font-[400] text-[#00000066]">Break Clause</h1>
                </div>
                <div className="flex-[75%]">
                  <h1 className="text-black font-[400] text-sm">{tenantData.breakClause}</h1>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-[25%] flex items-center gap-x-2">
                  <PiCalendarBlank className="text-[#00000066] text-sm" />
                  <h1 className="text-xs font-[400] text-[#00000066]">Lease Start Date</h1>
                </div>
                <div className="flex-[75%]">
                  <h1 className="text-black font-[400] text-sm">{tenantData.leaseStartDate}</h1>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-[25%] flex items-center gap-x-2">
                  <PiCalendarBlank className="text-[#00000066] text-sm" />
                  <h1 className="text-xs font-[400] text-[#00000066]">Lease End Date</h1>
                </div>
                <div className="flex-[75%]">
                  <h1 className="text-black font-[400] text-sm">{tenantData.leaseEndDate}</h1>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-[25%]">
                  <h1 className="text-xs font-[400] text-[#00000066]">Lease Term</h1>
                </div>
                <div className="flex-[75%]">
                  <h1 className="text-black font-[400] text-sm">{tenantData.leaseTerm}</h1>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-[25%]">
                  <h1 className="text-xs font-[400] text-[#00000066]">Monthly Rent</h1>
                </div>
                <div className="flex-[75%]">
                  <h1 className="text-black font-[400] text-sm">
                    ${tenantData.monthlyRent.toLocaleString()}
                  </h1>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-[25%]">
                  <h1 className="text-xs font-[400] text-[#00000066]">Payment Due Day</h1>
                </div>
                <div className="flex-[75%]">
                  <h1 className="text-black font-[400] text-sm">{tenantData.paymentDueDay}</h1>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-[25%]">
                  <h1 className="text-xs font-[400] text-[#00000066]">Late Fee</h1>
                </div>
                <div className="flex-[75%]">
                  <h1 className="text-black font-[400] text-sm">{tenantData.lateFee}</h1>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-[25%]">
                  <h1 className="text-xs font-[400] text-[#00000066]">Special Terms & Conditions</h1>
                </div>
                <div className="flex-[75%]">
                  <h1 className="text-black font-[400] text-sm">{tenantData.specialTerms}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
