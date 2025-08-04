import { Metadata } from "next";
import { fetchDetailTourismData } from "./api/services/fetchDetailTourismData";
import { fetchDetailTourismImageData } from "./api/services/fetchDetailTourismImageData";
import TourismDetailContents from "./components/TourismDetailContents";
import TourismDetailHeaderInfo from "./components/TourismDetailHeaderInfo";
import TourismDetailImage from "./components/TourismDetailImage";
import KakaoMap from "@/components/Kakao/KakaoMap";
import { Header } from "@/commons/layout/header/header";

interface PageProps {
  params: Promise<{
    tourismId: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { tourismId } = await params;

  try {
    const [detailResult, imageResult] = await Promise.all([
      fetchDetailTourismData(tourismId),
      fetchDetailTourismImageData(tourismId),
    ]);

    // 기본 메타데이터
    const defaultMetadata: Metadata = {
      title: "관광지 정보",
      description: "관광지 상세 정보를 확인하세요",
      openGraph: {
        title: "관광지 정보",
        description: "관광지 상세 정보를 확인하세요",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "관광지 정보",
        description: "관광지 상세 정보를 확인하세요",
      },
    };

    // 데이터 에러 처리
    if (detailResult.error || !detailResult.data?.response?.body?.items?.item) {
      return defaultMetadata;
    }

    const item = detailResult.data.response.body.items.item;
    if (!Array.isArray(item) || item.length === 0) {
      return defaultMetadata;
    }

    const tourismData = item[0];
    const images = imageResult.data?.response?.body?.items?.item || [];

    // 첫 번째 이미지 선택 (원본 이미지 우선, 없으면 썸네일)
    const primaryImage = images.find((img) => img.originimgurl) || images[0];
    const imageUrl = primaryImage?.originimgurl || primaryImage?.smallimageurl;

    // 메타데이터 구성
    const title = tourismData.title || "관광지 정보";
    const description = tourismData.overview
      ? tourismData.overview.substring(0, 160) + "..."
      : `${title}의 상세 정보를 확인하세요`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "website",
        url: `/tourism/${tourismId}`,
        siteName: "여행 정보 사이트", // 실제 사이트명으로 변경
        locale: "ko_KR",
        ...(imageUrl && {
          images: [
            {
              url: imageUrl,
              width: 800,
              height: 600,
              alt: title,
            },
          ],
        }),
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        ...(imageUrl && {
          images: [imageUrl],
        }),
      },
      // 추가 메타데이터
      robots: {
        index: true,
        follow: true,
      },
      alternates: {
        canonical: `${
          process.env.NEXT_PUBLIC_BASE_URL || ""
        }/tourism/${tourismId}`,
      },
    };
  } catch (error) {
    console.error("메타데이터 생성 중 오류:", error);

    // 에러 발생 시 기본 메타데이터 반환
    return {
      title: "관광지 정보",
      description: "관광지 상세 정보를 확인하세요",
      openGraph: {
        title: "관광지 정보",
        description: "관광지 상세 정보를 확인하세요",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "관광지 정보",
        description: "관광지 상세 정보를 확인하세요",
      },
    };
  }
}

export default async function Page({ params }: PageProps) {
  const { tourismId } = await params;

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
    return <p>해당 관광지 정보를 찾을 수 없습니다</p>;
  }

  // 이미지 데이터 에러 처리
  if (imageResult.error) {
    return <p>이미지 로딩 오류: {imageResult.message}</p>;
  }
  const images = imageResult.data?.response?.body?.items?.item || [];
  return (
    <div className="flex flex-col justify-center items-center w-full gap-5">
      <Header title={item[0].title} />
      <main
        className="
        flex flex-col gap-5 px-3 justify-center items-center max-w-[1280px] w-full 
        bg-[var(--bg-main)] mb-5"
      >
        <TourismDetailHeaderInfo item={item[0]} />
        <TourismDetailImage images={images} item={item[0]} />
        <TourismDetailContents item={item[0]} />
        <KakaoMap item={item[0]} />
      </main>
    </div>
  );
}
