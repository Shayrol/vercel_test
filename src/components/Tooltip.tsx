// CSSTooltip.tsx - CSS hover + active 조합
"use client";

export default function CSSTooltip({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string | undefined | null;
}) {
  return (
    <div className="relative inline-block group">
      <div className="cursor-pointer touch-manipulation">{children}</div>

      {/* 툴팁 - hover와 active 상태 모두 적용 */}
      <div
        className="
          absolute top-full left-1/2 transform -translate-x-1/2 mt-2 
          px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap 
          z-10 opacity-0 invisible 
          group-hover:opacity-100 group-hover:visible
          group-active:opacity-100 group-active:visible
          transition-all duration-200
        "
        dangerouslySetInnerHTML={{
          __html: content ? content : "정보 없음",
        }}
      />
    </div>
  );
}
