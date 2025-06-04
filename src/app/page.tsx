import EventList from "./main/components/event/EventList";
import EventListServer from "./main/components/event/EventListServer";

type SearchParams = Promise<{
  contentType?: string;
  area?: string;
  arrange?: string;
}>;

interface DataItems {
  addr1: string;
  addr2: string;
  areacode: string;
  cat1: string;
  cat2: string;
  cat3?: string;
  contentid: string;
  contenttypeid: string;
  createdtime?: string;
  firstimage?: string;
  firstimage2?: string;
  mapx: string;
  mapy: string;
  mlevel?: string;
  modifiedtime?: string;
  readcount?: string;
  sigungucode?: string;
  tel?: string;
  title: string;
  zipcode?: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { contentType, area, arrange } = await searchParams;
  const contentTypeId = contentType ?? "";
  const areaCode = area ?? "";
  const arrangeType = arrange ?? "D";
  console.log("contentTypeId: ", contentType);

  const res = await fetch(
    `http://apis.data.go.kr/B551011/KorService2/areaBasedList2?numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json&contentTypeId=${contentTypeId}&arrange=${arrangeType}&areaCode=${areaCode}&serviceKey=${process.env.TOUR_API_KEY}`
  );
  const json = await res.json();
  const data: DataItems[] = json.response.body.items.item;
  console.log(json.response.body.items.item);

  return (
    <div>
      <EventList>
        <EventListServer data={data} />
      </EventList>
    </div>
  );
}

// searchParams
// contentType: 관광타입(12:관광지, 14:문화시설, 15:축제공연행사, 25:여행코스, 28:레포츠, 32:숙박, 38:쇼핑, 39:음식점, "": 전체)
// area: 지역코드(1:서울, 2: 인천, ... 39:제주도, "": 전체)
// arrange: 정렬기준(A=제목순, C=수정일순, D=생성일순, "": 전체)

// API 요청이 각각 따로여서 힘듦
// 전체 리스트와 카테고리(음식점, 관광지 등), 지역, 정렬 기준 만 할 수 있으며
// 검색, 행사정보조회, 숙박정보조회는 따로 API 사용해야함...
