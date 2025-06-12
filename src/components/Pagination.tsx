"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalCount,
  onPageChange,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalCount) return;

    // 현재 URL의 쿼리 파라미터들을 유지하면서 page만 업데이트
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());

    // URL 업데이트
    router.push(`?${params.toString()}`);

    // 선택적 콜백 실행
    onPageChange?.(page);
  };

  // 페이지 번호 계산 (현재 페이지 기준으로 5개씩 보여주기)
  const getPageNumbers = () => {
    const delta = 2; // 현재 페이지 좌우로 보여줄 페이지 수
    const range = [];
    const rangeWithDots = [];

    // 시작과 끝 페이지 계산
    const start = Math.max(1, currentPage - delta);
    const end = Math.min(totalCount, currentPage + delta);

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    // 첫 페이지와 시작 사이에 간격이 있으면 ...추가
    if (start > 2) {
      rangeWithDots.push(1, "...");
    } else if (start === 2) {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    // 끝과 마지막 페이지 사이에 간격이 있으면 ...추가
    if (end < totalCount - 1) {
      rangeWithDots.push("...", totalCount);
    } else if (end === totalCount - 1) {
      rangeWithDots.push(totalCount);
    }

    return rangeWithDots;
  };

  if (totalCount <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-8 mb-4">
      {/* 이전 페이지 버튼 */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`
          flex items-center justify-center w-10 h-10 rounded-lg border transition-colors
          ${
            currentPage === 1
              ? "border-[var(--border-main)] text-[var(--text-main)] bg-[var(--bg-content)] cursor-not-allowed"
              : "border-[var(--border-main)] text-[var(--text-main)] bg-[var(--bg-content)] hover:bg-[#ff6b6b] hover:border-[#ff6b6b]"
          }
        `}
        aria-label="이전 페이지"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* 페이지 번호들 */}
      {getPageNumbers().map((pageNum, index) => (
        <div key={index}>
          {pageNum === "..." ? (
            <span className="flex items-center justify-center w-10 h-10 text-[var(--text-secondary)]">
              ...
            </span>
          ) : (
            <button
              onClick={() => handlePageChange(pageNum as number)}
              className={`
                flex items-center justify-center w-10 h-10 rounded-lg border transition-colors font-medium
                ${
                  currentPage === pageNum
                    ? "bg-[#ff6b6b] border-[#ff6b6b] text-white"
                    : "border-[var(--border-main)] text-[var(--text-main)] bg-[var(--bg-content)] hover:bg-[#ff6b6b] hover:border-[#ff6b6b]"
                }
              `}
            >
              {pageNum}
            </button>
          )}
        </div>
      ))}

      {/* 다음 페이지 버튼 */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalCount}
        className={`
          flex items-center justify-center w-10 h-10 rounded-lg border transition-colors
          ${
            currentPage === totalCount
              ? "border-[var(--border-main)] text-[var(--text-main)] bg-[var(--bg-content)] cursor-not-allowed"
              : "border-[var(--border-main)] text-[var(--text-main)] bg-[var(--bg-content)] hover:bg-[#ff6b6b] hover:border-[#ff6b6b]"
          }
        `}
        aria-label="다음 페이지"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
