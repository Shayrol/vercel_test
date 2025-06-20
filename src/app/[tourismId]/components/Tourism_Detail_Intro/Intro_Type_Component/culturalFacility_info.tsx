// 문화시설(contentTypeId: 14) - 인문 속해 있음

"use client";

import { DetailTourismIntro } from "@/app/[tourismId]/types/DetailTourismIntroTypes";
import { memo } from "react";

type TourismAttractionInfoProps = {
  item?: DetailTourismIntro; // 데이터 없을 수도 있으니까 optional로
};

function CulturalFacilityInfo({ item }: TourismAttractionInfoProps) {
  return (
    <div className="flex flex-col gap-1 text-sm text-[var(--text-main)]">
      <p>개장일: {item?.opendate}</p>
      <p>쉬는날: {item?.restdateculture}</p>
      <p>이용요금: {item?.usefee}</p>
      <p>이용시간: {item?.usetimeculture}</p>
    </div>
  );
}

export default memo(CulturalFacilityInfo);
