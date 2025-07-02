// 서버 컴포넌트와 서버 액션을 통한 데이터 요청
// getProducts를 통해 서버 요청을 하며
// 해당 쿼리스트링은 search_params.tsx에서 가져옴(page.tsx에서 불러옴)
// 해당 기능 추가하려다 서버 컴포넌트의 onClick을 사용하지 못한 문제로 취소..

import Pagination from "@/components/Pagination";
import { getProducts } from "@/server/products";
import { saveCurrentUrl } from "@/utils/navigationHistory";
import Image from "next/image";
import Link from "next/link";

export default async function EventItemList({
  areaCode,
  arrangeType,
  categoryCode,
  contentTypeId,
  keywordType,
  pageNo,
}: {
  areaCode: string;
  arrangeType: string;
  categoryCode: string;
  contentTypeId: string;
  keywordType: string;
  pageNo: string;
}) {
  const itemsData = await getProducts({
    areaCode,
    arrangeType,
    categoryCode,
    contentTypeId,
    keywordType,
    pageNo,
  });

  const data = itemsData.response.body.items.item;
  const totalCount = itemsData.response.body.totalCount || 0;
  const totalPageCount = Math.ceil(totalCount / 12);

  return (
    <>
      <section
        className="
            grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1
            justify-center items-center w-full bg-[var(--bg-main)] text-[var(--text-main)]
          "
      >
        {data.map((el) => (
          <Link
            href={`/${el.contentid}`}
            key={el.contentid}
            onClick={() => saveCurrentUrl()} // 현재 페이지 url 저장
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
          </Link>
        ))}

        <Pagination currentPage={Number(pageNo)} totalCount={totalPageCount} />
      </section>
    </>
  );
}
