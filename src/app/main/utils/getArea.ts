import { areaCodeList } from "@/constants/areaCode";

export const getArea = (areaCode: string) => {
  const found = areaCodeList.find((item) => item.name === areaCode);
  return found ? found.code : "";
};
