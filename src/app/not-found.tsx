import React from "react";
import AuthNavbar from "./auth/components/AuthNavbar";
import Image from "next/image";
import NotFoundImg from "../../public/notfound.png";
import Link from "next/link";
export default function Notfound() {
  return (
    <div className="h-screen w-full flex flex-col gap-y-4 bg-[#F9F9FA] min-h-screen px-8 py-6">
      <AuthNavbar />

      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-black text-center font-semibold">
          Page Not Found
        </h1>

        <Image
          src={NotFoundImg}
          className="mt-4"
          width={200}
          height={200}
          alt="the not found image for unknown route"
        />

        <Link
          href="/"
          className="text-sm font-[400] text-black mt-6 text-center"
        >
          Back to Home Page
        </Link>
      </div>
    </div>
  );
}
