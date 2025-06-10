import { DataItems } from "../types/mainTypes";
import { getArea } from "../utils/getArea";
import { getCategory } from "../utils/getCategory";

export async function fetchTourismData(params: {
  contentTypeId: string;
  areaCode: string;
  arrangeType: string;
  keywordType: string;
  categoryCode: string;
  pageNo: string;
}) {
  const {
    contentTypeId,
    areaCode,
    arrangeType,
    keywordType,
    categoryCode,
    pageNo,
  } = params;

  const baseParams = `numOfRows=12&pageNo=${pageNo}&MobileOS=ETC&MobileApp=TestApp&_type=json&serviceKey=${process.env.TOUR_API_KEY}`;

  let url: string;

  if (keywordType) {
    url = `https://apis.data.go.kr/B551011/KorService2/searchKeyword2?${baseParams}&keyword=${keywordType}&contentTypeId=${contentTypeId}&areaCode=${getArea(
      areaCode
    )}&arrange=${arrangeType}&cat1=${getCategory(categoryCode)}`;
  } else {
    url = `https://apis.data.go.kr/B551011/KorService2/areaBasedList2?${baseParams}&contentTypeId=${contentTypeId}&arrange=${arrangeType}&areaCode=${getArea(
      areaCode
    )}&cat1=${getCategory(categoryCode)}`;
  }

  try {
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const json = await res.json();
    const data: DataItems[] = json.response.body.items?.item || [];

    return data;
  } catch (error) {
    console.error("Error fetching tourism data:", error);
    // 에러 발생 시 빈 배열 반환
    return [];
  }
}
