import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface GuestCounterProps {
  title: string;
  subtitle: string;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  isDecrementDisabled: boolean;
}

export const GuestCounter: React.FC<GuestCounterProps> = ({ title, subtitle, count, onIncrement, onDecrement, isDecrementDisabled }) => (
  <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
    <div>
      <p className="text-sm font-medium text-gray-800">{title}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
    <div className="flex items-center gap-3">
      <button
        onClick={onDecrement}
        disabled={isDecrementDisabled}
        className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors ${
          isDecrementDisabled
            ? 'border-gray-200 text-gray-300 cursor-not-allowed'
            : 'border-gray-300 text-gray-600 hover:border-orange-500'
        }`}
      >
        <Minus size={14} />
      </button>
      <span className="text-sm font-medium w-8 text-center">{count}</span>
      <button
        onClick={onIncrement}
        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-orange-500 transition-colors"
      >
        <Plus size={14} />
      </button>
    </div>
  </div>
);