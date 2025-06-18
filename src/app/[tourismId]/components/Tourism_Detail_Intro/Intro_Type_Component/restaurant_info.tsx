// 음식점(contentTypeId: 39)

"use client";

import { DetailTourismIntro } from "@/app/[tourismId]/types/DetailTourismIntroTypes";
import { memo } from "react";

type TourismAttractionInfoProps = {
  item?: DetailTourismIntro; // 데이터 없을 수도 있으니까 optional로
};

function RestaurantInfo({ item }: TourismAttractionInfoProps) {
  return (
    <div>
      <p>대표메뉴: {item?.firstmenu}</p>
      <p>문의 및 안내: {item?.infocenterfood}</p>
      <p>쉬는날: {item?.restdatefood}</p>
      <p>영업시간: {item?.opentimefood}</p>
      <p>주차시설: {item?.parkingfood}</p>
    </div>
  );
}

export default memo(RestaurantInfo);
