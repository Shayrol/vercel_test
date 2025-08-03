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
        content={item?.infocentertourcourse}
      />

      {/* 코스 총 거리 */}
      <TourismInfoItem
        icon={
          <MapPinned
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip="코스 총 거리"
        content={item?.distance}
      />

      {/* 코스 총 소요시간 */}
      <TourismInfoItem
        icon={
          <AlarmClockCheck
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip="코스 총 소요시간"
        content={item?.taketime}
      />

      {/* 코스일정 */}
      <TourismInfoItem
        icon={
          <CalendarRange
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip="코스일정"
        content={item?.schedule}
      />

      {/* 코스테마 */}
      <TourismInfoItem
        icon={
          <LandPlot
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip="코스테마"
        content={item?.theme}
      />
    </div>
  );
}

export default memo(TravelCourseInfo);
