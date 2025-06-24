"use client";

import BackButton from "@/components/Button/Mobile_Back_Button";
import DarkModeToggle from "@/components/Dark_mode_toggle";
import { usePathname } from "next/navigation";

export default function MobileHeader() {
  const pathname = usePathname();

  // 메인 페이지에서는 뒤로가기 버튼 숨김
  const isHome = pathname === "/";

  return (
    <header
      className="
          md:hidden
          relative flex justify-center items-center w-full h-16 border-b-2 border-[#ff6b6b]
          light:bg-[var(--light-bg-main)] light:text-[var(--light-text-main)]
          bg-[var(--bg-main)] text-[var(--text-main)]"
    >
      {!isHome && <BackButton />}
      <h1>Header</h1>
      <DarkModeToggle />
    </header>
  );
}
