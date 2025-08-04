"use client";

import { Github } from "lucide-react";

export function Footer() {
  return (
    <>
      <div className="flex-1" />

      <footer className="flex flex-col justify-center items-center bg-[var(--bg-main) w-full">
        <section className="flex flex-col max-w-[1180px] w-full p-5 gap-3 border-t border-[var(--border-main)] text-[var(--text-main)]">
          <nav>
            <a
              href="https://github.com/Shayrol/vercel_test"
              target="_blank"
              className="flex justify-center items-center w-fit p-1 border-2 border-[var(--text-main)] rounded-[8px] hover:bg-[var(--bg-content)]"
            >
              <Github className="text-[var(--text-main)]" />
            </a>
          </nav>
          <span>저자: 전찬호</span>
          <span>이메일: rus47@naver.com</span>
          <span className="font-medium">
            Copyright 2025. 전찬호. All Rights Reserved.
          </span>
        </section>
      </footer>
    </>
  );
}
