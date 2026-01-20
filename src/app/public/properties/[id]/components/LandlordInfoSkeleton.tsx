import React from "react";

export default function LandlordInfoSkeleton() {
  return (
    <div className="pt-16 sm:pt-24 pb-12 sm:pb-20 px-6 sm:px-12 animate-pulse">
      {/* Large Typography Header Skeleton */}
      <div className="mb-8 sm:mb-12">
        <div className="h-16 sm:h-20 lg:h-24 bg-[#F5F5F5] rounded mb-4 w-64"></div>
        <div className="h-16 sm:h-20 lg:h-24 bg-[#F5F5F5] rounded w-48"></div>
      </div>
      
      {/* Landlord Info Skeleton */}
      <div className="max-w-2xl space-y-3">
        <div className="h-6 bg-[#F5F5F5] rounded w-48"></div>
        <div className="h-5 bg-[#F5F5F5] rounded w-64"></div>
      </div>
    </div>
  );
}
