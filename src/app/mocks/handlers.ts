import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://apis.data.go.kr/B551011/KorService2/areaBasedList2", () => {
    return HttpResponse.json({
      response: {
        body: {
          items: {
            item: [
              {
                contentid: "12444",
                title: "서울 맛집",
                addr1: "서울 강남구",
                firstimage: "https://example.com/haeundae.jpg",
              },
            ],
          },
          numOfRows: 12,
          pageNo: 1,
          totalCount: 1,
        },
      },
    });
  }),

  http.get("https://apis.data.go.kr/B551011/KorService2/searchKeyword2", () => {
    return HttpResponse.json({
      response: {
        body: {
          items: {
            item: [
              {
                contentid: "654321",
                title: "부산 맛집",
                addr1: "부산 해운대구",
                firstimage: "https://example.com/haeundae.jpg",
              },
            ],
          },
          numOfRows: 12,
          pageNo: 1,
          totalCount: 1,
        },
      },
    });
  }),
];
