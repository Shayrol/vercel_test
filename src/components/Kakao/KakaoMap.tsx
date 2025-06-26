"use client";

import { DetailTourismItem } from "@/app/[tourismId]/api/types/DetailTourismTypes";
import {
  CustomOverlayMap,
  Map,
  MapMarker,
  useKakaoLoader,
} from "react-kakao-maps-sdk";
import { AnchorSoftMFull } from "../Button/A_Blank_Button";

const apiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_APP_KEY!;

export default function KakaoMap({ item }: { item: DetailTourismItem }) {
  const [loading, error] = useKakaoLoader({
    appkey: apiKey,
  });

  const title = item?.title ?? "";
  const mapx = Number(item.mapx);
  const mapy = Number(item.mapy);
  const level = Number(item.mlevel);

  console.log("map x: ", mapx);
  console.log("map y: ", mapy);

  if (loading)
    return (
      <div
        className="flex flex-col w-full h-100 shadow-md rounded-[8px]
          bg-[var(--bg-content)] animate-pulse"
      >
        <div className="w-full bg-gray-300"></div>
      </div>
    );
  if (error)
    return (
      <div
        className="flex flex-col w-full h-100 shadow-md rounded-[8px]
          bg-[var(--bg-content)] animate-pulse"
      >
        API 요청 문제 발생
      </div>
    );

  return (
    <div
      className="flex flex-col w-full p-7 gap-4 shadow-md rounded-[8px] overflow-hidden
      border bg-[var(--bg-content)] text-[var(--text-main)] border-[var(--border-main)]"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-medium text-[var(--text-main)]">
          위치 정보
        </h3>
        <AnchorSoftMFull
          href={`https://map.kakao.com/link/map/${title},${mapy},${mapx}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          지도 보기
        </AnchorSoftMFull>
      </div>
      <Map
        center={{ lat: mapy, lng: mapx }}
        level={level}
        className="w-full h-100 rounded-[8px]"
      >
        <MapMarker position={{ lat: mapy, lng: mapx }} />

        {/* title 텍스트 박스 */}
        <CustomOverlayMap position={{ lat: mapy, lng: mapx }} yAnchor={2.6}>
          <div className="bg-[var(--bg-content)] text-[var(--text-main)] px-2 py-1 rounded-[8px] shadow text-sm border border-[#ff6b6b]">
            {title}
          </div>
        </CustomOverlayMap>
      </Map>
    </div>
  );
}
