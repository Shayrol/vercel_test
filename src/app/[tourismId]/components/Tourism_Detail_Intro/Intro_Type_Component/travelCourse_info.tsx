// 여행코스(contentTypeId: 25)

"use client";

import { DetailTourismIntro } from "@/app/[tourismId]/types/DetailTourismIntroTypes";
import { memo } from "react";
import {
  LandPlot,
  MapPinned,
  AlarmClockCheck,
  CalendarRange,
  HandPlatter,
} from "lucide-react";
import CSSTooltip from "@/components/Tooltip";

type TourismAttractionInfoProps = {
  item?: DetailTourismIntro; // 데이터 없을 수도 있으니까 optional로
};

function TravelCourseInfo({ item }: TourismAttractionInfoProps) {
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
              item?.infocentertourcourse
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.infocentertourcourse || "홈페이지 참고",
          }}
        />
      </span>

      {/* 코스 총 거리 */}
      <span className="flex flex-col justify-center items-center gap-1">
        <CSSTooltip content="코스 총 거리">
          <MapPinned
            className="text-blue-500 hover:text-blue-600 cursor-help transition-colors"
            size={20}
          />
        </CSSTooltip>
        <p
          className={`
            text-xs
            ${
              item?.distance
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.distance || "홈페이지 참고",
          }}
        />
      </span>

      {/* 코스 총 소요시간 */}
      <span className="flex flex-col justify-center items-center gap-2">
        <CSSTooltip content="코스 총 소요시간">
          <AlarmClockCheck
            className="text-orange-500 hover:text-orange-600 cursor-help"
            size={20}
          />
        </CSSTooltip>
        <p
          className={`
            text-xs
            ${
              item?.taketime
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.taketime || "홈페이지 참고",
          }}
        />
      </span>

      {/* 코스일정 */}
      <span className="flex flex-col justify-center items-center gap-1">
        <CSSTooltip content="코스일정">
          <CalendarRange
            className="text-purple-500 hover:text-purple-600 cursor-help"
            size={20}
          />
        </CSSTooltip>
        <p
          className={`
            text-xs
            ${
              item?.schedule
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.schedule || "홈페이지 참고",
          }}
        />
      </span>

      {/* 코스테마 */}
      <span className="flex flex-col justify-center items-center gap-1">
        <CSSTooltip content="코스테마">
          <LandPlot
            className="text-emerald-500 hover:text-emerald-600 cursor-help"
            size={20}
          />
        </CSSTooltip>
        <p
          className={`
            text-xs
            ${
              item?.theme
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.theme || "홈페이지 참고",
          }}
        />
      </span>
    </div>
  );
}

export default memo(TravelCourseInfo);
