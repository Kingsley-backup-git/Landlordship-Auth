import React from 'react'
import Img1 from "./../../../../../../../../public/contact1.png"
import Image from 'next/image'
export default function MobileDevice() {
    const transactions = [
        {
property: "Meadow Apartment",
tenant : "Natali Craig",
img : Img1,
address : "Meadow Apartment",
email : "ChrisPaul@gmai.com",
balance : 200,

        },    {
            property: "Meadow Apartment",
            tenant : "Natali Craig",
            img : Img1,
            address : "Meadow Apartment",
            email : "ChrisPaul@gmai.com",
            balance : 200,
            
                    }, 
                    {
                        property: "Meadow Apartment",
                        tenant : "Natali Craig",
                        img : Img1,
                        address : "Meadow Apartment",
                        email : "ChrisPaul@gmai.com",
                        balance : 200,
                        
                                }, 
                                {
           property: "New Porperty #001",
  tenant : "Natali Craig",
  img : Img1,
  address : "Meadow Apartment",
     email : "ChrisPaul@gmai.com",
   balance : 200,
   
    } ]
  return (
    <div className='flex sm:hidden flex-col gap-y-4'>
    {transactions.map((property, index)=> {
      return    <div key={index} className="bg-white rounded-2xl p-4">
      <div className='flex gap-x-1 items-center border-b-[1px] border-[#0000001A] pb-2'>
      <Image src = {Img1} className = "w-[24px] h-[24px] rounded-full" alt = "tenant-image" width={24} height = {24} />
      <h1 className="font-[400]  xs:text-sm text-xs  text-black">{property.tenant}</h1>
      
      
      </div>
      
      <div className='flex flex-col divide-y-[1px]'>
      <div className='flex justify-between items-center py-2'>
      <h1 className='xs:text-sm text-xs flex-1 text-[#00000066] font-[400]'>Property</h1>
      
     
                     
                      <h1 className='xs:text-sm text-xs font-[400] text-black'>{property.property}</h1>
     
      
      </div>
      
      
      
      
      <div className='flex justify-between items-center py-2'>
      <h1 className='xs:text-sm text-xs flex-1 text-[#00000066] font-[400]'>Unit</h1>
      <h1 className='xs:text-sm text-xs font-[400] text-black'>
      Unit 56
      </h1>
      </div>
      
      
      
      
      <div className='flex justify-between items-center py-2'>
      <h1 className='xs:text-sm text-xs flex-1 text-[#00000066] font-[400]'>Address</h1>
      <h1 className='xs:text-sm text-xs font-[400] text-black'>
     {property.address}
      </h1>
      </div>
      
      
      
      <div className='flex justify-between items-center py-2'>
      <h1 className='xs:text-sm text-xs flex-1 text-[#00000066] font-[400]'>Rent</h1>
      <h1 className='xs:text-sm text-xs font-[400] text-black'>
      £{property.balance}
      </h1>
      </div>
      </div>
              </div>
    })}
   

  </div>

  )
}
