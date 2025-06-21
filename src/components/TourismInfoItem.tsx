// 상세 페이지 추가 정보 모듈화
"use client";
// components/TourismInfoItem.tsx

import CSSTooltip from "@/components/Tooltip";
import { ReactNode } from "react";

interface TourismInfoItemProps {
  icon: ReactNode;
  tooltip: string;
  content?: string;
}

export default function TourismInfoItem({
  icon,
  tooltip,
  content,
}: TourismInfoItemProps) {
  return (
    <span className="flex flex-col justify-center items-center gap-2 w-30">
      <CSSTooltip content={tooltip}>{icon}</CSSTooltip>
      <p
        className={`
          text-xs w-full text-center
          ${
            content ? "text-[var(--text-main)]" : "text-[var(--text-secondary)]"
          }
        `}
        dangerouslySetInnerHTML={{
          __html: content || "홈페이지 참고",
        }}
      />
    </span>
  );
}
