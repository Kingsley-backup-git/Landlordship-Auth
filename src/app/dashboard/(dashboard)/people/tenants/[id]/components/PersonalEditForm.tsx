"use client";
import React, { useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { PersonalData } from "./types";

interface PersonalEditFormProps {
  personalData: PersonalData;
  setPersonalData: React.Dispatch<React.SetStateAction<PersonalData>>;
  isOpen: boolean;
  onClose: () => void;
}

export default function PersonalEditForm({
  personalData,
  setPersonalData,
  isOpen,
  onClose,
}: PersonalEditFormProps) {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        formRef.current &&
        !formRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0  justify-center items-center flex bg-black bg-opacity-20 z-40"
      
      >

<div
        ref={formRef}
        className=" w-[500px] z-50  bg-white rounded-t-xl sm:rounded-xl border-[.5px] border-[#0000001A]  shadow-lg p-6 animate-fadeIn max-h-[80vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-semibold text-sm text-black">Edit Personal Information</h2>
          <button
            onClick={onClose}
            className="text-[#00000066] hover:text-black transition-colors"
          >
            <MdClose className="text-xl" />
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Full Name</label>
            <input
              type="text"
              value={personalData.name}
              onChange={(e) => setPersonalData({ ...personalData, name: e.target.value })}
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            />
          </div>
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Email Address</label>
            <input
              type="email"
              value={personalData.email}
              onChange={(e) => setPersonalData({ ...personalData, email: e.target.value })}
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            />
          </div>
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Phone Number</label>
            <input
              type="tel"
              value={personalData.phoneNumber}
              onChange={(e) => setPersonalData({ ...personalData, phoneNumber: e.target.value })}
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            />
          </div>
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Date of Birth</label>
            <input
              type="text"
              value={personalData.dateOfBirth}
              onChange={(e) => setPersonalData({ ...personalData, dateOfBirth: e.target.value })}
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            />
          </div>
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Occupation</label>
            <input
              type="text"
              value={personalData.occupation}
              onChange={(e) => setPersonalData({ ...personalData, occupation: e.target.value })}
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            />
          </div>
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Employer</label>
            <input
              type="text"
              value={personalData.employer}
              onChange={(e) => setPersonalData({ ...personalData, employer: e.target.value })}
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            />
          </div>
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Monthly Income</label>
            <input
              type="number"
              value={personalData.monthlyIncome}
              onChange={(e) => setPersonalData({ ...personalData, monthlyIncome: Number(e.target.value) })}
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            />
          </div>
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Emergency Contact Name</label>
            <input
              type="text"
              value={personalData.emergencyContact.name}
              onChange={(e) =>
                setPersonalData({
                  ...personalData,
                  emergencyContact: { ...personalData.emergencyContact, name: e.target.value },
                })
              }
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            />
          </div>
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Emergency Contact Phone</label>
            <input
              type="tel"
              value={personalData.emergencyContact.phoneNumber}
              onChange={(e) =>
                setPersonalData({
                  ...personalData,
                  emergencyContact: { ...personalData.emergencyContact, phoneNumber: e.target.value },
                })
              }
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            />
          </div>
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Emergency Contact Relationship</label>
            <input
              type="text"
              value={personalData.emergencyContact.relationship}
              onChange={(e) =>
                setPersonalData({
                  ...personalData,
                  emergencyContact: { ...personalData.emergencyContact, relationship: e.target.value },
                })
              }
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            />
          </div>
          <div>
            <label className="block text-xs font-[400] text-[#00000066] mb-2">Additional Notes</label>
            <textarea
              value={personalData.additionalNotes}
              onChange={(e) => setPersonalData({ ...personalData, additionalNotes: e.target.value })}
              rows={4}
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-[#F9F9FA] border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-lg py-2 px-4 hover:bg-[#F5F5F5] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-black text-white text-sm font-[400] rounded-lg py-2 px-4 hover:bg-[#333] transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      </div>
      
    </>
  );
}


