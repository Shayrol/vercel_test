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
    <>
      {data.length !== 0 ? (
        <section
          className="
            grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1
            justify-center items-center w-full bg-[var(--bg-main)] text-[var(--text-main)]
          "
        >
          {data.map((el) => (
            // Link 태크 사용 예정
            <div
              key={el.contentid}
              className="
                flex flex-col justify-start items-center w-full overflow-hidden 
                rounded-[8px] shadow-md transition-transform duration-200 
                hover:-translate-y-0.5 hover:shadow-lg bg-[var(--bg-content)] 
                text-[var(--text-main)]
              "
            >
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={el.firstimage || "/not_image/not_image.svg"}
                  alt={el.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div className="flex flex-col w-full p-2 gap-1">
                <h2 className="text-lg font-medium truncate text-[var(--text-main)]">
                  {el.title}
                </h2>
                <p className="text-sm font-normal truncate text-[var(--text-secondary)]">
                  {el.addr1}
                </p>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section className="flex justify-center items-center w-full aspect-[16/4] border border-red-500">
          등록된 내용이 없습니다.
        </section>
      )}
    </>
  );
}
