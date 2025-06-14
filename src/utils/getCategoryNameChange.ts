import { categoryCodeList } from "@/constants/categoryCodeList";

export const getCategoryNameChange = (CategoryCode: string) => {
  const result = categoryCodeList.find((el) => el.code === CategoryCode);

  return result ? result.name : "전체";
};
