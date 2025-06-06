export type CategoryCode = {
  code: string;
  name: string;
};

export const categoryCodeList: CategoryCode[] = [
  { code: "", name: "전체" },
  { code: "C01", name: "추천코스" },
  { code: "A01", name: "자연" },
  { code: "A03", name: "레포츠" },
  { code: "A04", name: "쇼핑" },
  { code: "A05", name: "음식" },
  { code: "B02", name: "숙박" },
  { code: "A02", name: "인문(문화/예술/역사)" },
];
