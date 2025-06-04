import Image from "next/image";

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

export default function EventListServer({ data }: { data: DataItems[] }) {
  return (
    <div className="flex gap-4 flex-wrap">
      {data.map((el) => (
        <div key={el.contentid}>
          <div>
            {el.firstimage && (
              <Image
                src={el.firstimage || "/no-image.png"}
                alt={el.title}
                width={300}
                height={200}
                style={{ width: 300, height: 200 }}
                priority
              />
            )}
            <p>제목: {el.title ?? "없음"}</p>
            <p>주소: {el.addr1 ?? "없음"}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
