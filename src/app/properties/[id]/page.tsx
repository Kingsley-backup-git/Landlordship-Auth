"use client";

import AuthNavbar from "@/app/auth/components/AuthNavbar";
import { PropertyService } from "@/services/property";
import { checkAuth } from "@/utils/helpers/auth";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { use } from "react";
import { PiHouseSimple, PiMapPinLine } from "react-icons/pi";

interface PropertyPreviewRouteProps {
  params: Promise<{ id: string }>;
}

function PropertyPreviewPage({ propertyId }: { propertyId: string }) {
  const router = useRouter();
  const [isAuthed, setIsAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const ok = await checkAuth();
      if (mounted) setIsAuthed(ok);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["propertyPreview", propertyId],
    queryFn: async () => await new PropertyService().getEachProperties(propertyId),
    enabled: Boolean(propertyId),
  });

  // Your API response shape (based on existing pages)
  const property = data?.Properties;
  const images: string[] = property?.property_images ? property.property_images : [];

  const title = property?.propertyName || "Property Preview";
  const rent = property?.property_value;
  const locationLine = [
    property?.address,
    property?.city,
    property?.state,
    property?.postalcode,
  ]
    .filter(Boolean)
    .join(" ");

  const landlordName =
    property?.landlord?.userName || data?.landlord?.userName || "Landlord";
  const landlordEmail = property?.landlord?.email || data?.landlord?.email || "";

  const applyHref = `/properties/${propertyId}/apply`;
 
 

 



  if (isPending) {
    return (
      <div className="min-h-screen bg-white py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
        <AuthNavbar />
        <div className="max-w-7xl mx-auto mt-10">
          <div className="animate-pulse">
            <div className="h-[320px] sm:h-[420px] rounded-3xl bg-[#F5F5F5] border border-[#0000000A]" />
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="h-10 w-3/4 bg-[#F5F5F5] rounded-xl" />
                <div className="h-5 w-1/2 bg-[#F5F5F5] rounded-lg" />
                <div className="h-8 w-1/3 bg-[#F5F5F5] rounded-xl mt-6" />
                <div className="h-24 w-full bg-[#F5F5F5] rounded-2xl mt-8" />
              </div>
              <div className="lg:col-span-4">
                <div className="h-[220px] w-full bg-[#F5F5F5] rounded-3xl border border-[#0000000A]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !propertyId || !property) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-8">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🏠</div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-black mb-3">
            Property Not Found
          </h1>
          <p className="text-[#00000066] font-[400] text-sm sm:text-base mb-8">
            We couldn&apos;t load this property. Please try again.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => refetch()}
              className="px-6 py-3 bg-black text-white rounded-xl hover:bg-black/90 transition-all duration-300 text-sm sm:text-base font-[400] shadow-sm hover:shadow-md"
            >
              Try Again
            </button>
            <button
              onClick={() => router.back()}
              className="px-6 py-3 bg-white border border-[#0000001A] text-black rounded-xl hover:bg-[#F9F9FA] transition-all duration-300 text-sm sm:text-base font-[400]"
            >
              Go Back
            </button>
          </div>
          {error ? (
            <p className="mt-6 text-xs text-[#00000066] font-[400]">
              {typeof error === "object" && error !== null && "message" in error
                ? String((error as { message?: unknown }).message ?? "Unknown error")
                : "Unknown error"}
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
      <AuthNavbar />

      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="mt-6 sm:mt-10">
          <div className="relative overflow-hidden rounded-3xl border border-[#0000000A] bg-[#F5F5F5]">
            <div className="relative h-[320px] sm:h-[440px] lg:h-[520px]">
              {images?.length ? (
                <Image
                  src={images[0]}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <PiHouseSimple className="text-7xl text-[#00000033]" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />

              {/* Chips */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-[400] text-black border border-[#0000000A]">
                  Preview
                </span>
                {property?.property_type ? (
                  <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-[400] text-black border border-[#0000000A]">
                    {property.property_type}
                  </span>
                ) : null}
              </div>
            </div>
          </div>

          {/* Thumbnails (lightweight, no carousel dependency) */}
          {images?.length > 1 ? (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {images.slice(1, images?.length).map((src) => (
                <div
                  key={src}
                  className="relative overflow-hidden rounded-2xl border border-[#0000000A] bg-[#F5F5F5] h-28 sm:h-32"
                >
                  <Image src={src} alt={title} fill className="object-cover" />
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {/* Content */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <h1 className="text-black font-semibold text-2xl sm:text-4xl tracking-tight leading-tight">
                {property?.propertyName || ""}
              </h1>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <div className="inline-flex items-center gap-2 text-[#00000066] font-[400] text-sm sm:text-base">
                  <PiMapPinLine className="text-lg" />
                  <span>{locationLine || "—"}</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-[#00000066] font-[400] text-xs uppercase tracking-wider">
                    Rent
                  </span>
                  <span className="text-black font-semibold text-2xl sm:text-3xl">
                    ${rent?.toLocaleString?.() || "0"}
                  </span>
                  <span className="text-[#00000066] font-[400] text-sm">
                    /month
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="border-t border-[#0000000A] pt-10">
              <h2 className="text-black font-semibold text-xl sm:text-2xl mb-5">
                About this property
              </h2>
              <p className="text-[#00000066] font-[400] text-base sm:text-lg leading-relaxed">
                {property?.description || "No description provided."}
              </p>
            </div>

            {/* Key details */}
            <div className="border-t border-[#0000000A] pt-10">
              <h2 className="text-black font-semibold text-xl sm:text-2xl mb-7">
                Property details
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
                <div>
                  <p className="text-[#00000066] font-[400] text-xs uppercase tracking-wider mb-2">
                    Bedrooms
                  </p>
                  <p className="text-black font-semibold text-2xl">
                    {property?.bedrooms ?? "N/A"}
                  </p>
                </div>
                <div>
                  <p className="text-[#00000066] font-[400] text-xs uppercase tracking-wider mb-2">
                    Bathrooms
                  </p>
                  <p className="text-black font-semibold text-2xl">
                    {property?.bathrooms ?? "N/A"}
                  </p>
                </div>
                <div>
                  <p className="text-[#00000066] font-[400] text-xs uppercase tracking-wider mb-2">
                    Sq Ft
                  </p>
                  <p className="text-black font-semibold text-2xl">
                    {property?.square_feet?.toLocaleString?.() ?? "N/A"}
                  </p>
                </div>
                <div>
                  <p className="text-[#00000066] font-[400] text-xs uppercase tracking-wider mb-2">
                    Parking
                  </p>
                  <p className="text-black font-semibold text-2xl">
                    {property?.parkingspaces ?? "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {/* Landlord */}
            <div className="border-t border-[#0000000A] pt-10">
              <h2 className="text-black font-semibold text-xl sm:text-2xl mb-5">
                Landlord
              </h2>
              <div className="rounded-2xl border border-[#0000000A] bg-white p-6">
                <p className="text-black font-semibold text-lg">{landlordName}</p>
                {landlordEmail ? (
                  <p className="text-[#00000066] font-[400] text-sm mt-1">
                    {landlordEmail}
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          {/* Right CTA */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 rounded-3xl border border-[#0000000A] bg-[#F9F9FA] p-7 sm:p-8 shadow-sm">
              <h2 className="text-black font-semibold text-xl sm:text-2xl mb-3">
                Ready to apply?
              </h2>
              <p className="text-[#00000066] font-[400] text-sm sm:text-base leading-relaxed mb-8">
                Preview the details, then submit your rental application when you’re ready.
              </p>

              {isAuthed ? (
                <button
                  onClick={()=> router.push(applyHref)}
                  className="w-full bg-black text-white font-semibold text-base py-4 px-6 rounded-xl hover:bg-[#333] transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  Apply
                </button>
              ) : (
                <button
                  onClick={()=> router.push("/auth/signin")}
                  className="w-full bg-white text-black font-semibold text-base py-4 px-6 rounded-xl border border-[#0000001A] hover:bg-white/60 transition-all duration-300 shadow-sm"
                >
                  Sign in to apply
                </button>
              )}

              <p className="text-center text-[#00000066] font-[400] text-xs mt-6">
                You’ll be returned to this page after signing in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PropertyPreviewRoute({ params }: PropertyPreviewRouteProps) {
  const { id } = use(params);
  return <PropertyPreviewPage propertyId={id} />;
}

