import React, { useState, useRef } from 'react';
import { Search, CalendarDays, Users } from 'lucide-react';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { formatDateRange, getTotalGuestsText, SearchMode, GuestType } from '@/lib/utils';
import { LocationSearch } from './LocationSearch';
import { DateSelector } from './DateSelector';
import { GuestSelector } from './GuestSelector';

interface SearchCardProps {
    searchQuery: string;
    onSearchQueryChange: (query: string) => void;
    selectedDates: Date[];
    onDatesChange: (dates: Date[]) => void;
    guests: number;
    children: number;
    onGuestChange: (type: GuestType, increment: boolean) => void;
}

export const SearchCard: React.FC<SearchCardProps> = ({
    searchQuery, onSearchQueryChange,
    selectedDates, onDatesChange,
    guests, children, onGuestChange,
}) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchMode, setSearchMode] = useState<SearchMode>('location');
    const searchRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(searchRef as React.RefObject<HTMLElement>, () => setIsSearchOpen(false));

    const openSearch = (mode: SearchMode) => {
        setIsSearchOpen(true);
        setSearchMode(mode);
    };

    const handleLocationSelect = (location: string) => {
        onSearchQueryChange(location);
        setSearchMode('dates');
    };

    const handleDateSelect = (newDate: Date) => {
        if (selectedDates.length >= 2) {
            onDatesChange([newDate]);
        } else {
            const newDates = [...selectedDates, newDate];
            onDatesChange(newDates);
            if (newDates.length === 2) {
                setSearchMode('guests');
            }
        }
    };

    return (
        <div ref={searchRef} className={`absolute top-0 left-0 w-full rounded-2xl border bg-white p-4 
                            shadow-none transition-all duration-300 ${isSearchOpen ? 'min-h-fit border-orange-500 z-30' : 'h-22'
            }`}>
            <div className="flex items-center gap-1 mb-4" onClick={() => openSearch('location')}>
                <Search size={12} className="text-gray-400" />
                {isSearchOpen && searchMode === 'location' ? (
                    <input
                        type="text"
                        placeholder="Find your snug stay"
                        value={searchQuery}
                        onChange={(e) => onSearchQueryChange(e.target.value)}
                        className="text-xs text-black tracking-tighter bg-transparent outline-none flex-1"
                        autoFocus
                    />
                ) : (
                    <p className={`text-xs tracking-tighter cursor-pointer ${searchQuery ? 'text-black' : 'text-gray-400'}`}>
                        {searchQuery || "Find your snug stay"}
                    </p>
                )}
            </div>

            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-1 cursor-pointer" onClick={() => openSearch('dates')}>
                    <CalendarDays size={12} className="text-gray-400" />
                    <p className="text-xs tracking-tighter">{formatDateRange(selectedDates)}</p>
                </div>
                <div className="flex items-center gap-1 cursor-pointer" onClick={() => openSearch('guests')}>
                    <Users size={12} className="text-gray-400" />
                    <p className="text-xs tracking-tighter">{getTotalGuestsText(guests, children)}</p>
                </div>
                <button className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                    <img src="/icons/search.svg" alt="Search" className="w-3.5 h-3.5" />
                </button>
            </div>

            {isSearchOpen && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                    {searchMode === 'location' && (
                        <LocationSearch query={searchQuery} onLocationSelect={handleLocationSelect} />
                    )}
                    {searchMode === 'dates' && (
                        <DateSelector selectedDates={selectedDates} onDateSelect={handleDateSelect} />
                    )}
                    {searchMode === 'guests' && (
                        <GuestSelector
                            guests={guests}
                            children={children}
                            onGuestChange={onGuestChange}
                            onDone={() => setIsSearchOpen(false)}
                        />
                    )}
                </div>
            )}
        </div>
    );
};