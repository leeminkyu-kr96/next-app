import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
      <button className="w-12 h-12 md:w-14 md:h-14 bg-pink-400 rounded-full shadow-lg flex items-center justify-center hover:bg-pink-500 transition-colors">
        <Image 
          src="/icons/chat.svg" 
          alt="Chat" 
          width={20} 
          height={20} 
          className="h-5 w-5 md:h-6 md:w-6"
        />
      </button>
    </footer>
  );
} 