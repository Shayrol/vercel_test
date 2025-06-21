// 콘텐츠 타입 ID 에 따라 보여주는 컴포넌트 분류 작업

"use client";

import { useMemo } from "react";
import { useTourismDetailInfoData } from "../../api/useQuery/useQueryTourismDetailInfoData";
import TourismAttractionInfo from "./Intro_Type_Component/tourismAttraction_info";
import CulturalFacilityInfo from "./Intro_Type_Component/culturalFacility_info";
import FestivalInfo from "./Intro_Type_Component/festival_info";
import TravelCourseInfo from "./Intro_Type_Component/travelCourse_info";
import LePortsInfo from "./Intro_Type_Component/leports_info";
import ShoppingInfo from "./Intro_Type_Component/shopping_info";
import RestaurantInfo from "./Intro_Type_Component/restaurant_info";
import LodgingInfo from "./Intro_Type_Component/lodging_info";

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
