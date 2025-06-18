// 문화시설(contentTypeId: 14)

"use client";

import { DetailTourismIntro } from "@/app/[tourismId]/types/DetailTourismIntroTypes";
import { memo } from "react";

type TourismAttractionInfoProps = {
  item?: DetailTourismIntro; // 데이터 없을 수도 있으니까 optional로
};

function CulturalFacilityInfo({ item }: TourismAttractionInfoProps) {
  return (
    <div>
      <p>개장일: {item?.opendate}</p>
      <p>쉬는날: {item?.restdateculture}</p>
      <p>이용요금: {item?.usefee}</p>
      <p>이용시간: {item?.usetimeculture}</p>
    </div>
  );
}

export default memo(CulturalFacilityInfo);
