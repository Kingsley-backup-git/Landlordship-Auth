import React from 'react'
import TextField from '../form/TextField'
import ZipCode from '../form/ZipCodeField'
import Dropdown from '../form/Dropdown'

export default function GeneralInfo() {
  return (
    <div className='bg-[#F9F9FA] rounded-2xl p-6'>
        <h1 className='text-sm text-black font-semibold'>General Information</h1>

        <div className="grid grid-cols-4 gap-6 mt-6">
<TextField className='col-span-2 bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl' 
type='text' 
text='Property Name'
placeholder='Property name'/>

<TextField className='col-span-1 bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl' 
type='text' 
text='Year built'
maxLength={4}
  pattern="^\d*$"
placeholder='1990'/>


<TextField className='col-span-1 bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl' 
type='number' 
text='Unique ID #'
placeholder='12345'/>


<TextField className='col-span-2 col-start-3 col-end-5  bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl'
        type='text'
        text='City'
        placeholder='Enter city' />


<TextField className='col-span-1  bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl' 
type='text' 
text='State/Region'
placeholder='Enter city'/>

<ZipCode className='col-span-1  bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl' 
type='text' 
text='Zip'
placeholder='Enter Zip/Postal code'/>


<Dropdown text="Country" className="col-span-2  bg-[#FFFFFFCC] border-[0.5px] border-[#0000001A] py-4 px-5 rounded-2xl"/>
        </div>
    </div>
  )
}
