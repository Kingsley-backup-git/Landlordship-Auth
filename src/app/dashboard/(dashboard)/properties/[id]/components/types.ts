export type TabType =
  | "applications"
  | "property-info"
  | "tenant-info"
  | "legal-compliance"
  | "rent-history";

export interface PropertyData {
  propertyName: string;
  propertyType: string;
  squareFeet: number;
  bedrooms: number;
  bathrooms: number;
  parkingSpaces: number;
  description: string;
  keyFeatures: string[];
  applicationLink: string;
}

export interface TenantData {
  primaryTenant: string;
  email: string;
  phoneNumber: string;
  monthlyRent: number;
  leaseStatus: string;
  moveInDate: string;
  leaseStartDate: string;
  leaseEndDate: string;
  emergencyContact: {
    name: string;
    phoneNumber: string;
    relationship: string;
  };
}

export interface Application {
  id: string;
  applicant: string;
  appliedDate: string;
  moveInDate: string;
  status: string;
  referenceCheck: string;
  creditCheck: string;
}

export interface ComplianceData {
  gasSafetyCertificateDate: string;
  epcRating: string;
  epcExpiryDate: string;
  electricalSafetyDate: string;
}

export interface LegalDocument {
  documentName: string;
  type: string;
  uploadDate: string;
  expiryDate: string;
}

export interface RentHistoryItem {
  date: string;
  amount: number;
  status: string;
  method: string;
  reference: string;
}

export interface DocumentFormData {
  documentName: string;
  type: string;
  expiryDate: string;
  file: File | null;
}


