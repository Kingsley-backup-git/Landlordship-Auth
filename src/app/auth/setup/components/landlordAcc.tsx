import React from 'react'
import RadioInput from './inputs/radioButton'
import { PiSuitcaseSimple } from "react-icons/pi";
export default function LandlordAcc({accountType, AccountTypeHandler} : {accountType : string, AccountTypeHandler : (val :string)=> void;}) {
  return (
   <div className={`${accountType === "landlord" ? "border-[2px]" : "" } cursor-pointer relative border-[#1D3639] rounded-2xl p-6 bg-[#F9F9FA] flex gap-x-2`} onClick={()=> AccountTypeHandler("landlord")}>
        <PiSuitcaseSimple className="text-2xl text-black"/>
    
        <div className="">
    <h1 className='font-semibold text-sm text-black'>Landlord Account</h1>
    <p className="text-[#00000066] font-[400] text-xs">Setup your landlord account</p>
        </div>
 
     {accountType === "landlord" ?  <RadioInput /> : null}
        </div>
  )
}
