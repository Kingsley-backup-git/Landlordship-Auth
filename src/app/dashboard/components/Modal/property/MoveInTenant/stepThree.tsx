
import React from 'react'
import { IoAddOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import StepFour from './stepFour';
import SearchInput from './components/form/SearchInput';
export default function AddNew({header, closeAddNew, addNewTenants, openFormHandler, closeFormHandler, openForm}:
    {header:string, closeAddNew : ()=>void, 
        addNewTenants:(payload:{ firstname: string; lastname:string; email: string  })=>void;
        openFormHandler : ()=> void;
        closeFormHandler : ()=>void;
    openForm : boolean}) {
   
  return (
    <>
    {openForm ?
    // <StepFour header = {header} closeFormHandler = {closeFormHandler} addNewTenants = {addNewTenants}/> 
    // 
    <></>:
    <div className='sm:p-6 py-2 px-4  sm:max-w-[960px] mx-auto w-[100%]'>
       <h1 className = "text-black  font-semibold sm:flex hidden text-sm">{header}</h1>


       <div className="max-w-[500px] w-full block mx-auto mt-16">
<div className="flex items-center mb-6 px-2">
    <div className="flex-1">
<IoAddOutline className="text-4xl cursor-pointer text-black" onClick = {openFormHandler}/>
</div>

<div className="flex-1">
<h1 className="font-semibold text-3xl text-black">Add New</h1>
</div>

<div className="flex-1 flex justify-end">
<IoCloseSharp className="bg-[#0000000A] cursor-pointer text-black text-3xl p-2 rounded-lg" onClick={closeAddNew}/>
</div>
</div>

<SearchInput />
       </div>
    </div>
    }
    </>
  )
}
