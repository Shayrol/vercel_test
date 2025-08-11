// 쇼핑(contentTypeId: 38)

"use client";

import { DetailTourismIntro } from "@/app/tourism/[tourismId]/api/types/DetailTourismIntroTypes";

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
    <>
      {/* 문의 및 안내 */}
      <TourismInfoItem
        icon={
          <HandPlatter
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.infocentershopping}
        content="문의 및 안내"
      />

      {/* 장서는 날 */}
      <TourismInfoItem
        icon={
          <Calendar1
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.fairday}
        content="장서는 날"
      />

      {/* 쉬는날 */}
      <TourismInfoItem
        icon={
          <Star
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.restdateshopping}
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
        tooltip={item?.opentime}
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
        tooltip={item?.parkingshopping}
        content="주차시설"
      />
    </>
  );
}

export default memo(ShoppingInfo);
