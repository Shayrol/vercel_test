"use client";

import BackButton from "@/components/Button/Mobile_Back_Button";
import DarkModeToggle from "@/components/Dark_mode_toggle";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="flex justify-center items-center w-full border-b-2 border-[#ff6b6b] bg-[var(--bg-main)] text-[var(--text-main)]">
      <div
        className={`flex items-center max-w-[1280px] w-full h-16 px-3 ${
          !isHome ? "justify-between" : "justify-end"
        }`}
      >
        {!isHome && <BackButton />}
        <DarkModeToggle />
      </div>
    </header>
  );
}
