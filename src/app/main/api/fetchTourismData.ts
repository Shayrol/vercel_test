import { DataItems } from "../types/mainTypes";
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

  const baseParams = `numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json&serviceKey=${process.env.TOUR_API_KEY}`;

  let url: string;

  if (keywordType) {
    url = `http://apis.data.go.kr/B551011/KorService2/searchKeyword2?${baseParams}&keyword=${keywordType}&contentTypeId=${contentTypeId}&areaCode=${areaCode}&arrange=${arrangeType}&cat1=${getCategory(
      categoryCode
    )}`;
  } else {
    url = `http://apis.data.go.kr/B551011/KorService2/areaBasedList2?${baseParams}&contentTypeId=${contentTypeId}&arrange=${arrangeType}&areaCode=${areaCode}&cat1=${getCategory(
      categoryCode
    )}`;
  }

  const res = await fetch(url, { cache: "force-cache" });
  const json = await res.json();
  const data: DataItems[] = json.response.body.items?.item || [];

  console.log("fetchTourismData: ", data);
  return data;
}
