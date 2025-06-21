// 쇼핑(contentTypeId: 38)

"use client";

import { DetailTourismIntro } from "@/app/[tourismId]/types/DetailTourismIntroTypes";

import TourismInfoItem from "@/components/TourismInfoItem";
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
        content={item?.infocentershopping}
      />

      {/* 장서는 날 */}
      <TourismInfoItem
        icon={
          <Calendar1
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip="장서는 날"
        content={item?.fairday}
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
        content={item?.restdateshopping}
      />

      {/* 영업시간 */}
      <TourismInfoItem
        icon={
          <CalendarClock
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip="영업시간"
        content={item?.opentime}
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
        content={item?.parkingshopping}
      />
    </div>
  );
}

export default memo(ShoppingInfo);
