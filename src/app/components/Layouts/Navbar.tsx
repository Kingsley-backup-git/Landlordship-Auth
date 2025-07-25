import React from "react";
import Logo from "../../../../public/LogoWhite.png";
import Image from "next/image";
import Link from "next/link";

import Button from "../ui/Button";
import { FaBars } from "react-icons/fa6";
export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-[65px] border-b-[.5px] z-[999999999] bg-white/5 backdrop-blur-md w-full border-white/10 flex items-center justify-center px-6">
      <div className="max-w-[800px]  w-full flex items-center  gap-x-4 ">
        <div className="flex-1 flex gap-x-7 items-center">
          <Image
            src={Logo}
            alt="landlordship logo"
            className=""
            width={160}
            height={200}
          />

          <div className="space-x-4 sm:inline-block hidden">
            <Link
              href={""}
              className="text-sm text-white font-medium inline-block px-3"
            >
              Product
            </Link>
            <Link
              href={""}
              className="text-sm text-white font-medium inline-block px-3"
            >
              Pricing
            </Link>
            <Link
              href={""}
              className="text-sm text-white font-medium inline-block px-3"
            >
              Changelog
            </Link>
          </div>
        </div>

        <div className="sm:flex gap-x-6 items-center hidden">
          <Link href="/auth/signin" className="max-w-fit w-full">
            <Button
              type="button"
              disabled={false}
              classname="bg-transparent py-3 text-sm px-4 outline-none cursor-pointer border-none text-white"
              text="Log in"
            />
          </Link>
          <div className="relative">
            <Link href="/auth/signup" className="max-w-fit w-full">
              <Button
                type="button"
                disabled={false}
                classname="px-4 py-2 text-white font-medium text-sm cursor-pointer rounded-lg bg-gradient-to-r from-white/10 to-white/0  hover:from-white/20 hover:to-white/5 backdrop-blur-md border-[1px] border-white/50 shadow-inner shadow-white/40  transition-all"
                text="Sign up"
              />
            </Link>
          </div>
        </div>
        <FaBars className="text-xl text-white sm:hidden flex" />
      </div>
    </div>
  );
}
