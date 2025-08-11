// 행사/공연/축제(contentTypeId: 15) - 인문 속해 있음

"use client";

import { DetailTourismIntro } from "@/app/tourism/[tourismId]/api/types/DetailTourismIntroTypes";
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
    <>
      {/* 주최자 연락처 */}
      <TourismInfoItem
        icon={
          <HandPlatter
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.sponsor1tel}
        content="주최자 연락처"
      />

      {/* 행사 시작일 */}
      <TourismInfoItem
        icon={
          <CalendarCheck2
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={formatDateString(item?.eventstartdate ?? "")}
        content="행사 시작일"
      />

      {/* 행사 종료일 */}
      <TourismInfoItem
        icon={
          <CalendarX2
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={formatDateString(item?.eventenddate ?? "")}
        content="행사 종료일"
      />

      {/* 공연시간 */}
      <TourismInfoItem
        icon={
          <CalendarClock
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.playtime}
        content="공연시간"
      />

      {/* 이용료 */}
      <TourismInfoItem
        icon={
          <HandCoins
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.usetimefestival}
        content="이용료"
      />

      {/* 행사장소 */}
      <TourismInfoItem
        icon={
          <LandPlot
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.eventplace}
        content="행사장소"
      />
    </>
  );
}

export default memo(FestivalInfo);
