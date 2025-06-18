// 여행코스(contentTypeId: 25)

"use client";

import { DetailTourismIntro } from "@/app/[tourismId]/types/DetailTourismIntroTypes";
import { memo } from "react";

type TourismAttractionInfoProps = {
  item?: DetailTourismIntro; // 데이터 없을 수도 있으니까 optional로
};

function TravelCourseInfo({ item }: TourismAttractionInfoProps) {
  return (
    <div>
      <p>코스 총 거리: {item?.distance}</p>
      <p>문의 및 안내: {item?.infocentertourcourse}</p>
      <p>코스일정: {item?.schedule}</p>
      <p>코스 총 소요시간: {item?.taketime}</p>
      <p>코스테마: {item?.theme}</p>
    </div>
  );
}

export default memo(TravelCourseInfo);
