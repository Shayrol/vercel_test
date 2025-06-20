// 관광지(contentTypeId: 12) - 자연, 인문 속해 있음

"use client";

import { DetailTourismIntro } from "@/app/[tourismId]/types/DetailTourismIntroTypes";
import { memo } from "react";

type TourismAttractionInfoProps = {
  item?: DetailTourismIntro; // 데이터 없을 수도 있으니까 optional로
};

function TourismAttractionInfo({ item }: TourismAttractionInfoProps) {
  return (
    <div>
      <p>개장일: {item?.opendate}</p>
      <p>쉬는날: {item?.restdate}</p>
    </div>
  );
}

export default memo(TourismAttractionInfo);
