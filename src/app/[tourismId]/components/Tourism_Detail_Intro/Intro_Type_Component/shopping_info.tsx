// 쇼핑(contentTypeId: 38)

"use client";

import { DetailTourismIntro } from "@/app/[tourismId]/types/DetailTourismIntroTypes";
import { memo } from "react";

type TourismAttractionInfoProps = {
  item?: DetailTourismIntro; // 데이터 없을 수도 있으니까 optional로
};

function ShoppingInfo({ item }: TourismAttractionInfoProps) {
  return (
    <div>
      <p>장서는 날: {item?.fairday}</p>
      <p>문의 및 안내: {item?.infocentershopping}</p>
      <p>쉬는날: {item?.restdateshopping}</p>
      <p>영업시간: {item?.opentime}</p>
      <p>주차시설: {item?.parkingshopping}</p>
    </div>
  );
}

export default memo(ShoppingInfo);
