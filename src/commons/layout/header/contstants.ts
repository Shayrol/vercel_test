import { Params } from "next/dist/server/request/params";

export type HeaderOption = {
  title: string;
  hasBack: boolean;
  hasDarkMode: boolean;
  isTransparent: boolean;
};

type HeaderOptions = {
  GLOBAL: Record<string, HeaderOption>;
  LOCAL: Record<string, HeaderOption>;
};

export const HEADER_OPTIONS = (params: Params): HeaderOptions => ({
  GLOBAL: {
    "/": {
      title: "",
      hasBack: false,
      hasDarkMode: true,
      isTransparent: false,
    },
    // "/tourism": { title: "", hasBack: true, hasDarkMode: true },
  },
  LOCAL: {
    [`/tourism/${params.tourismId}`]: {
      title: "", // 제목
      hasBack: true, // 뒤로가기
      hasDarkMode: true, // 다크모드
      isTransparent: false, // 배경 투명도
    },
  },
});
