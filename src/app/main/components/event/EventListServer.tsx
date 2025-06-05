import Image from "next/image";
import { DataItems } from "../../types/mainTypes";

export default function EventListServer({
  data,
  keywordType,
}: {
  data: DataItems[];
  keywordType: string | undefined;
}) {
  console.log("EventListServer keyword: ", keywordType);
  return (
    <div className="flex gap-4 flex-wrap">
      {data.map((el) => (
        <div key={el.contentid}>
          <div>
            <Image
              src={el.firstimage || "/not_image/not_image.svg"}
              alt={el.title}
              width={300}
              height={200}
              style={{ width: 300, height: 200 }}
              priority
            />
            <p>제목: {el.title ?? "없음"}</p>
            <p>주소: {el.addr1 ?? "없음"}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
