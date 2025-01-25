
import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Checkbox from '../../unit/components/inputs/checkbox'
import Img1 from "./../../../../../../public/contact1.png"
import { BsThreeDots } from 'react-icons/bs'
import MobileDevice from '../../unit/components/mobileDevices'
export default function TransactionHistory() {
    const [show, setShow] = useState<number | null>(null)
    const [indexes, setIndexes] = useState<number[]>([])
const [allChecked, setallChecked] = useState<boolean>(false)
function addIndex(index:number) {
    if(indexes.includes(index)) {
const checked = indexes.filter(val => val !== index)
setIndexes(checked)
    } else {
        setIndexes([...indexes, index])
    }

}

useEffect(()=> {
if(indexes.length < 1 && allChecked) {
    setallChecked(false)
} else if(indexes.length === transactions.length) {
    setallChecked(true)
}
// eslint-disable-next-line react-hooks/exhaustive-deps
},[indexes])

function toggleAll() {
    setallChecked(prev => !prev)
}
    const transactions = [
        {
property : "New Porperty #001",
unit: 12,
img : Img1,
address : "Meadow Lane Oakland",
rent : 200,
status : "In Progress"
        },  
  {
            property : "New Porperty #001",
            unit : 9,
            img : Img1,
            address : "Meadow Lane Oakland",
            rent : 200,
            status : "Complete"
                    },
  {
                            property : "New Porperty #001",
                            unit: 14,
                            img : Img1,
                            address : "Meadow Lane Oakland",
                            rent : 200,
                            status : "Pending"
                                },

                                {
                                    property : "New Porperty #001",
                                    unit : 5,
                                    img : Img1,
                                    address : "Meadow Lane Oakland",
                                    rent : 200,
                                    status : "Approved"
                                            },
                                            {
    property : "New Porperty #001",
    unit: 35,
      img : Img1,
address : "Meadow Lane Oakland",
rent : 200,
status : "Complete"
},
{
    property : "New Porperty #001",
    unit: 4,
    img : Img1,
    address : "Meadow Lane Oakland",
    rent : 200,
    status : "In Progress"
            },
            {
                property : "New Porperty #001",
               unit: 30,
                img : Img1,
                address : "Meadow Lane Oakland",
                rent : 200,
                status : "In Progress"
                        },
                        {
                            property : "New Porperty #001",
                           unit : 21,
                            img : Img1,
                            address : "Meadow Lane Oakland",
                            rent : 200,
                            status : "In Progress"
                                    },
                                    {
                                        property : "New Porperty #001",
                                        unit : 14,
                                        img : Img1,
                                        address : "Meadow Lane Oakland",
                                        rent : 200,
                                        status : "In Progress"
                                                },
                                                {
                                                    property : "New Porperty #001",
                                                    unit : 28,
                                                    img : Img1,
                                                    address : "Meadow Lane Oakland",
                                                    rent : 200,
                                                    status : "In Progress"
                                                            },
    ]

    useEffect(()=>  {
        const addAllIndexes = () => {
            if (allChecked) {
            
              const allIndexes = transactions.map((_, index) => index);
              setIndexes(allIndexes);
            } else {
            
              setIndexes([]);
            }
            
          };
    
          addAllIndexes()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[allChecked])
  return (
    <>
       <div className='w-full mt-4 sm:flex hidden flex-col h-[350px]  select-none'>
   <div className='flex items-center w-[100%] py-3 border-b-[1px] gap-x-4 border-[#0000000A]'>
   <div className='flex-[4%] ps-1'>
   <Checkbox  clicked = {()=> toggleAll()} checked ={allChecked}   classname={`w-[14px] h-[14px] cursor-pointer border-[#00000033] flex justify-center items-center  border-[1px] ${(allChecked) ? "bg-black" : ""} rounded`}/>
   </div>
   
   
   
   <div className='flex-[30%] text-[#00000066] font-[400] text-xs'>
       Building
   </div>
   
   
   
   
   <div className='flex-[13%] text-[#00000066] font-[400] text-xs'>
    Unit 
   </div>
   
   
   
   
   <div className='flex-[30%] text-[#00000066] font-[400] text-xs'>
       Description
   </div>
   
   
   
   
   <div className='flex-[18%] text-[#00000066] font-[400] text-xs'>
        Address
   </div>
   
   
   
   
   <div className='flex-[5%]'></div>
   </div>
   
   
   
   
   <div className='flex flex-col overflow-y-auto'>
       {transactions.map((transaction, index)=> {
   return <div key = {index} onClick = {()=> null} className='flex  items-center cursor-pointer hover:bg-[#0000000A] gap-x-4 py-3 border-b-[1px] border-[#0000000A]' onMouseLeave={()=>  setShow(null)} onMouseEnter={()=> setShow(index)}>
       <div className='flex-[4%] ps-1'>
   <Checkbox clicked={()=> addIndex(index)}  checked ={indexes.includes(index) }  classname={`w-[14px] h-[14px] cursor-pointer border-[#00000033] flex justify-center items-center  border-[1px] ${(indexes.includes(index)) ? "bg-black" : ""} rounded`}/>
   </div>
   
   
   <div className='flex-[30%] text-black font-[400] text-xs'>
       {transaction.property}
   </div>
   
   
   <div className='flex-[13%] text-black font-[400] text-xs flex items-center gap-x-2'>
      
     {transaction.unit} 
   </div>
   
   
   <div className='flex-[30%] text-black font-[400] text-xs'>
       {transaction.property}
   </div>
   
   
   <div className='flex-[18%] text-black font-[400] text-xs'>
      {transaction.address}
   </div>
 
   
   <div className='flex-[5%]'>
      <BsThreeDots  className={`text-lg  ${(show === index) ? "visible":"invisible"} text-black`}   onClick={(event) => {
                    event.stopPropagation();
                    
                  }}/>
   </div>
   </div>
       })}
   </div>
   
   </div>
   
   <div className='sm:flex hidden items-center gap-x-2 mt-3'>
   <div className='py-1 text-center cursor-pointer flex-1 rounded-lg border-[#0000001A] border-[0.5px] font-[400] text-sm text-black'>
   1
   </div>
   
   
   <div className='py-1 flex-1 text-center cursor-pointer flex-1- rounded-lg border-[#0000001A] border-[0.5px] font-[400] text-sm text-black'>
       2
   </div>
   
   
   
   <div className='py-1 text-center flex-1 cursor-pointer rounded-lg border-[#0000001A] border-[0.5px] font-[400] text-sm text-black'>
      3 
   </div>
   
   
   
   <div className='py-1 text-center flex-1 cursor-pointer rounded-lg border-[#0000001A] border-[0.5px] font-[400] text-sm text-black'>
       4
   </div>
   
   
   
   <div className='py-1 text-center flex-1 cursor-pointer rounded-lg border-[#0000001A] border-[0.5px] font-[400] text-sm text-black'>
       5
   </div>
   
   
   
   <div className='py-1 text-center cursor-pointer rounded-lg border-[#0000001A] border-[0.5px] flex-1'>
   <IoIosArrowBack className='text-black mx-auto text-xl'/>
   </div>
   
   
   
   <div className='py-1 text-center cursor-pointer rounded-lg border-[#0000001A] border-[0.5px] flex-1'>
   <IoIosArrowForward className='text-black mx-auto text-xl'/>
   </div>
   </div>
      
   
   
   <MobileDevice />
       </>
  )
}
