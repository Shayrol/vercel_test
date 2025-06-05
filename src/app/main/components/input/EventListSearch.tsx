"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EventListSearch() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    if (keyword.trim()) {
      router.push(`?keyword=${encodeURIComponent(keyword.trim())}`);
    } else {
      router.push("/");
    }
  };

  return (
    <input
      type="text"
      placeholder="검색어를 입력하세요"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
    />
  );
}
