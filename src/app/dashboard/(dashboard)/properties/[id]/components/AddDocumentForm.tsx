"use client";
import React, { useState, useEffect, useRef } from "react";
import { PiPlus } from "react-icons/pi";
import { MdClose } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";
import { LegalDocument, DocumentFormData } from "./types";

interface AddDocumentFormProps {
  onAddDocument: (document: Omit<LegalDocument, "uploadDate">) => void;
}

export default function AddDocumentForm({ onAddDocument }: AddDocumentFormProps) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<DocumentFormData>({
    documentName: "",
    type: "Lease",
    expiryDate: "",
    file: null,
  });
  const formRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showForm &&
        formRef.current &&
        buttonRef.current &&
        !formRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowForm(false);
      }
    };

    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const today = new Date().toISOString().split("T")[0];
    onAddDocument({
      documentName: formData.documentName,
      type: formData.type,
      expiryDate: formData.expiryDate,
    });
    setFormData({
      documentName: "",
      type: "Lease",
      expiryDate: "",
      file: null,
    });
    setShowForm(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        file: e.target.files[0],
      });
    }
  };

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setShowForm(!showForm)}
        className="flex items-center gap-x-2 bg-black text-white text-sm font-[400] rounded-lg py-2 px-4 hover:bg-[#333] transition-colors whitespace-nowrap w-full sm:w-auto justify-center"
      >
        <PiPlus className="text-lg" />
        <span>Add Document</span>
      </button>

      {/* Add Document Form Popup */}
      {showForm && (
        <>
          {/* Backdrop */}
          <div className="fixed justify-center w-full flex items-center inset-0 bg-black bg-opacity-20 z-40">
            <div
              ref={formRef}
              className="sm:w-[400px] z-50 sm:mt-2 bg-white rounded-t-xl sm:rounded-xl border-[.5px] border-[#0000001A] shadow-lg p-5 animate-fadeIn overflow-y-auto max-h-[80vh]"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-sm text-black">
                  Add New Document
                </h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-[#00000066] hover:text-black transition-colors"
                >
                  <MdClose className="text-xl" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-[400] text-[#00000066] mb-2">
                    Document Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.documentName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        documentName: e.target.value,
                      })
                    }
                    className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
                    placeholder="Enter document name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-[400] text-[#00000066] mb-2">
                    Type
                  </label>
                  <select
                    required
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        type: e.target.value,
                      })
                    }
                    className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
                  >
                    <option value="Lease">Lease</option>
                    <option value="Ownership">Ownership</option>
                    <option value="Insurance">Insurance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-[400] text-[#00000066] mb-2">
                    Upload Date
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={new Date().toLocaleDateString()}
                    className="w-full bg-[#F5F5F5] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-[#00000066] font-[400] cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-[400] text-[#00000066] mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.expiryDate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        expiryDate: e.target.value,
                      })
                    }
                    className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-lg py-2 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-[400] text-[#00000066] mb-2">
                    Upload File
                  </label>
                  <div className="border-2 border-dashed border-[#0000001A] rounded-lg p-4 text-center hover:border-black transition-colors">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      id="document-upload"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                    <label
                      htmlFor="document-upload"
                      className="flex flex-col items-center gap-2 cursor-pointer"
                    >
                      <IoCloudUploadOutline className="text-2xl text-[#00000066]" />
                      <span className="text-xs text-[#00000066] font-[400]">
                        {formData.file
                          ? formData.file.name
                          : "Click to upload or drag and drop"}
                      </span>
                    </label>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setFormData({
                        documentName: "",
                        type: "Lease",
                        expiryDate: "",
                        file: null,
                      });
                    }}
                    className="flex-1 bg-[#F9F9FA] border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-lg py-2 px-4 hover:bg-[#F5F5F5] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-black text-white text-sm font-[400] rounded-lg py-2 px-4 hover:bg-[#333] transition-colors"
                  >
                    Add Document
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}


