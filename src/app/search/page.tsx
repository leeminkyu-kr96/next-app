"use client";

import React from "react";
import { Search, MapPin, Home, Users, Heart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function SearchPage() {
  const router = useRouter();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/');
  };

  // Mock data for accommodations
  const accommodations = [
    {
      id: 1,
      name: "Cheongdam-dong",
      provider: "Snug Stay",
      location: "Sinsa · Apgujeong · Hakdong Station",
      bedrooms: 2,
      bathrooms: 1,
      people: 4,
      originalPrice: 210,
      discountedPrice: 150,
      rating: 5.0,
      image: "/images/accommodation1.jpg",
      liked: false
    },
    {
      id: 2,
      name: "Apgujeong-dong",
      provider: "Stay Seoul",
      location: "Sinsa · Apgujeong · Hakdong Station",
      bedrooms: 2,
      bathrooms: 1,
      people: 4,
      originalPrice: null,
      discountedPrice: 115,
      rating: 5.0,
      image: "/images/accommodation2.jpg",
      liked: false
    },
    // Repeat similar data for other items
    {
      id: 3,
      name: "Cheongdam-dong",
      provider: "Snug Stay",
      location: "Sinsa · Apgujeong · Hakdong Station",
      bedrooms: 2,
      bathrooms: 1,
      people: 4,
      originalPrice: 210,
      discountedPrice: 150,
      rating: 5.0,
      image: "/images/accommodation3.jpg",
      liked: false
    },
    {
      id: 4,
      name: "Apgujeong-dong",
      provider: "Stay Seoul",
      location: "Sinsa · Apgujeong · Hakdong Station",
      bedrooms: 2,
      bathrooms: 1,
      people: 4,
      originalPrice: null,
      discountedPrice: 115,
      rating: 5.0,
      image: "/images/accommodation4.jpg",
      liked: false
    },
    {
      id: 5,
      name: "Cheongdam-dong",
      provider: "Snug Stay",
      location: "Sinsa · Apgujeong · Hakdong Station",
      bedrooms: 2,
      bathrooms: 1,
      people: 4,
      originalPrice: 210,
      discountedPrice: 150,
      rating: 5.0,
      image: "/images/accommodation5.jpg",
      liked: false
    },
    {
      id: 6,
      name: "Apgujeong-dong",
      provider: "Stay Seoul",
      location: "Sinsa · Apgujeong · Hakdong Station",
      bedrooms: 2,
      bathrooms: 1,
      people: 4,
      originalPrice: null,
      discountedPrice: 115,
      rating: 5.0,
      image: "/images/accommodation6.jpg",
      liked: false
    }
  ];

  const filters = [
    { label: "Filters", icon: true },
    { label: "Room Type", dropdown: true },
    { label: "Women Only" },
    { label: "Parking" }
  ];

  return (
    <div className="w-full min-h-screen bg-white relative overflow-hidden">
      
      {/* Logo in top-left corner for search page */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-50">
        <div 
          onClick={handleLogoClick}
          className="block hover:opacity-80 transition-opacity cursor-pointer"
        >
          <Image
            src="/icons/logo.svg"
            alt="snug stay logo"
            width={173}
            height={32}
            className="h-6 md:h-8 w-auto"
            priority
          />
        </div>
      </div>

      {/* Main Search Bar */}
      <div className="w-full px-4 md:px-8 lg:px-12 h-11 relative z-10 mt-6 mx-auto">
        <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-11 bg-white rounded-full border border-gray-300 mx-auto overflow-hidden relative">
          
          {/* Search Fields Container */}
          <div className="flex items-center h-full px-4">
            
            {/* Search Field */}
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <Image 
                src="/icons/search.svg" 
                alt="search" 
                width={12} 
                height={12} 
                className="h-3 w-3 flex-shrink-0"
              />
              <span className="text-xs text-gray-400 tracking-tight truncate">
                Find your snug stay
              </span>
            </div>
            
            {/* Dates Field - Hidden on mobile */}
            <div className="hidden sm:flex items-center gap-2 flex-1 min-w-0 px-2">
              <MapPin size={12} className="text-gray-400 flex-shrink-0" />
              <span className="text-xs text-gray-400 tracking-tight truncate">
                Stay Dates
              </span>
            </div>
            
            {/* Guests Field - Hidden on small screens */}
            <div className="hidden lg:flex items-center gap-2 flex-1 min-w-0 px-2">
              <Users size={12} className="text-gray-400 flex-shrink-0" />
              <span className="text-xs text-gray-400 tracking-tight truncate">
                Guests
              </span>
            </div>
            
            {/* Search Button */}
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer flex-shrink-0 ml-2">
              <Image 
                src="/icons/search.svg" 
                alt="search" 
                width={14} 
                height={14} 
                className="h-3.5 w-3.5 brightness-0 invert"
              />
            </div>
            
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-4 md:px-8 lg:px-12 mt-8">
        
        {/* Left Panel - Filters and Results */}
        <div className="w-full lg:w-1/2 xl:w-2/5">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2.5 items-center mb-4">
            {filters.map((filter, index) => (
              <div key={index} className="flex items-center gap-1.5 bg-white rounded-full border border-gray-300 px-3 py-1.5">
                {filter.icon && (
                  <Image 
                    src="/icons/search.svg" 
                    alt="filter" 
                    width={14} 
                    height={14} 
                    className="h-3.5 w-3.5"
                  />
                )}
                <span className="text-xs text-gray-800 tracking-tight">{filter.label}</span>
                {filter.dropdown && <span className="text-xs text-gray-600">▼</span>}
              </div>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-1.5 mb-4">
            <span className="text-xs text-gray-800 tracking-tight">Recommended</span>
            <span className="text-xs text-gray-600">▼</span>
          </div>

          {/* Results Count */}
          <span className="text-xs text-gray-600 tracking-tight block mb-4">
            20 Places to Stay in Gangnam
          </span>

          {/* Accommodation List */}
          <div className="flex flex-col gap-2.5 max-h-96 lg:max-h-[600px] overflow-y-auto">
            {accommodations.map((item) => (
              <div key={item.id} className="flex gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                {/* Image */}
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-300 rounded-lg flex-shrink-0 overflow-hidden relative">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                    <Home size={20} className="text-gray-500" />
                  </div>
                  {/* Heart Icon */}
                  <div className="absolute top-2 right-2">
                    <Heart size={14} className="text-white fill-transparent hover:fill-red-500 cursor-pointer" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Title and Rating */}
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center gap-1 min-w-0">
                      <span className="text-sm font-bold text-gray-800 tracking-tight truncate">
                        {item.name}
                      </span>
                      <span className="w-0.5 h-0.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                      <span className="text-xs text-gray-600 tracking-tight truncate">
                        {item.provider}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <Image 
                        src="/icons/star.svg" 
                        alt="rating" 
                        width={12} 
                        height={12} 
                        className="h-3 w-3"
                      />
                      <span className="text-xs font-semibold text-gray-800 tracking-tight">
                        {item.rating}
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1 mb-1">
                    <MapPin size={12} className="text-gray-400 flex-shrink-0" />
                    <span className="text-xs text-gray-600 tracking-tight truncate">
                      {item.location}
                    </span>
                  </div>

                  {/* Room Details */}
                  <div className="flex items-center gap-1 mb-2">
                    <Home size={12} className="text-gray-400 flex-shrink-0" />
                    <div className="flex items-center gap-1 text-xs text-gray-600 tracking-tight">
                      <span>{item.bedrooms} Bedrooms</span>
                      <span>·</span>
                      <span>{item.bathrooms} Bathroom</span>
                      <span className="hidden sm:inline">·</span>
                      <span className="hidden sm:inline">{item.people} People</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-1">
                    {item.originalPrice && (
                      <span className="text-xs text-gray-400 line-through tracking-tight">
                        ${item.originalPrice}
                      </span>
                    )}
                    <span className="text-sm font-bold text-orange-500 tracking-tight">
                      ${item.discountedPrice}
                    </span>
                    <span className="text-xs text-gray-600 tracking-tight">/ Week</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Map */}
        <div className="w-full lg:w-1/2 xl:w-3/5 h-64 lg:h-[600px] xl:h-[700px] relative">
          {/* Map Toggle Buttons */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <MapPin size={14} className="text-gray-600" />
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <Home size={14} className="text-gray-600" />
            </div>
          </div>

          {/* Map Container */}
          <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 relative rounded-lg overflow-hidden">
            {/* Price Markers */}
            <div className="absolute top-[20%] left-[20%] bg-amber-800 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-md cursor-pointer hover:bg-amber-900 transition-colors">
              $150
            </div>
            <div className="absolute top-[45%] left-[50%] bg-amber-800 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-md cursor-pointer hover:bg-amber-900 transition-colors">
              $160
            </div>
            <div className="absolute top-[40%] left-[75%] bg-amber-800 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-md cursor-pointer hover:bg-amber-900 transition-colors">
              $240
            </div>
            <div className="absolute top-[60%] left-[80%] bg-amber-800 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-md cursor-pointer hover:bg-amber-900 transition-colors">
              $350
            </div>
            <div className="absolute top-[65%] left-[25%] bg-amber-800 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-md cursor-pointer hover:bg-amber-900 transition-colors">
              $210
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 