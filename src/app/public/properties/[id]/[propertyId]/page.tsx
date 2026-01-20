"use client";
import AuthNavbar from "@/app/auth/components/AuthNavbar";
import { PropertyService } from "@/services/property";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { useState } from "react";
import { use } from "react";
import { PiBed, PiBathtub, PiRuler, PiCar } from "react-icons/pi";
import ImageCarousel from "./components/ImageCarousel";
import PropertyDetailsSkeleton from "./components/PropertyDetailsSkeleton";
import ApplicationModal from "./components/ApplicationModal";

interface IndividualPublicPropertyProps {
  params: Promise<{ id: string; propertyId: string }>;
}

export default function IndividualPublicProperty({
  params,
}: IndividualPublicPropertyProps) {
  const { id, propertyId } = use(params);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

      const { data, isSuccess, isPending, isError } = useQuery({
    queryKey: ["individualProperty", propertyId],
    queryFn: async () =>
      await new PropertyService().getEachProperties(propertyId),
  });

  // Enhanced error state
  if (isError) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-8">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🏠</div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-black mb-3">
            Property Not Found
          </h1>
          <p className="text-[#00000066] font-[400] text-sm sm:text-base mb-8">
            We couldn't find the property you're looking for. It may have been removed or the link is invalid.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => window.location.href = `/public/properties/${id}`}
              className="px-6 py-3 bg-black text-white rounded-xl hover:bg-black/90 transition-all duration-300 text-sm sm:text-base font-[400] shadow-sm hover:shadow-md"
            >
              View All Properties
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 bg-white border border-[#0000001A] text-black rounded-xl hover:bg-[#F9F9FA] transition-all duration-300 text-sm sm:text-base font-[400]"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
      <AuthNavbar />
      {isPending ? (
        <PropertyDetailsSkeleton />
      ) : isSuccess ? (
        <>
          {/* Hero Image Gallery */}
          <div className="w-full mt-4 sm:mt-6 mb-12 sm:mb-16">
            <ImageCarousel
              images={data?.Properties?.property_images || []}
              propertyName={data?.Properties?.propertyName}
            />
          </div>

          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 pb-8 sm:pb-12 lg:pb-16">
            {/* Back Button - Elegant */}
            <Link
              href={`/public/properties/${id}`}
              className="inline-flex items-center gap-2 text-[#00000066] hover:text-black transition-colors mb-8 sm:mb-12 text-sm font-[400] group"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300">
                ←
              </span>
              <span>Back to Properties</span>
            </Link>

            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
              {/* Left Column - Content */}
              <div className="lg:col-span-8 space-y-8 sm:space-y-10 lg:space-y-12">
                {/* Title & Address */}
                <div>
                  <h1 className="text-black font-semibold text-xl sm:text-4xl lg:text-3xl mb-4 tracking-tight leading-tight">
                    {data?.Properties?.propertyName || ""}
                  </h1>
                  <p className="text-[#00000066] font-[400] text-base sm:text-lg mb-6">
                    {data?.Properties?.address || ""} {data?.Properties?.city || ""}
                    {data?.Properties?.state && `, ${data?.Properties?.state}`}{" "}
                    {data?.Properties?.postalcode || ""}
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-[#00000066] font-[400] text-sm uppercase tracking-wider">
                      Rent
                    </span>
                    <span className="text-black font-semibold text-xl sm:text-3xl">
                      $
                      {data?.Properties?.property_value?.toLocaleString() || "0"}
                    </span>
                    <span className="text-[#00000066] font-[400] text-base">
                      /month
                    </span>
                  </div>
                </div>

                {/* Description */}
                {data?.Properties?.description && (
                  <div className="border-t-[1px] border-[#0000000A] pt-12">
                    <h2 className="text-black font-semibold text-xl sm:text-2xl mb-6">
                      About this property
                    </h2>
                    <p className="text-[#00000066] font-[400] text-base sm:text-lg leading-relaxed max-w-3xl">
                      {data?.Properties?.description}
                    </p>
                  </div>
                )}

                {/* Key Details */}
                <div className="border-t-[1px] border-[#0000000A] pt-12">
                  <h2 className="text-black font-semibold text-xl sm:text-2xl mb-8">
                    Property details
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <PiBed className="text-[#00000066] text-2xl" />
                      </div>
                      <p className="text-[#00000066] font-[400] text-sm mb-1 uppercase tracking-wider">
                        Bedrooms
                      </p>
                      <p className="text-black font-semibold text-2xl">
                        {data?.Properties?.bedrooms || "N/A"}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <PiBathtub className="text-[#00000066] text-2xl" />
                      </div>
                      <p className="text-[#00000066] font-[400] text-sm mb-1 uppercase tracking-wider">
                        Bathrooms
                      </p>
                      <p className="text-black font-semibold text-2xl">
                        {data?.Properties?.bathrooms || "N/A"}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <PiRuler className="text-[#00000066] text-2xl" />
                      </div>
                      <p className="text-[#00000066] font-[400] text-sm mb-1 uppercase tracking-wider">
                        Square Feet
                      </p>
                      <p className="text-black font-semibold text-2xl">
                        {data?.Properties?.square_feet?.toLocaleString() || "N/A"}
                      </p>
                    </div>

      <div>
                      <div className="flex items-center gap-3 mb-3">
                        <PiCar className="text-[#00000066] text-2xl" />
                      </div>
                      <p className="text-[#00000066] font-[400] text-sm mb-1 uppercase tracking-wider">
                        Parking
                      </p>
                      <p className="text-black font-semibold text-2xl">
                        {data?.Properties?.parkingspaces || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Apply Section */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-24 bg-[#F9F9FA] rounded-2xl sm:rounded-3xl border-[.5px] border-[#0000001A] p-6 sm:p-8 lg:p-10 shadow-sm">
                  <h2 className="text-black font-semibold text-xl sm:text-2xl mb-3">
                    Interested in this property?
                  </h2>
                  <p className="text-[#00000066] font-[400] text-sm sm:text-base mb-8 leading-relaxed">
                    Apply now to secure your new home. The landlord will review your application.
                  </p>
                  <button
                    onClick={() => setIsApplicationModalOpen(true)}
                    className="w-full bg-black text-white font-semibold text-base py-4 px-6 rounded-xl hover:bg-[#333] transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    Apply for Property
                  </button>
                  <p className="text-center text-[#00000066] font-[400] text-xs mt-6">
                    Application is free and takes only a few minutes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Application Modal */}
          <ApplicationModal
            isOpen={isApplicationModalOpen}
            onClose={() => setIsApplicationModalOpen(false)}
              propertyName={data?.Properties?.propertyName}
              id = {data?.Properties?._id}
          />
        </>
      ) : null}
    </div>
  );
}
