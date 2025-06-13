import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchTourismData } from "../fetchTourismData";
import { TourismApiResponse, TourismQueryParams } from "../../types/mainTypes";

export const useTourismData = (
  params: TourismQueryParams
): UseQueryResult<TourismApiResponse> => {
  return useQuery<
    TourismApiResponse,
    Error,
    TourismApiResponse,
    [string, TourismQueryParams]
  >({
    queryKey: ["tourismData", params], // 해당 "tourismData" 키로 구분을 하고 params 변경에 따라 fetch
    queryFn: () => fetchTourismData(params), // API 함수 요청
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터 유지 이후 새로 요청
    placeholderData: (previousData) => previousData, // 데이터 불러오는 동안 이전 데이터 출력
  });
};

// keepPreviousData: true,
// 이 옵션은 v3, v4 버전에서 사용이 되었지만 v5 버전에서는 사라짐
// 따라서 placeholderData 옵션을 사용해야 함

// 해당 옵션 기능
// - 데이터 가져오는 동안 이전 데이터를 보여줌

// Skeleton UI는 어떻게 되는걸까?
// - loading을 통해 Skeleton UI를 보여주고 있다면 pagination 이동에만 적용 되지 않고
// - 이전의 데이터를 보여줌 - 추가로 pagination 뿐만 아니라 쿼리스트링 변경에 모두 적용됨
// - 그래서 현재 확인된 정보로만 봤을 때 새로고침으로 이전의 데이터가 없는
// - 즉 캐싱이 되지 않는 상태에서의 첫 데이터 요청은 Skeleton UI가 보여지고 그외 이전 데이터가 보임

// queryKey: ["tourismData", params],
// - 이는 쿼리의 키가 "tourismData"로 해당 params의 값을 저장한다.
// - ["tourismData", {
// -   contentTypeId: "12",
// -   areaCode: "1",
// -   arrangeType: "A",
// -   keywordType: "산",
// -   categoryCode: "A01",
// -   pageNo: "1",
// - }]
// - 이렇게 저장을 한다고 했으며 이후 params 값이 변경(예: pageNo가 2로 변경) 되면
// - 이전 데이터 사용하지 않고 새로 fetch함
