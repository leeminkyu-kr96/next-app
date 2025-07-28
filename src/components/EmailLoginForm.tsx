import React from 'react';

interface EmailLoginFormProps {
  onClose?: () => void;
}

export default function EmailLoginForm({ onClose }: EmailLoginFormProps) {
  return (
    <div className="flex flex-col gap-2 items-start w-full">
      {/* Email Input */}
      <div className="h-10 sm:h-12 w-full bg-white rounded-full border border-gray-300 relative">
        <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-xs sm:text-sm text-gray-400 pointer-events-none">
          Email Address
        </span>
      </div>

      {/* Password Input */}
      <div className="h-10 sm:h-12 w-full bg-white rounded-full border border-gray-300 relative">
        <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-xs sm:text-sm text-gray-400 pointer-events-none">
          Password
        </span>
      </div>

      {/* Stay Signed In Checkbox */}
      <div className="w-24 h-4 relative mt-1 ml-4">
        <div className="flex items-start gap-1.5">
          <div className="w-3.5 h-3.5 bg-gray-200 border border-gray-300 rounded-sm relative">
            {/* Checkbox icon placeholder */}
          </div>
          <span className="text-xs text-gray-600 leading-3">
            Stay signed in
          </span>
        </div>
      </div>
    </div>
  );
} 