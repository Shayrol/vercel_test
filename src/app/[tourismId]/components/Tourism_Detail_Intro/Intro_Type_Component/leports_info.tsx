// 레포츠(contentTypeId: 28)

"use client";

import { DetailTourismIntro } from "@/app/[tourismId]/types/DetailTourismIntroTypes";
import { memo } from "react";

type TourismAttractionInfoProps = {
  item?: DetailTourismIntro; // 데이터 없을 수도 있으니까 optional로
};

function LePortsInfo({ item }: TourismAttractionInfoProps) {
  return (
    <div>
      <p>개장 기간: {item?.openperiod}</p>
      <p>문의 및 안내: {item?.infocenterleports}</p>
      <p>쉬는날: {item?.restdateleports}</p>
      <p>입장료: {item?.usefeeleports}</p>
      <p>이용시간: {item?.usetimeleports}</p>
    </div>
  );
}

export default memo(LePortsInfo);
