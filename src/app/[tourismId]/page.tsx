import { fetchDetailTourismData } from "./api/fetchDetailTourismData";
import { fetchDetailTourismImageData } from "./api/fetchDetailTourismImageData";
import TourismDetailContents from "./components/Tourism_Detail_Main/tourism_detail_contents";
import TourismDetailHeaderInfo from "./components/Tourism_Detail_Main/tourism_detail_header_info";
import TourismDetailImage from "./components/Tourism_Detail_Main/tourism_detail_image";

interface PageProps {
  params: Promise<{
    tourismId: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { tourismId } = await params;
  console.log("[tourismId] Page: ", tourismId);

  const [detailResult, imageResult] = await Promise.all([
    fetchDetailTourismData(tourismId),
    fetchDetailTourismImageData(tourismId),
  ]);

  // 상세 정보 에러 처리
  if (detailResult.error) {
    return <p>오류 발생: {detailResult.message}</p>;
  }
  const item = detailResult.data?.response?.body?.items?.item;
  if (!item || !Array.isArray(item) || item.length === 0) {
    return <p>해당 관광지 정보를 찾을 수 없습니다람쥐</p>;
  }

  // 이미지 데이터 에러 처리
  if (imageResult.error) {
    return <p>이미지 로딩 오류: {imageResult.message}</p>;
  }
  const images = imageResult.data?.response?.body?.items?.item || [];
  console.log("tourismId Image: ", images);
  return (
    <section
      className="
      flex flex-col gap-5 justify-center items-center w-full 
      bg-[var(--bg-main)]"
    >
      <TourismDetailHeaderInfo item={item[0]} />
      <TourismDetailImage images={images} item={item[0]} />
      <TourismDetailContents item={item[0]} />
    </section>
  );
}
