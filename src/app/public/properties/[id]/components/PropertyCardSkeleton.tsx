import React from "react";

export default function PropertyCardSkeleton() {
  return (
    <div className="h-full flex flex-col bg-white overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-[280px] sm:h-[320px] bg-[#F5F5F5]"></div>

      {/* Content Skeleton */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        {/* Title Skeleton */}
        <div className="h-7 bg-[#F5F5F5] rounded mb-3 w-3/4"></div>
        
        {/* Address Skeleton */}
        <div className="h-5 bg-[#F5F5F5] rounded mb-6 w-1/2"></div>
        
        {/* Rent Section Skeleton */}
        <div className="mt-auto pt-6 border-t-[1px] border-[#0000000A]">
          <div className="flex items-baseline gap-2">
            <div className="h-3 bg-[#F5F5F5] rounded w-12"></div>
            <div className="h-8 bg-[#F5F5F5] rounded w-24"></div>
            <div className="h-4 bg-[#F5F5F5] rounded w-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
