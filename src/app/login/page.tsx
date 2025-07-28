"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function LoginPage() {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <div className="w-full min-h-screen bg-white relative overflow-hidden">
      
      {/* Logo - positioned at very left edge */}
      <div 
        onClick={handleLogoClick}
        className="absolute top-4 left-4 md:top-8 md:left-8 z-50 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <Image
          src="/icons/logo_snug.svg"
          alt="snug stay logo"
          width={173}
          height={32}
          className="h-6 md:h-8 w-auto"
          priority
        />
      </div>

      {/* Container for centered content */}
      <div className="w-full max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Main logo (centered) */}
        <div className="flex justify-center pt-32 md:pt-[174px]">
          <Image
            src="/icons/login--logo.svg"
            alt="snug stay logo"
            width={240}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </div>

        {/* Login title */}
        <div className="flex justify-center mt-6 md:mt-10">
          <span className="font-bold text-xs text-black tracking-[-0.18px] text-center">
            Log In to your Account
          </span>
        </div>

        {/* Login form */}
        <div className="flex flex-col gap-2.5 items-center mt-5 mx-auto w-full max-w-[350px]">
          
          {/* Google login */}
          <div className="w-full h-8 relative">
            <div className="w-full h-8 bg-white rounded-[30px] border border-gray-300 flex items-center px-3 hover:border-gray-400 transition-colors cursor-pointer">
              <Image 
                src="/icons/login_logo_google.svg" 
                alt="Google" 
                width={14} 
                height={14} 
                className="h-4 w-4 flex-shrink-0"
              />
              <span className="flex-1 text-center text-[11px] text-gray-800">
                Continue with Google
              </span>
            </div>
          </div>

          {/* Apple login */}
          <div className="w-full h-8 relative">
            <div className="w-full h-8 bg-white rounded-[30px] border border-gray-300 flex items-center px-3 hover:border-gray-400 transition-colors cursor-pointer">
              <Image 
                src="/icons/login_logo_apple.svg" 
                alt="Apple" 
                width={14} 
                height={14} 
                className="h-4 w-4 flex-shrink-0"
              />
              <span className="flex-1 text-center text-[11px] text-gray-800">
                Continue with Apple
              </span>
            </div>
          </div>

          {/* KakaoTalk login */}
          <div className="w-full h-8 relative">
            <div className="w-full h-8 bg-white rounded-[30px] border border-gray-300 flex items-center px-3 hover:border-gray-400 transition-colors cursor-pointer">
              <Image 
                src="/icons/login_logo_kakao.svg" 
                alt="KakaoTalk" 
                width={14} 
                height={14} 
                className="h-4 w-4 flex-shrink-0"
              />
              <span className="flex-1 text-center text-[11px] text-gray-800">
                Continue with KakaoTalk
              </span>
            </div>
          </div>

          {/* Facebook login */}
          <div className="w-full h-8 relative">
            <div className="w-full h-8 bg-white rounded-[30px] border border-gray-300 flex items-center px-3 hover:border-gray-400 transition-colors cursor-pointer">
              <Image 
                src="/icons/login_logo_facebook.svg" 
                alt="Facebook" 
                width={14} 
                height={14} 
                className="h-4 w-4 flex-shrink-0"
              />
              <span className="flex-1 text-center text-[11px] text-gray-800">
                Continue with Facebook
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full max-w-[315px] h-[17px] relative flex items-center">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-4 text-[10px] font-medium text-black">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Email login */}
          <div className="w-full h-8 relative">
            <div className="w-full h-8 bg-white rounded-[30px] border border-gray-300 flex items-center px-3 hover:border-gray-400 transition-colors cursor-pointer">
              <Image 
                src="/icons/login_logo_email.svg" 
                alt="Email" 
                width={14} 
                height={14} 
                className="h-4 w-4 flex-shrink-0"
              />
              <span className="flex-1 text-center text-[11px] text-gray-800">
                Continue with E-mail
              </span>
            </div>
          </div>

          {/* Forgot password links */}
          <div className="h-6 w-full relative flex justify-center items-center gap-4">
            <Link href="#" className="text-[10px] font-medium text-gray-500 underline hover:text-gray-700">
              Forgot your ID?
            </Link>
            <Link href="#" className="text-[10px] font-medium text-gray-500 underline hover:text-gray-700">
              or Password?
            </Link>
          </div>
        </div>
        
        {/* Bottom spacing */}
        <div className="h-20"></div>
      </div>
    </div>
  );
}