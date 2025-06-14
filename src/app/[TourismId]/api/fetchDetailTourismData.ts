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
  const apiKey = decodeURIComponent(process.env.TOUR_API_KEY || "");
  if (!apiKey) {
    console.error("TOUR_API_KEY is not defined");
    return {
      error: true,
      message: "API 키가 설정되지 않았습니다.",
      data: null,
    };
  }

  const url = `https://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=${apiKey}&MobileApp=AppTest&MobileOS=ETC&pageNo=1&numOfRows=10&contentId=${tourismId}&defaultYN=Y&firstImageYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&_type=json`;

  try {
    console.log("Fetching URL:", url); // 디버깅
    const res = await fetch(url, {
      cache: "force-cache",
      next: { revalidate: 60 * 5 }, // 5분
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("API response error:", text.slice(0, 100)); // 디버깅
      throw new Error(`HTTP error! status: ${res.status} ${res.statusText}`);
    }

    const contentType = res.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      const text = await res.text();
      console.error("Non-JSON response:", text.slice(0, 100)); // 디버깅
      throw new Error(`Expected JSON but received: ${contentType}`);
    }

    const json = await res.json();
    const data = json as DetailTourismApiResponse;
    console.log(
      "server API data:",
      JSON.stringify(data.response.body.items.item, null, 2)
    ); // 디버깅

    return {
      error: false,
      data,
    };
  } catch (error) {
    console.error("Error fetching detail tourism data:", error);
    return {
      error: true,
      message: `관광지 정보를 불러오는 데 실패했습니다`,
      data: null,
    };
  }
}
