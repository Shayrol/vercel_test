// 레포츠(contentTypeId: 28)

"use client";

import { DetailTourismIntro } from "@/app/[tourismId]/types/DetailTourismIntroTypes";
import CSSTooltip from "@/components/Tooltip";
import {
  CalendarClock,
  CircleParking,
  HandCoins,
  HandPlatter,
  Star,
} from "lucide-react";
import { memo } from "react";

type TourismAttractionInfoProps = {
  item?: DetailTourismIntro; // 데이터 없을 수도 있으니까 optional로
};

function LePortsInfo({ item }: TourismAttractionInfoProps) {
  return (
    <div className="grid grid-cols-4 justify-around items-start gap-4 text-sm text-[var(--text-main)] max-sm:grid-cols-2">
      {/* 문의 및 안내 */}
      <span className="flex flex-col justify-center items-center gap-1">
        <CSSTooltip content="문의 및 안내">
          <HandPlatter
            className="text-green-500 hover:text-green-600 cursor-help"
            size={20}
          />
        </CSSTooltip>
        <p
          className={`
            text-xs
            ${
              item?.infocenterleports
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.infocenterleports || "홈페이지 참고",
          }}
        />
      </span>

      {/* 쉬는날 */}
      <span className="flex flex-col justify-center items-center gap-1">
        <CSSTooltip content="쉬는날">
          <Star
            className="text-green-500 hover:text-green-600 cursor-help"
            size={20}
          />
        </CSSTooltip>
        <p
          className={`
            text-xs
            ${
              item?.restdateleports
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.restdateleports || "홈페이지 참고",
          }}
        />
      </span>

      {/* 이용료 */}
      <span className="flex flex-col justify-center items-center gap-1">
        <CSSTooltip content="이용료">
          <HandCoins
            className="text-green-500 hover:text-green-600 cursor-help"
            size={20}
          />
        </CSSTooltip>
        <p
          className={`
            text-xs
            ${
              item?.usefeeleports
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.usefeeleports || "홈페이지 참고",
          }}
        />
      </span>

      {/* 이용시간 */}
      <span className="flex flex-col justify-center items-center gap-1">
        <CSSTooltip content="이용시간">
          <CalendarClock
            className="text-green-500 hover:text-green-600 cursor-help"
            size={20}
          />
        </CSSTooltip>
        <p
          className={`
            text-xs
            ${
              item?.usetimeleports
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.usetimeleports || "홈페이지 참고",
          }}
        />
      </span>

      {/* 주차시설 */}
      <span className="flex flex-col justify-center items-center gap-1">
        <CSSTooltip content="주차시설">
          <CircleParking
            className="text-green-500 hover:text-green-600 cursor-help"
            size={20}
          />
        </CSSTooltip>
        <p
          className={`
            text-xs
            ${
              item?.parkingleports
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.parkingleports || "홈페이지 참고",
          }}
        />
      </span>
    </div>
  );
}

export default memo(LePortsInfo);
