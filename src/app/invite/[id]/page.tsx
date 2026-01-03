"use client";

import { use } from "react";
import React, { useState, useEffect, useCallback } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/app/components/ui/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { PiCheckCircle } from "react-icons/pi";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepFive from "./components/StepFive";
import StepSix from "./components/StepSix";
import StepSeven from "./components/StepSeven";
import StepEight from "./components/StepEight";
import StepNine from "./components/StepNine";
import { notFound } from "next/navigation";

export interface ApplicationFormValues {
  // Step 1 - Personal Information
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  nationalInsuranceNumber: string;
  contactNumber: string;
  emailAddress: string;
  currentAddress: string;
  postCode: string;
  timeAtCurrentAddress: string;
  reasonForLeaving: string;
  previousAddress: string;

  // Step 2 - Identification
  proofOfIdType: string;
  idNumber: string;
  visaResidencyStatus: string;
  shareCode: string;
  proofOfIdFile: File | null;
  proofOfAddressFile: File | null;
  consentToRightToRent: boolean;

  // Step 3 - Employment
  employmentStatus: string;
  jobTitle: string;
  employerName: string;
  employerAddress: string;
  employerContact: string;
  lengthOfEmploymentYears: string;
  lengthOfEmploymentMonths: string;
  monthlyIncomeNet: string;
  annualIncomeGross: string;
  payslipsFiles: File[];
  bankStatementsFiles: File[];
  accountantName: string;
  accountantEmail: string;
  accountantPhone: string;

  // Step 4 - Tenancy Details
  desiredMoveInDate: string;
  preferredTenancyLength: string;
  propertyAddress: string;
  monthlyRent: string;
  numberOfTenants: string;
  coTenantsNames: string;
  hasPets: string;
  smokes: string;
  requiresParking: string;
  specialRequests: string;

  // Step 5 - Financial Background
  hasCCJs: string;
  declaredBankrupt: string;
  receivingHousingBenefits: string;
  consentToCreditCheck: string;
  additionalProofOfIncomeFiles: File[];

  // Step 6 - References
  currentLandlordName: string;
  currentLandlordContact: string;
  currentLandlordDuration: string;
  currentLandlordRentAmount: string;
  previousLandlordName: string;
  previousLandlordContact: string;
  personalReferenceName: string;
  personalReferenceRelationship: string;
  personalReferenceContact: string;
  personalReferenceYearsKnown: string;

  // Step 7 - Guarantor
  needsGuarantor: string;

  // Step 8 - Declarations
  consentToCreditReferenceChecks: boolean;
  consentToContactEmployerLandlord: boolean;
  declareInformationAccurate: boolean;
  agreeToDataProtection: boolean;
  digitalSignature: string;
  signatureDate: string;

  // Step 9 - Review (no new fields)
}

const TOTAL_STEPS = 9;

