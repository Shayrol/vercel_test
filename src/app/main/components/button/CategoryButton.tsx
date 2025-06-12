"use client";

import { categoryCodeList } from "@/constants/categoryCodeList";
import { useRouter, useSearchParams } from "next/navigation";

export default function CategoryButton() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "전체";

  const handleClick = (name: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", name);
    params.delete("page");
    router.push(`?${params.toString()}`);
  };

  return (
    <section className="flex flex-wrap justify-start items-center w-full gap-4">
      {categoryCodeList.map((el) => (
        <button
          className={`
            flex justify-center items-center w-fit px-4 py-1 gap-1 text-base 
            font-medium  rounded-[16px] cursor-pointer  
            hover:bg-[var(--category-hover-bg/90)] hover:text-[var(--text-main)]
            ${
              category === el.name
                ? "bg-[#ff6b6b] text-[var(--text-reverse)]"
                : "bg-[var(--category-bg)] text-[var(--text-secondary)]"
            }
            `}
          key={el.code}
          onClick={() => handleClick(el.name)}
        >
          <span>#</span>
          {el.name}
        </button>
      ))}
    </section>
  );
}
