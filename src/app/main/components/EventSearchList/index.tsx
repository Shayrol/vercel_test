"use client";

import CategoryButton from "../CategoryButton";
import SearchInput from "./sections/SearchInput";

interface EventListProps {
  children: React.ReactNode;
}

export default function EventList({ children }: EventListProps) {
  return (
    <section
      className="
      flex flex-col gap-5 justify-center items-center w-full
      bg-[var(--bg-main)] text-[var(--text-main)]"
    >
      <SearchInput />
      <CategoryButton />
      <>{children}</>
    </section>
  );
}
