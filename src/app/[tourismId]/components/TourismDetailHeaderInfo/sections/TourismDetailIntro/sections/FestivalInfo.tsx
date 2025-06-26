// 행사/공연/축제(contentTypeId: 15) - 인문 속해 있음

"use client";

import { DetailTourismIntro } from "@/app/[tourismId]/api/types/DetailTourismIntroTypes";
import { formatDateString } from "@/app/main/utils/formatDate";
import TourismInfoItem from "@/components/TourismInfoItem";
import {
  CalendarCheck2,
  CalendarClock,
  CalendarX2,
  HandCoins,
  HandPlatter,
  LandPlot,
} from "lucide-react";
import { memo } from "react";

type TourismAttractionInfoProps = {
  item?: DetailTourismIntro; // 데이터 없을 수도 있으니까 optional로
};

function FestivalInfo({ item }: TourismAttractionInfoProps) {
  return (
    <div className="flex flex-wrap justify-center items-start gap-4 text-sm text-[var(--text-main)]">
      {/* 주최자 연락처 */}
      <TourismInfoItem
        icon={
          <HandPlatter
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip="주최자 연락처"
        content={item?.sponsor1tel}
      />

      {/* 행사 시작일 */}
      <TourismInfoItem
        icon={
          <CalendarCheck2
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip="행사 시작일"
        content={formatDateString(item?.eventstartdate ?? "")}
      />

      {/* 행사 종료일 */}
      <TourismInfoItem
        icon={
          <CalendarX2
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip="행사 종료일"
        content={formatDateString(item?.eventenddate ?? "")}
      />

      {/* 공연시간 */}
      <TourismInfoItem
        icon={
          <CalendarClock
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip="공연시간"
        content={item?.playtime}
      />

      {/* 이용료 */}
      <TourismInfoItem
        icon={
          <HandCoins
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip="이용료"
        content={item?.usetimefestival}
      />

      {/* 행사장소 */}
      <TourismInfoItem
        icon={
          <LandPlot
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip="행사장소"
        content={item?.eventplace}
      />
    </div>
  );
}

export default memo(FestivalInfo);
