import { fetchTourismData } from "../main/api/services/fetchTourismData";
import { TourismQueryParams } from "../main/types/mainTypes";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        response: {
          body: {
            items: {
              item: [
                { contentid: "1", title: "Test1", addr1: "서울" },
                { contentid: "2", title: "Test2", addr1: "인천" },
                { contentid: "3", title: "Test3", addr1: "부산" },
              ],
            },
            numOfRows: 12,
            pageNo: 1,
            totalCount: 1,
          },
        },
      }),
  })
) as jest.Mock;

it("fetches tourism data successfully", async () => {
  const params: TourismQueryParams = {
    contentTypeId: "",
    areaCode: "1",
    arrangeType: "R",
    keywordType: "",
    categoryCode: "전체",
    pageNo: "1",
  };

  const result = await fetchTourismData(params);

  // 가짜 API(jest.Mock)를 사용하여 가져온 데이터 title이 .toBe의 "Test"와 동일한지
  // 확인하는 테스트 코드이다.
  // 해당 jest.Mock을 사용하지 않았다면 실제 API를 호출하여 진행을 하며
  // 이 경우는 에러가 발생할 것이다.
  // 해당 .toBe의 "Test"와 실제 API 요청 데이터가 다르기 때문이다.
  expect(result.response.body.totalCount).toBe(1);
});
