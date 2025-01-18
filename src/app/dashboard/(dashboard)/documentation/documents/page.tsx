import React from 'react'
import AllFiles from './components/allFiles'
import AllDocuments from './components/documents'
import Images from './components/images'
import Videos from './components/videos'
import { FiPlus } from 'react-icons/fi'
import { PiArrowsDownUp, PiFunnelSimple } from 'react-icons/pi'
import { CiSearch } from 'react-icons/ci'
import TextInput from '../../../components/inputs/TextInput'
import FileHistory from './components/fileHistory'

export default function Documents() {
  return (
    <div className = "p-6">
   <h1 className = "text-black font-semibold text-sm">Documents</h1>


   <div className='grid grid-cols-4 mt-5 gap-5'>
    <AllFiles />

    <AllDocuments />

    <Images />

    <Videos />
   </div>



       <div className='flex justify-between items-center bg-[#F9F9FA] rounded-lg p-2 mt-6'>
       <div className='flex gap-x-5 items-center'>
       <div className='flex gap-x-1 items-center'>
       
       
       <FiPlus className='text-black text-sm'/>
       
       <h1 className='text-sm font-[400] text-black'>Upload</h1>
       </div>
       
       <PiFunnelSimple className='w-[17px] h-[17px] text-black' />
       <PiArrowsDownUp className='w-[17px] h-[17px] text-black'/>
       </div>
       
       
       
       <div className='bg-[#FFFFFFCC] max-w-[160px] w-[100%] border-[.5px] rounded-lg px-2 py-[6px] gap-x-[6px] flex items-center'>
       <CiSearch className='text-lg text-[#00000033]'/>
       <TextInput type='text' classname='flex-1 w-[100%]  bg-transparent text-black text-sm outline-0 border-[0px] border-transparent' placeholder='Search'  name={'searchinput'}/>
       
       </div>
               </div>

               <FileHistory />
    </div>
  )
}
