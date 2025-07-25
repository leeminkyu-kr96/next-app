// --- 타입 정의 (Type Definitions) ---
export type SearchMode = 'location' | 'dates' | 'guests';
export type GuestType = 'adults' | 'children';

// --- 상수 (Constants) ---
export const popularSearches = [
  "Seocho-dong, Gangnam-gu", "Yeoksam-dong, Gangnam-gu", "Apgujeong-dong, Gangnam-gu",
  "Seonneung-dong, Gangnam-gu", "Cheongdam-dong ,Gangnam-gu", "Yangjae-dong, Gangnam-gu",
  "Bangbae-dong, Gangnam-gu", "Sinsa-dong, Gangnam-gu", "Nonhyeon-dong, Gangnam-gu",
  "Dogok-dong, Gangnam-gu"
];

// --- 유틸리티 함수 (Utility Functions) ---
export const getDaysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
export const getFirstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();
export const getMonthName = (date: Date) => date.toLocaleString('en-US', { month: 'short' });

export const formatDateRange = (dates: Date[]) => {
  if (dates.length !== 2) return "Stay Dates";
  const formatSingleDate = (date: Date) => `${getMonthName(date)} ${date.getDate()}, ${date.getFullYear().toString().slice(-2)}`;
  const sortedDates = [...dates].sort((a, b) => a.getTime() - b.getTime());
  return `${formatSingleDate(sortedDates[0])} - ${formatSingleDate(sortedDates[1])}`;
};

export const getTotalGuestsText = (guests: number, children: number) => {
  const parts = [];
  if (guests > 0) parts.push(`${guests} adult${guests > 1 ? 's' : ''}`);
  if (children > 0) parts.push(`${children} child${children > 1 ? 'ren' : ''}`);
  return parts.length > 0 ? parts.join(', ') : '1 adult';
};