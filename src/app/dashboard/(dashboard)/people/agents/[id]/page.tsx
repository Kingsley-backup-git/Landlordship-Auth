"use client";

import React, { useState } from "react";
import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa6";
import {
  PiEnvelopeSimple,
  PiPhone,
  PiMapPin,
  PiBuildings,
  PiBriefcase,
  PiStar,
  PiCheckCircle,
  PiClock,
} from "react-icons/pi";
import { MdEdit } from "react-icons/md";
import type { AgentRecord } from "../components/types";
import EditAgentModal from "../components/EditAgentModal";
import UserImg from "../../../../../../../public/user.png";
import { useQuery } from "@tanstack/react-query";
import { AgentService } from "@/services/agent";
import { toast } from "react-toastify";
import Spinner from "@/app/components/ui/loaders/Spinner";
import ErrorDisplay from "@/app/components/ui/ErrorDisplay";

// Dummy agent data matching schema
const DUMMY_AGENT: AgentRecord = {
  id: "1",
  name: "Andre Cage",
  email: "andrewcage@gmail.com",
  phone: "+1 410 092 293 2903",
  availability: "available",
  specialization: ["Residential", "Property Management", "Leasing"],
  company: "Oakland Realty Group",
  address: "Meadow Lane, Oakland, CA 94612",
  status: "active",
  rating: 4.5,
  totalJobs: 127,
  createdAt: "2023-01-15T10:00:00Z",
  updatedAt: "2025-01-20T14:30:00Z",
};



function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

function AvailabilityBadge({ value }: { value: AgentRecord["availability"] }) {
  const styles = {
    available: "bg-emerald-100 text-emerald-800 border-emerald-200",
    busy: "bg-amber-100 text-amber-800 border-amber-200",
    unavailable: "bg-slate-100 text-slate-600 border-slate-200",
  };
  const label = value.charAt(0).toUpperCase() + value.slice(1);
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${styles[value]}`}
    >
      {value === "available" && <PiCheckCircle className="text-sm" />}
      {value === "busy" && <PiClock className="text-sm" />}
      {label}
    </span>
  );
}

function StatusBadge({ value }: { value: AgentRecord["status"] }) {
  const isActive = value === "active";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${
        isActive
          ? "bg-emerald-100 text-emerald-800 border-emerald-200"
          : "bg-slate-100 text-slate-600 border-slate-200"
      }`}
    >
      {isActive ? <PiCheckCircle className="text-sm" /> : null}
      {value.charAt(0).toUpperCase() + value.slice(1)}
    </span>
  );
}

export default function AgentDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const {data, isSuccess, isPending, isError } = useQuery({
  queryKey: ['eachAgent'],
  queryFn : async()=> await new AgentService().getEachAgent(id)
})
  const [agent, setAgent] = useState<AgentRecord>({ ...DUMMY_AGENT, id });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditSuccess = (updated: Partial<AgentRecord>) => {
    setAgent((prev) => ({ ...prev, ...updated }));
    setIsEditModalOpen(false);
    toast.success("Agent updated successfully", { autoClose: 3000 });
  };

  const specializationDisplay =
    (isSuccess && data.specialization?.length > 0)
      ? data.specialization.join(", ")
      : "No specialization added";

  if (isPending) {
    return (
      <div className="sm:p-6 py-2 px-4 sm:max-w-[960px] mx-auto w-full flex items-center justify-center min-h-[50vh]">
         <Spinner size="lg" className="border-black" />
      </div>
    )
  }

  if (isError) {
      return (
         <div className="sm:p-6 py-2 px-4 sm:max-w-[960px] mx-auto w-full flex items-center justify-center min-h-[50vh]">
             <ErrorDisplay onRetry={() => window.location.reload()} />
         </div>
      )
  }

