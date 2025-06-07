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
    <section className="flex flex-wrap justify-start items-center w-full gap-4">
      {categoryCodeList.map((el) => (
        <button
          className="
            flex justify-center items-center w-fit px-4 py-1 gap-1 text-base 
            font-medium bg-gray-100 rounded-[16px] hover:bg-[#ffe5e5] cursor-pointer
            dark:bg-[#343638] dark:hover:bg-[#343638]/80 dark:text-[#f3f3f3]
            "
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
