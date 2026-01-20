export type TabType = "overview" | "personal" | "lease" | "payment-history";

export interface TenantData {
  name: string;
  dateJoined: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  occupation: string;
  employer: string;
  monthlyIncome: number;
  leaseStatus: string;
  propertyName: string;
  propertyAddress: string;
  leaseStartDate: string;
  leaseEndDate: string;
  leaseTerm: string;
  monthlyRent: number;
  paymentDueDay: string;
  securityDeposit: number;
  rentReview: string;
  breakClause: string;
  lateFee: string;
  specialTerms: string;
  additionalNotes: string;
  emergencyContact: {
    name: string;
    phoneNumber: string;
    relationship: string;
  };
  paymentHistory: Array<{
    month: string;
    amount: number;
    status: string;
    date: string;
  }>;
}

export interface LeaseData {
  leaseStatus: string;
  securityDeposit: number;
  rentReview: string;
  breakClause: string;
  leaseStartDate: string;
  leaseEndDate: string;
  leaseTerm: string;
  monthlyRent: number;
  paymentDueDay: string;
  lateFee: string;
  specialTerms: string;
}

export interface PersonalData {
  name: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  occupation: string;
  employer: string;
  monthlyIncome: number;
  additionalNotes: string;
  emergencyContact: {
    name: string;
    phoneNumber: string;
    relationship: string;
  };
}

export interface PaymentHistoryItem {
  date: string;
  period: string;
  amount: number;
  method: string;
  status: string;
  reference: string;
}





