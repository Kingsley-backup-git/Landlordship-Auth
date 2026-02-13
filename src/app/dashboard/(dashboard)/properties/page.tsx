"use client";
import React, { useState, useEffect } from "react";
import Occupancy from "./components/occupancy";
import PendingApplications from "./components/applications";
import { CiSearch } from "react-icons/ci";
import TextInput from "../../components/inputs/TextInput";
import { PiArrowsDownUp, PiCheckCircle } from "react-icons/pi";
import { PiFunnelSimple } from "react-icons/pi";
import { FiPlus, FiSearch } from "react-icons/fi";
import TransactionHistory from "./components/transactionHistory";
import { BsThreeDots } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa6";
import { RiAddLargeLine } from "react-icons/ri";
import Link from "next/link";
import CreateProperty from "../../components/Modal/property/create/create";
import StepOne from "../../components/Modal/property/MoveInTenant/stepOne";
import StepTwo from "../../components/Modal/property/MoveInTenant/stepTwo";
import StepSeven from "../../components/Modal/property/MoveInTenant/stepSeven";
import StepEight from "../../components/Modal/property/MoveInTenant/stepEight";
import StepNine from "../../components/Modal/property/MoveInTenant/stepNine";
import StepSix from "../../components/Modal/property/MoveInTenant/stepSix";
import StepFour from "../../components/Modal/property/MoveInTenant/stepFour";
import Validator from "@/utils/formik/tenant";
import useSendInvite from "@/hooks/property/useSendInvite";
import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/navigation";
import Properties from "./components/properties";
import Income from "./components/income";
import { IoCopyOutline } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import { UserService } from "@/services/user";
import Skeleton from "@/app/components/ui/loaders/Skeleton";
import ErrorDisplay from "@/app/components/ui/ErrorDisplay";
export default function Unit() {
  const type = useUserStore(state => state.type)
  const userQuery = useQuery({
      queryKey: ["user"],
      queryFn: async () => await new UserService().getUser(),
    });
  const {push} = useRouter()
  useEffect(() => {
    if (type === "tenant") {
    push("/dashboard/overview")
  }
  },[type])
    const [copied, setCopied] = useState(false);
  const [step, setStep] = useState(50);
  const { doSendInvite, sendInviteMutation } = useSendInvite(stepHandler);
  const [propertyId, setPropertyId] = useState<string>("");
  function stepHandler(num: number) {
    setStep(num);
  }
  function setPropertyIdHandler(id: string) {
    setPropertyId(id);
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://landlordship-auth.vercel.app/public/properties/${userQuery?.data?.data?.slug}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const { formik } = Validator(doSendInvite, propertyId);
  const disabled = sendInviteMutation.isPending;
  return (
    <>
      {step === 0 ? (
        <CreateProperty stepHandler={stepHandler} />
      ) : step === 1 ? (
        <StepOne
          setPropertyIdHandler={setPropertyIdHandler}
          header={"Unit"}
          stepHandler={stepHandler}
          propertyId={propertyId}
        />
      ) : step === 2 ? (
        <StepTwo header={"Unit"} stepHandler={stepHandler} />
      ) : step === 4 ? (
        <StepFour
          formik={formik}
          header={"Unit"}
          stepHandler={stepHandler}
          disabled={disabled}
        />
      ) : step === 6 ? (
        <StepSix
          header={"Unit"}
          stepHandler={stepHandler}
          sendInviteMutation={sendInviteMutation}
        />
      ) : step === 7 ? (
        <StepSeven header={"Unit"} stepHandler={stepHandler} />
      ) : step === 8 ? (
        <StepEight header={"Unit"} stepHandler={stepHandler} />
      ) : step === 9 ? (
        <StepNine header={"Unit"} stepHandler={stepHandler} />
      ) : (
        <div className="sm:p-6 py-2 px-4  sm:max-w-[960px] mx-auto w-[100%]">
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

            <h1 className="text-black font-semibold sm:flex hidden text-sm">
              Unit
            </h1>
            <h1 className="text-black font-semibold sm:hidden flex sm:tracking-normal tracking-[-0.43px] sm:text-sm text-base">
              Properties
            </h1>

            <BsThreeDots className="text-[#007AFF] text-lg sm:hidden flex" />
          </div>

          <div className="grid grid-cols-6 mt-5 gap-5">
            <Properties />

            <Income />

                            <Occupancy />
                            
                            <PendingApplications />
          </div>

                        {/* Application Link Card */}
                        {/* Application Link Card */}
                        {userQuery.isLoading ? (
                            <Skeleton className="h-24 w-full rounded-2xl" />
                        ) : userQuery.isError ? (
                            <div className="bg-[#F9F9FA] w-full sm:p-6 p-4 rounded-2xl">
                                <ErrorDisplay message="Failed to load application link" onRetry={userQuery.refetch} />
                            </div>
                        ) : userQuery.isSuccess && (
                            <div className="bg-[#F9F9FA] w-full sm:p-6 p-4 rounded-2xl">
                              <h1 className="font-semibold text-sm text-black mb-4">
                                Application Link
                              </h1>
                              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                <input
                                  type="text"
                                  value={`https://landlordship-auth.vercel.app/public/properties/${userQuery?.data?.data?.slug}`}
                                  readOnly
                                  className="flex-1 bg-white border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:ring-opacity-20 truncate"
                                />
                                <button
                                  onClick={copyToClipboard}
                                  className="flex items-center justify-center gap-x-2 bg-white border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] hover:bg-[#F9F9FA] transition-colors whitespace-nowrap"
                                >
                                  {copied ? (
                                    <>
                                      <PiCheckCircle className="text-green-500 text-lg" />
                                      <span>Copied!</span>
                                    </>
                                  ) : (
                                    <>
                                      <IoCopyOutline className="text-lg" />
                                      <span>Copy</span>
                                    </>
                                  )}
                                </button>
                              </div>
                            </div>
                          )}
          <div className="sm:hidden flex gap-x-6 ps-4 pe-4 py-6 bg-white rounded-full items-center my-5">
            <RiAddLargeLine className="text-black  text-xl" />

            <PiFunnelSimple className="text-black  text-xl" />

            <PiArrowsDownUp className="text-black  text-xl" />

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
                onClick={() => setStep(0)}
              >
                <FiPlus className="text-black text-xl font-bold" />

                <h1 className="text-base  text-black font-bold">
                  Add New Property
                </h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12">
            <TransactionHistory />
          </div>
        </div>
      )}
    </>
  );
}
