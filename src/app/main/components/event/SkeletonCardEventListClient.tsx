"use client";

export default function SkeletonCard() {
  return (
    <div
      className="
      flex flex-col justify-start items-center w-full overflow-hidden 
      rounded-[8px] shadow-md bg-[var(--bg-content)] animate-pulse
      "
    >
      {/* 이미지 스켈레톤 */}
      <div className="relative w-full aspect-[16/9] bg-gray-300"></div>

      {/* 텍스트 스켈레톤 */}
      <div className="flex flex-col w-full p-3 gap-1 h-[70px]">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
}
