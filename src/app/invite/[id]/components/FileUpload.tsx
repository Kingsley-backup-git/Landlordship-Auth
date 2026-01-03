"use client";
import React, { useRef, useState, DragEvent } from "react";
import { PiCloudArrowUpDuotone, PiX } from "react-icons/pi";

interface FileUploadProps {
  label: string;
  required?: boolean;
  accept?: string;
  multiple?: boolean;
  files: File[];
  onChange: (files: File[]) => void;
  error?: string;
  touched?: boolean;
}

export default function FileUpload({
  label,
  required = false,
  accept = "*/*",
  multiple = false,
  files,
  onChange,
  error,
  touched,
}: FileUploadProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => {
    fileRef.current?.click();
  };

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (selectedFiles) {
      const fileArray = Array.from(selectedFiles);
      if (multiple) {
        onChange([...files, ...fileArray]);
      } else {
        onChange([fileArray[0]]);
      }
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    onChange(newFiles);
  };

  return (
    <div>
      <label className="text-black/80 text-sm sm:text-base font-medium block mb-3">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleClick}
        className={`bg-[#FFFFFFCC] border-[.5px] border-dashed rounded-2xl p-6 sm:p-8 lg:p-10 cursor-pointer transition-colors ${
          isDragging
            ? "border-black bg-[#F9F9FA]"
            : "border-[#0000001A] hover:border-black/30"
        }`}
      >
        <input
          ref={fileRef}
          type="file"
          accept={accept}
          multiple={multiple}
          className="hidden"
          onChange={(e) => handleFileSelect(e.target.files)}
        />
        {files.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4">
            <PiCloudArrowUpDuotone className="text-4xl sm:text-5xl text-black" />
            <div className="text-center">
              <p className="text-base sm:text-lg text-black font-medium">
                Drag and drop files here, or click to select
              </p>
              <p className="text-sm text-black/70 mt-2 font-[400]">
                PDF, JPG, PNG up to 10MB
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-[#F9F9FA] rounded-lg p-4 border border-[#0000000A]"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-base text-black font-medium truncate">{file.name}</p>
                  <p className="text-xs sm:text-sm text-black/70 mt-1">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  className="ml-3 p-2 hover:bg-[#0000000A] rounded-lg transition-colors"
                >
                  <PiX className="text-lg text-black" />
                </button>
              </div>
            ))}
            {multiple && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick();
                }}
                className="text-sm sm:text-base text-[#007AFF] font-medium mt-3 hover:text-[#0056CC] transition-colors"
              >
                + Add more files
              </button>
            )}
          </div>
        )}
      </div>
      {touched && error && <div className="text-red-500 text-sm mt-2 font-medium">{error}</div>}
    </div>
  );
}

