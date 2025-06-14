// import { DetailTourismApiResponse } from "../types/DetailTourismTypes";

// type FetchDetailTourismResult =
//   | {
//       error: false;
//       data: DetailTourismApiResponse;
//     }
//   | {
//       error: true;
//       message: string;
//       data: null;
//     };

// export async function fetchDetailTourismData(
//   tourismId: string
// ): Promise<FetchDetailTourismResult> {
//   const apiKey = process.env.API_KEY;
//   const url = `https://apis.data.go.kr/B551011/KorService2/detailCommon2?serviceKey=${apiKey}&MobileApp=AppTest&MobileOS=ETC&pageNo=1&numOfRows=10&contentId=${tourismId}&_type=json`;

//   try {
//     const res = await fetch(url, {
//       cache: "force-cache",
//       next: { revalidate: 60 * 5 }, // 5분
//     });

//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }

//     const json = await res.json();
//     const data = json as DetailTourismApiResponse;

//     console.log("server API data: ", data.response.body.items.item);

//     return {
//       error: false,
//       data,
//     };
//   } catch (error) {
//     console.error("Error fetching detail tourism data:", error);

//     return {
//       error: true,
//       message: "관광지 정보를 불러오는 데 실패했습니다.",
//       data: null,
//     };
//   }
// }

import { DetailTourismApiResponse } from "../types/DetailTourismTypes";

type FetchDetailTourismResult =
  | {
      error: false;
      data: DetailTourismApiResponse;
    }
  | {
      error: true;
      message: string;
      data: null;
    };

export async function fetchDetailTourismData(
  tourismId: string
): Promise<FetchDetailTourismResult> {
  const apiKey = process.env.TOUR_API_KEY;
  if (!apiKey) {
    console.error("TOUR_API_KEY is not defined");
    return {
      error: true,
      message: "API 키가 설정되지 않았습니다.",
      data: null,
    };
  }

  console.log(tourismId);
  const url = `https://apis.data.go.kr/B551011/KorService2/detailCommon2?serviceKey=${apiKey}&MobileApp=AppTest&MobileOS=ETC&pageNo=1&numOfRows=10&contentId=${"3461786"}&_type=json`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 * 5 }, // 5분
    });

    // 응답 상태 확인
    if (!res.ok) {
      const errorText = await res.text();
      console.error(
        `API 호출 실패: ${res.status} ${res.statusText}`,
        errorText
      );
      return {
        error: true,
        message: `API 호출 실패: ${res.status} ${res.statusText}`,
        data: null,
      };
    }

    // 콘텐츠 타입 확인
    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const errorText = await res.text();
      console.error("JSON이 아닌 응답:", errorText);
      return {
        error: true,
        message: "API 응답이 JSON 형식이 아닙니다.",
        data: null,
      };
    }

    const json = await res.json();
    const data = json as DetailTourismApiResponse;
    console.log("server API data:", JSON.stringify(data)); // 디버깅

    return {
      error: false,
      data,
    };
  } catch (error) {
    console.error("Error fetching detail tourism data:", error);
    return {
      error: true,
      message: `관광지 정보를 불러오는 데 실패했습니다: ${error}`,
      data: null,
    };
  }
}
