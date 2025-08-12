"use client";

import BackButton from "@/components/Button/Mobile_Back_Button";
import DarkModeToggle from "@/components/Dark_mode_toggle";
import { useParams, usePathname } from "next/navigation";
import { HEADER_OPTIONS, HeaderOption } from "./contstants";
import { ReactNode } from "react";

type HeaderBaseProps = HeaderOption & {
  pathname: string;
  children?: ReactNode;
};

const HeaderBase = ({
  hasBack,
  title,
  hasDarkMode,
  isTransparent,
  pathname,
  children,
}: HeaderBaseProps) => {
  return (
    <>
      <header
        className={`
      flex justify-center items-center w-full h-[3.125rem] border-b-2 border-[#ff6b6b] 
       text-[var(--text-main)] fixed top-0 z-50
      ${isTransparent ? "" : "bg-[var(--bg-main)]"}
      `}
      >
        <div
          className={`flex items-center max-w-[1280px] w-full h-16 px-3 gap-2
          ${pathname === "/" ? "justify-end" : "justify-between"}
        `}
        >
          {hasBack && <BackButton />}
          {title && <div className="text-[1rem] truncate">{title}</div>}
          {children ? <>{children}</> : <></>}
          {hasDarkMode && <DarkModeToggle />}
        </div>
      </header>

      {isTransparent ? <></> : <div className="w-full h-[3.125rem]"></div>}
    </>
  );
};

// 정적 페이지를 위한 헤더
export function HeaderGlobal() {
  const pathname = usePathname();
  const params = useParams();

  const options: HeaderOption = HEADER_OPTIONS(params).GLOBAL[pathname];

  return (
    <div className={`${options ? "block" : "hidden"} w-full`}>
      <HeaderBase {...options} pathname={pathname} />
    </div>
  );
}

type HeaderProps = {
  children?: ReactNode;
} & Partial<HeaderOption>; // ...rest 값이 추가가 된다면 해당 options의 타입만 사용하고 있어 추가해줘야함

// 동적 페이지를 위한 헤더
export function Header({ children, ...rest }: HeaderProps) {
  const pathname = usePathname();
  const params = useParams();

  const options = HEADER_OPTIONS(params).LOCAL[pathname];

  return (
    <div className={`${options ? "block" : "hidden"} w-full`}>
      <HeaderBase {...options} {...rest} pathname={pathname}>
        {children}
      </HeaderBase>
    </div>
  );
}
