export function formatDateString(dateStr: string): string {
  if (!/^\d{8}$/.test(dateStr)) return "";

  const year = dateStr.slice(0, 4);
  const month = dateStr.slice(4, 6);
  const day = dateStr.slice(6, 8);

  return `${year}년 ${month}월 ${day}일`;
}
