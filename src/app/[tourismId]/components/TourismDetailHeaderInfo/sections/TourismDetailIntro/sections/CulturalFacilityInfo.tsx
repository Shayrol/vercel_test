// 문화시설(contentTypeId: 14) - 인문 속해 있음

"use client";

import { DetailTourismIntro } from "@/app/[tourismId]/api/types/DetailTourismIntroTypes";
import TourismInfoItem from "@/components/TourismInfoItem";
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

function CulturalFacilityInfo({ item }: TourismAttractionInfoProps) {
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
        content={item?.infocenterculture}
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
        content={item?.restdateculture}
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
        content={item?.usefee}
      />

      {/* 이용시간 */}
      <TourismInfoItem
        icon={
          <CalendarClock
            className="text-gray-400 hover:text-gray-600cursor-help"
            size={25}
          />
        }
        tooltip="이용시간"
        content={item?.usetimeculture}
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
        content={item?.parkingculture}
      />
    </div>
  );
}

export default memo(CulturalFacilityInfo);
