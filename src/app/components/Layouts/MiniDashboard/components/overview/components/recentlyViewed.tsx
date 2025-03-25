import React from 'react'
// import styles from "../../dashboard.module.css"
export default function RecentlyViewed() {
    const recentlyViewed = [
        {
property : "First property 101",
location : "123 Noble crescent avenue, LE, 144"
        },{
property : "First property 101",
location : "234 Noble crescent avenue, LE, 144"
        },{
property : "Apartment property 101",
location : "3 Noble crescent avenue, LE, 144"
        },{
            property : "Apartment property 101",
            location : "3 Noble crescent avenue, LE, 144"
                    },
                   
    ]
  return (
    <div className='bg-[#212a2c6a]  2sm:col-span-6 col-span-12 shadow-lg rounded-lg pt-6 sm:px-6 px-3  flex flex-col h-[210px] xs:h-[250px] '>
     <h1 className='text-white font-semibold text-xs'>Recently Viewed</h1>


     <div className={`flex flex-col gap-y-4 mt-4 overflow-y-hidden `}>

        {recentlyViewed.map((recent, index)=> {
            return <div key={index} className='flex flex-row gap-x-3 items-center'>
            <div className='bg-white/30 w-[32px] h-[32px] rounded-lg'>
        
            </div>
        
            <div>
                <h1 className='text-[10px] font-semibold text-white'>{recent.property}</h1>
                <p className='text-[#4d5253] text-[9px] font-[400] pt-1'>{recent.location}</p>
            </div>
        </div>
        })}



     </div>
        </div>
  )
}
