import { DataItems } from "../types/mainTypes";
import { getArea } from "../utils/getArea";
import { getCategory } from "../utils/getCategory";

export async function fetchTourismData(params: {
  contentTypeId: string;
  areaCode: string;
  arrangeType: string;
  keywordType: string;
  categoryCode: string;
}) {
  const { contentTypeId, areaCode, arrangeType, keywordType, categoryCode } =
    params;

  const baseParams = `numOfRows=12&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json&serviceKey=${process.env.TOUR_API_KEY}`;

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

  const res = await fetch(url, { cache: "no-store" });
  const json = await res.json();
  const data: DataItems[] = json.response.body.items?.item || [];

  console.log("fetchTourismData: ", data);
  return data;
}
