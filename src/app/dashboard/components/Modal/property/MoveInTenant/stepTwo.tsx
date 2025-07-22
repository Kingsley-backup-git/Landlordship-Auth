"use client";
import React, { useState } from "react";
// import Dropdown from './components/form/Dropdown'
import Button from "@/app/components/ui/ButtonTwo";
import { IoCloseOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { LuChevronsUpDown } from "react-icons/lu";
import AddNew from "./stepThree";

interface TenantProps {
  firstname: string;
  lastname: string;
  email: string;
}
export default function StepTwo({
  header,
  stepHandler,
}: {
  header: string;
  stepHandler: (num: number) => void;
}) {
  const [addNew, setAddNew] = useState(false);
  const [tenants] = useState<TenantProps[]>([]);
  const [openForm, setOpenForm] = useState(false);

  function openFormHandler() {
    setOpenForm(true);
  }
  // function closeFormHandler() {
  //     setOpenForm(false)
  // }

  function openAddNew() {
    setAddNew(true);
  }

  function closeAddNew() {
    setAddNew(false);
  }
  // function addNewTenants(payload:{ firstname: string; lastname:string; email: string }) {
  //     setTenants([...tenants, payload])
  //     closeFormHandler();
  //     closeAddNew()
  // }
  return (
    <>
      {addNew ? (
        <AddNew
          header={header}
          closeAddNew={closeAddNew}
          openFormHandler={openFormHandler}
          openForm={openForm}
        />
      ) : (
        <div className="sm:p-6 py-2 px-4  sm:max-w-[960px] mx-auto w-[100%]">
          <h1 className="text-black  font-semibold sm:flex hidden text-sm">
            {header}
          </h1>
          <div className="mt-16 justify-center max-w-[600px] mx-auto w-full">
            <h1 className="text-2xl text-center font-semibold text-black">
              Tenant information
            </h1>

            <p className="text-sm text-center mt-2 font-[400] text-[#00000066]">
              Select the tenant from the dropdown menu.
            </p>

            {/* <Dropdown text="Tenants" className="py-4 px-5 mt-5 rounded-2xl mx-auto block w-full max-w-[400px] bg-[#FFFFFFCC] border-[.5px] border-[#0000001A]"/> */}

            <div className="py-4 px-5 mt-5 rounded-2xl mx-auto block w-full max-w-[400px] bg-[#FFFFFFCC] border-[.5px] border-[#0000001A]">
              <h1 className="text-[#00000066] text-xs pt-1 font-normal">
                Tenants
              </h1>
              <div
                className="w-full flex relative py-1 cursor-pointer "
                onClick={openAddNew}
              >
                <>
                  {tenants.length < 1 ? (
                    <div className="flex-1 text-black font-[400] text-sm">
                      Choose a tenant
                    </div>
                  ) : (
                    <div className="flex gap-x-2 overflow-auto flex-1 items-center pe-8">
                      {tenants.map((tenant, index) => {
                        return (
                          <div
                            key={index}
                            className="bg-[#FAF4DF] rounded-lg flex items-center gap-x-1 px-1 py-[2px]"
                          >
                            <h1 className="text-xs text-black font-[400] whitespace-nowrap">
                              {tenant.firstname} {tenant.lastname}
                            </h1>
                            <IoCloseOutline className="text-[#00000033]" />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </>
                <LuChevronsUpDown className="absolute pointer-events-none top-[5px] right-3 text-[#00000066]" />
              </div>
            </div>

            <div className="flex items-center gap-x-4 mt-6 justify-center">
              <Button
                onClick={() => stepHandler(1)}
                classname="bg-[#0000000A] flex items-center justify-center gap-x-2 max-w-[170px] w-full rounded-xl py-2 px-4"
              >
                <FaAngleLeft className="text-[#00000066] text-base" />
                <h1 className="text-sm font-[400] text-black">Previous</h1>
              </Button>

              <Button
                onClick={() => stepHandler(6)}
                classname="bg-[#1D3639] flex items-center gap-x-2 justify-center max-w-[170px] w-full rounded-xl py-2 px-4"
              >
                <h1 className="text-sm font-[400] text-white">Continue</h1>
                <FaAngleRight className="text-[#00000066] text-white text-base" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
