// 여행코스(contentTypeId: 25)

"use client";

import { DetailTourismIntro } from "@/app/tourism/[tourismId]/api/types/DetailTourismIntroTypes";
import { memo } from "react";
import {
  LandPlot,
  MapPinned,
  AlarmClockCheck,
  CalendarRange,
  HandPlatter,
} from "lucide-react";
import TourismInfoItem from "@/components/TourismInfoItem";

type TourismAttractionInfoProps = {
  item?: DetailTourismIntro; // 데이터 없을 수도 있으니까 optional로
};

function TravelCourseInfo({ item }: TourismAttractionInfoProps) {
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
        tooltip={item?.infocentertourcourse}
        content="문의 및 안내"
      />

      {/* 코스 총 거리 */}
      <TourismInfoItem
        icon={
          <MapPinned
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.distance}
        content="코스 총 거리"
      />

      {/* 코스 총 소요시간 */}
      <TourismInfoItem
        icon={
          <AlarmClockCheck
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.taketime}
        content="코스 총 소요시간"
      />

      {/* 코스일정 */}
      <TourismInfoItem
        icon={
          <CalendarRange
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.schedule}
        content="코스일정"
      />

      {/* 코스테마 */}
      <TourismInfoItem
        icon={
          <LandPlot
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.theme}
        content="코스테마"
      />
    </>
  );
}

export default memo(TravelCourseInfo);
