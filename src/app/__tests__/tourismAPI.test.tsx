import { fetchTourismData } from "../main/api/services/fetchTourismData";
import { TourismQueryParams } from "../main/types/mainTypes";

it("fetches tourism data successfully", async () => {
  const params: TourismQueryParams = {
    contentTypeId: "",
    areaCode: "1",
    arrangeType: "R",
    keywordType: "",
    categoryCode: "전체",
    pageNo: "1",
  };

  // 실제 API를 호출을 하고 도중에 가짜 API가 가로채 작성된 API를 응답한다.
  // mocks/handlers.ts 파일에서 정의된 모킹에 따라 응답을 받는다.
  const result = await fetchTourismData(params);

  expect(result.response.body.items.item[0].title).toBe("서울 맛집");
});
