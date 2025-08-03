// 콘텐츠 타입 ID 에 따라 보여주는 컴포넌트 분류 작업

"use client";

import { useMemo } from "react";
import { useTourismDetailInfoData } from "@/app/tourism/[tourismId]/api/queries/useQueryTourismDetailInfoData";

import LodgingInfo from "./sections/LodgingInfo";
import TourismAttractionInfo from "./sections/TourismAttractionInfo";
import CulturalFacilityInfo from "./sections/CulturalFacilityInfo";
import FestivalInfo from "./sections/FestivalInfo";
import TravelCourseInfo from "./sections/TravelCourseInfo";
import LePortsInfo from "./sections/LePortsInfoLike"; // 임시 이름 Like 붙임
import ShoppingInfo from "./sections/ShoppingInfo";
import RestaurantInfo from "./sections/RestaurantInfo";

const contentTypeId_Component = [
  { typeId: "12", Component: TourismAttractionInfo },
  { typeId: "14", Component: CulturalFacilityInfo },
  { typeId: "15", Component: FestivalInfo },
  { typeId: "25", Component: TravelCourseInfo },
  { typeId: "28", Component: LePortsInfo },
  { typeId: "32", Component: LodgingInfo },
  { typeId: "38", Component: ShoppingInfo },
  { typeId: "39", Component: RestaurantInfo },
];

export default function TourismDetailIntro({
  contentId,
  contentTypeId,
}: {
  contentId: string;
  contentTypeId: string;
}) {
  const { data } = useTourismDetailInfoData({
    tourismId: contentId,
    contentTypeId,
  });

  const item = data?.response.body.items.item[0];

  const selected = useMemo(() => {
    return contentTypeId_Component.find((el) => el.typeId === contentTypeId);
  }, [contentTypeId]);

  const Component =
    selected?.Component || (() => <div>지원되지 않는 유형입니다.</div>);

  return (
    <div className="mt-5">
      <Component item={item} />
    </div>
  );
}
