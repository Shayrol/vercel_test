// 주차, 요금, 문의 전화번호 등 정보 제공

import { DetailTourismIntroApiResponse } from "../types/DetailTourismIntroTypes";

// type FetchDetailTourismIntroResult =
//   | {
//       error: false;
//       data: DetailTourismIntroApiResponse;
//     }
//   | {
//       error: true;
//       message: string;
//       data: null;
//     };

export async function fetchDetailIntro({
  tourismId,
  contentTypeId,
}: {
  tourismId: string;
  contentTypeId: string;
}): Promise<DetailTourismIntroApiResponse> {
  const apiKey = process.env.NEXT_PUBLIC_TOUR_API_KEY;
  if (!apiKey) {
    throw new Error("API 키가 설정되지 않았습니다.");
  }

  const url = `https://apis.data.go.kr/B551011/KorService2/detailIntro2?serviceKey=${apiKey}&MobileApp=AppTest&MobileOS=ETC&pageNo=1&numOfRows=10&_type=json&contentTypeId=${contentTypeId}&contentId=${tourismId}`;

  const res = await fetch(url, {
    next: { revalidate: 60 * 5 },
  });

  const json = await res.json();
  const data = json as DetailTourismIntroApiResponse;
  // console.log("server API data:", JSON.stringify(data)); // 디버깅

  return data;
}
