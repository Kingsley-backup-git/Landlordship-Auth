import React from 'react'
import TextField from '../form/TextField'
import ZipCode from '../form/ZipCodeField'
import Dropdown from '../form/Dropdown'
import { FormikProps } from "formik";
interface PropertyFormValues {
  propertyName: string;
  yearBuilt: number;
  uniqueId: string;
  stateAddress: string;
  city: string;
  region: string;
  zip: string;
  country: string;
  propertyType?: "individual" | "multi-unit";
  amenities?: string[];
  features?: string[];
   attachments?: File[];
}

export default function GeneralInfo({formik} : {formik : FormikProps<PropertyFormValues>}) {
  return (
    <div className='bg-[#F9F9FA] rounded-2xl p-6'>
        <h1 className='text-sm text-black font-semibold'>General Information</h1>

        <div className="grid grid-cols-4 gap-6 mt-6">
<TextField className=' bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl' 
type='text' 
name = "propertyName"
text='Property Name'
onChange={formik.handleChange}
touched = {formik.touched.propertyName}
error = {formik.errors.propertyName}
onBlur = {formik.handleBlur}
placeholder='Property name'/>

<TextField className='col-span-1 bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl' 
text='Year built'
 type="number"
  name="yearBuilt"
  min="1700"
  touched = {formik.touched.yearBuilt}
error = {formik.errors.yearBuilt}
onBlur = {formik.handleBlur}
  onChange={formik.handleChange}
    max={new Date().getFullYear()}
  pattern="^\d*$"
placeholder='1990'/>


<TextField className='col-span-1 bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl' 
type='string' 
name = "uniqueId"
onChange={formik.handleChange}
touched = {formik.touched.uniqueId}
error = {formik.errors.uniqueId}
onBlur = {formik.handleBlur}
text='Unique ID #'
placeholder='12345'/>

<TextField className='col-span-2 col-start-1 col-end-3  bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl'
        type='text'
        name = "stateAddress"
        onChange={formik.handleChange}
        touched = {formik.touched.stateAddress}
error = {formik.errors.stateAddress}
onBlur = {formik.handleBlur}
        text='State Address'
        placeholder='95A Gate 65,Leicester, LE4' />


<TextField className='col-span-2 col-start-3 col-end-5  bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl'
        type='text'
        name = "city"
        touched = {formik.touched.city}
error = {formik.errors.city}
onBlur = {formik.handleBlur}
        onChange={formik.handleChange}
        text='City'
        value={formik.values.city}
        placeholder='Enter city' />


<TextField className='col-span-1  bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl' 
type='text' 
text='State/Region'
touched = {formik.touched.region}
error = {formik.errors.region}
onBlur = {formik.handleBlur}
name = "region"
  onChange={formik.handleChange}
   value={formik.values.region}
placeholder='Enter city'/>

<ZipCode className='col-span-1  bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl' 
type='text' 
  onChange={formik.handleChange}
   value={formik.values.zip}
   touched = {formik.touched.zip}
error = {formik.errors.zip}
onBlur = {formik.handleBlur}

name = "zip"
text='Zip'
placeholder='Enter Zip/Postal code'/>


<Dropdown 
 touched = {formik.touched.country}
error = {formik.errors.country}
onBlur = {formik.handleBlur}
onChange={formik.handleChange}  
value={formik.values.country} 
text="Country" name = "country"
 className="col-span-2  bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl"/>
        </div>
    </div>
  )
}
