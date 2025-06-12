"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchTourismData } from "../../api/fetchTourismData";
import SkeletonCard from "./SkeletonCardEventListClient";
import { TourismItem } from "../../types/mainTypes";
import Pagination from "@/components/Pagination";

type SearchParams = {
  contentType?: string;
  area?: string;
  arrange?: string;
  keyword?: string;
  category?: string;
  page?: string;
};

export default function EventListClient({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const [data, setData] = useState<TourismItem[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const contentTypeId = searchParams.contentType ?? "";
  const areaCode = searchParams.area ?? "전체 지역";
  const arrangeType = searchParams.arrange ?? "R"; // 기본 정렬 기준: 생성일순
  const keywordType = searchParams.keyword ?? "";
  const categoryCode = searchParams.category ?? "전체";
  const pageNo = parseInt(searchParams.page ?? "1", 10);

  const totalPageCount = Math.ceil(totalCount / 12);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const result = await fetchTourismData({
        contentTypeId,
        areaCode,
        arrangeType,
        keywordType,
        categoryCode,
        pageNo: pageNo.toString(),
      });

      setData(result?.response.body.items.item || []);
      setTotalCount(result.response.body.totalCount);
      setLoading(false);
    };

    fetchData();
  }, [contentTypeId, areaCode, arrangeType, keywordType, categoryCode, pageNo]);

  console.log("EventListClient data: ", data);

  // 로딩이 완료되고 데이터가 없을 때
  if (!loading && data.length === 0) {
    return (
      <section className="flex justify-center items-center w-full aspect-[16/4] max-sm:aspect-[1/1]">
        <p className="text-[var(--text-secondary)] text-2xl">
          등록된 내용이 없습니다.
        </p>
      </section>
    );
  }

  return (
    <>
      {loading ? (
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
            justify-center items-center w-full bg-[var(--bg-main)] text-[var(--text-main)]
          "
        >
          {data.map((el) => (
            <div
              key={el.contentid}
              className="
                flex flex-col justify-start items-center w-full overflow-hidden 
                rounded-[8px] shadow-md transition-transform duration-200 
                hover:-translate-y-0.5 hover:shadow-lg bg-[var(--bg-content)] 
                text-[var(--text-main)]
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
            </div>
          ))}
        </section>
      )}

      <Pagination currentPage={pageNo} totalCount={totalPageCount} />
    </>
  );
}
