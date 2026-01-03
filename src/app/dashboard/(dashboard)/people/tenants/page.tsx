"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import TextInput from "../../../components/inputs/TextInput";
import { PiArrowsDownUp } from "react-icons/pi";
import { PiFunnelSimple } from "react-icons/pi";
import { FiPlus, FiSearch } from "react-icons/fi";
import TotalTenants from "./components/totalTenants";
import RentalIncome from "./components/rentalIncome";
import TimelyPayment from "./components/timelyPayment";
import EndingLease from "./components/endingLease";
import TransactionHistory from "./components/transactionHistory";
import { BsThreeDots } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa6";
import { RiAddLargeLine } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { LuChevronsUpDown } from "react-icons/lu";
import Link from "next/link";
import Button from "@/app/components/ui/Button";

export default function Tenant() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedProperty, setSelectedProperty] = useState("");

  // Dummy property list
  const properties = [
    { id: "1", name: "Sunset Apartments - Unit 4B" },
    { id: "2", name: "Downtown Loft - Unit 2A" },
    { id: "3", name: "Garden View Condo - Unit 5C" },
    { id: "4", name: "Riverside Villa - Unit 1" },
    { id: "5", name: "City Center Apartment - Unit 3B" },
  ];

  const handleSendInvite = () => {
    if (!email || !selectedProperty) {
      return;
    }
    // TODO: Implement API call to send invite
    console.log("Sending invite to:", email, "for property:", selectedProperty);
    // Close modal and reset form
    setIsModalOpen(false);
    setEmail("");
    setSelectedProperty("");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEmail("");
    setSelectedProperty("");
  };

  return (
    <>
      <div className="sm:p-6 py-2 px-4 sm:max-w-[960px] mx-auto w-[100%]">
        <div className="flex sm:block items-center justify-between">
          <Link
            href="/dashboard/"
            className="flex items-center sm:hidden gap-x-[1px]"
          >
            <FaChevronLeft className="text-[#007AFF] text-lg" />
            <h1 className="font-[400] sm:text-base text-sm tracking-[-0.43px] text-[#007AFF]">
              Home
            </h1>
          </Link>

          <h1 className="text-black font-semibold sm:tracking-normal tracking-[-0.43px] sm:text-sm text-base">
            Tenants
          </h1>

          <BsThreeDots className="text-[#007AFF] text-lg sm:hidden flex" />
        </div>

        <div className="grid lg:grid-cols-3 1md:grid-cols-2 sm:grid-cols-1 1sm:grid-cols-2 grid-cols-1 md:grid-cols-2 mt-5 sm:gap-5 gap-4">
          <TotalTenants />

          <RentalIncome />

          <TimelyPayment />

          <EndingLease />
        </div>

        <div className="sm:hidden flex gap-x-6 ps-4 pe-4 py-6 rounded-full bg-white items-center my-5">
          <RiAddLargeLine
            className="text-black text-xl cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />

          <PiFunnelSimple className="text-black text-xl" />

          <PiArrowsDownUp className="text-black text-xl" />

          <FiSearch className="text-black text-xl ms-auto" />
        </div>

        <div className="sm:flex hidden justify-between items-center bg-[#F9F9FA] rounded-lg p-3 mt-6">
          <div className="flex items-center gap-x-4">
            <PiFunnelSimple className="w-[17px] h-[17px] text-black" />
            <PiArrowsDownUp className="w-[17px] h-[17px] text-black" />

            <div className="bg-[#FFFFFFCC] max-w-[160px] w-[100%] border-[.5px] rounded-lg px-2 py-[6px] gap-x-[6px] flex items-center">
              <CiSearch className="text-lg text-[#00000033]" />
              <TextInput
                type="text"
                classname="flex-1 w-[100%]  bg-transparent text-black text-sm outline-0 border-[0px] border-transparent"
                placeholder="Search"
                name={"searchinput"}
              />
            </div>
          </div>

          <div className="flex gap-x-5 items-center">
            <div
              className="flex gap-x-1 items-center cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <FiPlus className="text-black text-xl font-bold" />

              <h1 className="text-base text-black font-bold">Add New Tenant</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12">
          <TransactionHistory />
        </div>
      </div>

      {/* Add Tenant Modal */}
      {isModalOpen && (
        <div className="fixed h-screen top-0 flex justify-center items-center bottom-0 left-0 right-0 bg-white/10 z-[9999999] backdrop-blur-[1px]">
          <div className="max-w-[500px] w-full bg-white rounded-2xl shadow-lg mx-4">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-black font-semibold text-lg">Invite Tenant</h1>
                <button
                  onClick={closeModal}
                  className="bg-[#0000000A] cursor-pointer text-black text-xl p-2 rounded-lg hover:bg-[#0000001A] transition-colors"
                >
                  <IoCloseSharp />
                </button>
              </div>

              {/* Form */}
              <div className="space-y-6">
                {/* Email Input */}
                <div>
                  <label className="text-[#00000066] text-xs font-normal block mb-2">
                    Email Address
                  </label>
                  <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter tenant email address"
                      className="w-full py-1 text-black text-sm placeholder:text-[#00000033] placeholder:opacity-70 rounded-lg outline-none border-0"
                    />
                  </div>
                </div>

                {/* Property Dropdown */}
                <div>
                  <label className="text-[#00000066] text-xs font-normal block mb-2">
                    Property
                  </label>
                  <div className="bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-2xl py-4 px-5 relative">
                    <select
                      value={selectedProperty}
                      onChange={(e) => setSelectedProperty(e.target.value)}
                      className="w-full appearance-none text-sm py-1 outline-none border-0 text-black bg-transparent"
                    >
                      <option value="" disabled>
                        Select a property
                      </option>
                      {properties.map((property) => (
                        <option key={property.id} value={property.id}>
                          {property.name}
                        </option>
                      ))}
                    </select>
                    <LuChevronsUpDown className="absolute pointer-events-none top-[20px] right-5 text-[#00000066]" />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-x-4 mt-6">
                <Button
                  type="button"
                  onClick={closeModal}
                  classname="bg-transparent border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-lg py-2 px-4"
                  text="Cancel"
                />
                <Button
                  type="button"
                  onClick={handleSendInvite}
                  disabled={false}
                  classname={`${
                    !email || !selectedProperty
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-black cursor-pointer"
                  } text-white text-sm font-[400] rounded-lg py-2 px-4`}
                  text="Send Invite"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
