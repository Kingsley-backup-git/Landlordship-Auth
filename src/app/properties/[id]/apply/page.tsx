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
import { useQuery } from "@tanstack/react-query";
import { PropertyService } from "@/services/property";
import useApplyProperty from "@/hooks/property/useApply";

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
  proofOfIdFile: File[] | null;
  proofOfAddressFile: File[] | null;
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

  monthlyRent: string;
  numberOfTenants: string;
  coTenantsNames: string;
  hasPets: null;
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
  // consentToCreditReferenceChecks: boolean;
  consentToContactEmployerLandlord: boolean;
  declareInformationAccurate: boolean;
  agreeToDataProtection: boolean;
  digitalSignature: string;

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
  const { ApplyPropertyMutation, doApply } = useApplyProperty();
  const { data, isSuccess, isPending, isError } = useQuery({
    queryKey: ["foreachProperty", id],
    queryFn: async () => {
      return await new PropertyService().getEachProperties(id);
    },
  });
 
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
        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
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
    reasonForLeaving: Yup.string().required("Field is required"),
    // Step 2
    proofOfIdType: Yup.string()
      .oneOf([
        "passport",
        "driverlicense",
        "nationalIdCard",
        "biometricResidencePermit",
      ])
      .required("Proof of ID type is required"),
    idNumber: Yup.string().required("ID number is required"),
    visaResidencyStatus: Yup.string()
      .required("Visa/Residency status is required")
      .oneOf(["ukCitizen", "eu", "visaHolder", "other"]),
    proofOfIdFile: Yup.mixed()
      .required("Proof of ID is required")
      .test(
        "file",
        "Proof of ID is required",
        (value) => value !== null && value !== undefined,
      ),
    proofOfAddressFile: Yup.mixed()
      .required("Proof of address is required")
      .test(
        "file",
        "Proof of address is required",
        (value) => value !== null && value !== undefined,
      ),
    consentToRightToRent: Yup.boolean().oneOf([true], "Consent is required"),

    // Step 3
    employmentStatus: Yup.string()
      .oneOf([
        "self_employed",
        "employed_fulltime",
        "employed_partime",
        "student",
        "unemployed",
        "retired",
      ])
      .required("Employment status is required"),
    jobTitle: Yup.string().required("Job title is required"),
    monthlyIncomeNet: Yup.string()
      .required("Monthly income is required")
      .matches(/^\d+$/, "Numbers only"),
    annualIncomeGross: Yup.string()
      .required("Annual income is required")
      .matches(/^\d+$/, "Numbers only"),
    lengthOfEmploymentYears: Yup.string()
      .required("Required")
      .matches(/^\d+$/, "Numbers only"),
    lengthOfEmploymentMonths: Yup.string()
      .required("Required")
      .matches(/^\d+$/, "Numbers only"),
    payslipsFiles: Yup.array().min(1, "Upload atleast 1 file"),
    bankStatementsFiles: Yup.array().min(1, "Upload atleast 1 file"),
    // Step 4
    desiredMoveInDate: Yup.string().required(
      "Desired move-in date is required",
    ),
    preferredTenancyLength: Yup.string().required(
      "Preferred tenancy length is required",
    ),

    numberOfTenants: Yup.string()
      .matches(/^\d+$/, "Numbers only")
      .required("Number of tenants is required"),

    coTenantsNames: Yup.string().when("numberOfTenants", {
      is: (val: string) => Number(val) > 1,
      then: (schema) => schema.required("Co-tenants names are required"),
      otherwise: (schema) => schema.notRequired(),
    }),

    hasPets: Yup.string().required("Required").oneOf(["yes", "no"]),
    smokes: Yup.string().required("Required").oneOf(["yes", "no"]),
    // Step 5
    hasCCJs: Yup.string().required("Please answer"),
    declaredBankrupt: Yup.string().required("Please answer"),
    receivingHousingBenefits: Yup.string().required("Please answer"),
    consentToCreditCheck: Yup.string().required("Please answer"),

    // Step 8
    consentToCreditReferenceChecks: Yup.boolean().oneOf(
      [true],
      "Consent is required",
    ),
    additionalProofOfIncomeFiles: Yup.array().min(1, "Upload atleast 1 file"),
    consentToContactEmployerLandlord: Yup.boolean().oneOf(
      [true],
      "Consent is required",
    ),
    declareInformationAccurate: Yup.boolean().oneOf(
      [true],
      "Declaration is required",
    ),
    agreeToDataProtection: Yup.boolean().oneOf([true], "Agreement is required"),
    digitalSignature: Yup.string().required("Digital signature is required"),
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
      // accountantName: "",
      // accountantEmail: "",
      // accountantPhone: "",
      desiredMoveInDate: "",
      preferredTenancyLength: "",
      propertyAddress: "",
      monthlyRent: "",
      numberOfTenants: "",
      coTenantsNames: "",
      hasPets: null,
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
      needsGuarantor: null,
      // consentToCreditReferenceChecks: false,
      consentToContactEmployerLandlord: false,
      declareInformationAccurate: false,
      agreeToDataProtection: false,
      digitalSignature: "",

      ...loadSavedData(),
    },
    validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();

      formData.append("firstName", formik.values.firstName);
      formData.append("lastName", formik.values.lastName);

      if (formik.values.middleName !== "") {
        formData.append("middleName", formik.values.middleName);
      }
      formData.append("dob", formik.values.dateOfBirth);
      formData.append("country", formik.values.nationality);
      formData.append(
        "nationalInsuranceNumber",
        formik.values.nationalInsuranceNumber,
      );
      formData.append("phone", formik.values.contactNumber);
      formData.append("email", formik.values.emailAddress);
      formData.append("address", formik.values.currentAddress);
      formData.append("postalcode", formik.values.postCode);
      formData.append("reasonforleaving", formik.values.reasonForLeaving);
      if (
        formik.values.previousAddress !== "" ||
        formik.values.previousAddress !== null ||
        formik.values.previousAddress !== undefined
      ) {
        formData.append("previousAddress", formik.values.previousAddress);
      }

      formData.append("idType", formik.values.proofOfIdType);
      formData.append("idNumber", formik.values.idNumber);
      formData.append("residencyStatus", formik.values.visaResidencyStatus);
      if (
        formik.values.shareCode !== "" ||
        formik.values.shareCode !== null ||
        formik.values.shareCode !== undefined
      ) {
        formData.append("shareCode", formik.values.shareCode);
      }
      formik.values.proofOfIdFile?.forEach((file) => {
        formData.append("idDoc", file);
      });

      formik.values.proofOfAddressFile?.forEach((file) => {
        formData.append("addressDoc", file);
      });

      formData.append("consent_to_rent", formik.values.consentToRightToRent.toString());

      formData.append("employmentStatus", formik.values.employmentStatus);
      formData.append("jobTitle", formik.values.jobTitle);
      if (formik.values.employerName !== "") {
        formData.append("employer_name", formik.values.employerName);
      }
      if (formik.values.employerAddress !== "") {
        formData.append("employer_address", formik.values.employerAddress);
      }
      formData.append(
        "length_of_employment_year",
        formik.values.lengthOfEmploymentYears,
      );
      formData.append(
        "length_of_employment_month",
        formik.values.lengthOfEmploymentMonths,
      );
      formData.append("monthly_income", formik.values.monthlyIncomeNet);
      formData.append("annual_income", formik.values.annualIncomeGross);
      formik.values.payslipsFiles.forEach((file) => {
        formData.append("recent_payment_slip", file);
      });

      formik.values.bankStatementsFiles.forEach((file) => {
        formData.append("recent_bank_statement", file);
      });
      formData.append("move_in_date", formik.values.desiredMoveInDate);
      formData.append(
        "preferred_tenancy_length",
        formik.values.preferredTenancyLength,
      );
      formData.append("number_of_tenant", formik.values.numberOfTenants);
      if (formik.values.coTenantsNames !== "") {
        formData.append("names_of_coTenants", formik.values.coTenantsNames);
      }
      if (formik.values.hasPets !== null) {
        formData.append("pets", formik.values.hasPets);
      }

      formData.append("smoke", formik.values.smokes);
      formData.append("require_parking", formik.values.requiresParking);
      if (formik.values.specialRequests! == "") {
        formData.append("special_request", formik.values.specialRequests);
      }

      formData.append("ccjs", formik.values.hasCCJs);
      formData.append("bankrupt", formik.values.declaredBankrupt);
      formData.append(
        "housing_benefit",
        formik.values.receivingHousingBenefits,
      );
      formData.append(
        "consent_credit_check",
        formik.values.consentToCreditCheck,
      );
      if (formik.values.additionalProofOfIncomeFiles.length > 0) {
        formik.values.additionalProofOfIncomeFiles.forEach((file) => {
          formData.append("proof_of_income", file);
        });
      }
      if (
        formik.values.currentLandlordName !== "" &&

        formik.values.currentLandlordName !== null &&

        formik.values.currentLandlordName !== undefined
      ) {
        formData.append(
          "recent_landlord_name",
          formik.values.currentLandlordName,
        );
      }
      if (
        formik.values.currentLandlordContact !== ""&&

        formik.values.currentLandlordContact !== null &&

        formik.values.currentLandlordContact !== undefined
      ) {
        formData.append(
          "recent_landlord_email",
          formik.values.currentLandlordContact,
        );
      }

      if (
        formik.values.currentLandlordDuration !== "" &&

        formik.values.currentLandlordDuration !== null &&

        formik.values.currentLandlordDuration !== undefined
      ) {
        formData.append(
          "recent_landlord_duration_of_tenancy",
          formik.values.currentLandlordDuration,
        );
      }
      if (
        formik.values.currentLandlordRentAmount !== "" &&

        formik.values.currentLandlordRentAmount !== null &&

        formik.values.currentLandlordRentAmount !== undefined
      ) {
        formData.append(
          "recent_landlord_rent_paid",
          formik.values.currentLandlordRentAmount,
        );
      }
      if (
        formik.values.personalReferenceName !== "" &&

        formik.values.personalReferenceName !== null &&

        formik.values.personalReferenceName !== undefined
      ) {
        formData.append("reference_name", formik.values.personalReferenceName);
      }
      if (
        formik.values.personalReferenceRelationship !== "" &&

        formik.values.personalReferenceRelationship !== null &&

        formik.values.personalReferenceRelationship !== undefined
      ) {
        formData.append(
          "reference_relationship",
          formik.values.personalReferenceRelationship,
        );
      }
      if (
        formik.values.personalReferenceContact !== "" &&

        formik.values.personalReferenceContact !== null &&

        formik.values.personalReferenceContact !== undefined
      ) {
        formData.append(
          "reference_email",
          formik.values.personalReferenceContact,
        );
      }
      if (
        formik.values.personalReferenceYearsKnown !== "" &&

        formik.values.personalReferenceYearsKnown !== null &&

        formik.values.personalReferenceYearsKnown !== undefined
      ) {
        formData.append(
          "reference_years_known",
          formik.values.personalReferenceYearsKnown,
        );
      }

      formData.append("guarantor", formik.values.needsGuarantor);

      formData.append(
        "consent_contact_landlord",
        formik.values.consentToContactEmployerLandlord.toString(),
      );

      formData.append(
        "all_info_is_true",
        formik.values.declareInformationAccurate.toString(),
      );

      formData.append("agree_to_policy", formik.values.agreeToDataProtection.toString());

      formData.append("signature", formik.values.digitalSignature);
      if (id !== "" || id !== null || id !== undefined) {
         formData.append("propertyId", data?.Properties?._id);
      }
     
  
      await doApply(formData);
      if (id !== "" || id !== null || id !== undefined) {
          localStorage.removeItem(`rental_application_${id}`);
      }
    
    },
  });
  
  useEffect(() => {
    if (ApplyPropertyMutation.isSuccess) {
      formik.resetForm()
      localStorage.removeItem(`rental_application_${id}`);
  }
},[ApplyPropertyMutation.isSuccess, id, formik])
  // Autosave functionality
  useEffect(() => {
    const autosaveTimer = setTimeout(() => {
      if (typeof window !== "undefined") {
        setIsSaving(true);
        const dataToSave = { ...formik.values };
        // Remove File objects for localStorage (they can't be serialized)
        Object.keys(dataToSave).forEach((key) => {
          const value = dataToSave[key as keyof ApplicationFormValues];
          if (
            value instanceof File ||
            (Array.isArray(value) && value[0] instanceof File)
          ) {
            delete dataToSave[key as keyof ApplicationFormValues];
          }
        });
        localStorage.setItem(
          `rental_application_${id}`,
          JSON.stringify(dataToSave),
        );
        setTimeout(() => setIsSaving(false), 1000);
      }
    }, 2000);

    return () => clearTimeout(autosaveTimer);
  }, [formik.values, id]);

  // Show loading state
  if (isPending) {
    return (
      <div className="min-h-screen bg-[#F9F9FA] flex items-center justify-center py-4 sm:py-8 px-4 sm:px-6">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-[#00000066] font-[400] text-sm sm:text-base">Loading property details...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (isError || !id) {
    return (
      <div className="min-h-screen bg-[#F9F9FA] flex items-center justify-center py-4 sm:py-8 px-4 sm:px-6">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-xl sm:text-2xl font-semibold text-black mb-2">Property Not Found</h2>
          <p className="text-[#00000066] font-[400] text-sm sm:text-base mb-6">
            We couldn&apos;t find the property you&apos;re looking for. It may have been removed or the link is invalid.
          </p>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-colors text-sm sm:text-base font-[400]"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
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
        "reasonForLeaving",
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
      4: ["desiredMoveInDate", "preferredTenancyLength", "numberOfTenants"],
      5: [
        "hasCCJs",
        "declaredBankrupt",
        "receivingHousingBenefits",
        "consentToCreditCheck",
      ],
      8: [
        // "consentToCreditReferenceChecks",
        "consentToContactEmployerLandlord",
        "declareInformationAccurate",
        "agreeToDataProtection",
        "digitalSignature",
      ],
    };

    const fieldsToValidate = stepFields[currentStep] || [];
    if (fieldsToValidate.length > 0) {
      await formik.validateForm();

      const hasErrors = fieldsToValidate.some(
        (field) => formik.errors[field]
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
    await handleNext();
  };
  console.log(formik.errors);
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne formik={formik} />;
      case 2:
        return <StepTwo formik={formik} />;
      case 3:
        return <StepThree formik={formik} />;
      case 4:
        return <StepFour formik={formik} data={data} />;
      case 5:
        return <StepFive formik={formik} />;
      case 6:
        return <StepSix formik={formik} />;
      case 7:
        return <StepSeven formik={formik} />;
      case 8:
        return <StepEight formik={formik}  />;
      case 9:
        return (
          <StepNine
            formik={formik}
            onSubmit={formik.handleSubmit}
            propertyAddress={data?.Properties?.address}
            ApplyPropertyMutation={ApplyPropertyMutation}
          />
        );
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
            <h1 className="text-2xl sm:text-3xl font-semibold text-black">
              Rental Application
              <p className="text-base ">
                {data?.Properties?.propertyName &&
                  data?.Properties?.propertyName}
              </p>
              <p className="text-xs ">
                {data?.Properties?.address && data?.Properties?.address}
              </p>
            </h1>

            {isSaving && (
              <span className="text-sm text-black/70 font-[400]">
                Saving...
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map(
              (step) => (
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
              ),
            )}
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
