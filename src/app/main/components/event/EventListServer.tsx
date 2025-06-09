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
    <section
      className="
      grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1
      bg-[var(--bg-main)] text-[var(--text-main)]
      "
    >
      {data.map((el) => (
        // Link 태크 사용 예정
        <div
          key={el.contentid}
          className="
            flex flex-col justify-start items-center w-full overflow-hidden 
            rounded-[8px] shadow-md transition-transform duration-200 
            hover:-translate-y-0.5 hover:shadow-lg
            bg-[var(--bg-content)] text-[var(--text-main)]
            "
        >
          <div className="relative w-full h-[200px]">
            <Image
              src={el.firstimage || "/not_image/not_image.svg"}
              alt={el.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="flex flex-col w-full p-2 gap-1">
            <h2 className="text-lg font-medium">제목: {el.title}</h2>
            <p>주소: {el.addr1}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
