'use client'
import React from "react";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { PropertyService } from "@/services/property";
import Skeleton from "@/app/components/ui/loaders/Skeleton";
import ErrorDisplay from "@/app/components/ui/ErrorDisplay";
export default function Properties() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["allProperties"],
    queryFn: async () => await new PropertyService().getAllProperties(),
  });

  if (isLoading) {
    return <Skeleton className="h-32 w-full rounded-2xl" />;
  }

  if (isError) {
    return (
      <div className="bg-[#E6F1FD] rounded-2xl sm:p-6 p-4 h-32 flex items-center justify-center">
        <ErrorDisplay
          message={error?.message || "Failed to load properties"}
          onRetry={refetch}
          className="p-0"
        />
      </div>
    );
  }

  return (
    <div className="bg-[#E6F1FD] rounded-2xl sm:p-6 p-4 ">
      <div className="flex items-center">
        <h1 className="text-sm text-black font-[400] flex-1">Properties</h1>

        <HiOutlineBuildingOffice2 className="text-[#1C1C1C] min-w-[20px] min-h-[20px] max-w-[20px] w-[100%] h-[100%]" />
      </div>

      <div className="mt-4 flex gap-x-2 items-center">
        <h1 className="sm:text-xl text-base font-semibold text-black">
          {data?.length ?? 0}
        </h1>

        <h1 className="text-xs font-[400] ms-auto text-black">+11.02%</h1>

        <FaArrowTrendUp className="text-black min-w-[13px] min-h-[13px] max-w-[13px] w-[100%] h-[100%]" />
      </div>
    </div>
  );
}
