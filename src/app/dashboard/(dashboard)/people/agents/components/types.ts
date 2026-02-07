export const AVAILABILITY_OPTIONS = ["available", "busy", "unavailable"] as const;
export const STATUS_OPTIONS = ["active", "inactive"] as const;
export const SPECIALIZATION_OPTIONS = [
  "Residential",
  "Commercial",
  "Property Management",
  "Leasing",
  "Sales",
  "Investment",
] as const;

export type Availability = (typeof AVAILABILITY_OPTIONS)[number];
export type AgentStatus = (typeof STATUS_OPTIONS)[number];

export interface AgentFormValues {
  name: string;
  email: string;
  phone: string;
  availability: Availability;
  specialization: string[];
  company: string;
  address: string;
}

export interface AgentFormValuesWithStatus extends AgentFormValues {
  status: AgentStatus;
}

export interface AgentRecord extends AgentFormValuesWithStatus {
  id: string;
  rating: number;
  totalJobs: number;
  createdAt: string;
  updatedAt: string;
}
