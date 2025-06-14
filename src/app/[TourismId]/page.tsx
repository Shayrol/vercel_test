import Image from "next/image";
import { fetchDetailTourismData } from "./api/fetchDetailTourismData";
import { getCategoryNameChange } from "@/utils/getCategoryNameChange";

export default async function TourismIdPage({
  params,
}: {
  params: { TourismId: string };
}) {
  const tourismId = params.TourismId;
  const result = await fetchDetailTourismData(tourismId);
  const item = result.data?.response.body.items.item[0];
  console.log("TourismIdPage tourismId:", tourismId);
  console.log("TourismIdPage render:", item);

  if (!item) {
    return <p>해당 관광지 정보를 찾을 수 없습니다.</p>;
  }

  return (
    <>
      <p>관광 상세페이지</p>
      <p>title: {item.title}</p>
      <p>add: {item.addr1}</p>
      <p>over view: {item.overview}</p>
      <p>zipcode: {item.zipcode}</p>
      <p>map X: {item.mapx}</p>
      <p>map Y: {item.mapy}</p>
      <p>content type ID: {item.contenttypeid}</p>
      <p>category ID: {getCategoryNameChange(item.cat1)}</p>
      <Image
        src={item.firstimage || "/not_image/not_image.svg"}
        alt="tourism-image"
        width={400}
        height={400}
      />
    </>
  );
}
