"use client";
import TextField from "@/app/dashboard/components/Modal/property/create/components/form/TextField";
import useShowInterest from "@/hooks/property/useShowInterest";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import * as Yup from "yup";
interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyName?: string;
  id:string
}

export default function ApplicationModal({
  isOpen,
  onClose,
  propertyName,
  id
}: ApplicationModalProps) {
  const {handleInterest, interestMutation} = useShowInterest()
  const [code, setCode] = useState("+1")
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    reason: "",
    moveInDate: "",
  });
  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object().shape({
      email: Yup.string().required("email is required").email("must be a valid email"),
      firstName: Yup.string().required("firstname is required"),
      lastName: Yup.string().required("lastname is required"),
      reason: Yup.string().required("reason is required"),
phone: Yup.string()
  .required("Phone number is required")
  .matches(
    /^[0-9]{10,15}$/,
    "Phone number must be between 10 and 15 digits"
  )
,
       moveInDate : Yup.date().required("date is required"),
    }),
      onSubmit : async(values)=> {
        handleInterest({
          ...values,
          phone : code + formik.values.phone,
          id 
    })
    }
  })

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   formik.handleSubmit()


  };

  useEffect(() => {
    if (interestMutation.isSuccess) {
    formik.resetForm()
  }
},[interestMutation.isSuccess])

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

      {/* Modal Content */}
      <div
        className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#00000066] hover:text-black transition-colors z-10"
          aria-label="Close modal"
        >
          <MdClose className="text-2xl" />
        </button>

        {/* Modal Header */}
        <div className="p-8 sm:p-10 pb-6 border-b-[1px] border-[#0000000A]">
          <h2 className="text-black font-semibold text-2xl sm:text-3xl mb-2">
            Apply for Property
          </h2>
          {propertyName && (
            <p className="text-[#00000066] font-[400] text-sm sm:text-base">
              {propertyName}
            </p>
          )}
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-black font-[400] text-sm mb-2"
            >
              Email
            </label>
            <TextField
              type="email"
              id="email"
              name="email"
              required
                onBlur={formik.handleBlur}
               error={formik.errors.email}
              touched = {formik.touched.email}
              value={formik.values.email}
                onChange={formik.handleChange}
              className="w-full bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Name Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-black font-[400] text-sm mb-2"
              >
                First Name
              </label>
              <TextField
                type="text"
                id="firstName"
                name="firstName"
                required
                       onBlur={formik.handleBlur}
               error={formik.errors.firstName}
              touched = {formik.touched.firstName}
              value={formik.values.firstName}
                onChange={formik.handleChange}
              
                className="w-full bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl transition-all"
                placeholder="John"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-black font-[400] text-sm mb-2"
              >
                Last Name
              </label>
              <TextField
                type="text"
                id="lastName"
                name="lastName"
                required
                       onBlur={formik.handleBlur}
        error={formik.errors.lastName}
              touched = {formik.touched.lastName}
              value={formik.values.lastName}
                 onChange={formik.handleChange}
                className="w-full bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl transition-all"
                placeholder="Doe"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-black font-[400] text-sm mb-2"
            >
              Phone Number
            </label>
            <div className="flex items-center">
              <select className="text-black" onChange={(e)=> setCode(e.target.value)}>
                <option value = {"+1"}>+1</option>
                     <option value = {"+234"}>+234</option>
              </select>
    <TextField
              type="tel"
              id="phone"
              name="phone"
              required
              parentClassName = {"flex-1"}
                     onBlur={formik.handleBlur}
              error={formik.errors.phone}
              touched = {formik.touched.phone}
              value={formik.values.phone}
             onChange={formik.handleChange}
              className="w-full flex-1 bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl transition-all"
              placeholder="+1 (555) 123-4567"
            />
            </div>
        
          </div>

          {/* Reason for Interest */}
          <div>
            <label
              htmlFor="reasonForInterest"
              className="block text-black font-[400] text-sm mb-2"
            >
              Reason for Interest
            </label>
            <textarea
              id="reason"
              name="reason"
              required
          onBlur={formik.handleBlur}
           
              value={formik.values.reason}
          onChange={formik.handleChange}
              rows={4}
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-xl py-3 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-10 transition-all resize-none"
              placeholder="Tell us why you're interested in this property..."
            />

             {formik.touched.reason && formik.errors.reason && (
          <div className="text-red-500 text-xs mt-1">{formik.errors.reason}</div>
        )}
          </div>

          {/* Move-in Date */}
          <div>
            <label
              htmlFor="moveInDate"
              className="block text-black font-[400] text-sm mb-2"
            >
              When would you like to move in?
            </label>
            <TextField
              type="date"
              id="moveInDate"
              name="moveInDate"
              required
              onBlur={formik.handleBlur}
              error={formik.errors.moveInDate}
              touched={formik.touched.moveInDate}
              value={formik.values.moveInDate}
               onChange={formik.handleChange}
              className="w-full bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-xl py-3 px-4 text-sm text-black font-[400] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-10 transition-all"
              placeholder={""} />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold text-base py-4 px-6 rounded-xl hover:bg-[#333] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Submit Application
            </button>
            <p className="text-center text-[#00000066] font-[400] text-xs mt-4">
              Application is free and takes only a few minutes
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

