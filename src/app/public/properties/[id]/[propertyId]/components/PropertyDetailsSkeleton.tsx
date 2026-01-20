import React from "react";

export default function PropertyDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      {/* Hero Image Gallery Skeleton */}
      <div className="w-full h-[60vh] sm:h-[70vh] bg-[#F5F5F5]"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 pb-20 pt-12">
        {/* Back Button Skeleton */}
        <div className="h-5 bg-[#F5F5F5] rounded mb-8 sm:mb-12 w-40"></div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Main Details */}
          <div className="lg:col-span-8 space-y-12">
            {/* Title & Address Skeleton */}
            <div>
              <div className="h-10 sm:h-12 lg:h-14 bg-[#F5F5F5] rounded mb-4 w-3/4"></div>
              <div className="h-6 bg-[#F5F5F5] rounded mb-6 w-1/2"></div>
              <div className="flex items-baseline gap-3">
                <div className="h-4 bg-[#F5F5F5] rounded w-16"></div>
                <div className="h-12 bg-[#F5F5F5] rounded w-32"></div>
                <div className="h-5 bg-[#F5F5F5] rounded w-20"></div>
              </div>
            </div>

            {/* Description Skeleton */}
            <div className="border-t-[1px] border-[#0000000A] pt-12">
              <div className="h-7 bg-[#F5F5F5] rounded mb-6 w-48"></div>
              <div className="space-y-3 max-w-3xl">
                <div className="h-5 bg-[#F5F5F5] rounded w-full"></div>
                <div className="h-5 bg-[#F5F5F5] rounded w-full"></div>
                <div className="h-5 bg-[#F5F5F5] rounded w-5/6"></div>
              </div>
            </div>

            {/* Key Details Skeleton */}
            <div className="border-t-[1px] border-[#0000000A] pt-12">
              <div className="h-7 bg-[#F5F5F5] rounded mb-8 w-48"></div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
                {[...Array(4)].map((_, index) => (
                  <div key={index}>
                    <div className="h-6 bg-[#F5F5F5] rounded mb-3 w-6"></div>
                    <div className="h-3 bg-[#F5F5F5] rounded mb-1 w-20"></div>
                    <div className="h-8 bg-[#F5F5F5] rounded w-12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Apply Section */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 bg-[#F9F9FA] rounded-3xl border-[.5px] border-[#0000001A] p-8 sm:p-10">
              <div className="h-7 bg-[#F5F5F5] rounded mb-3 w-3/4"></div>
              <div className="space-y-3 mb-8">
                <div className="h-4 bg-[#F5F5F5] rounded w-full"></div>
                <div className="h-4 bg-[#F5F5F5] rounded w-5/6"></div>
              </div>
              <div className="h-12 bg-[#F5F5F5] rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
