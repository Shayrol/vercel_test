// 음식점(contentTypeId: 39)

"use client";

import { DetailTourismIntro } from "@/app/[tourismId]/types/DetailTourismIntroTypes";
import CSSTooltip from "@/components/Tooltip";
import {
  CalendarClock,
  CircleParking,
  HandPlatter,
  Star,
  Utensils,
} from "lucide-react";
import { memo } from "react";

type TourismAttractionInfoProps = {
  item?: DetailTourismIntro; // 데이터 없을 수도 있으니까 optional로
};

function RestaurantInfo({ item }: TourismAttractionInfoProps) {
  return (
    <div className="grid grid-cols-4 justify-around items-start gap-4 text-sm text-[var(--text-main)] max-sm:grid-cols-2">
      {/* <p>문의 및 안내: {item?.infocenterfood}</p> */}
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
                    item?.infocenterfood
                      ? "text-[var(--text-main)]"
                      : "text-[var(--text-secondary)]"
                  }
                `}
          dangerouslySetInnerHTML={{
            __html: item?.infocenterfood || "홈페이지 참고",
          }}
        />
      </span>

      {/* 대표메뉴 */}
      <span className="flex flex-col justify-center items-center gap-1">
        <CSSTooltip content="대표메뉴">
          <Utensils
            className="text-green-500 hover:text-green-600 cursor-help"
            size={20}
          />
        </CSSTooltip>
        <p
          className={`
            text-xs
            ${
              item?.firstmenu
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.firstmenu || "홈페이지 참고",
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
                    item?.restdatefood
                      ? "text-[var(--text-main)]"
                      : "text-[var(--text-secondary)]"
                  }
                `}
          dangerouslySetInnerHTML={{
            __html: item?.restdatefood || "홈페이지 참고",
          }}
        />
      </span>

      {/* 영업시간 */}
      <span className="flex flex-col justify-center items-center gap-1">
        <CSSTooltip content="영업시간">
          <CalendarClock
            className="text-green-500 hover:text-green-600 cursor-help"
            size={20}
          />
        </CSSTooltip>
        <p
          className={`
                  text-xs
                  ${
                    item?.opentimefood
                      ? "text-[var(--text-main)]"
                      : "text-[var(--text-secondary)]"
                  }
                `}
          dangerouslySetInnerHTML={{
            __html: item?.opentimefood || "홈페이지 참고",
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
                    item?.parkingfood
                      ? "text-[var(--text-main)]"
                      : "text-[var(--text-secondary)]"
                  }
                `}
          dangerouslySetInnerHTML={{
            __html: item?.parkingfood || "홈페이지 참고",
          }}
        />
      </span>
    </div>
  );
}

export default memo(RestaurantInfo);
