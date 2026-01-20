export interface AuthInitialValues {
  userName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}
export interface PropertyFormValues {
  propertyName: string;
  year_built: number | string;
  renovation_year?: number | string ;
  address: string;
  city: string;
  state: string;
  postalcode?: string;
  country: string;
  propertyType:  "apartment"|
      "duplex" |
      "studio" |
      "condominium" |
      "serviced-apartment" |
      "office" |
      "hotel" |
      "warehouse" |
  "townhouse",
  square_feet: number | string,
  bedrooms: number | string,
  bathrooms: number | string,
  parkingspaces: number | string,
  last_appraisal_date : Date | null | string,
  additional_feature?: string[];
    property_images?: File[];
  property_documents: File | null,
  document_name: "Ownership",
  property_value : number | "",
  property_description?: string;
}


export interface InterestProps {
   email:string,
    firstName: string,
    lastName: string,
    phone: string,
    reason: string,
  moveInDate: string,
  id : string
}