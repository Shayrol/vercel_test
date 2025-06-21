// 관광지(contentTypeId: 12) - 자연, 인문 속해 있음

"use client";

import { DetailTourismIntro } from "@/app/[tourismId]/types/DetailTourismIntroTypes";
import TourismInfoItem from "@/components/TourismInfoItem";
import { CalendarClock, CircleParking, HandPlatter, Star } from "lucide-react";
import { memo } from "react";

type TourismAttractionInfoProps = {
  item?: DetailTourismIntro; // 데이터 없을 수도 있으니까 optional로
};

function TourismAttractionInfo({ item }: TourismAttractionInfoProps) {
  return (
    <div className="flex flex-wrap justify-center items-start gap-4 text-sm text-[var(--text-main)]">
      {/* 문의 및 안내 */}
      <TourismInfoItem
        icon={
          <HandPlatter
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip="문의 및 안내"
        content={item?.infocenter}
      />
      {/* 이용시간 */}
      <TourismInfoItem
        icon={
          <CalendarClock
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip="이용시간"
        content={item?.usetime}
      />

      {/* 쉬는날 */}
      <TourismInfoItem
        icon={
          <Star
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip="쉬는날"
        content={item?.restdate}
      />

      {/* 주차시설 */}
      <TourismInfoItem
        icon={
          <CircleParking
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip="주차시설"
        content={item?.parking}
      />
    </div>
  );
}

export default memo(TourismAttractionInfo);
