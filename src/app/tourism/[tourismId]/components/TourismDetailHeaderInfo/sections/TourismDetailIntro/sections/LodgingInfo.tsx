// 숙박(contentTypeId: 32)

"use client";

import { DetailTourismIntro } from "@/app/tourism/[tourismId]/api/types/DetailTourismIntroTypes";
import TourismInfoItem from "@/components/TourismInfoItem";
import {
  CircleParking,
  DoorClosedLocked,
  DoorOpen,
  HandPlatter,
  Hotel,
  PersonStanding,
  PiggyBank,
} from "lucide-react";
import { memo } from "react";

type TourismAttractionInfoProps = {
  item?: DetailTourismIntro; // 데이터 없을 수도 있으니까 optional로
};

function LodgingInfo({ item }: TourismAttractionInfoProps) {
  const isBarbecueAvailable = (value: string | null | undefined): boolean => {
    const availableValues = ["1", "가능", "true", "TRUE", "True"];
    return availableValues.includes(value?.trim() ?? "");
  };

  return (
    <>
      {/* 문의 및 안내 */}
      <TourismInfoItem
        icon={
          <HandPlatter
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.infocenterlodging}
        content={"문의 및 안내"}
      />

      {/* 수용 가능인원 */}
      <TourismInfoItem
        icon={
          <PersonStanding
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.accomcountlodging}
        content={"수용 가능인원"}
      />

      {/* 객실수 */}
      <TourismInfoItem
        icon={
          <Hotel
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.roomcount}
        content={"객실수"}
      />

      {/* 객실유형 */}
      <TourismInfoItem
        icon={
          <HandPlatter
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.roomtype}
        content={"객실유형"}
      />

      {/* 주차시설 */}
      <TourismInfoItem
        icon={
          <CircleParking
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.parkinglodging}
        content={"주차시설"}
      />

      {/* 입실시간 */}
      <TourismInfoItem
        icon={
          <DoorOpen
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.checkintime}
        content={"입실시간"}
      />

      {/* 퇴실시간 */}
      <TourismInfoItem
        icon={
          <DoorClosedLocked
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={item?.checkouttime}
        content={"퇴실시간"}
      />

      {/* 바비큐장 */}
      <TourismInfoItem
        icon={
          <PiggyBank
            className="text-gray-400 hover:text-gray-600 cursor-help"
            size={25}
          />
        }
        tooltip={
          item?.barbecue
            ? isBarbecueAvailable(item.barbecue)
              ? "가능"
              : "불가능"
            : "홈페이지 참고"
        }
        content={"바비큐장"}
      />
    </>
  );
}

export default memo(LodgingInfo);
