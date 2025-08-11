// 제목, 간략 위치, 전화번호, 홈페이지

import { DetailTourismItem } from "../../api/types/DetailTourismTypes";
import { MapPin, Phone, Globe } from "lucide-react";
import TourismDetailIntro from "./sections/TourismDetailIntro";

export default function TourismDetailHeaderInfo({
  item,
}: {
  item: DetailTourismItem;
}) {
  const rawHtml = item.homepage;
  const href = rawHtml.match(/href="([^"]+)"/)?.[1];

  const CustomLink = () => {
    return href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        홈페이지 방문
      </a>
    ) : (
      <p>링크 없음</p>
    );
  };

  return (
    <>
      <article
        className="
      flex flex-col gap-3 w-full p-7 shadow-md rounded-[8px]
      border bg-[var(--bg-content)] text-[var(--text-main)] border-[var(--border-main)]"
      >
        <h1 className="text-3xl font-semibold max-sm:text-2xl">{item.title}</h1>

        {/* address */}
        <div className="flex gap-2 items-center">
          <MapPin className="text-red-500 w-5" />
          <address className="flex flex-col">
            <p className="text-lg font-normal max-sm:text-base">
              {item.addr1 !== "" ? item.addr1 : "등록된 주소가 없습니다."}
            </p>
            <p className="text-sm font-medium text-[var(--text-secondary)] max-sm:text-xs">
              우편번호:{" "}
              {item.zipcode !== ""
                ? item.zipcode
                : "등록된 우편번호가 없습니다."}
            </p>
          </address>
        </div>

        {/* phone */}
        <div className="flex gap-2 items-center">
          <Phone className="text-blue-500 w-4" />
          {item.tel ? (
            <div className="flex items-center gap-2 text-[var(--text-secondary)]">
              <a
                href={item.tel}
                aria-label="tel"
                className="text-sm text-blue-500 hover:underline"
              >
                {item.tel}
              </a>
              <p className="text-sm">
                {item.telname ? `/ ${item.telname}` : ""}
              </p>
            </div>
          ) : (
            <p className="text-sm text-[var(--text-secondary)]">
              등록된 전화번호가 없습니다.
            </p>
          )}
        </div>

        {/* homepage */}
        <div className="flex items-center gap-2">
          <Globe className="text-green-500 w-5" />
          <CustomLink />
        </div>
      </article>
      <article
        className="
          flex w-full justify-center items-center shadow-md rounded-[8px]
          border bg-[var(--bg-content)] border-[var(--border-main)]
          "
      >
        <TourismDetailIntro
          contentId={item.contentid}
          contentTypeId={item.contenttypeid}
        />
      </article>
    </>
  );
}
