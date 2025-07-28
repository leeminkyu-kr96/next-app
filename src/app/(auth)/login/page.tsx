"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoginButton from "@/components/LoginButton";
import EmailLoginForm from "@/components/EmailLoginForm";

export default function LoginPage() {
  const router = useRouter();
  const [showEmailLogin, setShowEmailLogin] = useState(false);

  const handleEmailLoginClick = () => {
    setShowEmailLogin(true);
  };

  const handleSignUpClick = () => {
    router.push('/signup');
  };

  const loginProviders = [
    { provider: 'Google', iconSrc: '/icons/login_logo_google.svg', showRecent: true },
    { provider: 'Apple', iconSrc: '/icons/login_logo_apple.svg' },
    { provider: 'KakaoTalk', iconSrc: '/icons/login_logo_kakao.svg' },
    { provider: 'Facebook', iconSrc: '/icons/login_logo_facebook.svg' },
  ];

  return (
    <>
      {/* Container for centered content */}
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Main logo (centered) */}
        <div className="flex justify-center pt-32 md:pt-40 lg:pt-48">
          <Image
            src="/icons/login--logo.svg"
            alt="snug stay logo"
            width={240}
            height={32}
            className="h-8 md:h-9 lg:h-10 w-auto"
            priority
          />
        </div>

        {/* Login title */}
        <div className="flex justify-center mt-8 md:mt-10 lg:mt-12">
          <span className="text-sm md:text-base lg:text-lg font-bold text-black tracking-[-0.18px] text-center">
            Log In to your Account
          </span>
        </div>

        {/* Login form */}
        <div className="flex flex-col gap-3 md:gap-4 items-center mt-8 md:mt-10 lg:mt-12 mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg">
          {showEmailLogin ? (
            <>
              {/* Email Login Form */}
              <EmailLoginForm onClose={() => setShowEmailLogin(false)} />
              
              {/* Continue Button */}
              <button className="w-full h-10 sm:h-12 bg-orange-500 hover:bg-orange-600 rounded-full transition-colors">
                <span className="text-sm sm:text-base font-medium text-white">
                  Continue
                </span>
              </button>

              {/* Sign Up Button */}
              <button 
                onClick={handleSignUpClick}
                className="w-full h-10 sm:h-12 bg-white hover:bg-gray-50 rounded-full border border-gray-300 transition-colors"
              >
                <span className="text-sm sm:text-base font-medium text-gray-800">
                  Sign Up
                </span>
              </button>

              {/* Forgot password links */}
              <div className="h-8 w-full relative flex justify-center items-center gap-6">
                <Link href="#" className="text-xs md:text-sm font-medium text-gray-500 underline hover:text-gray-700">
                  Forgot your ID?
                </Link>
                <Link href="#" className="text-xs md:text-sm font-medium text-gray-500 underline hover:text-gray-700">
                  or Password?
                </Link>
              </div>

              {/* Divider */}
              <div className="w-full max-w-[90%] h-6 relative flex items-center my-2">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="px-6 text-xs md:text-sm font-medium text-black">or</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* Social Login Buttons */}
              <LoginButton
                iconSrc="/icons/login_logo_google.svg"
                provider="Google"
                showRecent={true}
              />

              <LoginButton
                iconSrc="/icons/login_logo_apple.svg"
                provider="Apple"
              />

              <LoginButton
                iconSrc="/icons/login_logo_kakao.svg"
                provider="KakaoTalk"
              />

              <LoginButton
                iconSrc="/icons/login_logo_facebook.svg"
                provider="Facebook"
              />
            </>
          ) : (
            <>
              {/* Social Login Buttons */}
              {loginProviders.map((provider) => (
                <LoginButton
                  key={provider.provider}
                  iconSrc={provider.iconSrc}
                  provider={provider.provider}
                  showRecent={provider.showRecent}
                />
              ))}

              {/* Divider */}
              <div className="w-full max-w-[90%] h-6 relative flex items-center my-2">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="px-6 text-xs md:text-sm font-medium text-black">or</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* Email login */}
              <LoginButton
                iconSrc="/icons/login_logo_email.svg"
                provider="E-mail"
                onClick={handleEmailLoginClick}
              />

              {/* Forgot password links */}
              <div className="h-8 w-full relative flex justify-center items-center gap-6 mt-4">
                <Link href="#" className="text-xs md:text-sm font-medium text-gray-500 underline hover:text-gray-700">
                  Forgot your ID?
                </Link>
                <Link href="#" className="text-xs md:text-sm font-medium text-gray-500 underline hover:text-gray-700">
                  or Password?
                </Link>
              </div>
            </>
          )}
        </div>
        
        {/* Bottom spacing */}
        <div className="h-24 md:h-32"></div>
      </div>
    </>
  );
}