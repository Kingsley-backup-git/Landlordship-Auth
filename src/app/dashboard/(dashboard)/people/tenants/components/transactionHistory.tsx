'use client'
import React from 'react'
import Checkbox from '../../../unit/components/inputs/checkbox'
import Img1 from "./../../../../../../../public/contact1.png"
import Image from 'next/image'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
export default function TransactionHistory() {
//     const [show, setShow] = useState<string | number>("")
//     const [checkedIndex, setCheckedIndex] = useState<string | number>("")
//     const [checkedAll, setCheckedAll] = useState<boolean>(false)

//     function checkAllHandler() {
//        setCheckedAll(val => !val)
//     }
//     function checkHandler(val:(string | number)) {
//       setCheckedIndex(val)
//     }

//     useEffect(()=> {
// if(checkedAll===true) {
//     setCheckedIndex("All")
// } else {
//     setCheckedIndex("")
// }
//     },[checkedAll])
    const transactions = [
        {
property: "New Porperty #001",
tenant : "Natali Craig",
img : Img1,
type : "Individual",
email : "ChrisPaul@gmai.com",
balance : 200,
status : "In Progress"
        },    {
            property: "New Porperty #001",
            tenant : "Natali Craig",
            img : Img1,
            type : "Individual",
            email : "ChrisPaul@gmai.com",
            balance : 200,
            status : "In Progress"
                    }, 
                    {
                        property: "New Porperty #001",
                        tenant : "Natali Craig",
                        img : Img1,
                        type : "Individual",
                        email : "ChrisPaul@gmai.com",
                        balance : 200,
                        status : "In Progress"
                                }, 
                                {
           property: "New Porperty #001",
  tenant : "Natali Craig",
  img : Img1,
    type : "Individual",
     email : "ChrisPaul@gmai.com",
   balance : 200,
    status : "In Progress"
    }, 
    {
        property: "New Porperty #001",
        tenant : "Natali Craig",
        img : Img1,
        type : "Individual",
        email : "ChrisPaul@gmai.com",
        balance : 200,
        status : "In Progress"
                }, 
                {
                    property: "New Porperty #001",
                    tenant : "Natali Craig",
                    img : Img1,
                    type : "Individual",
                    email : "ChrisPaul@gmai.com",
                    balance : 200,
                    status : "In Progress"
                            }, 
    
                            {
                                property: "New Porperty #001",
                                tenant : "Natali Craig",
                                img : Img1,
                                type : "Individual",
                                email : "ChrisPaul@gmai.com",
                                balance : 200,
                                status : "In Progress"
                                        }, 

    ]
  return (
    <>
    <div className='w-full mt-4 flex flex-col h-[350px]'>
<div className='flex items-center w-[100%] py-3 px-1 border-b-[1px] border-[#0000000A]'>
<div className='flex-[4%] ps-1'>
<Checkbox clicked = {()=> null} checked = {false}  classname={`w-[14px] h-[14px] border-[#00000033] flex justify-center items-center  border-[1px]  rounded`}/>
</div>



<div className='flex-[24%] text-[#00000066] font-[400] text-xs'>
    Tenant
</div>




<div className='flex-[12%] text-[#00000066] font-[400] text-xs'>
  Type
</div>




<div className='flex-[17%] text-[#00000066] font-[400] text-xs'>
   Property
</div>




<div className='flex-[17%] text-[#00000066] font-[400] text-xs'>
    Email
</div>



<div className='flex-[10%] text-[#00000066] font-[400] text-xs'>
    Balance
</div>
<div className='flex-[11%] text-[#00000066] font-[400] text-xs'>
    Status
</div>
<div className='flex-[4%]'></div>
</div>




<div className='flex flex-col overflow-y-auto'>
    {transactions.map((transaction, index)=> {
return <div key = {index} onClick = {()=> null} className={`flex cursor-pointer rounded-lg items-center py-3 px-1 border-b-[1px] border-[#0000000A]`}>
    <div className='flex-[4%] ps-1'>
<Checkbox clicked = {()=> null} checked = {false} classname={`w-[14px]   h-[14px] border-[#00000033] flex justify-center items-center border-[1px]  rounded`}/>
</div>


<div className='flex-[24%] text-black font-[400] text-xs flex items-center gap-x-1'>
<Image src = {transaction.img} className = "w-[24px] h-[24px] rounded-full" alt = "tenant-img" width={24} height = {24} />
{transaction.tenant} 
</div>


<div className='flex-[12%] text-black font-[400] text-xs '>
 {transaction.type}
</div>


<div className='flex-[17%] text-black font-[400] text-xs'>
    {transaction.property}
</div>


<div className='flex-[17%] text-black font-[400] text-xs'>
   {transaction.email}
</div>
<div className='flex-[10%] text-black font-[400] text-xs'>
   ${transaction.balance}
</div>

<div className={`flex-[11%] font-[400] text-xs flex items-center gap-x-2 ${transaction.status === "In Progress" ? "text-[#8A8CD9]" : transaction.status === "Complete" ? "text-[#94E9B8]" : transaction.status === "Pending" ? "text-[#92BFFF]" : transaction.status === "Approved" ? "text-[#FFDB56]" : transaction.status === "Rejected" ? "text-[#00000066]" : null}`}>
<div className={`w-[7px] h-[7px] rounded-full ${transaction.status === "In Progress" ? "bg-[#8A8CD9]" : transaction.status === "Complete" ? "bg-[#94E9B8]" : transaction.status === "Pending" ? "bg-[#92BFFF]" : transaction.status === "Approved" ? "bg-[#FFDB56]" : transaction.status === "Rejected" ? "bg-[#00000066]" : null}`}></div>
<h1 className='font-[400] text-xs'>{transaction.status}</h1>
</div>

<div className='flex-[4%]'></div>
</div>
    })}
</div>

</div>

<div className='flex items-center gap-x-2 mt-3'>
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
    
    </>
  )
}