"use client";

import EventListSearch from "../input/EventListSearch";
import CategoryButton from "../button/CategoryButton";

interface EventListProps {
  children: React.ReactNode;
}

export default function EventList({ children }: EventListProps) {
  return (
    <section
      className="
      flex flex-col gap-5 justify-center items-center w-full
      bg-[var(--bg-main)] text-[var(--text-main)] border border-red-500"
    >
      <EventListSearch />
      <CategoryButton />
      <>{children}</>
    </section>
  );
}
