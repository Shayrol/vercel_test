// 음식점(contentTypeId: 39)

"use client";

import { DetailTourismIntro } from "@/app/tourism/[tourismId]/api/types/DetailTourismIntroTypes";
import TourismInfoItem from "@/components/TourismInfoItem";
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
    <>
      {/* 문의 및 안내 */}
      <TourismInfoItem
        icon={
          <HandPlatter
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.infocenterfood}
        content="문의 및 안내"
      />

      {/* 대표메뉴 */}
      <TourismInfoItem
        icon={
          <Utensils
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.firstmenu}
        content="대표메뉴"
      />

      {/* 쉬는날 */}
      <TourismInfoItem
        icon={
          <Star
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.restdatefood}
        content="쉬는날"
      />

      {/* 영업시간 */}
      <TourismInfoItem
        icon={
          <CalendarClock
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.opentimefood}
        content="영업시간"
      />

      {/* 주차시설 */}
      <TourismInfoItem
        icon={
          <CircleParking
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.parkingfood}
        content="주차시설"
      />
    </>
  );
}

export default memo(RestaurantInfo);
