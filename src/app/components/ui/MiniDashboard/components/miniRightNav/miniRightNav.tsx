import React from 'react'
import MiniNotif from './miniNotif/miniNotif'
import MiniReq from './miniReq/miniReq'
import MiniContact from './miniContact/miniContact'

export default function MiniRightNav() {
  return (
     <div className='w-[100%] py-5'>
         <MiniNotif />
   
         <MiniReq />
   
         <MiniContact />
       </div>
  )
}
