"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../../../public/LogoWhite.png";
import Link from "next/link";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { LuArrowUp } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
export default function Footer() {
  function scrollToTop() {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
  return (
    <>
      <div className="max-w-[1200px]  mx-auto w-full grid grid-cols-12 gap-y-12 mt-[30px] sm:mt-[120px] px-8">
        <div className="sm:col-span-4 col-span-12">
          <Image src={Logo} alt="logo" className="" width={170} height={170} />
        </div>

        <div className="sm:col-span-8 col-span-12 flex  flex-row">
          <div className="flex flex-col gap-y-8 flex-1">
            <h1 className="text-sm font-medium text-white">Products</h1>
            <Link href="#" className="text-[#FFFFFFB2] text-xs">
              Courses
            </Link>
            <Link href="#" className="text-[#FFFFFFB2] text-xs">
              Tutorials
            </Link>
            <Link href="#" className="text-[#FFFFFFB2] text-xs">
              Pricing
            </Link>
          </div>

          <div className="flex flex-col gap-y-8 flex-1">
            <h1 className="text-sm font-medium text-white">Company</h1>
            <Link href="#" className="text-[#FFFFFFB2] text-xs">
              About Us
            </Link>
            <Link href="#" className="text-[#FFFFFFB2] text-xs">
              Contact Us
            </Link>
          </div>

          <div className="flex flex-col gap-y-8 flex-1">
            <h1 className="text-sm font-medium text-white">Resources</h1>
            <Link href="#" className="text-[#FFFFFFB2] text-xs">
              Downloads
            </Link>
            <Link href="#" className="text-[#FFFFFFB2] text-xs">
              Community
            </Link>
          </div>

          <div className="flex flex-col gap-y-10 flex-1">
            <h1 className="text-sm font-medium text-white">FOLLOW US</h1>
            <div className="flex flex-row gap-x-6">
              <Link href="#" className="text-[#FFFFFFB2] text-xs">
                <RiFacebookBoxLine className="text-white text-lg" />
              </Link>
              <Link href="#" className="text-[#FFFFFFB2] text-xs">
                <FaXTwitter className="text-white text-lg" />
              </Link>
              <Link href="#" className="text-[#FFFFFFB2] text-xs">
                <FaInstagram className="text-white text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-y-12 items-center gap-x-4 px-8 max-w-[1200px] mt-[100px]  mx-auto w-full">
        <div className="flex sm:flex-row flex-col gap-y-12 flex-1 w-full">
          <div className="flex-1">
            <h1 className="text-[13px] sm:text-start text-center font-normal text-[#FFFFFFB2]">
              © 2024 Your Landlorship
            </h1>
          </div>

          <div className=" divide-x-[1px] space-x-4 divide-white/30 justify-center flex flex-row items-center">
            <Link href="#" className="text-[#FFFFFFB2] text-xs ">
              Terms of Service
            </Link>
            <Link href="#" className="text-[#FFFFFFB2] text-xs ps-4">
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[#FFFFFFB2] text-xs s flex ps-4 gap-x-3 items-center"
            >
              <h1>English</h1> <FaAngleDown className="text-white text-base" />
            </Link>
          </div>
        </div>
        <LuArrowUp
          className="text-white border rounded-full border-white/30 p-2 text-4xl cursor-pointer"
          onClick={() => scrollToTop()}
        />
      </div>
    </>
  );
}
