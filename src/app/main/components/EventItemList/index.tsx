"use client";

import Image from "next/image";
import SkeletonCard from "./sections/SkeletonCardEventItemList";
import Pagination from "@/components/Pagination";
import Link from "next/link";
import { saveCurrentUrl } from "@/utils/navigationHistory";
import { useTourismData } from "../../api/queries/useQueryTourismData";
import { useDeviceSetting } from "@/commons/settings/device-setting/hook";
import { useEffect, useState } from "react";

type SearchParams = {
  contentType?: string;
  area?: string;
  arrange?: string;
  keyword?: string;
  category?: string;
  page?: string;
};

export default function EventItemList({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const contentTypeId = searchParams.contentType ?? "";
  const areaCode = searchParams.area ?? "전체 지역";
  const arrangeType = searchParams.arrange ?? "R"; // 기본 정렬 기준: 생성일순
  const keywordType = searchParams.keyword ?? "";
  const categoryCode = searchParams.category ?? "전체";
  const pageNo = searchParams.page ?? "1";
  // const pageNo = parseInt(searchParams.page ?? "1", 10);

  const { data, isLoading, isError } = useTourismData({
    contentTypeId,
    areaCode,
    arrangeType,
    keywordType,
    categoryCode,
    pageNo,
  });

  const itemsData = data?.response.body.items.item || [];
  const totalCount = data?.response.body.totalCount || 0;
  const totalPageCount = Math.ceil(totalCount / 12);

  // console.log("EventListClient data: ", isError);
  console.log("EventListClient render:", { isLoading, isError, data });

  // 로딩이 완료되고 데이터가 없을 때
  if (!isLoading && itemsData.length === 0) {
    return (
      <section className="flex justify-center items-center w-full aspect-[16/4] max-sm:aspect-[1/1]">
        <p className="text-[var(--text-secondary)] text-2xl">
          등록된 내용이 없습니다.
        </p>
      </section>
    );
  }

  // 모바일 App 버튼 클릭 요청 응답 함수
  const [isWebView, setIsWebView] = useState(false); // App에서만 버튼 표시 Web(X)

  useEffect(() => {
    const ua = navigator.userAgent;
    setIsWebView(/wv/.test(ua) || /MyAppName/.test(ua));
  }, []);

  const { fetchApp } = useDeviceSetting();
  // App 버전
  const onCLickSystemVersion = async () => {
    const result = await fetchApp({ query: "fetchDeviceSystemForAppSet" });
    alert(JSON.stringify(result.data.fetchDeviceSystemForAppSet));
  };
  // 핸드폰 정보
  const onCLickSystemForPlatform = async () => {
    const result = await fetchApp({ query: "fetchDeviceSystemForPlatformSet" });
    alert(JSON.stringify(result.data.fetchDeviceSystemForPlatformSet));
  };
  // 위치
  const onCLickLocation = async () => {
    const result = await fetchApp({ query: "fetchDeviceLocationForLatLngSet" });
    alert(JSON.stringify(result.data.fetchDeviceLocationForLatLngSet));
  };

  return (
    <>
      {isLoading ? (
        // 로딩 중일 때 스켈레톤 UI 표시
        <section
          className="
            grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1
            justify-center items-center w-full bg-[var(--bg-main)] text-[var(--text-main)]
          "
        >
          {/* 스켈레톤 카드 생성 */}
          {Array.from({ length: 12 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </section>
      ) : (
        // 데이터가 있을 때 실제 콘텐츠 표시
        <section
          className="
            grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1
            justify-center items-center w-full text-[var(--text-main)]
          "
        >
          {itemsData.map((el) => (
            <Link
              href={`/tourism/${el.contentid}`}
              key={el.contentid}
              onClick={() => saveCurrentUrl()} // 현재 페이지 url 저장
              className="
                flex flex-col justify-start items-center w-full overflow-hidden
                rounded-[8px] shadow-md transition-transform duration-200
                hover:-translate-y-0.5 hover:shadow-lg bg-[var(--bg-content)]
                text-main_text
              "
            >
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={el.firstimage || "/not_image/not_image.svg"}
                  alt={el.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div className="flex flex-col w-full p-2 gap-1 h-[70px]">
                <h2 className="text-lg font-medium leading-6 truncate text-[var(--text-main)]">
                  {el.title}
                </h2>
                <p className="text-sm font-normal leading-4 truncate text-[var(--text-secondary)]">
                  {el.addr1}
                </p>
              </div>
            </Link>
          ))}
        </section>
      )}
      {isWebView && (
        <div className="flex flex-col">
          <button onClick={onCLickSystemVersion}>모바일 App 버전</button>
          <button onClick={onCLickSystemForPlatform}>핸드폰 정보</button>
          <button onClick={onCLickLocation}>현재위치 조회</button>
        </div>
      )}
      <Pagination currentPage={Number(pageNo)} totalCount={totalPageCount} />
    </>
  );
}
