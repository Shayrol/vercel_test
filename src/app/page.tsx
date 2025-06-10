import { fetchTourismData } from "./main/api/fetchTourismData";
import EventList from "./main/components/event/EventList";
import EventListServer from "./main/components/event/EventListServer";

// type SearchParams = Promise<{
//   contentType?: string;
//   area?: string;
//   arrange?: string;
//   keyword?: string;
//   category?: string;
//   page?: string;
// }>;

interface SearchParams {
  contentType?: string;
  area?: string;
  arrange?: string;
  keyword?: string;
  category?: string;
  page?: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { contentType, area, arrange, keyword, category, page } =
    await searchParams;
  const contentTypeId = contentType ?? "";
  const areaCode = area ?? "전체 지역";
  const arrangeType = arrange ?? "R";
  const keywordType = keyword ?? "";
  const categoryCode = category ?? "전체";
  const pageNo = page ?? "1";
  console.log("contentTypeId: ", contentType);

  const data = await fetchTourismData({
    contentTypeId,
    areaCode,
    arrangeType,
    keywordType,
    categoryCode,
    pageNo,
  });
  console.log("Home: ", data);

  return (
    <section className="flex flex-col justify-center items-center w-full bg-white dark:bg-[var(--bg-main)]">
      <EventList>
        <EventListServer data={data} keywordType={keywordType} />
      </EventList>
    </section>
  );
}

// searchParams
// contentType: 관광타입(12:관광지, 14:문화시설, 15:축제공연행사, 25:여행코스, 28:레포츠, 32:숙박, 38:쇼핑, 39:음식점, "": 전체)
// area: 지역코드(1:서울, 2: 인천, ... 39:제주도, "": 전체)
// arrange: 정렬기준(A=제목순, C=수정일순, D=생성일순, 이미지 우선/ O=제목순, Q=수정순, R=생성일순)

// 마무리

// 06/04
// API 요청이 각각 따로여서 힘듦
// 전체 리스트와 카테고리(음식점, 관광지 등), 지역, 정렬 기준 만 할 수 있으며
// 검색, 행사정보조회, 숙박정보조회는 따로 API 사용해야함...

// 06/05
// 여러 API를 조건을 통해 요청하도록 함 - fetchTourismData.ts 함수 참고
// 카테고리 및 검색 기능 구현 완료
// 검색 시 쿼리스트링 초기화
// 검색 후 카테고리 추가 가능
// RSC 서버 컴포넌트에 대한 서버 캐싱이 안됨 - router.push로 인한 문제???
// 관광타입의 12:관광지 분류가 되어있는데 카테고리는 인문(문화/예술/역사)로 묶여있어
// 실제로는 12:관광지, 14:문화시설, 15:축제공연행사가 묶여있음
// 그래서 중분류로 나눠야 하는데 너무 많음...
// 이후 중분류 중에 쓸만한거 추가할 것
// 요약: 카테고리 및 검색 기능 구현 했으며, 지역 선택 및 상세 페이지 이동 등 구현 예정이며
//      서버캐싱에 대한 문제는 있지만 아직 큰 문제는 아님

// 06/06
// 검색, 지역, 카테고리 스타일 완료 - 모바일 대응은 추후

// 06/07
// 리스트 구현중...
// 다크모드 적용 - 지역선택 다크모드 및 토글 버튼 추가 수정 필요
// pagination 또는 무한 스크롤 구현 - 일단 pagination 생각중...
// 서버 캐싱 도입??

// 06/08
// 다크모드 구현 완료

// 06/10
// page 쿼리스트링 추가 - (따로 동작을 위한 함수, UI는 없음)
// 무한 스크롤 적용을 위한 탐색중...
{
  /* <>
  <EventListServer
    data={initialData}
    keywordType={searchParams.keyword}
    id="initial-content"
  />

  <Suspense fallback={<div>로딩 중...</div>}>
    <InfiniteScrollWrapper
      initialData={initialData}
      searchParams={searchParams}
    />
  </Suspense>
</>; */
}
// 이렇게 Home 컴포넌트에서 사용하면 된다 하는데...
// 추가로 InfiniteScrollWrapper 컴포넌트 안에는 EventListServer 컴포넌트가 있어
// 무한 스크롤을 불러오고 있음 (Claude 참고)
// 모바일용 무한 스크롤과 데스크탑용 페이지네이션 만들고 상세 페이지이동 구현하기
