import React from 'react'
import Total from './components/total'
import Pending from './components/pending'
import InProgress from './components/inProgress'
import Completed from './components/completed'
import { PiArrowsDownUp, PiFunnelSimple } from 'react-icons/pi'
import { CiSearch } from 'react-icons/ci'
import TextInput from '@/app/dashboard/components/inputs/TextInput'
import { FiPlus } from 'react-icons/fi'

export default function MaintenanceT() {
  return (
    <div className=''>

        <div className='grid grid-cols-4 gap-5 my-6'>
<Total />
<Pending />
<InProgress />
<Completed />
        </div>


        <div className='sm:flex hidden justify-between items-center bg-[#F9F9FA] rounded-lg p-2 mt-6'>
            <div className='flex gap-x-5 items-center'>
            <div className='flex gap-x-2 items-center'>
            
            
            <FiPlus className='text-black text-sm'/>
            
            <h1 className='text-sm font-[400] text-black'>New Request</h1>
            </div>
            
            <PiFunnelSimple className='w-[17px] h-[17px] text-black' />
            <PiArrowsDownUp className='w-[17px] h-[17px] text-black'/>
            </div>
            
            
            
            <div className='bg-[#FFFFFFCC] max-w-[160px] w-[100%] border-[.5px] rounded-lg px-2 py-[6px] gap-x-[6px] flex items-center'>
            <CiSearch className='text-lg text-[#00000033]'/>
            <TextInput type='text' classname='flex-1 w-[100%]  bg-transparent text-black text-sm outline-0 border-[0px] border-transparent' placeholder='Search'  name={'searchinput'}/>
            
            </div>
                    </div>

    </div>
  )
}
