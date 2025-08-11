"use client";
import React, { useState } from "react";
import Total from "./components/total";
import Pending from "./components/pending";
import InProgress from "./components/inProgress";
import Completed from "./components/completed";
import { PiArrowsDownUp, PiFunnelSimple } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import TextInput from "@/app/dashboard/components/inputs/TextInput";
import { FiPlus } from "react-icons/fi";
import StepOne from "./components/createNewReq/stepOne";
import StepTwo from "./components/createNewReq/stepTwo";
import StepThree from "./components/createNewReq/stepThree";
import { MaintenanceOptions } from "@/lib/data/maintenanceOptions";
import StepFour from "./components/createNewReq/stepFour";
import StepFive from "./components/createNewReq/stepFive";
import StepSix from "./components/createNewReq/stepSix";
import FinalStep from "./components/createNewReq/finalStep";
import { useQuery } from "@tanstack/react-query";
import { TenantService } from "@/services/tenant";
import CreateRequest from "@/hooks/maintenance/useCreateReq";
export interface requestTypes {
  category: string;
  description: string;
  subCategory: string;
  permissionToAccess: false;
  pets: {
    dogs: false;
    cats: false;
    other: false;
  };
  urgency: "Low" | "Normal" | "High" | "Critical";

  attachment: File | null;
}
export default function MaintenanceT() {
  const tenantQuery = useQuery({
      queryKey: ["tenant"],
      queryFn: async () => await new TenantService().getTenant(),
  });
  const {CreateRequestHandler, createReqMutation} = CreateRequest(stepHandler)
  const [request, setRequest] = useState<requestTypes>({
    category: "",
    description: "",
    subCategory: "",
    permissionToAccess: false,
    pets: {
      dogs: false,
      cats: false,
      other: false,
    },
    urgency: "Low",
    attachment: null,
  });
  const [urgency, setUrgency] = useState<
    "Low" | "Normal" | "High" | "Critical"
  >("Low");
  const [step, setStep] = useState(-1);
  const [type, setType] = useState<string>("");
  const [subType, setSubType] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [accessPermission, setAccessPermission] = useState<boolean>(false);
  function stepHandler(num: number) {
    setStep(num);
  }
  function typeHandler(val: string) {
    setType(val);
  }
  function subtypeHandler(val: string) {
    setSubType(val);
  }
  function descriptionHandler(val: string) {
    setDescription(val);
  }
  function urgencyHandler(str: "Low" | "Normal" | "High" | "Critical") {
    setUrgency(str);
  }
  function permissionHandler(val: boolean) {
    setAccessPermission(val);
  }
  function ChoosePetHandler(name: string, value: boolean) {
    setRequest((prev) => ({
      ...prev,
      pets: { ...request.pets, [name]: value },
    }));
  }

async function CreateReqHandler() {
    const formdata = new FormData()
   
    if (formdata) {
      formdata.append("category", request.category)
      if (request.subCategory !== "") {
         formdata.append("subCategory", request.subCategory)
      }
     
      formdata.append("description", request.description)
      formdata.append("urgency", request.urgency)
    
        formdata.append("permissionToAccess", JSON.stringify(request.permissionToAccess))
      
     
         formdata.append("pets", JSON.stringify(request.pets))
      formdata.append("tenantId", tenantQuery?.data?.tenant?.tenantId?._id)
      formdata.append("propertyId", tenantQuery?.data?.tenant?.propertyId?._id)
      formdata.append("landlordId", tenantQuery?.data?.tenant?.landlordId?._id)
      
     
await CreateRequestHandler(formdata)
       
}

  }
  return (
    <>
      {step === 0 ? (
        <StepOne
          MaintenanceOptions={MaintenanceOptions}
          stepHandler={stepHandler}
          typeHandler={typeHandler}
          type={type}
          setRequest={setRequest}
        />
      ) : step === 2 ? (
        <StepTwo
          stepHandler={stepHandler}
          type={type}
          MaintenanceOptions={MaintenanceOptions}
          subtypeHandler={subtypeHandler}
          setRequest={setRequest}
          subType={subType}
        />
      ) : step === 3 ? (
        <StepThree stepHandler={stepHandler} />
      ) : step === 4 ? (
        <StepFour
          stepHandler={stepHandler}
          descriptionHandler={descriptionHandler}
          description={description}
          setRequest={setRequest}
        />
      ) : step === 5 ? (
        <StepFive
          stepHandler={stepHandler}
          permissionHandler={permissionHandler}
          accessPermission={accessPermission}
          request={request}
          ChoosePetHandler={ChoosePetHandler}
        />
      ) : step === 6 ? (
        <StepSix
          stepHandler={stepHandler}
          urgencyHandler={urgencyHandler}
          urgency={urgency}
                    request={request}
                    CreateReqHandler={CreateReqHandler} 
                    createReqMutation = {createReqMutation}
        />
      ) : step === 7 ? (
                    <FinalStep stepHandler={stepHandler}  />
      ) : (
        <div className="">
          <div className="grid grid-cols-4 gap-5 my-6">
            <Total />
            <Pending />
            <InProgress />
            <Completed />
          </div>

          <div className="sm:flex hidden justify-between items-center bg-[#F9F9FA] rounded-lg p-2 mt-6">
            <div className="flex gap-x-5 items-center">
              <div className="flex gap-x-2 items-center cursor-pointer max-w-fit w-full" onClick = {()=> stepHandler(0)}>
                <FiPlus className="text-black text-sm" />

                <h1 className="text-sm font-[400] text-black">New Request</h1>
              </div>

              <PiFunnelSimple className="w-[17px] h-[17px] text-black" />
              <PiArrowsDownUp className="w-[17px] h-[17px] text-black" />
            </div>

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
        </div>
      )}
    </>
  );
}
