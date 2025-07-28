import React from 'react';
import Image from 'next/image';

interface LoginButtonProps {
  iconSrc: string;
  provider: string;
  showRecent?: boolean;
  onClick?: () => void;
}

const buttonStyles = {
  container: "w-full h-10 sm:h-12 relative",
  button: "w-full h-full bg-white hover:bg-gray-50 rounded-full border border-gray-300 flex items-center px-4 sm:px-6 hover:border-gray-400 transition-all cursor-pointer",
  icon: "h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0",
  text: "flex-1 text-center text-sm sm:text-base text-gray-800",
  recentBadge: "w-14 sm:w-16 h-5 sm:h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0",
  recentText: "text-xs sm:text-sm font-medium text-gray-700"
};

export default function LoginButton({ iconSrc, provider, showRecent = false, onClick }: LoginButtonProps) {
  return (
    <div className={buttonStyles.container}>
      <div className={buttonStyles.button} onClick={onClick}>
        <Image 
          src={iconSrc}
          alt={`${provider} login`}
          width={24}
          height={24}
          className={buttonStyles.icon}
        />
        <span className={buttonStyles.text}>
          Continue with {provider}
        </span>
        {showRecent && (
          <div className={buttonStyles.recentBadge}>
            <span className={buttonStyles.recentText}>recent</span>
          </div>
        )}
      </div>
    </div>
  );
} 