export default function RentalApplicationForm({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSaving, setIsSaving] = useState(false);
  if(!id) {
    notFound()
   }
  // Load saved data from localStorage
  const loadSavedData = useCallback(() => {
    if (typeof window !== "undefined") {
     
      const saved = localStorage.getItem(`rental_application_${id}`);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return {};
        }
      }
    }
    return {};
  }, [id]);

  // Validation schema
  const validationSchema = Yup.object().shape({
    // Step 1
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    dateOfBirth: Yup.string()
      .required("Date of birth is required")
      .test("age", "Must be 18 years or older", function (value) {
        if (!value) return false;
        const birthDate = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          return age - 1 >= 18;
        }
        return age >= 18;
      }),
    nationality: Yup.string().required("Nationality is required"),
    contactNumber: Yup.string().required("Contact number is required"),
    emailAddress: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),
    currentAddress: Yup.string().required("Current address is required"),
    postCode: Yup.string().required("Post code is required"),

    // Step 2
    proofOfIdType: Yup.string().required("Proof of ID type is required"),
    idNumber: Yup.string().required("ID number is required"),
    visaResidencyStatus: Yup.string().required("Visa/Residency status is required"),
    proofOfIdFile: Yup.mixed()
      .required("Proof of ID is required")
      .test("file", "Proof of ID is required", (value) => value !== null && value !== undefined),
    proofOfAddressFile: Yup.mixed()
      .required("Proof of address is required")
      .test("file", "Proof of address is required", (value) => value !== null && value !== undefined),
    consentToRightToRent: Yup.boolean().oneOf([true], "Consent is required"),

    // Step 3
    employmentStatus: Yup.string().required("Employment status is required"),
    monthlyIncomeNet: Yup.string().required("Monthly income is required"),

    // Step 4
    desiredMoveInDate: Yup.string().required("Desired move-in date is required"),
    preferredTenancyLength: Yup.string().required("Preferred tenancy length is required"),
    propertyAddress: Yup.string().required("Property address is required"),
    numberOfTenants: Yup.string().required("Number of tenants is required"),

    // Step 5
    hasCCJs: Yup.string().required("Please answer"),
    declaredBankrupt: Yup.string().required("Please answer"),
    receivingHousingBenefits: Yup.string().required("Please answer"),
    consentToCreditCheck: Yup.string().required("Please answer"),

    // Step 8
    consentToCreditReferenceChecks: Yup.boolean().oneOf([true], "Consent is required"),
    consentToContactEmployerLandlord: Yup.boolean().oneOf([true], "Consent is required"),
    declareInformationAccurate: Yup.boolean().oneOf([true], "Declaration is required"),
    agreeToDataProtection: Yup.boolean().oneOf([true], "Agreement is required"),
    digitalSignature: Yup.string().required("Digital signature is required"),
    signatureDate: Yup.string().required("Signature date is required"),
  });

  const formik = useFormik<ApplicationFormValues>({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      dateOfBirth: "",
      nationality: "",
      nationalInsuranceNumber: "",
      contactNumber: "",
      emailAddress: "",
      currentAddress: "",
      postCode: "",
      timeAtCurrentAddress: "",
      reasonForLeaving: "",
      previousAddress: "",
      proofOfIdType: "",
      idNumber: "",
      visaResidencyStatus: "",
      shareCode: "",
      proofOfIdFile: null,
      proofOfAddressFile: null,
      consentToRightToRent: false,
      employmentStatus: "",
      jobTitle: "",
      employerName: "",
      employerAddress: "",
      employerContact: "",
      lengthOfEmploymentYears: "",
      lengthOfEmploymentMonths: "",
      monthlyIncomeNet: "",
      annualIncomeGross: "",
      payslipsFiles: [],
      bankStatementsFiles: [],
      accountantName: "",
      accountantEmail: "",
      accountantPhone: "",
      desiredMoveInDate: "",
      preferredTenancyLength: "",
      propertyAddress: "",
      monthlyRent: "",
      numberOfTenants: "",
      coTenantsNames: "",
      hasPets: "",
      smokes: "",
      requiresParking: "",
      specialRequests: "",
      hasCCJs: "",
      declaredBankrupt: "",
      receivingHousingBenefits: "",
      consentToCreditCheck: "",
      additionalProofOfIncomeFiles: [],
      currentLandlordName: "",
      currentLandlordContact: "",
      currentLandlordDuration: "",
      currentLandlordRentAmount: "",
      previousLandlordName: "",
      previousLandlordContact: "",
      personalReferenceName: "",
      personalReferenceRelationship: "",
      personalReferenceContact: "",
      personalReferenceYearsKnown: "",
      needsGuarantor: "",
      consentToCreditReferenceChecks: false,
      consentToContactEmployerLandlord: false,
      declareInformationAccurate: false,
      agreeToDataProtection: false,
      digitalSignature: "",
      signatureDate: "",
      ...loadSavedData(),
    },
    validationSchema,
    onSubmit: async (values) => {
      // TODO: Submit to API
      console.log("Submitting application:", values);
      localStorage.removeItem(`rental_application_${id}`);
    },
  });

  // Autosave functionality
  useEffect(() => {
    const autosaveTimer = setTimeout(() => {
      if (typeof window !== "undefined") {
        setIsSaving(true);
        const dataToSave = { ...formik.values };
        // Remove File objects for localStorage (they can't be serialized)
        Object.keys(dataToSave).forEach((key) => {
          const value = dataToSave[key as keyof ApplicationFormValues];
          if (value instanceof File || (Array.isArray(value) && value[0] instanceof File)) {
            delete dataToSave[key as keyof ApplicationFormValues];
          }
        });
        localStorage.setItem(`rental_application_${id}`, JSON.stringify(dataToSave));
        setTimeout(() => setIsSaving(false), 1000);
      }
    }, 2000);

    return () => clearTimeout(autosaveTimer);
  }, [formik.values, id]);

  const handleNext = async () => {
    // Validate current step before proceeding
    const stepFields: { [key: number]: (keyof ApplicationFormValues)[] } = {
      1: [
        "firstName",
        "lastName",
        "dateOfBirth",
        "nationality",
        "contactNumber",
        "emailAddress",
        "currentAddress",
        "postCode",
      ],
      2: [
        "proofOfIdType",
        "idNumber",
        "visaResidencyStatus",
        "proofOfIdFile",
        "proofOfAddressFile",
        "consentToRightToRent",
      ],
      3: ["employmentStatus", "monthlyIncomeNet"],
      4: [
        "desiredMoveInDate",
        "preferredTenancyLength",
        "propertyAddress",
        "numberOfTenants",
      ],
      5: ["hasCCJs", "declaredBankrupt", "receivingHousingBenefits", "consentToCreditCheck"],
      8: [
        "consentToCreditReferenceChecks",
        "consentToContactEmployerLandlord",
        "declareInformationAccurate",
        "agreeToDataProtection",
        "digitalSignature",
        "signatureDate",
      ],
    };

    const fieldsToValidate = stepFields[currentStep] || [];
    if (fieldsToValidate.length > 0) {
   await formik.validateForm();
     
      const hasErrors = fieldsToValidate.some(
        (field) => formik.errors[field] && formik.touched[field]
      );
      if (hasErrors) {
        // Mark fields as touched
        fieldsToValidate.forEach((field) => {
          formik.setFieldTouched(field, true);
        });
        return;
      }
    }

    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSaveAndContinue = async () => {
   await  handleNext();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne formik={formik} />;
      case 2:
        return <StepTwo formik={formik} />;
      case 3:
        return <StepThree formik={formik} />;
      case 4:
        return <StepFour formik={formik} />;
      case 5:
        return <StepFive formik={formik} />;
      case 6:
        return <StepSix formik={formik} />;
      case 7:
        return <StepSeven formik={formik} />;
      case 8:
        return <StepEight formik={formik} />;
      case 9:
        return <StepNine formik={formik} onSubmit={formik.handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9FA] py-4 sm:py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Progress Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 mb-6 shadow-sm border border-[#0000000A]">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl sm:text-3xl font-semibold text-black">Rental Application</h1>
            {isSaving && (
              <span className="text-sm text-black/70 font-[400]">Saving...</span>
            )}
          </div>
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((step) => (
              <React.Fragment key={step}>
                <div
                  className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-sm sm:text-base font-semibold flex-shrink-0 transition-all ${
                    step < currentStep
                      ? "bg-green-500 text-white"
                      : step === currentStep
                      ? "bg-black text-white ring-2 ring-black/20"
                      : "bg-[#F9F9FA] text-black/50 border border-[#0000001A]"
                  }`}
                >
                  {step < currentStep ? (
                    <PiCheckCircle className="text-lg sm:text-xl" />
                  ) : (
                    step
                  )}
                </div>
                {step < TOTAL_STEPS && (
                  <div
                    className={`flex-1 h-1.5 sm:h-2 rounded transition-all min-w-[20px] ${
                      step < currentStep ? "bg-green-500" : "bg-[#F9F9FA]"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-sm sm:text-base text-black/70 font-[400] mt-6">
            Step {currentStep} of {TOTAL_STEPS}
          </p>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm mb-6 border border-[#0000000A]">
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-[#0000000A]">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`flex items-center gap-x-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-[400] transition-colors ${
              currentStep === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#F9F9FA] text-black border border-[#0000001A] hover:bg-[#F0F0F0]"
            }`}
          >
            <FaChevronLeft />
            <span>Back</span>
          </button>
          <div className="flex gap-x-3">
            {currentStep < TOTAL_STEPS && (
              <>
                <Button
                  type="button"
                  onClick={handleSaveAndContinue}
                  classname="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-[400] bg-[#F9F9FA] text-black border border-[#0000001A] hover:bg-[#F0F0F0] transition-colors"
                  text="Save & Continue"
                />
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-x-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-[400] bg-black text-white hover:bg-black/90 transition-colors"
                >
                  <span>Next</span>
                  <FaChevronRight />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
