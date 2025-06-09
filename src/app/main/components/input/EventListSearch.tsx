"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import AreaDropdownButton from "../button/AreaDropdownButton";

export default function EventListSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const area = searchParams.get("area");
  const areaCode = area ?? "전체 지역";
  const [selectedRegion, setSelectedRegion] = useState(areaCode);
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    const query: Record<string, string> = {};

    if (keyword.trim()) query.keyword = keyword.trim();
    if (selectedRegion !== "전체 지역") query.area = selectedRegion;

    const queryString = new URLSearchParams(query).toString();
    router.push(`?${queryString}`);
  };

  // const handleSearch = () => {
  //   if (keyword.trim()) {
  //     router.push(`?keyword=${encodeURIComponent(keyword.trim())}`);
  //   } else {
  //     router.push("/");
  //   }
  // };

  return (
    <section className="flex justify-center items-center w-full gap-3">
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="
          w-full h-12 px-5 py-3 text-lg outline-none transition-all duration-300
          border-2 rounded-3xl
          text-[var(--text-main)] border-[var(--border-main)] bg-[var(--input-bg)]
          focus:border-[#ff6b6b]
          hover:border-[#ff6b6b]
          "
      />
      <AreaDropdownButton
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <button
        onClick={handleSearch}
        className="flex justify-center items-center w-12 h-12 cursor-pointer"
      >
        <Image
          src={"/search_button.png"}
          alt="검색"
          width={30}
          height={30}
          style={{ width: "30px", height: "30px" }}
          // className="border border-red-500"
        />
      </button>
    </section>
  );
}
