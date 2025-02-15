'use client'
import React,{useState} from 'react'
import Occupied from './components/occupied'
import Rental from './components/rental'
import Asset from './components/asset'
import { CiSearch } from 'react-icons/ci'
import TextInput from '../../components/inputs/TextInput'
import { PiArrowsDownUp } from "react-icons/pi";
import { PiFunnelSimple } from "react-icons/pi";
import { FiPlus, FiSearch } from "react-icons/fi";
import TransactionHistory from './components/transactionHistory'
import { BsThreeDots } from 'react-icons/bs'
import { FaChevronLeft } from 'react-icons/fa6'
import { RiAddLargeLine } from 'react-icons/ri'
import Link from 'next/link'
import CreateProperty from '../../components/Modal/property/create/create'
import StepOne from '../../components/Modal/property/MoveInTenant/stepOne'
import StepTwo from '../../components/Modal/property/MoveInTenant/stepTwo'
import StepSeven from '../../components/Modal/property/MoveInTenant/stepSeven'
import StepEight from '../../components/Modal/property/MoveInTenant/stepEight'
import StepNine from '../../components/Modal/property/MoveInTenant/stepNine'
import StepSix from '../../components/Modal/property/MoveInTenant/stepSix'
export default function Unit() {
       
        const [step, setStep] = useState(50)
      
        function stepHandler(num:number) {
                setStep(num)
        }
  return (
        <>
        {step === 0 ? 
         <CreateProperty  stepHandler={stepHandler}/> :
         step === 1 ? <StepOne header = {"Unit"} stepHandler ={stepHandler}/> :
         step === 2 ? <StepTwo header = {"Unit"} stepHandler ={stepHandler}/> :
        step === 6 ? <StepSix header = {"Unit"} stepHandler ={stepHandler}/>:
         step === 7 ? <StepSeven header = {"Unit"} stepHandler ={stepHandler}/> :
         step === 8 ? <StepEight header = {"Unit"} stepHandler ={stepHandler}/> :
         step === 9 ? <StepNine header = {"Unit"} stepHandler ={stepHandler}/> :
    <div className='sm:p-6 py-2 px-4  sm:max-w-[960px] mx-auto w-[100%]'>

            <div className='flex sm:block items-center justify-between'>
            <Link href="/dashboard/"  className='flex items-center sm:hidden gap-x-[1px]'>
                  <FaChevronLeft className='text-[#007AFF] text-lg'/>
                  <h1 className='font-[400] sm:text-base text-sm tracking-[-0.43px] text-[#007AFF]'>Home</h1>
                  </Link>
              
                  <h1 className = "text-black font-semibold sm:flex hidden text-sm">Unit</h1>
                  <h1 className = "text-black font-semibold sm:hidden flex sm:tracking-normal tracking-[-0.43px] sm:text-sm text-base">Properties</h1>
              
              
                  <BsThreeDots className='text-[#007AFF] text-lg sm:hidden flex'/>
              </div>
      
       


        <div className='grid grid-cols-6 mt-5 gap-5'>
            <Occupied />

            <Rental />


            <Asset />
        </div>


  <div className='sm:hidden flex gap-x-6 ps-4 pe-4 py-3 bg-white rounded-full items-center my-5'>
        <RiAddLargeLine className='text-black  text-xl'/>
        
        <PiFunnelSimple className='text-black  text-xl' />
        
        <PiArrowsDownUp className='text-black  text-xl'/>
        
        
        <FiSearch className='text-black text-xl ms-auto'/>
        </div>


        <div className='sm:flex hidden justify-between items-center bg-[#F9F9FA] rounded-lg p-2 mt-6'>
<div className='flex gap-x-5 items-center'>
<div className='flex gap-x-1 items-center cursor-pointer' onClick={()=> setStep(0)}>


<FiPlus className='text-black text-sm'/>

<h1 className='text-sm font-[400] text-black'>New Property</h1>
</div>

<PiFunnelSimple className='w-[17px] h-[17px] text-black' />
<PiArrowsDownUp className='w-[17px] h-[17px] text-black'/>
</div>



<div className='bg-[#FFFFFFCC] max-w-[160px] w-[100%] border-[.5px] rounded-lg px-2 py-[6px] gap-x-[6px] flex items-center'>
<CiSearch className='text-lg text-[#00000033]'/>
<TextInput type='text' classname='flex-1 w-[100%]  bg-transparent text-black text-sm outline-0 border-[0px] border-transparent' placeholder='Search'  name={'searchinput'}/>

</div>
        </div>

<div className='grid grid-cols-12'>
        <TransactionHistory />
        </div>
    </div>
     }
    </>
  )
}
