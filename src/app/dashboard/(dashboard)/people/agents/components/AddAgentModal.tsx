"use client";

import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoCloseSharp } from "react-icons/io5";
import { LuChevronsUpDown } from "react-icons/lu";
import Button from "@/app/components/ui/Button";
import {
  AgentFormValues,
  AVAILABILITY_OPTIONS,
  SPECIALIZATION_OPTIONS,
} from "./types";
import useAddAgent from "@/hooks/agent/useAddAgent";

const agentValidationSchema = Yup.object().shape({
  name: Yup.string().trim().required("Name is required"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  phone: Yup.string()
    .trim()
    .required("Phone is required")
    .matches(
      /^[+]?[\d\s\-()]{10,}$/,
      "Enter a valid phone number (e.g. +1 555 123 4567)"
    ),
  availability: Yup.string()
    .oneOf([...AVAILABILITY_OPTIONS], "Select availability")
    .required("Availability is required"),
  specialization: Yup.array()
    .of(Yup.string())
    .min(1, "Select at least one specialization")
    .required("Select at least one specialization"),
  company: Yup.string().trim().required("Company is required"),
  address: Yup.string().trim().required("Address is required"),
});

const initialValues: AgentFormValues = {
  name: "",
  email: "",
  phone: "",
  availability: "available",
  specialization: [],
  company: "",
  address: "",
};

interface AddAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
  addHandler?: (values: AgentFormValues) => void;
}

function Field({
  label,
  error,
  touched,
  children,
}: {
  label: string;
  error?: string;
  touched?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-[#00000066] text-xs font-normal block mb-2">
        {label}
      </label>
      {children}
      {error && touched && (
        <div className="text-red-500 text-xs mt-1">{error}</div>
      )}
    </div>
  );
}

export default function AddAgentModal({
  isOpen,
  onClose,

}: AddAgentModalProps) {

const {AddAgentHandler, addAgentMutation} = useAddAgent()
  const handleAddAgent = (values: AgentFormValues) => {
   AddAgentHandler(values)
  };

  const formik = useFormik<AgentFormValues>({
    initialValues,
    validationSchema: agentValidationSchema,
    onSubmit: (values) => {
handleAddAgent(values)
     
    },
  });
  useEffect(() => {
   formik.resetForm();
      onClose();
}, [addAgentMutation.isSuccess])
  const toggleSpecialization = (opt: string) => {
    const current = formik.values.specialization;
    const next = current.includes(opt)
      ? current.filter((s) => s !== opt)
      : [...current, opt];
    formik.setFieldValue("specialization", next);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-[99] bg-white/10 backdrop-blur-[1px]">
      <div className="max-w-[520px] w-full max-h-[80vh] overflow-y-auto bg-white rounded-2xl shadow-lg mx-4 border-[.5px] border-[#0000001A]">
        <div className="p-6 sticky top-0 bg-white border-b border-[#0000000A]">
          <div className="flex items-center justify-between">
            <h1 className="text-black font-semibold text-lg">Add Agent</h1>
            <button
              type="button"
              onClick={onClose}
              className="bg-[#0000000A] cursor-pointer text-black text-xl p-2 rounded-lg hover:bg-[#0000001A] transition-colors"
              aria-label="Close"
            >
              <IoCloseSharp />
            </button>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit} className="p-6 space-y-5">
          <Field
            label="Name"
            error={formik.errors.name}
            touched={formik.touched.name}
          >
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Agent full name"
              className="w-full bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-xl py-3 px-4 text-sm text-black placeholder:text-[#00000033] outline-none focus:ring-2 focus:ring-[#1C1C1C20]"
            />
          </Field>

          <Field
            label="Email"
            error={formik.errors.email}
            touched={formik.touched.email}
          >
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="agent@example.com"
              className="w-full bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-xl py-3 px-4 text-sm text-black placeholder:text-[#00000033] outline-none focus:ring-2 focus:ring-[#1C1C1C20]"
            />
          </Field>

          <Field
            label="Phone"
            error={formik.errors.phone}
            touched={formik.touched.phone}
          >
            <input
              type="tel"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="+1 555 123 4567"
              className="w-full bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-xl py-3 px-4 text-sm text-black placeholder:text-[#00000033] outline-none focus:ring-2 focus:ring-[#1C1C1C20]"
            />
          </Field>

          <Field
            label="Availability"
            error={formik.errors.availability}
            touched={formik.touched.availability}
          >
            <div className="relative">
              <select
                name="availability"
                value={formik.values.availability}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full appearance-none bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-xl py-3 px-4 text-sm text-black outline-none focus:ring-2 focus:ring-[#1C1C1C20]"
              >
                {AVAILABILITY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt.charAt(0).toUpperCase() + opt.slice(1)}
                  </option>
                ))}
              </select>
              <LuChevronsUpDown className="absolute pointer-events-none top-1/2 -translate-y-1/2 right-4 text-[#00000066]" />
            </div>
          </Field>

          <Field
            label="Specialization (select at least one)"
            error={formik.errors.specialization as string}
            touched={formik.touched.specialization}
          >
            <div className="flex flex-wrap gap-2 p-3 bg-[#F9F9FA] border-[.5px] border-[#0000001A] rounded-xl">
              {SPECIALIZATION_OPTIONS.map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-2 cursor-pointer text-sm text-black"
                >
                  <input
                    type="checkbox"
                    checked={formik.values.specialization.includes(opt)}
                    onChange={() => toggleSpecialization(opt)}
                    onBlur={() => formik.setFieldTouched("specialization", true)}
                    className="rounded border-[#0000001A] text-[#1D3639] focus:ring-[#1D3639]"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </Field>

          <Field
            label="Company"
            error={formik.errors.company}
            touched={formik.touched.company}
          >
            <input
              type="text"
              name="company"
              value={formik.values.company}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Company name"
              className="w-full bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-xl py-3 px-4 text-sm text-black placeholder:text-[#00000033] outline-none focus:ring-2 focus:ring-[#1C1C1C20]"
            />
          </Field>

          <Field
            label="Address"
            error={formik.errors.address}
            touched={formik.touched.address}
          >
            <input
              type="text"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Full address"
              className="w-full bg-[#FFFFFFCC] border-[.5px] border-[#0000001A] rounded-xl py-3 px-4 text-sm text-black placeholder:text-[#00000033] outline-none focus:ring-2 focus:ring-[#1C1C1C20]"
            />
          </Field>

          <div className="flex justify-end gap-3 pt-2">
            <Button
              type="button"
              onClick={onClose}
              classname="bg-transparent border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-xl py-2.5 px-4 hover:bg-[#F9F9FA] transition-colors"
              text="Cancel"
            />
            <Button
              type="submit"
              disabled={addAgentMutation.isPending}
              classname="bg-[#1D3639] text-white text-sm font-[400] rounded-xl py-2.5 px-4 hover:bg-[#1D3639]/90 transition-colors disabled:opacity-70"
              text="Add Agent"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
