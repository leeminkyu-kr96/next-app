"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PlusCircle } from "lucide-react";
import { SearchCard } from "@/components/SearchCard";
import { GuestType } from "@/lib/utils";

export default function IndexPage() {
  const router = useRouter();
  const [guests, setGuests] = useState(1);
  const [children, setChildren] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDates, setSelectedDates] = useState<Date[]>(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return [today, tomorrow];
  });

  const handleGuestChange = useCallback((type: GuestType, increment: boolean) => {
    const step = increment ? 1 : -1;
    if (type === 'adults') {
      setGuests(prev => Math.max(1, prev + step));
    } else if (type === 'children') {
      setChildren(prev => Math.max(0, prev + step));
    }
  }, []);

  const handleLogoClick = () => {
    // 홈페이지에서도 반응을 주기 위해 새로고침
    router.refresh();
  };

  return (
    <main className="w-full min-h-screen bg-white relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-24 pb-20">
      
      <div className="flex justify-center items-center mt-20 lg:mt-[84px] mb-3">
        <div 
          onClick={handleLogoClick}
          className="block hover:opacity-80 transition-opacity cursor-pointer"
        >
          <Image
            src="/icons/logo.svg"
            alt="snug stay logo"
            width={173}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </div>
      </div>

      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-20 mx-auto mb-2.5">
        <SearchCard
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          selectedDates={selectedDates}
          onDatesChange={setSelectedDates}
          guests={guests}
          children={children}
          onGuestChange={handleGuestChange}
        />
      </div>

      <Image
        alt="snug-banner"
        src="/images/snug-banner.png"
        width={350}
        height={170}
        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto mx-auto mt-2.5 rounded-xl object-cover"
        priority
      />

      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-8 mx-auto mt-4 bg-gray-100 rounded-full flex items-center justify-center">
        <p className="text-xs md:text-sm font-bold text-gray-900 tracking-tighter text-center px-2">
          Your first stay just got better. Welcome to snug stay!
        </p>
      </div>
      
      <div className="flex items-center justify-center gap-0.5 mt-1">
        <span className="text-[8px] md:text-[10px] font-bold text-black tracking-tighter">1</span>
        <span className="text-[8px] md:text-[10px] text-black/70 tracking-tighter">/</span>
        <span className="text-[8px] md:text-[10px] text-black/70 tracking-tighter">5</span>
      </div>
    </main>
  );
}