"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <div className="w-full min-h-screen bg-white relative overflow-hidden">
      {/* Top-left logo - consistent across all auth pages */}
      <div 
        onClick={handleLogoClick}
        className="absolute top-6 left-6 md:top-8 md:left-8 lg:top-12 lg:left-12 z-50 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <Image
          src="/icons/logo_snug.svg"
          alt="Snug Logo"
          width={67}
          height={26}
          className="h-6 md:h-7 lg:h-8 w-auto"
          priority
        />
      </div>

      {children}
    </div>
  );
} 