// import Image from "next/image";
import { fetchDetailTourismData } from "./api/fetchDetailTourismData";
// import TourismDetailIntro from "./components/Tourism_Detail_Intro/tourism_detail_intro";
// import { getCategoryNameChange } from "@/utils/getCategoryNameChange";
import TourismDetailHeaderInfo from "./components/Tourism_Detail_Main/tourism_detail_header_info";

interface PageProps {
  params: Promise<{
    tourismId: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { tourismId } = await params;
  console.log("[tourismId] Page: ", tourismId);

  const result = await fetchDetailTourismData(tourismId);

  if (result.error) {
    return <p>오류 발생: {result.message}</p>;
  }

  const item = result.data?.response?.body?.items?.item;
  if (!item || !Array.isArray(item) || item.length === 0) {
    return <p>해당 관광지 정보를 찾을 수 없습니다람쥐</p>;
  }

  return (
    <section
      className="
      flex flex-col gap-5 justify-center items-center w-full 
      bg-[var(--bg-main)]"
    >
      {/* <p>관광 상세페이지</p>
      <p>title: {item[0].title}</p>
      <p>add: {item[0].addr1}</p>
      <p>overview: {item[0].overview}</p>
      <p>zipcode: {item[0].zipcode}</p>
      <p>map X: {item[0].mapx}</p>
      <p>map Y: {item[0].mapy}</p>
      <p>content type ID: {item[0].contenttypeid}</p>
      <p>category ID: {getCategoryNameChange(item[0].cat1)}</p>
      <Image
        src={item[0].firstimage || "/not_image/not_image.svg"}
        alt="tourism-image"
        width={400}
        height={400}
      /> */}
      <TourismDetailHeaderInfo item={item[0]} />
      {/* <TourismDetailIntro
        key={item[0].contentid}
        contentId={item[0].contentid}
        contentTypeId={item[0].contenttypeid}
      /> */}
    </section>
  );
}