if(isSuccess)
  return (
    <div className="sm:p-6 py-2 px-4 sm:max-w-[960px] mx-auto w-full">
      <div className="flex items-center justify-between gap-4 mb-6">
        <Link
          href="/dashboard/people/agents"
          className="flex items-center gap-x-1 text-[#007AFF] sm:text-black/70 hover:text-[#007AFF] transition-colors"
        >
          <FaChevronLeft className="text-lg" />
          <span className="text-sm font-[400] tracking-[-0.43px]">
            Back to Agents
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setIsEditModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#1D3639] text-white text-sm font-[400] rounded-xl hover:bg-[#1D3639]/90 transition-colors shrink-0"
        >
          <MdEdit className="text-lg" />
          Edit Agent
        </button>
      </div>

      {/* Header: name + badges */}
      <div className="bg-white rounded-2xl border border-[#0000000A] shadow-sm p-6 sm:p-8 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-[#F9F9FA] border border-[#0000000A] shrink-0">
            <Image
              src={UserImg}
              alt={data.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-black font-semibold text-xl sm:text-2xl tracking-tight">
              {data.name}
            </h1>
            <p className="text-[#00000066] text-sm font-[400] mt-1">
              {data.company}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <AvailabilityBadge value={data.availability} />
              <StatusBadge value={data.status} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Personal + Work */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-2xl border border-[#0000000A] shadow-sm p-6">
            <h2 className="text-black font-semibold text-base mb-4 flex items-center gap-2">
              <PiBriefcase className="text-[#1C1C1C66]" />
              Personal Information
            </h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-xs font-[400] text-[#00000066] uppercase tracking-wider mb-1">
                  Email
                </dt>
                <dd className="flex items-center gap-2 text-sm text-black font-[400]">
                  <PiEnvelopeSimple className="text-[#1C1C1C66] shrink-0" />
                  {data.email || "—"}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-[400] text-[#00000066] uppercase tracking-wider mb-1">
                  Phone
                </dt>
                <dd className="flex items-center gap-2 text-sm text-black font-[400]">
                  <PiPhone className="text-[#1C1C1C66] shrink-0" />
                  {data.phone || "—"}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-[400] text-[#00000066] uppercase tracking-wider mb-1">
                  Address
                </dt>
                <dd className="flex items-start gap-2 text-sm text-black font-[400]">
                  <PiMapPin className="text-[#1C1C1C66] shrink-0 mt-0.5" />
                  {data.address || "—"}
                </dd>
              </div>
            </dl>
          </div>

          {/* Work Information */}
          <div className="bg-white rounded-2xl border border-[#0000000A] shadow-sm p-6">
            <h2 className="text-black font-semibold text-base mb-4 flex items-center gap-2">
              <PiBuildings className="text-[#1C1C1C66]" />
              Work Information
            </h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-xs font-[400] text-[#00000066] uppercase tracking-wider mb-1">
                  Company
                </dt>
                <dd className="text-sm text-black font-[400]">
                  {data.company || "—"}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-[400] text-[#00000066] uppercase tracking-wider mb-1">
                  Specialization
                </dt>
                <dd className="text-sm text-black font-[400]">
                  {specializationDisplay}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-[400] text-[#00000066] uppercase tracking-wider mb-1">
                  Availability
                </dt>
                <dd>
                  <AvailabilityBadge value={data.availability} />
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Right: Performance + Meta */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#0000000A] shadow-sm p-6">
            <h2 className="text-black font-semibold text-base mb-4 flex items-center gap-2">
              <PiStar className="text-[#1C1C1C66]" />
              Performance
            </h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-xs font-[400] text-[#00000066] uppercase tracking-wider mb-1">
                  Rating
                </dt>
                <dd className="flex items-center gap-2 text-sm text-black font-[400]">
                  <PiStar className="text-amber-500 fill-amber-500" />
                  {data.rating != null ? `${data.rating} / 5` : "—"}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-[400] text-[#00000066] uppercase tracking-wider mb-1">
                  Total Jobs Completed
                </dt>
                <dd className="text-sm text-black font-[400]">
                  {data.totalJobs ?? "—"}
                </dd>
              </div>
            </dl>
          </div>

          <div className="bg-white rounded-2xl border border-[#0000000A] shadow-sm p-6">
            <h2 className="text-black font-semibold text-base mb-4">
              Record
            </h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-xs font-[400] text-[#00000066] uppercase tracking-wider mb-1">
                  Created
                </dt>
                <dd className="text-sm text-black font-[400]">
                  {formatDate(data.createdAt)}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-[400] text-[#00000066] uppercase tracking-wider mb-1">
                  Last Updated
                </dt>
                <dd className="text-sm text-black font-[400]">
                  {formatDate(data.updatedAt)}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <EditAgentModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        agent={data}
        onSuccess={handleEditSuccess}
      />
    </div>
  );
}
