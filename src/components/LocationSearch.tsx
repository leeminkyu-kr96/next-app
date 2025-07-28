import React from 'react';
import { popularSearches } from '@/lib/utils';

interface LocationSearchProps {
  query: string;
  onLocationSelect: (location: string) => void;
}

export const LocationSearch: React.FC<LocationSearchProps> = ({ query, onLocationSelect }) => {
  const filteredLocations = query
    ? popularSearches.filter(loc => loc.toLowerCase().includes(query.toLowerCase()))
    : popularSearches;

  return (
    <div>
      <p className="text-[10px] font-bold text-gray-600 tracking-tighter mb-2">
        {query ? 'Search Results' : 'Popular Searches'}
      </p>
      <div className="space-y-1 max-h-40 overflow-y-auto">
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location, index) => (
            <p
              key={index}
              className="text-xs text-gray-600 tracking-tighter cursor-pointer hover:text-orange-500 p-2 hover:bg-gray-50 rounded"
              onClick={() => onLocationSelect(location)}
            >
              {location}
            </p>
          ))
        ) : (
                           <p className="text-xs text-gray-400 tracking-tighter p-2">
                   No locations found for &ldquo;{query}&rdquo;
                 </p>
        )}
      </div>
    </div>
  );
};