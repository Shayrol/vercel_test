// 숙박(contentTypeId: 32)

"use client";

import { DetailTourismIntro } from "@/app/[tourismId]/types/DetailTourismIntroTypes";
import { memo } from "react";

type TourismAttractionInfoProps = {
  item?: DetailTourismIntro; // 데이터 없을 수도 있으니까 optional로
};

function LodgingInfo({ item }: TourismAttractionInfoProps) {
  return (
    <div>
      <p>수용 가능인원: {item?.accomcountlodging}</p>
      <p>문의 및 안내: {item?.infocenterlodging}</p>
      <p>입실시간: {item?.checkintime}</p>
      <p>퇴실시간: {item?.checkouttime}</p>
      <p>주차시설: {item?.parkinglodging}</p>
      <p>바비큐장 여부: {item?.barbecue}</p>
    </div>
  );
}

export default memo(LodgingInfo);
