// 문화시설(contentTypeId: 14) - 인문 속해 있음

"use client";

import { DetailTourismIntro } from "@/app/tourism/[tourismId]/api/types/DetailTourismIntroTypes";
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
    <>
      {/* 문의 및 안내 */}
      <TourismInfoItem
        icon={
          <HandPlatter
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.infocenterculture}
        content="문의 및 안내"
      />

      {/* 쉬는날 */}
      <TourismInfoItem
        icon={
          <Star
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.restdateculture}
        content="쉬는날"
      />

      {/* 이용료 */}
      <TourismInfoItem
        icon={
          <HandCoins
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.usefee}
        content="이용료"
      />

      {/* 이용시간 */}
      <TourismInfoItem
        icon={
          <CalendarClock
            className="text-gray-400 hover:text-gray-600cursor-help"
            size={25}
          />
        }
        tooltip={item?.usetimeculture}
        content="이용시간"
      />

      {/* 주차시설 */}
      <TourismInfoItem
        icon={
          <CircleParking
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.parkingculture}
        content="주차시설"
      />
    </>
  );
}

export default memo(CulturalFacilityInfo);
