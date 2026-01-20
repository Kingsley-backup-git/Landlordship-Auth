"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { PiHouseSimple } from "react-icons/pi";
import ImageLightbox from "./ImageLightbox";

interface ImageCarouselProps {
  images: string[];
  propertyName?: string;
}

export default function ImageCarousel({ images, propertyName }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const lightboxPrevious = () => {
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const lightboxNext = () => {
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) {
    return (
      <div className="relative w-full h-[60vh] sm:h-[70vh] bg-[#F5F5F5] rounded-none sm:rounded-3xl overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <PiHouseSimple className="text-6xl text-[#00000033]" />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full h-[60vh] sm:h-[70vh] bg-[#F5F5F5] rounded-none sm:rounded-3xl overflow-hidden group cursor-pointer">
        {/* Main Image - Clickable */}
        <div
          className="relative w-full h-full"
          onClick={() => openLightbox(currentIndex)}
        >
          <Image
            src={images[currentIndex]}
            alt={propertyName || `Property image ${currentIndex + 1}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={currentIndex === 0}
          />
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg backdrop-blur-sm"
              aria-label="Previous image"
            >
              <FaArrowAltCircleLeft className="text-2xl" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg backdrop-blur-sm"
              aria-label="Next image"
            >
              <FaArrowAltCircleRight className="text-2xl" />
            </button>
          </>
        )}

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(index);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-2 bg-white"
                    : "w-2 h-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Click Hint */}
        <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-[400] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to view fullscreen
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrevious={lightboxPrevious}
          onNext={lightboxNext}
          propertyName={propertyName}
        />
      )}
    </>
  );
}
