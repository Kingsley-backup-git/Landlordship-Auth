export type TabType =
  "interest" 
  | "applications"
  | "property-info"
  | "tenant-info"
  | "legal-compliance"
  | "rent-history";

export interface PropertyData {
  Properties: {
    _id: string,
      propertyName: string;
  propertyType: string;
  square_feet: number;
  bedrooms: number;
  bathrooms: number;
  parkingspaces: number;
  property_description: string;
  additional_features: string[];
    applicationLink: string;
  
  }

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
  _id: string;
  firstName: string;
   lastName: string;
  createdAt: string;
  move_in_date: string;
  dob: string | Date;
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





