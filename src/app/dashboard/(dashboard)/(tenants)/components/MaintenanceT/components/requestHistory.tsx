'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function RequestHistory({ isPending, isSuccess, isError, data }: { isPending: boolean; isSuccess: boolean, isError: boolean;  data:any}) {
 const [show, setShow] = useState<number | null>(null);
 const router = useRouter()
  return (
      <>
      {isPending && 
        <div className="flex flex-col col-span-12 my-3 w-full gap-y-6">
          {
                Array.from({ length: 5 }).map((_, index) => {  
         return <div key = { index } className="w-full bg-black/5  animate-pulse h-[20px] ">
            
          </div>
        }
      )
          }
      </div>
    
      }



       {isSuccess &&
              <div className="col-span-12 overflow-auto">
                <div className="mt-4 w-full  sm:flex hidden flex-col max-h-[350px]  select-none">
                  <div className=" items-center w-full grid grid-cols-12 py-3 border-b-[1px] gap-x-4 border-[#0000000A]">
                    {/* <div className='flex-[4%] ps-1'>
      <Checkbox  clicked = {()=> toggleAll()} checked ={allChecked}   classname={`w-[14px] h-[14px] cursor-pointer border-[#00000033] flex justify-center items-center  border-[1px] ${(allChecked) ? "bg-black" : ""} rounded`}/>
      </div> */}
      
                    <div className="col-span-3 text-center text-balance text-[#00000066] font-[400] text-xs">
                      Property
                    </div>
      
                    <div className="col-span-3 text-center text-balance text-[#00000066] font-[400] text-xs">
                      Address
                    </div>
      
                  
      
                    <div className="col-span-3 text-center text-balance text-[#00000066] font-[400] text-xs">
                      Title
                    </div>
      
                
      
                    <div className="col-span-2 text-center text-balance text-[#00000066] font-[400] text-xs">
                       Status
                    </div>
      
                 
      
                    <div className="col-span-1"></div>
                  </div>
      
                  <div className="flex flex-col w-full overflow-y-auto">
                    {isSuccess &&
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      data?.map((property: any) => {
                        return (
                          <div
                            key={property?._id}
                            onClick={() => router.push(`/dashboard/properties/${property._id}`)}
                            className="grid grid-cols-12 gap-x-4 items-center cursor-pointer hover:bg-[#0000000A]  py-3 border-b-[1px] border-[#0000000A]"
                            onMouseLeave={() => setShow(null)}
                            onMouseEnter={() => setShow(property._id)}
                          >
                            {/* <div className='flex-[4%] ps-1'>
      <Checkbox clicked={()=> addIndex(index)}  checked ={indexes.includes(index) }  classname={`w-[14px] h-[14px] cursor-pointer border-[#00000033] flex justify-center items-center  border-[1px] ${(indexes.includes(index)) ? "bg-black" : ""} rounded`}/>
      </div> */}
      
                            <div className="col-span-3 text-center text-balance  break-words text-black font-[400] text-xs">
                              {property?.propertyId?.propertyName}
                            </div>
                            {/* 
                          <div className="flex-[23%] text-black font-[400] text-xs flex items-center gap-x-2">
                            {property.tenantId?.email && (
                              <Image
                                src={Img1}
                                className="w-[24px] h-[24px] rounded-full"
                                alt="tenant-img"
                                width={24}
                                height={24}
                              />
                            )}
                            {property.tenantId?.email && property.tenantId?.email}
                            {!property.tenantId?.email && "No Tenant"}
                          </div> */}
      
                            <div className="col-span-3 text-center text-black text-balance  break-words font-[400] text-xs">
                              {property?.propertyId?.address}, {property?.propertyId?.city}
                            </div>
      
                        
      
                            <div className="col-span-3 text-center line-clamp-2  text-balance  break-words text-black font-[400] text-xs">
                              {property?.title}
                            </div>
      
                        
      
                            <div className="col-span-2 text-center break-all text-black font-[400] text-xs">
                       {property?.status}
                            </div>
      
                         
      
                          
                            {/* <div className='flex-[13%]  text-black font-[400] text-xs'>
         ${transaction.rent}
      </div> */}
      
                            {/* <div className={`flex-[11%]  font-[400] text-xs flex items-center gap-x-2 ${transaction.status === "In Progress" ? "text-[#8A8CD9]" : transaction.status === "Complete" ? "text-[#94E9B8]" : transaction.status === "Pending" ? "text-[#92BFFF]" : transaction.status === "Approved" ? "text-[#FFDB56]" : transaction.status === "Rejected" ? "text-[#00000066]" : null}`}>
      <div className={`w-[7px] h-[7px] rounded-full ${transaction.status === "In Progress" ? "bg-[#8A8CD9]" : transaction.status === "Complete" ? "bg-[#94E9B8]" : transaction.status === "Pending" ? "bg-[#92BFFF]" : transaction.status === "Approved" ? "bg-[#FFDB56]" : transaction.status === "Rejected" ? "bg-[#00000066]" : null}`}></div>
      <h1 className='font-[400] text-xs'>{transaction.status}</h1>
      </div> */}
      
                            <div className="col-span-1">
                              <BsThreeDots
                                className={`text-lg  ${show === property._id ? "visible" : "invisible"} text-black`}
                                onClick={(event) => {
                                  event.stopPropagation();
                                }}
                              />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            }
      </>
  )
}

export default RequestHistory