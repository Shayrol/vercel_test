import { DetailTourismItem } from "../../api/types/DetailTourismTypes";

export default function TourismDetailContents({
  item,
}: {
  item: DetailTourismItem;
}) {
  const sentences = item.overview
    .split("다. ")
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence)
    .map((sentence, index, arr) =>
      index < arr.length - 1 ? sentence + "다." : sentence
    );

  return (
    <article
      className="flex flex-col gap-10 w-full p-7 shadow-md rounded-[8px]
      border bg-[var(--bg-content)] text-[var(--text-main)] border-[var(--border-main)]"
    >
      {item.overview ? (
        <>
          <h2 className="text-3xl font-medium">상세 정보</h2>
          <div className="flex flex-col gap-3">
            {sentences.map((sentence, index) => (
              <p key={index} className="text-base leading-relaxed mb-2">
                {sentence}
              </p>
            ))}
          </div>
        </>
      ) : (
        <p>등록된 상세 정보가 없습니다.</p>
      )}
    </article>
  );
}
