"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image"; // MUI Box 대신 Next/Image 사용
import {
  Search,
  CalendarDays,
  Users,
  Minus,
  Plus,
  PlusCircle,
} from "lucide-react"; // MUI Icons 대신 lucide-react 아이콘 사용

export default function IndexPage() {
  const [guests, setGuests] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchMode, setSearchMode] = useState<'location' | 'dates' | 'guests'>('location');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return [today, tomorrow];
  });
  
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchMode('location');
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const popularSearches = [
    "Seocho-dong, Gangnam-gu",
    "Yeoksam-dong, Gangnam-gu",
    "Apgujeong-dong, Gangnam-gu",
    "Seonneung-dong, Gangnam-gu",
    "Cheongdam-dong ,Gangnam-gu",
    "Yangjae-dong, Gangnam-gu",
    "Bangbae-dong, Gangnam-gu",
    "Sinsa-dong, Gangnam-gu",
    "Nonhyeon-dong, Gangnam-gu",
    "Dogok-dong, Gangnam-gu"
  ];

  // 달력 유틸리티 함수들
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getMonthName = (date: Date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[date.getMonth()];
  };

  const formatDateRange = (dates: Date[]) => {
    if (dates.length !== 2) return "Stay Dates";
    
    const formatSingleDate = (date: Date) => {
      const month = getMonthName(date);
      const day = date.getDate();
      const year = date.getFullYear().toString().slice(-2);
      return `${month} ${day}, ${year}`;
    };

    return `${formatSingleDate(dates[0])} - ${formatSingleDate(dates[1])}`;
  };

  const isDateSelected = (day: number) => {
    const dateToCheck = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return selectedDates.some(selectedDate => 
      selectedDate.getDate() === day && 
      selectedDate.getMonth() === currentDate.getMonth() &&
      selectedDate.getFullYear() === currentDate.getFullYear()
    );
  };

  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    if (selectedDates.length === 2) {
      setSelectedDates([newDate]);
    } else if (selectedDates.length === 1) {
      const existingDate = selectedDates[0];
      if (newDate < existingDate) {
        setSelectedDates([newDate, existingDate]);
        // 체크인/체크아웃 모두 선택 완료 시 게스트 선택 모드로 전환
        setSearchMode('guests');
      } else {
        setSelectedDates([existingDate, newDate]);
        // 체크인/체크아웃 모두 선택 완료 시 게스트 선택 모드로 전환
        setSearchMode('guests');
      }
    } else {
      setSelectedDates([newDate]);
    }
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const handleLocationSelect = (location: string) => {
    setSearchQuery(location);
    setSearchMode('dates');
  };

  const getFilteredLocations = () => {
    if (!searchQuery) return popularSearches;
    return popularSearches.filter(location => 
      location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleGuestChange = (type: 'adults' | 'children' | 'infants', increment: boolean) => {
    if (type === 'adults') {
      if (increment) {
        setGuests((prev) => prev + 1);
      } else if (guests > 1) {
        setGuests((prev) => prev - 1);
      }
    } else if (type === 'children') {
      if (increment) {
        setChildren((prev) => prev + 1);
      } else if (children > 0) {
        setChildren((prev) => prev - 1);
      }
    } else if (type === 'infants') {
      if (increment) {
        setInfants((prev) => prev + 1);
      } else if (infants > 0) {
        setInfants((prev) => prev - 1);
      }
    }
  };

  const getTotalGuests = () => {
    const parts = [];
    
    if (guests > 0) {
      parts.push(`${guests} adult${guests > 1 ? 's' : ''}`);
    }
    
    if (children > 0) {
      parts.push(`${children} child${children > 1 ? 'ren' : ''}`);
    }
    
    if (parts.length === 0) {
      return "1 adult";
    }
    
    return parts.join(', ');
  };

  return (
    // 메인 컨테이너 - 피그마의 main-container 변환
    <main className="mx-auto w-full bg-white relative overflow-hidden lg:max-w-[1312px] lg:h-[800px] px-4 sm:px-6 pt-24 pb-20">
      
      {/* 로고 영역 - 피그마의 중앙 로고 */}
      <div className="flex justify-center items-center mt-20 lg:mt-[84px] mb-3">
        <h1 className="font-bold text-orange-500 text-xl sm:text-2xl">
          snug stay
        </h1>
      </div>

      {/* 검색 카드 컨테이너 - 고정된 높이 유지 */}
      <div className="relative w-full sm:w-[350px] h-20 mx-auto mb-2.5">
        {/* 검색 카드 - 피그마의 검색 인터페이스 */}
        <div 
          ref={searchRef} 
          className={`absolute top-0 left-0 w-full rounded-2xl border border-gray-300 shadow-none p-4 transition-all duration-300 bg-white ${
            isSearchOpen ? 'min-h-fit border-orange-500 z-30' : 'h-20'
          }`}
        >
          {/* 검색 헤더 - 항상 표시 */}
          <div className="flex items-center gap-1 mb-4"
                          onClick={() => {
                            setIsSearchOpen(true);
                            setSearchMode('location');
                          }}>
            <Search size={12} className="text-gray-400" />
            {searchMode === 'location' && isSearchOpen ? (
              <input
                type="text"
                placeholder="Find your snug stay"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-xs text-black tracking-tighter bg-transparent outline-none flex-1"
                autoFocus
              />
            ) : (
              <p 
                className={`text-xs tracking-tighter cursor-pointer ${
                  searchQuery ? 'text-black' : 'text-gray-400'
                }`}

              >
                {searchQuery || "Find your snug stay"}
              </p>
            )}
          </div>

          {/* Stay Dates와 Guests - 항상 표시 */}
          <div className="flex justify-between items-center mb-2">
            {/* Stay Dates */}
            <div 
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => {
                setIsSearchOpen(true);
                setSearchMode('dates');
              }}
            >
              <CalendarDays size={12} className="text-gray-400" />
              <p className="text-xs tracking-tighter">
                {formatDateRange(selectedDates)}
              </p>
            </div>

            {/* Guests */}
            <div 
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => {
                setIsSearchOpen(true);
                setSearchMode('guests');
              }}
            >
              <Users size={12} className="text-gray-400" />
              <p className="text-xs tracking-tighter">
                {getTotalGuests()}
              </p>
            </div>
          </div>

          {/* 검색 확장 내용 */}
          {isSearchOpen && (
            <div className="mt-4">
              <div className="h-px bg-gray-100 mb-4" />
              
              {/* 위치 검색 모드 */}
              {searchMode === 'location' && (
                <div>
                  <p className="text-[10px] font-bold text-gray-600 tracking-tighter mb-2">
                    {searchQuery ? 'Search Results' : 'Popular Searches'}
                  </p>
                  
                  <div className="space-y-1 max-h-40 overflow-y-auto">
                    {getFilteredLocations().map((search, index) => (
                      <p 
                        key={index} 
                        className="text-xs text-gray-600 tracking-tighter cursor-pointer hover:text-orange-500 p-2 hover:bg-gray-50 rounded"
                        onClick={() => handleLocationSelect(search)}
                      >
                        {search}
                      </p>
                    ))}
                    {getFilteredLocations().length === 0 && searchQuery && (
                      <p className="text-xs text-gray-400 tracking-tighter p-2">
                        No locations found for "{searchQuery}"
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* 게스트 선택 모드 */}
              {searchMode === 'guests' && (
                <div>
                  <p className="text-[10px] font-bold text-gray-600 tracking-tighter mb-4">
                    Select Number of Guests
                  </p>
                  
                  {/* Adults */}
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div>
                      <p className="text-sm font-medium text-gray-800">Adults</p>
                      <p className="text-xs text-gray-500">Ages 13 or above</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleGuestChange('adults', false)}
                        className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors ${
                          guests > 1
                            ? 'border-gray-300 text-gray-600 hover:border-orange-500'
                            : 'border-gray-200 text-gray-300 cursor-not-allowed'
                        }`}
                        disabled={guests <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-medium w-8 text-center">{guests}</span>
                      <button
                        onClick={() => handleGuestChange('adults', true)}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-orange-500 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div>
                      <p className="text-sm font-medium text-gray-800">Children</p>
                      <p className="text-xs text-gray-500">Ages 0-12</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleGuestChange('children', false)}
                        className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors ${
                          children > 0
                            ? 'border-gray-300 text-gray-600 hover:border-orange-500'
                            : 'border-gray-200 text-gray-300 cursor-not-allowed'
                        }`}
                        disabled={children <= 0}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-medium w-8 text-center">{children}</span>
                      <button
                        onClick={() => handleGuestChange('children', true)}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-orange-500 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* 완료 버튼 */}
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="w-full mt-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
                  >
                    Done
                  </button>
                </div>
              )}

              {/* 날짜 선택 모드 */}
              {searchMode === 'dates' && (
                <div>
                  {/* 달력 네비게이션 */}
                  <div className="flex justify-between items-center mb-4">
                    <button 
                      onClick={() => navigateMonth('prev')}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      ←
                    </button>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-semibold">{getMonthName(currentDate)}</span>
                      <span className="text-sm font-semibold">{currentDate.getFullYear()}</span>
                    </div>
                    <button 
                      onClick={() => navigateMonth('next')}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      →
                    </button>
                  </div>

                  {/* 요일 헤더 */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                      <div key={index} className="w-10 h-10 flex items-center justify-center text-sm">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* 달력 그리드 */}
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {/* 이전 달의 빈 칸들 */}
                    {Array.from({ length: getFirstDayOfMonth(currentDate) }, (_, index) => (
                      <div key={`empty-${index}`} className="w-10 h-10"></div>
                    ))}
                    
                    {/* 현재 달의 날짜들 */}
                    {Array.from({ length: getDaysInMonth(currentDate) }, (_, index) => {
                      const day = index + 1;
                      const isSelected = isDateSelected(day);
                      
                      return (
                        <button
                          key={day}
                          onClick={() => handleDateSelect(day)}
                          className={`w-10 h-10 flex items-center justify-center text-sm rounded-full transition-colors ${
                            isSelected 
                              ? 'bg-orange-500 text-white' 
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}


        </div>
      </div>



      {/* 히어로 이미지 - 피그마의 배경 이미지 */}
      <Image
        alt="snug-banner"
        src="/images/snug-banner.png"
        width={350}
        height={170}
        className="w-full sm:w-[350px] h-[170px] mx-auto mt-2.5 rounded-xl object-cover"
      />

      {/* 웰컴 배너 - 피그마의 메시지 배너 */}
      <div className="w-full sm:w-[350px] h-8 mx-auto mt-0 bg-gray-100 rounded-full flex items-center justify-center">
        <p className="text-xs font-bold text-gray-900 tracking-tighter text-center px-2">
          Your first stay just got better. Welcome to snug stay!
        </p>
      </div>
      
      {/* 페이지 인디케이터 - 피그마의 1/5 표시 */}
      <div className="flex items-center justify-center gap-0.5 mt-1">
        <span className="text-[8px] font-bold text-black tracking-tighter">1</span>
        <span className="text-[8px] text-black/70 tracking-tighter">/</span>
        <span className="text-[8px] text-black/70 tracking-tighter">5</span>
      </div>

      {/* 플로팅 액션 버튼 - 피그마의 우하단 버튼 */}
      <button className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 w-14 h-14 bg-pink-400 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-pink-500 transition-colors">
        <PlusCircle size={24} />
      </button>
    </main>
  );
}