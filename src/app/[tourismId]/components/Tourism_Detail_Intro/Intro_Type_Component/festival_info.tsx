// 행사/공연/축제(contentTypeId: 15)

"use client";

import { DetailTourismIntro } from "@/app/[tourismId]/types/DetailTourismIntroTypes";
import { memo } from "react";

type TourismAttractionInfoProps = {
  item?: DetailTourismIntro; // 데이터 없을 수도 있으니까 optional로
};

function FestivalInfo({ item }: TourismAttractionInfoProps) {
  return (
    <div>
      <p>행사시작일: {item?.eventstartdate}</p>
      <p>행사종료일: {item?.eventenddate}</p>
      <p>이용요금: {item?.usetimefestival}</p>
    </div>
  );
}

export default memo(FestivalInfo);
