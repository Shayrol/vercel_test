// 상세 페이지 추가 정보 모듈화
// components/TourismInfoItem.tsx
"use client";

import { ReactNode } from "react";

interface TourismInfoItemProps {
  icon: ReactNode;
  tooltip: string | undefined;
  content?: string;
}

export default function TourismInfoItem({
  icon,
  tooltip,
  content,
}: TourismInfoItemProps) {
  return (
    <span className="relative group flex flex-col justify-center items-center gap-2 min-w-30 w-full min-h-[100px] h-full overflow-visible">
      {/* <CSSTooltip content={tooltip}>{icon}</CSSTooltip> */}
      <div className="cursor-pointer touch-manipulation max-w-[50px] w-full flex justify-center">
        {icon}
      </div>
      <p
        className={`
          text-xs w-full text-center text-[var(--text-main)]
        `}
      >
        {content}
      </p>

      <div
        className="
          absolute top-[-9px] left-1/2 transform -translate-x-1/2 mt-2
          px-2 py-1 bg-gray-300 rounded  
          z-10 opacity-0 invisible 
          group-hover:opacity-100 group-hover:visible
          group-active:opacity-100 group-active:visible
          transition-all duration-200
          w-full h-full whitespace-normal break-words flex justify-center items-center
          text-black text-[0.7rem] overflow-y-auto
        "
        dangerouslySetInnerHTML={{
          __html: tooltip ? tooltip : "정보 없음",
        }}
      />
    </span>
  );
}
