"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    countryCode: '',
    phoneNumber: '',
    agreePersonalInfo: false,
    agreeMarketing: false
  });

  const handleBackClick = () => {
    router.push('/login');
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <>
      {/* Container for centered content */}
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Header with back button and title */}
        <div className="w-full max-w-sm sm:max-w-md mx-auto mt-10 md:mt-12">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <button 
              onClick={handleBackClick}
              className="w-4 h-4 shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
            >
              <Image 
                src="/icons/Vector398.svg" 
                alt="back" 
                width={16} 
                height={16} 
                className="w-full h-full transform -scale-y-100"
              />
            </button>
            <span className="text-sm md:text-base font-bold text-black tracking-[-0.18px]">
              Create your Account
            </span>
          </div>
        
          {/* Signup form */}
          <div className="flex flex-col gap-3 md:gap-4">
            
            {/* Email Address */}
            <div className="h-10 sm:h-12 w-full bg-white rounded-full border border-gray-300 relative">
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full h-full px-4 sm:px-5 text-sm sm:text-base text-gray-800 rounded-full outline-none placeholder:text-gray-400"
              />
            </div>

            {/* Password */}
            <div className="w-full">
              <div className="h-10 sm:h-12 w-full bg-white rounded-full border border-gray-300 relative">
                <input
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full h-full px-4 sm:px-5 text-sm sm:text-base text-gray-800 rounded-full outline-none placeholder:text-gray-400"
                />
              </div>
              <span className="text-xs text-gray-400 block mt-1 ml-4">
                At least 8 characters, case-sensitive
              </span>
            </div>

            {/* Confirm Password */}
            <div className="w-full">
              <div className="h-10 sm:h-12 w-full bg-white rounded-full border border-gray-300 relative">
                <input
                  type="password"
                  placeholder="Password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="w-full h-full px-4 sm:px-5 text-sm sm:text-base text-gray-800 rounded-full outline-none placeholder:text-gray-400"
                />
              </div>
              <span className="text-xs text-gray-400 block mt-1 ml-4">
                Re-enter your password
              </span>
            </div>

            {/* Personal Information Section */}
            <div className="w-full mt-4">
              <span className="text-xs font-medium text-gray-800 block mb-2 ml-2">
                Personal Information
              </span>

              {/* First Name & Last Name */}
              <div className="flex gap-2 mb-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full h-10 sm:h-12 px-4 sm:px-5 text-sm sm:text-base text-gray-800 rounded-full border border-gray-300 outline-none placeholder:text-gray-400"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full h-10 sm:h-12 px-4 sm:px-5 text-sm sm:text-base text-gray-800 rounded-full border border-gray-300 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              <span className="text-xs text-gray-400 block mb-4 ml-2 leading-relaxed">
                Make sure this matches the name on your government ID.<br />
                If you go by another name, you can add a preferred first name.
              </span>

              {/* Country Code & Phone Number */}
              <div className="flex gap-2 mb-4">
                <div className="w-32">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => handleInputChange('countryCode', e.target.value)}
                    className="w-full h-10 sm:h-12 px-4 text-sm sm:text-base text-gray-800 rounded-full border border-gray-300 outline-none bg-white"
                  >
                    <option value="">Country Code</option>
                    <option value="+82">+82 (KR)</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+81">+81 (JP)</option>
                  </select>
                </div>
                <div className="flex-1">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    className="w-full h-10 sm:h-12 px-4 sm:px-5 text-sm sm:text-base text-gray-800 rounded-full border border-gray-300 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-300 my-2"></div>

            {/* Agreement Checkboxes */}
            <div className="w-full space-y-2">
              {/* Personal Information Agreement */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreePersonalInfo"
                  checked={formData.agreePersonalInfo}
                  onChange={(e) => handleInputChange('agreePersonalInfo', e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
                <label htmlFor="agreePersonalInfo" className="text-xs text-gray-600 cursor-pointer">
                  I agree to the collection and use of my personal information.
                </label>
              </div>

              {/* Privacy Policy Text */}
              <div className="text-xs text-gray-400 leading-relaxed ml-7">
                PERSONAL INFORMATION WE COLLECT Information needed to use the Snug platform. 
                We collect personal information about you when you use the Snug platform. 
                Without it, we may not be able to provide all services requested. This information includes:
                <br />
                <span className="underline cursor-pointer hover:text-gray-600">
                  Show more Privacy Policy Agreement
                </span>
              </div>

              {/* Marketing Agreement */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeMarketing"
                  checked={formData.agreeMarketing}
                  onChange={(e) => handleInputChange('agreeMarketing', e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
                <label htmlFor="agreeMarketing" className="text-xs text-gray-600 cursor-pointer">
                  I want to receive marketing emails. (optional)
                </label>
              </div>
            </div>

            {/* Continue Button */}
            <button className="w-full h-10 sm:h-12 bg-orange-500 hover:bg-orange-600 rounded-full transition-colors mt-6">
              <span className="text-sm sm:text-base font-medium text-white">
                Continue
              </span>
            </button>

            {/* Bottom spacing */}
            <div className="h-8"></div>
          </div>
        </div>
      </div>
    </>
  );
} 