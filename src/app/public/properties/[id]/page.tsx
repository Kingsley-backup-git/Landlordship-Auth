"use client";
import AuthNavbar from "@/app/auth/components/AuthNavbar";
import { PropertyService } from "@/services/property";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { use } from "react";
import { PiHouseSimple } from "react-icons/pi";
import PropertyCardSkeleton from "./components/PropertyCardSkeleton";
import LandlordInfoSkeleton from "./components/LandlordInfoSkeleton";

interface PublicPropertyPageProps {
  params: Promise<{ id: string }>;
}

export default function PublicPropertyPage({
  params,
}: PublicPropertyPageProps) {
  const { id } = use(params);
  const { data, isSuccess, isPending, isError } = useQuery({
    queryKey: ["publicProperties", id],
    queryFn: async () => await new PropertyService().getPublicProperties(id),
  });

  // Enhanced error state
  if (isError) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-8">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🏠</div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-black mb-3">
            Property Collection Not Found
          </h1>
          <p className="text-[#00000066] font-[400] text-sm sm:text-base mb-8">
            We couldn't find the property collection you're looking for. The link may be invalid or the collection has been removed.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-black text-white rounded-xl hover:bg-black/90 transition-all duration-300 text-sm sm:text-base font-[400] shadow-sm hover:shadow-md"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
      <AuthNavbar />
      <div className="max-w-7xl mx-auto">
        {/* Editorial Header Section */}
        {isPending ? (
          <LandlordInfoSkeleton />
        ) : isSuccess ? (
          <div className="pt-8 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 lg:pb-20 px-4 sm:px-6 lg:px-12">
            {/* Large Typography Header */}
            <h1 className="text-black font-semibold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 lg:mb-12 tracking-tight leading-[1.1]">
              Property
              <br />
              Collection
            </h1>

            {/* Elegant Landlord Info - Text Only */}
            <div className="max-w-2xl">
              <div className="space-y-1 mb-2">
                <p className="text-black font-semibold text-lg sm:text-xl">
                  {data?.landlord?.userName || "Property Owner"}
                </p>
              </div>
              <p className="text-[#00000066] font-[400] text-sm sm:text-base">
                {data?.landlord?.email || ""}
              </p>
            </div>
          </div>
        ) : null}

        {/* Curated Properties Grid - Asymmetric Layout */}
        {isPending ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 px-4 sm:px-6 lg:px-12 pb-12 sm:pb-16 lg:pb-20">
            {[...Array(6)].map((_, index) => (
              <PropertyCardSkeleton key={index} />
            ))}
          </div>
        ) : isSuccess && data?.Properties?.length > 0 ? (
          <div className="px-4 sm:px-6 lg:px-12 pb-12 sm:pb-16 lg:pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
              {data.Properties.map((property: any, index: number) => {
                // Create visual rhythm with varying card sizes
                const isLargeCard = index % 2 === 0;
                const isWideCard = index % 2 === 0 && !isLargeCard;

                return (
                  <Link
                    key={property._id}
                    href={`/public/properties/${id}/${property._id}`}
                    className={`group ${
                      isLargeCard
                        ? "sm:col-span-2 sm:row-span-2"
                        : !isLargeCard
                        ? "sm:col-span-1"
                        : ""
                    }`}
                  >
                    <div className="h-full flex flex-col bg-white overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl">
                      {/* Art-directed Image - Not Boxed */}
                      <div
                        className={`relative overflow-hidden bg-[#F5F5F5] ${
                          isLargeCard
                            ? "h-[400px] sm:h-[500px]"
                            : isWideCard
                            ? "h-[300px] sm:h-[350px]"
                            : "h-[280px] sm:h-[320px]"
                        }`}
                      >
                        {property.property_images &&
                        property.property_images.length > 0 ? (
                          <Image
                            src={property.property_images[0]}
                            width={800}
                            height={600}
                            alt={property.propertyName || "Property"}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <PiHouseSimple className="text-6xl text-[#00000033]" />
                          </div>
                        )}
                        {/* Subtle overlay on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                      </div>

                      {/* Property Details - Editorial Typography */}
                      <div className="p-6 sm:p-8 flex-1 flex flex-col">
                        <h2 className="text-black font-semibold text-xl sm:text-2xl mb-3 group-hover:text-[#007AFF] transition-colors duration-300">
                          {property.propertyName || "Unnamed Property"}
                        </h2>
                        <p className="text-[#00000066] font-[400] text-sm sm:text-base mb-6">
                          {property.city || "City"}
                          {property.state && `, ${property.state}`}
                        </p>

                        {/* Rent - Prominent but Elegant */}
                        <div className="mt-auto pt-6 border-t-[1px] border-[#0000000A]">
                          <div className="flex items-baseline gap-2">
                            <span className="text-[#00000066] font-[400] text-xs uppercase tracking-wider">
                              Rent
                            </span>
                            <span className="text-black font-semibold text-2xl sm:text-3xl">
                              ${property.property_value?.toLocaleString() || "0"}
                            </span>
                            <span className="text-[#00000066] font-[400] text-sm">
                              /mo
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="px-4 sm:px-6 lg:px-12 pb-12 sm:pb-16 lg:pb-20">
            <div className="bg-[#F9F9FA] rounded-2xl sm:rounded-3xl border-[.5px] border-[#0000001A] p-8 sm:p-12 lg:p-16 xl:p-24 text-center">
              <PiHouseSimple className="text-5xl sm:text-6xl text-[#00000033] mx-auto mb-4 sm:mb-6" />
              <h3 className="text-black font-semibold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3">
                No Properties Available
              </h3>
              <p className="text-[#00000066] font-[400] text-xs sm:text-sm lg:text-base max-w-md mx-auto">
                This landlord currently has no properties listed.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
