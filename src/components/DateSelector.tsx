import React, { useState } from 'react';
import { getDaysInMonth, getFirstDayOfMonth, getMonthName } from '@/lib/utils';

interface DateSelectorProps {
    selectedDates: Date[];
    onDateSelect: (date: Date) => void;
}

export const DateSelector: React.FC<DateSelectorProps> = ({ selectedDates, onDateSelect }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const navigateMonth = (direction: 'prev' | 'next') => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
            return newDate;
        });
    };

    const isSameDay = (d1: Date, d2: Date) =>
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();

    const isDateSelected = (day: number) =>
        selectedDates.some(d => isSameDay(d, new Date(currentDate.getFullYear(), currentDate.getMonth(), day)));

    const isDateInRange = (day: number) => {
        if (selectedDates.length !== 2) return false;
        const dateToCheck = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        const [start, end] = selectedDates.sort((a, b) => a.getTime() - b.getTime());
        return dateToCheck > start && dateToCheck < end;
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <button onClick={() => navigateMonth('prev')} className="p-2 hover:bg-gray-100 rounded-full">←</button>
                <div className="text-sm font-semibold">{getMonthName(currentDate)} {currentDate.getFullYear()}</div>
                <button onClick={() => navigateMonth('next')} className="p-2 hover:bg-gray-100 rounded-full">→</button>
            </div>
            <div className="grid grid-cols-7 gap-1 mb-2 text-center text-sm text-gray-500">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => <div key={`${day}-${index}`}>{day}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: getFirstDayOfMonth(currentDate) }).map((_, i) => <div key={`empty-${i}`} />)}
                {Array.from({ length: getDaysInMonth(currentDate) }).map((_, i) => {
                    const day = i + 1;
                    const fullDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                    const isSelected = isDateSelected(day);
                    const isInRange = isDateInRange(day);
                    return (
                        <button
                            key={day}
                            onClick={() => onDateSelect(fullDate)}
                            className={`w-10 h-10 flex items-center justify-center text-sm rounded-full transition-colors ${isSelected ? 'bg-orange-500 text-white' :
                                    isInRange ? 'bg-orange-200 text-orange-500' : 'hover:bg-gray-100'
                                }`}
                        >
                            {day}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};