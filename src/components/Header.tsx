"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleUserMenuClick = () => {
    if (isLoggedIn) {
      router.push("/mypage");
    } else {
      router.push("/login");
    }
  };

  return (
    <header className="absolute top-8 right-8 z-50 flex items-center gap-2">
      <button
        type="button"
        aria-label="사용자 메뉴"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1f1f1] hover:bg-gray-200 transition-colors"
        onClick={handleUserMenuClick}
      >
        <Image
          src="/icons/user.svg"
          alt="사용자 메뉴"
          width={14}
          height={14}
          className="h-3.5 w-3.5"
        />
      </button>

      <button
        type="button"
        aria-label="언어 설정"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1f1f1] hover:bg-gray-200 transition-colors"
      >
        <Image
          src="/icons/wikis.svg"
          alt="언어 설정"
          width={14}
          height={14}
          className="h-3.5 w-3.5"
        />
      </button>

    </header>
  );
}