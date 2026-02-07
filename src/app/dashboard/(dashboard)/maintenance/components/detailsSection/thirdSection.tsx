"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ThirdSection({data} : {data:any}) {
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openPreview = (url: string) => {
    setActiveImg(url);
    setIsOpen(true);
  };

  const closePreview = () => {
    setIsOpen(false);
    // allow fade-out before unmounting url
    setTimeout(() => setActiveImg(null), 150);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreview();
    };
    if (isOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <>
      <div className="bg-[#F9F9FA]  p-6 rounded-2xl mt-6">
        <h1 className="font-semibold flex-1 text-sm text-black">Menu</h1>

        <div className="rounded-2xl p-4 flex gap-x-2 mt-4 bg-white">
        
          {(data?.images && data?.images?.length > 0) ?
            <div className="flex items-center gap-4 flex-wrap">
     
              {data?.images?.map((img: { url: string;  public_id : string}) => {
                return (
                  <button
                    key={img.public_id}
                    type="button"
                    onClick={() => openPreview(img.url)}
                    className="rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-black/20"
                    aria-label="Preview image"
                  >
                    <Image
                      src={img.url}
                      alt={"maintenance-img"}
                      className="rounded-md transition-transform transform duration-300 cursor-pointer hover:scale-105 object-cover"
                      width={70}
                      height={70}
                    />
                  </button>
                );
          
          })}
            </div> : <div>
              <IoIosInformationCircleOutline className="text-black text-xl" />
              <h1 className="text-black font-[400] text-sm">No media uploaded</h1>
              <p className="text-[#00000066] font-[400] text-xs">
                This will be uploaded by the tenant showing more info about request
              </p>
            </div>}
        </div>
      </div>

      {/* Fullscreen preview modal */}
      {(activeImg || isOpen) && (
        <div
          className={`fixed inset-0 z-[9999999] bg-black/70 backdrop-blur-[1px] flex items-center justify-center px-4 py-6 transition-opacity duration-150 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closePreview}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`relative w-full max-w-4xl h-[70vh] sm:h-[78vh] bg-black/30 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-150 ${
              isOpen ? "scale-100" : "scale-95"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closePreview}
              className="absolute top-3 right-3 z-10 bg-white/10 hover:bg-white/20 text-white rounded-xl p-2 transition-colors"
              aria-label="Close preview"
            >
              <IoCloseSharp className="text-xl" />
            </button>
            {activeImg ? (
              <Image
                src={activeImg}
                alt="preview"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, 80vw"
                priority
              />
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
