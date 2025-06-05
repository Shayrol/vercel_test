"use client";

import { categoryCodeList } from "@/constants/categoryCodeList";
import { useRouter, useSearchParams } from "next/navigation";

export default function CategoryButton() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = (name: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", name);
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      {categoryCodeList.map((el) => (
        <button key={el.code} onClick={() => handleClick(el.name)}>
          #{el.name}
        </button>
      ))}
    </>
  );
}
