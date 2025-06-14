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
  const url = `https://apis.data.go.kr/B551011/KorService2/detailCommon2?serviceKey=${process.env.TOUR_API_KEY}&MobileApp=AppTest&MobileOS=ETC&pageNo=1&numOfRows=10&contentId=${tourismId}&_type=json`;

  try {
    const res = await fetch(url, {
      cache: "force-cache",
      next: { revalidate: 60 * 5 }, // 5분
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const json = await res.json();
    const data = json as DetailTourismApiResponse;

    console.log("server API data: ", data.response.body.items.item);

    return {
      error: false,
      data,
    };
  } catch (error) {
    console.error("Error fetching detail tourism data:", error);

    return {
      error: true,
      message: "관광지 정보를 불러오는 데 실패했습니다.",
      data: null,
    };
  }
}
