"use client";

import { useRouter, useSearchParams } from "next/navigation";
import EventListSearch from "../input/EventListSearch";
import CategoryButton from "../button/CategoryButton";

interface EventListProps {
  children: React.ReactNode;
}

export default function EventList({ children }: EventListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onclickTag = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("contentType", "39"); // 예: tag=dog 추가 또는 수정

    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <div>EventList</div>
      <button onClick={onclickTag}>음식점</button>
      <CategoryButton />
      <EventListSearch />
      <>{children}</>
    </>
  );
}
