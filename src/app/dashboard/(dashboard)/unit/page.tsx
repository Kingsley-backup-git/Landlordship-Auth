import React from 'react'
import Occupied from './components/occupied'
import Rental from './components/rental'
import Asset from './components/asset'

export default function Unit() {
  return (
    <div className='p-6'>
        <h1 className = "text-black font-semibold text-sm">Overview</h1>


        <div className='grid grid-cols-3 mt-5 gap-5'>
            <Occupied />

            <Rental />


            <Asset />
        </div>
    </div>
  )
}
