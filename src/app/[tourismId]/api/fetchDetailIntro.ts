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

  // if (!res.ok) {
  //   const errorText = await res.text();
  //   console.error(
  //     `API 호출 실패: ${res.status} ${res.statusText}`,
  //     errorText
  //   );
  //   return {
  //     error: true,
  //     message: `API 호출 실패: ${res.status} ${res.statusText}`,
  //     data: null,
  //   };
  // }

  // const contentType = res.headers.get("content-type");
  // if (!contentType || !contentType.includes("application/json")) {
  //   const errorText = await res.text();
  //   console.error("JSON이 아닌 응답:", errorText);
  //   return {
  //     error: true,
  //     message: "API 응답이 JSON 형식이 아닙니다.",
  //     data: null,
  //   };
  // }

  const json = await res.json();
  const data = json as DetailTourismIntroApiResponse;
  console.log("server API data:", JSON.stringify(data)); // 디버깅

  return data;
}
