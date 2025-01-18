import React from 'react'
import { FiPlus } from "react-icons/fi";
import RadioInput from './components/radioInput';

export default function Agents() {
    const agents = [
        {
            name : "Andre Cage",
            email : "andrewcage@gmail.com",
            no : 4100922932903,
            isSelected:true
        },
        {
            name : "Andre Cage",
            email : "andrewcage@gmail.com",
            no : 4100922932903,
            isSelected:false
        },
        {
            name : "Andre Cage",
            email : "andrewcage@gmail.com",
            no : 4100922932903,
            isSelected:false
        },
        {
            name : "Andre Cage",
            email : "andrewcage@gmail.com",
            no : 4100922932903,
            isSelected:false
        },
        {
            name : "Andre Cage",
            email : "andrewcage@gmail.com",
            no : 4100922932903,
            isSelected:false
        },

        {
            name : "Andre Cage",
            email : "andrewcage@gmail.com",
            no : +4100922932903,
            isSelected:false
        },
        {
            name : "Andre Cage",
            email : "andrewcage@gmail.com",
            no : +4100922932903,
            isSelected:false
        },
        {
            name : "Andre Cage",
            email : "andrewcage@gmail.com",
            no : +4100922932903,
            isSelected:false
        },
        {
            name : "Andre Cage",
            email : "andrewcage@gmail.com",
            no : +4100922932903,
            isSelected:false
        },
    ]
  return (
    <div className='p-6'>
        <div className='flex justify-between items-center'>
            <h1 className='font-semibold text-sm text-black'>Agents</h1>


            <div className = "flex items-center gap-x-1 max-w-fit w-[100%] cursor-pointer">
            <FiPlus className='text-[#00000066] w-[10px] h-[10px]'/>
            <h1 className='text-[#00000066] font-[400] text-sm'>Add Agent</h1>
            </div>
        </div>



        <div className={`grid grid-cols-2 mt-10 gap-y-6 gap-x-4`}>
<div className='flex flex-col gap-y-6'>
{agents.map((agent,index)=> {
    return <div className={`bg-[#F9F9FA] hover:border-[2px] cursor-pointer transition-[border] ease-in-out duration-100 border-black p-4 rounded-2xl flex gap-x-2 ${agent.isSelected && "border-[2px]"}`} key={index}>
        <div className='w-[70px] h-[70px] rounded-xl p-4 bg-[#0000000A]'>

        </div>


        <div>
            <h1 className="text-black font-semibold text-sm">{agent.name}</h1>
            <p className="text-[#00000066] text-xs font-[400] mt-1">{agent.email}</p>
            <p className="text-[#00000066] text-xs font-[400]">+{agent.no}</p>
            </div>


          {agent.isSelected ?  <RadioInput /> : null}
    </div>
})}
</div>


<div className='w-[100%] max-w-[454px] flex flex-col justify-center items-center h-[454px] bg-[#F9F9FA] sticky top-[40px] rounded-2xl'>
<div className='w-[75px] h-[75px] rounded-xl p-4 bg-[#0000000A]'>

</div>

<h1 className='text-black font-semibold text-sm mt-5'>No property added</h1>
<p className='text-sm text-[#00000066] font-[400] mt-1'>Allocate property</p>
</div>
        </div>
      
    </div>
  )
}
