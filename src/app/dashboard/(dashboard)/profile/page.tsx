"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
import { PiUserCircleDuotone, PiEnvelopeSimple, PiIdentificationCard } from "react-icons/pi";
import { PiSuitcaseSimple, PiUser, PiIdentificationBadge } from "react-icons/pi";
import { useUser } from "@/app/components/Providers/UserProvider";
import { useUserStore } from "@/store/useUserStore";
import UserImg from "../../../../../public/user.png";

const MODES = [
  { value: "tenant", label: "Tenant", icon: PiUser },
  { value: "landlord", label: "Landlord", icon: PiSuitcaseSimple },
  { value: "agent", label: "Agent", icon: PiIdentificationBadge },
] as const;

export default function ProfilePage() {
  const { data, query } = useUser();
  const type = useUserStore((state) => state.type);
  const setType = useUserStore((state) => state.setType);

  const user = data?.data ?? data;
  const userName = user?.userName ?? user?.name ?? "—";
  const email = user?.email ?? "—";
  const role = user?.role ?? type;
  const avatarSrc =
    typeof user?.avatar === "string"
      ? user.avatar
      : typeof user?.image === "string"
        ? user.image
        : UserImg;

  return (
    <div className="sm:p-6 py-2 px-4 sm:max-w-[720px] mx-auto w-full">
      <div className="flex sm:block items-center justify-between mb-6">
        <Link
          href="/dashboard/"
          className="flex sm:hidden gap-x-1 items-center text-[#007AFF]"
        >
          <FaChevronLeft className="text-lg" />
          <span className="text-sm font-[400] tracking-[-0.43px]">Home</span>
        </Link>
        <h1 className="text-black font-semibold text-base sm:text-lg tracking-tight">
          Profile
        </h1>
      </div>

      {query.isPending ? (
        <div className="animate-pulse space-y-6">
          <div className="h-24 rounded-2xl bg-[#F5F5F5]" />
          <div className="h-40 rounded-2xl bg-[#F5F5F5]" />
          <div className="h-32 rounded-2xl bg-[#F5F5F5]" />
        </div>
      ) : (
        <div className="space-y-6">
          {/* User details card */}
          <div className="bg-white rounded-2xl border border-[#0000000A] shadow-sm overflow-hidden">
            <div className="bg-gradient-to-br from-[#1C1C1C08] to-[#1C1C1C02] px-6 py-6 sm:py-8">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-[#F5F5F5] border-2 border-white shadow-md">
                  <Image
                    src={avatarSrc}
                    alt={userName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-black font-semibold text-lg sm:text-xl">
                    {userName}
                  </h2>
                  <p className="text-[#00000066] text-sm font-[400] mt-0.5">
                    {role ? String(role).charAt(0).toUpperCase() + String(role).slice(1) : "—"}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-6 py-5 space-y-4 border-t border-[#0000000A]">
              <div className="flex items-center gap-3 text-[#1C1C1C]">
                <PiUserCircleDuotone className="text-xl text-[#1C1C1C66] shrink-0" />
                <div>
                  <p className="text-xs font-[400] text-[#00000066] uppercase tracking-wider">
                    Username
                  </p>
                  <p className="font-[400] text-sm sm:text-base">{userName}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[#1C1C1C]">
                <PiEnvelopeSimple className="text-xl text-[#1C1C1C66] shrink-0" />
                <div>
                  <p className="text-xs font-[400] text-[#00000066] uppercase tracking-wider">
                    Email
                  </p>
                  <p className="font-[400] text-sm sm:text-base break-all">
                    {email}
                  </p>
                </div>
              </div>
              {user?.phone && (
                <div className="flex items-center gap-3 text-[#1C1C1C]">
                  <PiIdentificationCard className="text-xl text-[#1C1C1C66] shrink-0" />
                  <div>
                    <p className="text-xs font-[400] text-[#00000066] uppercase tracking-wider">
                      Phone
                    </p>
                    <p className="font-[400] text-sm sm:text-base">
                      {user.phone}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mode switcher */}
          <div className="bg-white rounded-2xl border border-[#0000000A] shadow-sm p-6">
            <h3 className="text-black font-semibold text-base sm:text-lg mb-1">
              View as
            </h3>
            <p className="text-[#00000066] text-sm font-[400] mb-5">
              Switch how you see the dashboard: tenant, landlord, or agent.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {MODES.map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setType(value)}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                    type === value
                      ? "border-[#1D3639] bg-[#1D36390D] shadow-sm"
                      : "border-[#0000000A] bg-[#F9F9FA] hover:border-[#1C1C1C26] hover:bg-[#F5F5F5]"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      type === value ? "bg-[#1D3639] text-white" : "bg-white text-[#1C1C1C66] border border-[#0000000A]"
                    }`}
                  >
                    <Icon className="text-xl" />
                  </div>
                  <span
                    className={`font-[400] text-sm sm:text-base ${
                      type === value ? "text-[#1D3639] font-medium" : "text-[#1C1C1C]"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
