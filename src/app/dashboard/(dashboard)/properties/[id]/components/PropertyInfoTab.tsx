import React from "react";
import {
  PiHouseSimple,
  PiRuler,
  PiBed,
  PiBathtub,
  PiCar,
} from "react-icons/pi";
import Button from "@/app/components/ui/Button";
import { PropertyData } from "./types";

interface PropertyInfoTabProps {
  propertyData: PropertyData;
}

export default function PropertyInfoTab({ propertyData }: PropertyInfoTabProps) {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-[#F9F9FA] sm:p-6 p-4 rounded-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h1 className="font-semibold text-base sm:text-lg text-black">
            Property Details
          </h1>
          <Button
            type="button"
            onClick={() => console.log("Edit Property")}
            classname="bg-white border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-lg py-2 px-4 hover:bg-[#F9F9FA] transition-colors flex items-center gap-x-2 w-full sm:w-auto justify-center"
            text="Edit"
          />
        </div>

        {/* Two Column Layout for Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Basic Information Card */}
            <div className="bg-white p-4 sm:p-5 rounded-xl border-[.5px] border-[#0000000A]">
              <h2 className="font-semibold text-sm text-black mb-4 pb-3 border-b-[1px] border-[#0000000A]">
                Basic Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <PiHouseSimple className="text-[#00000066] text-lg mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-[400] text-[#00000066] mb-1">
                      Property Name
                    </h3>
                    <h1 className="text-black font-[400] text-sm break-words">
                      {propertyData.propertyName}
                    </h1>
                  </div>
                </div>

                <div className="h-[1px] bg-[#0000000A]"></div>

                <div className="flex items-start gap-3">
                  <PiHouseSimple className="text-[#00000066] text-lg mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-[400] text-[#00000066] mb-1">
                      Property Type
                    </h3>
                    <h1 className="text-black font-[400] text-sm">
                      {propertyData.propertyType}
                    </h1>
                  </div>
                </div>

                <div className="h-[1px] bg-[#0000000A]"></div>

                <div className="flex items-start gap-3">
                  <PiRuler className="text-[#00000066] text-lg mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-[400] text-[#00000066] mb-1">
                      Square Feet
                    </h3>
                    <h1 className="text-black font-[400] text-sm">
                      {propertyData.squareFeet.toLocaleString()} sq ft
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Features Card */}
            <div className="bg-white p-4 sm:p-5 rounded-xl border-[.5px] border-[#0000000A]">
              <h2 className="font-semibold text-sm text-black mb-4 pb-3 border-b-[1px] border-[#0000000A]">
                Property Features
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <PiBed className="text-[#00000066] text-lg flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xs font-[400] text-[#00000066] mb-1">
                      Bedrooms
                    </h3>
                    <h1 className="text-black font-[400] text-sm">
                      {propertyData.bedrooms}
                    </h1>
                  </div>
                </div>

                <div className="h-[1px] bg-[#0000000A]"></div>

                <div className="flex items-center gap-3">
                  <PiBathtub className="text-[#00000066] text-lg flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xs font-[400] text-[#00000066] mb-1">
                      Bathrooms
                    </h3>
                    <h1 className="text-black font-[400] text-sm">
                      {propertyData.bathrooms}
                    </h1>
                  </div>
                </div>

                <div className="h-[1px] bg-[#0000000A]"></div>

                <div className="flex items-center gap-3">
                  <PiCar className="text-[#00000066] text-lg flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xs font-[400] text-[#00000066] mb-1">
                      Parking Spaces
                    </h3>
                    <h1 className="text-black font-[400] text-sm">
                      {propertyData.parkingSpaces}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Description Card */}
            <div className="bg-white p-4 sm:p-5 rounded-xl border-[.5px] border-[#0000000A]">
              <h2 className="font-semibold text-sm text-black mb-4 pb-3 border-b-[1px] border-[#0000000A]">
                Description
              </h2>
              <p className="text-black font-[400] text-sm leading-relaxed">
                {propertyData.description}
              </p>
            </div>

            {/* Key Features Card */}
            <div className="bg-white p-4 sm:p-5 rounded-xl border-[.5px] border-[#0000000A]">
              <h2 className="font-semibold text-sm text-black mb-4 pb-3 border-b-[1px] border-[#0000000A]">
                Key Features
              </h2>
              <div className="flex flex-wrap gap-2">
                {propertyData.keyFeatures.map((feature, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#E6F1FD] text-black text-xs font-[400] border-[.5px] border-[#0000000A]"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


