import React from 'react';
import { GuestCounter } from './GuestCounter';
import { GuestType } from '@/lib/utils';

interface GuestSelectorProps {
  guests: number;
  children: number;
  onGuestChange: (type: GuestType, increment: boolean) => void;
  onDone: () => void;
}

export const GuestSelector: React.FC<GuestSelectorProps> = ({ guests, children, onGuestChange, onDone }) => (
  <div>
    <p className="text-[10px] font-bold text-gray-600 tracking-tighter mb-2">Select Number of Guests</p>
    <GuestCounter
      title="Adults"
      subtitle="Ages 13 or above"
      count={guests}
      onIncrement={() => onGuestChange('adults', true)}
      onDecrement={() => onGuestChange('adults', false)}
      isDecrementDisabled={guests <= 1}
    />
    <GuestCounter
      title="Children"
      subtitle="Ages 0-12"
      count={children}
      onIncrement={() => onGuestChange('children', true)}
      onDecrement={() => onGuestChange('children', false)}
      isDecrementDisabled={children <= 0}
    />
    <button onClick={onDone} className="w-full mt-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
      Done
    </button>
  </div>
);