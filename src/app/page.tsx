import CategoryButton from "./main/components/button/CategoryButton";
import EventListClient from "./main/components/event/EventListClient";
import EventListSearch from "./main/components/input/EventListSearch";

type SearchParams = Promise<{
  contentType?: string;
  area?: string;
  arrange?: string;
  keyword?: string;
  category?: string;
  page?: string;
}>;

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const resolvedSearchParams = await searchParams;

  return (
    <section
      className="
      flex flex-col gap-5 justify-center items-center w-full 
      bg-[var(--bg-main)]"
    >
      <EventListSearch />
      <CategoryButton />
      <EventListClient searchParams={resolvedSearchParams} />
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

// 이렇게 Home 컴포넌트에서 사용하면 된다 하는데...
// 추가로 InfiniteScrollWrapper 컴포넌트 안에는 EventListServer 컴포넌트가 있어
// 무한 스크롤을 불러오고 있음 (Claude 참고)
// 모바일용 무한 스크롤과 데스크탑용 페이지네이션 만들고 상세 페이지이동 구현하기

// 06/11
// 무한 스크롤 X 서버 컴포넌트로 구현하지 못함
// 페이지네이션을 할 것이며
// 또한 리스트 목록은 CSR로 변경하고 상세 페이지는 SSR로 구현할 예정
// 한 것:
// - API 타입 정의 및 추가 data 받아옴 - 총 게시글 데이터 추가
// - 리스트 컴포넌트 CSR로 변경 및 스켈리톤 UI 적용

// 06/12
// 서버 캐싱 추가하기
// 상세 페이지 구현하기
// 메인 페이지 배너 추가하기
// 한것:
// - 페이지네이션 구현 완료 - 색상 및 약간의 스타일 수정 필요
// - 다크모드, 라이트모드 적용 및 디자인 수정 - 시스템 색상 삭제

// 06/13
// 추가로 필요한게 있으면 추가하기 - 5분간 캐싱, 데이터 불러오는동안 이전 데이터 출력 추가함
// 상세 페이지 구현하기
// 한것:
// 서버 캐싱(react-query) 적용 완료

// 06/14
// 태그를 추가로
// lclsSystm 을 사용해서 태그를 조금더 다양하게 구현해야 하지 않나?
// cat 사용하는(서비스분류코드조회) 것은 전체 데이터를 뽑아올 수 없음 - 대분류, 중분류, 소분류 한 번에 못 뽑은
// 다만 lclsSystem은 한 번에 뽑아올 수 있음
// 그래서 직접 저장을 하려면 lclsSystem을 이용하는게 좋을 것 같고
// 데이터 요청을 할 거면 더 다양한 태그를 선택하면 될 듯?
// 한것:
// 상세페이지 다이나믹 라우팅 구현
// 상세페이지 데이터 SSR 요청

// +++
// 배포환경 데이터 가져오지 성공함
// 근데 [tourismID]의 값을 가져오지 못함..
// +++

// 06/16
// 소개정보 조회를 통해 상세 추가 정보를 불러올건데 SSR or CSR 어떤 방식을 택할 건지..
// SSR로 할 것 같음... 그렇게 되면 리스트 메인페이지에서 쿼리스트링으로 contentId만 저장하고 있는데
// contentTypeId도 같이 저장을 해 사용해야할 듯?
// 그리고 이미지, 상세 설명, 지도 추가하기
//
// 핫것:
// 1. 상세 페이지를 불러오지 못하는 문제가 있었음
//    보니 이전에 대문자로 다이아믹 라우팅한 경로 사용이 github에 변경되지 않고 저장되어 있었음
//    해당 github는 대소문자 변경을 감지 못함

// 2. git 명령어로 강제로 변경하려 했지만 안되어 해당 [tourismId] 파일을 따로 빼고
//    커밋으로 해당 github에 사라지게 하고 다시 추가를 해 변경을 함

// 06/17
// 이전 추가 정보를 CSR로 불러와야 할 듯? - 숙박 자리, 주차 공간, 요금 등등
// 추가 이미지 요청은 RSC로 할 수 있던 것은 콘텐츠ID가 필요없이 tourismId 만 필요해서 강능했음
// 하지만 추가 정보 요청은 contentsTypeId도 필요한데 리스트에서 클릭 이동시 url에 정보를 넘겨줘야 함
//
// 태그, 추가 정보 API, 지도 추가하기
// 추가 정보 API에서 문의 전화번호가 있는 경우 있음 - 메인 전화번호가 없는데... 잘 해보기...
//
// 한것:
// 1. 라이브러리 Swiper를 통해 이미지 적용
// 2. overview를 불러와 상세 정보 적용 및 "다." 기준으로 줄 바꿈

// 06/18
// 스타일 및 스켈레톤 UI 생성하기 + 없는 데이터 "홈페이지 방문"과 같이 화면 처리하기
//
// 한것:
// 1. 상세 정보 데이터에 대한 추가 정보 데이터 불러옴 - 각 태그에 따른 정보 제공

// 06/20
// 상세 페이지 이미지 비율 조정
// 지도 추가
// 모바일 뒤로 가기 버튼 추가
//
// 한것:
// 1. 카테고리별 상세 페이지의 추가 정보 분류 및 아이콘 추가 - 색상 추가 및 아이콘 마저 추가 해야함

// 06/21
// 상세 페이지 이미지 비율 조정
// 지도 추가
// 모바일 뒤로 가기 버튼 추가
//
// 한것:
// 1. 추가 정보 완성

// 06/22
// 한것:
// 카카오 맵 추가를 했지만 맵 신청을 하는데 3~5일 걸림...
