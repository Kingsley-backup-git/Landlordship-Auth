import React from "react";
import {
  IoMailOutline,
  IoCallOutline,
} from "react-icons/io5";
import { PiCalendarBlank } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi";
import Button from "@/app/components/ui/Button";
import { PersonalData } from "./types";

interface PersonalInformationTabProps {
  personalData: PersonalData;
  onEditClick: () => void;
}

export default function PersonalInformationTab({
  personalData,
  onEditClick,
}: PersonalInformationTabProps) {
  return (
    <div className="relative">
      <div className="bg-[#F9F9FA] sm:p-6 p-4 rounded-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h1 className="font-semibold text-sm text-black">Personal Information</h1>
          <Button
            type="button"
            onClick={onEditClick}
            classname="bg-white border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-lg py-2 px-4 hover:bg-[#F9F9FA] transition-colors flex items-center gap-x-2 w-full sm:w-auto justify-center"
            text="Edit"
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">Full Name</h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">{personalData.name}</h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%] flex items-center gap-x-2">
              <IoMailOutline className="text-[#00000066] text-sm" />
              <h1 className="text-xs font-[400] text-[#00000066]">Email Address</h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm break-all">{personalData.email}</h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%] flex items-center gap-x-2">
              <IoCallOutline className="text-[#00000066] text-sm" />
              <h1 className="text-xs font-[400] text-[#00000066]">Phone Number</h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">{personalData.phoneNumber}</h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%] flex items-center gap-x-2">
              <PiCalendarBlank className="text-[#00000066] text-sm" />
              <h1 className="text-xs font-[400] text-[#00000066]">Date of Birth</h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">{personalData.dateOfBirth}</h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%] flex items-center gap-x-2">
              <HiOutlineUserGroup className="text-[#00000066] text-sm" />
              <h1 className="text-xs font-[400] text-[#00000066]">Emergency Contact</h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">
                {personalData.emergencyContact.name}
              </h1>
              <h1 className="text-[#00000066] font-[400] text-xs mt-1">
                {personalData.emergencyContact.phoneNumber} ({personalData.emergencyContact.relationship})
              </h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">Occupation</h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">{personalData.occupation}</h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">Employer</h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">{personalData.employer}</h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">Monthly Income</h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">
                ${personalData.monthlyIncome.toLocaleString()}
              </h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start gap-2">
            <div className="sm:flex-[25%]">
              <h1 className="text-xs font-[400] text-[#00000066]">Additional Notes</h1>
            </div>
            <div className="sm:flex-[75%]">
              <h1 className="text-black font-[400] text-sm">{personalData.additionalNotes}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


