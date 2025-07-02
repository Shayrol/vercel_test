"use server";

import { TourismApiResponse } from "@/app/main/types/mainTypes";
import { getArea } from "@/app/main/utils/getArea";
import { getCategory } from "@/app/main/utils/getCategory";
import { unstable_cache } from "next/cache";

interface GetProductsParams {
  contentTypeId: string;
  areaCode: string;
  arrangeType: string;
  keywordType: string;
  categoryCode: string;
  pageNo: string;
}

export const getProducts = unstable_cache(
  async (params: GetProductsParams): Promise<TourismApiResponse> => {
    const {
      contentTypeId,
      areaCode,
      arrangeType,
      keywordType,
      categoryCode,
      pageNo,
    } = params;

    const res = await fetch(
      `https://apis.data.go.kr/B551011/KorService2/searchKeyword2?numOfRows=12&pageNo=${pageNo}&MobileOS=ETC&MobileApp=TestApp&_type=json&serviceKey=${
        process.env.NEXT_PUBLIC_TOUR_API_KEY
      }&keyword=${keywordType}&contentTypeId=${contentTypeId}&areaCode=${getArea(
        areaCode
      )}&arrange=${arrangeType}&cat1=${getCategory(categoryCode)}`
    );
    const data = await res.json();

    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log("함수 결과 데이터: ", data);

    return data;
  },
  ["products"],
  {
    tags: ["products"],
  }
);
