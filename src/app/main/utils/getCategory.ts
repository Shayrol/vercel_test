import { categoryCodeList } from "@/constants/categoryCodeList";

export const getCategory = (categoryCode: string) => {
  if (!categoryCode) return "";

  const found = categoryCodeList.find((item) => item.name === categoryCode);
  return found ? found.code : "전체";
};
