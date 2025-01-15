import React from 'react'
import styles from "../../dashboard.module.css"
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
        }
    ]
  return (
    <div className='bg-[#F9F9FA] rounded-2xl pt-6 px-6 flex flex-col max-h-[272px] h-[100%]'>
     <h1 className='text-black font-semibold text-sm'>Recently Viewed</h1>


     <div className={`flex flex-col gap-y-4 mt-4 overflow-y-auto ${styles.overflow}`}>

        {recentlyViewed.map((recent, index)=> {
            return <div key={index} className='flex flex-row gap-x-3 items-center'>
            <div className='bg-[#0000000A] w-[48px] h-[48px] rounded-lg'>
        
            </div>
        
            <div>
                <h1 className='text-sm font-semibold text-black'>{recent.property}</h1>
                <p className='text-[#00000066] text-sm font-[400] pt-1'>{recent.location}</p>
            </div>
        </div>
        })}



     </div>
        </div>
  )
}
