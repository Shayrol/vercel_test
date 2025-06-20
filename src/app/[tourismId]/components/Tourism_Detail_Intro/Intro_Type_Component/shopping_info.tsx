// 쇼핑(contentTypeId: 38)

"use client";

import { DetailTourismIntro } from "@/app/[tourismId]/types/DetailTourismIntroTypes";
import CSSTooltip from "@/components/Tooltip";
import {
  Calendar1,
  CalendarClock,
  CircleParking,
  HandPlatter,
  Star,
} from "lucide-react";
import { memo } from "react";

type TourismAttractionInfoProps = {
  item?: DetailTourismIntro; // 데이터 없을 수도 있으니까 optional로
};

function ShoppingInfo({ item }: TourismAttractionInfoProps) {
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
              item?.infocentershopping
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.infocentershopping || "홈페이지 참고",
          }}
        />
      </span>

      {/* 장서는 날 */}
      <span className="flex flex-col justify-center items-center gap-1">
        <CSSTooltip content="장서는 날">
          <Calendar1
            className="text-green-500 hover:text-green-600 cursor-help"
            size={20}
          />
        </CSSTooltip>
        <p
          className={`
            text-xs
            ${
              item?.fairday
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.fairday || "홈페이지 참고",
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
              item?.restdateshopping
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.restdateshopping || "홈페이지 참고",
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
              item?.opentime
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.opentime || "홈페이지 참고",
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
              item?.parkingshopping
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.parkingshopping || "홈페이지 참고",
          }}
        />
      </span>
    </div>
  );
}

export default memo(ShoppingInfo);
