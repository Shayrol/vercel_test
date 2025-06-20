// 숙박(contentTypeId: 32)

"use client";

import { DetailTourismIntro } from "@/app/[tourismId]/types/DetailTourismIntroTypes";
import CSSTooltip from "@/components/Tooltip";
import {
  CircleParking,
  DoorClosedLocked,
  DoorOpen,
  HandPlatter,
  Hotel,
  PersonStanding,
  PiggyBank,
} from "lucide-react";
import { memo } from "react";

type TourismAttractionInfoProps = {
  item?: DetailTourismIntro; // 데이터 없을 수도 있으니까 optional로
};

function LodgingInfo({ item }: TourismAttractionInfoProps) {
  const isBarbecueAvailable = (value: string | null | undefined): boolean => {
    const availableValues = ["1", "가능", "true", "TRUE", "True"];
    return availableValues.includes(value?.trim() ?? "");
  };

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
              item?.infocenterlodging
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.infocenterlodging || "홈페이지 참고",
          }}
        />
      </span>

      {/* 수용 가능인원 */}
      <span className="flex flex-col justify-center items-center gap-1">
        <CSSTooltip content="수용 가능인원">
          <PersonStanding
            className="text-blue-500 hover:text-blue-600 cursor-help transition-colors"
            size={20}
          />
        </CSSTooltip>
        <p
          className={`
            text-xs
            ${
              item?.accomcountlodging
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.accomcountlodging || "홈페이지 참고",
          }}
        />
      </span>

      {/* 객실수 */}
      <span className="flex flex-col justify-center items-center gap-1">
        <CSSTooltip content="객실수">
          <Hotel
            className="text-blue-500 hover:text-blue-600 cursor-help transition-colors"
            size={20}
          />
        </CSSTooltip>
        <p
          className={`
            text-xs
            ${
              item?.roomcount
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.roomcount || "홈페이지 참고",
          }}
        />
      </span>

      {/* 객실유형 */}
      <span className="flex flex-col justify-center items-center gap-1">
        <CSSTooltip content="객실유형">
          <Hotel
            className="text-blue-500 hover:text-blue-600 cursor-help transition-colors"
            size={20}
          />
        </CSSTooltip>
        <p
          className={`
            text-xs
            ${
              item?.roomtype
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.roomtype || "홈페이지 참고",
          }}
        />
      </span>

      {/* 주차시설 */}
      <span className="flex flex-col justify-center items-center gap-1">
        <CSSTooltip content="주차시설">
          <CircleParking
            className="text-blue-500 hover:text-blue-600 cursor-help transition-colors"
            size={20}
          />
        </CSSTooltip>
        <p
          className={`
            text-xs
            ${
              item?.parkinglodging
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.parkinglodging || "홈페이지 참고",
          }}
        />
      </span>

      {/* 입실시간 */}
      <span className="flex flex-col justify-center items-center gap-1">
        <CSSTooltip content="입실시간">
          <DoorOpen
            className="text-blue-500 hover:text-blue-600 cursor-help transition-colors"
            size={20}
          />
        </CSSTooltip>
        <p
          className={`
            text-xs
            ${
              item?.checkintime
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.checkintime || "홈페이지 참고",
          }}
        />
      </span>

      {/* 퇴실시간 */}
      <span className="flex flex-col justify-center items-center gap-1">
        <CSSTooltip content="퇴실시간">
          <DoorClosedLocked
            className="text-blue-500 hover:text-blue-600 cursor-help transition-colors"
            size={20}
          />
        </CSSTooltip>
        <p
          className={`
            text-xs
            ${
              item?.checkouttime
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.checkouttime || "홈페이지 참고",
          }}
        />
      </span>

      {/* 바비큐장 */}
      <span className="flex flex-col justify-center items-center gap-1">
        <CSSTooltip content="바비큐장">
          <PiggyBank
            className="text-blue-500 hover:text-blue-600 cursor-help transition-colors"
            size={20}
          />
        </CSSTooltip>
        <p
          className={`
            text-xs
            ${
              item?.barbecue
                ? "text-[var(--text-main)]"
                : "text-[var(--text-secondary)]"
            }
          `}
          dangerouslySetInnerHTML={{
            __html: item?.barbecue
              ? isBarbecueAvailable(item.barbecue)
                ? "가능"
                : "불가능"
              : "홈페이지 참고",
          }}
        />
      </span>
    </div>
  );
}

export default memo(LodgingInfo);
