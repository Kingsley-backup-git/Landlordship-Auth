'use client'
import React,{useState} from 'react'
import GeneralInfo from './components/GeneralInformation/generalInfo'
import PropertyType from './components/PropertyType/propertyType'
import PropertyDetails from './components/PropertyDetails/propertyDetails'
import PropertyFeature from './components/PropertyFeatures/propertyFeature'
import PropertyAmenities from './components/PropertyAmenities/propertyAmenity'
import UploadAttachment from './components/UploadAttachments/uploadAttachment'
import Button from '@/app/components/ui/Button'
import Completed from './components/completed'

export default function CreateProperty({stepHandler}: {stepHandler : (num:number)=> void;}) {
  const [propertyType, setPropertyType] = useState<string>("individual")
  const [isCompleted, setIsCompleted] = useState<boolean>(false)
  function propertyTypeHandler(val :string) {
    setPropertyType(val)
  }
  function createPropertyHandler() {
setIsCompleted(true)
  }
  function closeMoodal() {
    setIsCompleted(false)
      }
  return (
    <div className='py-10 px-6'>
     
<GeneralInfo />
<PropertyType propertyType = {propertyType} propertyTypeHandler = {propertyTypeHandler}/>

<PropertyDetails />

<PropertyFeature />

<PropertyAmenities />

<UploadAttachment />

<div className='p-4 rounded-2xl bg-[#F9F9FA] flex justify-end mt-6 gap-x-4'>
<Button onClick={()=>stepHandler(-1)} classname=' bg-transparent border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-lg py-2 px-4 mt-4' text="Cancel"/>

<Button onClick={()=>createPropertyHandler()} classname='text-white bg-black text-sm font-[400]  rounded-lg py-1 px-2 mt-4' text="Create"/>
</div>
{isCompleted ? <Completed closeMoodal = {closeMoodal} stepHandler = {stepHandler}/> : null}
    </div>
  )
}
