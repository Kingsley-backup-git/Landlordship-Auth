import React from "react";
import RentDue from "./components/RentDue";
import Deposits from "./components/Deposits";
import Credits from "./components/Credits";
import Button from "@/app/components/ui/ButtonTwo";
import Outstanding from "./components/outstanding";
import { useUser } from "@/app/components/Providers/UserProvider";
import useCreateOrGetChat from "@/hooks/chats/useCreateOrGetChat";
import Skeleton from "@/app/components/ui/loaders/Skeleton";
import ErrorDisplay from "@/app/components/ui/ErrorDisplay";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function OverviewT() {
  const {tenantData,tenantQuery} = useUser()
  const { mutation, createChatHandler } = useCreateOrGetChat()

  if (tenantQuery?.isLoading) {
    return (
      <div className="grid grid-cols-12 gap-5 w-full mt-6">
        <div className="col-span-12 grid grid-cols-3 gap-5">
           <Skeleton className="h-40 w-full rounded-2xl" />
           <Skeleton className="h-40 w-full rounded-2xl" />
           <Skeleton className="h-40 w-full rounded-2xl" />
        </div>
        <div className="col-span-4">
             <Skeleton className="h-64 w-full rounded-2xl" />
        </div>
      </div>
    )
  }

  if (tenantQuery?.isError) {
     return <ErrorDisplay message={tenantQuery?.error?.message || "Failed to load tenant data"} />
  }

  return (
    <div className="grid grid-cols-12 gap-5 w-full mt-6">
      <div className="col-span-12 grid grid-cols-3 gap-5 items-start">
        <RentDue />
        <Deposits />
        <Credits />
      </div>

      <div className="col-span-4">
        <div className="rounded-2xl bg-[#F9F9FA] p-6">
          <h1 className="text-[#000000] font-[600] text-sm">My Landlord</h1>

          <div className="w-[82px] h-[82px] bg-[#D9D9D9] mt-6 rounded-full block mx-auto"></div>
          <h1 className="text-[#000000] font-[400] text-xs mt-5 text-center">
            Landlords Name
          </h1>
          <p className="text-[#000000] font-[400] text-xs mt-1 text-center">
            {tenantData?.propertyId?.landlordId?.slug.toUpperCase()}
          </p>

          <div className="flex flex-col gap-2 mt-2 mx-auto">
            <Button classname="text-white border text-sm border-[#0000001A] font-[400] bg-[#1D3639] py-1 px-2 rounded-lg">
              Pay rent
            </Button>
            <Button onClick = {()=> createChatHandler({otherUserId:tenantData?.propertyId?.landlordId?._id, context: {type : "general"}})} classname=" border-[#0000001A] text-sm border font-[400] text-black bg-transparent py-1 px-2 rounded-lg">
              Send a message
            </Button>
            {/* <Button classname="font-[400] text-black border text-sm border-[#0000001A] bg-transparent py-1 px-2 rounded-lg">
              Create Request
            </Button> */}
          </div>
        </div>
      </div>

      {/* <Outstanding /> */}
    </div>
  );
}
