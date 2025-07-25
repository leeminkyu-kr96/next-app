"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { PlusCircle } from "lucide-react";
import { SearchCard } from "@/components/SearchCard";
import { GuestType } from "@/lib/utils";

export default function IndexPage() {
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

  return (
    <main className="mx-auto w-full bg-white relative overflow-hidden lg:max-w-[1312px] lg:h-[800px] px-4 sm:px-6 pt-24 pb-20">
      
      <div className="flex justify-center items-center mt-20 lg:mt-[84px] mb-3">
        <h1 className="font-bold text-orange-500 text-xl sm:text-2xl">
          snug stay
        </h1>
      </div>

      <div className="relative w-full sm:w-[350px] h-20 mx-auto mb-2.5">
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
        className="w-full sm:w-[350px] h-[170px] mx-auto mt-2.5 rounded-xl object-cover"
        priority
      />

      <div className="w-full sm:w-[350px] h-8 mx-auto mt-0 bg-gray-100 rounded-full flex items-center justify-center">
        <p className="text-xs font-bold text-gray-900 tracking-tighter text-center px-2">
          Your first stay just got better. Welcome to snug stay!
        </p>
      </div>
      
      <div className="flex items-center justify-center gap-0.5 mt-1">
        <span className="text-[8px] font-bold text-black tracking-tighter">1</span>
        <span className="text-[8px] text-black/70 tracking-tighter">/</span>
        <span className="text-[8px] text-black/70 tracking-tighter">5</span>
      </div>

      <button className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 w-14 h-14 bg-pink-400 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-pink-500 transition-colors">
        <PlusCircle size={24} />
      </button>
    </main>
  );
}