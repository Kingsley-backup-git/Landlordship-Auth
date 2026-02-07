"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginAliasPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const redirectTo = searchParams.get("redirect");

    if (redirectTo) {
      try {
        window.localStorage.setItem("postLoginRedirect", redirectTo);
      } catch {
        // ignore storage errors
      }
    }

    router.replace("/auth/signin");
  }, [router, searchParams]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="text-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black mx-auto mb-4" />
        <p className="text-sm text-[#00000066] font-[400]">Redirecting…</p>
      </div>
    </div>
  );
}

