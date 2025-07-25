import React from "react";
import { Globe, User } from "lucide-react"; // lucide-react에서 아이콘을 가져옵니다.

export default function Header() {
  return (
    // 시맨틱한 <header> 태그를 사용합니다.
    <header className="absolute top-8 right-8 z-10 flex items-center gap-2">
      {/* 언어 설정 버튼 */}
      <button
        type="button"
        aria-label="언어 설정"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1f1f1] hover:bg-gray-200 transition-colors"
      >
        <Globe className="h-3.5 w-3.5 text-gray-700" strokeWidth={2} />
      </button>

      {/* 사용자 메뉴 버튼 */}
      <button
        type="button"
        aria-label="사용자 메뉴"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1f1f1] hover:bg-gray-200 transition-colors"
      >
        <User className="h-3.5 w-3.5 text-gray-700" strokeWidth={2} />
      </button>
    </header>
  );
}