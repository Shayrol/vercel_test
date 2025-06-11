"use client";

// import { useState, useEffect } from "react";

interface LimitedPaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  hasNext: boolean;
  hasPrev: boolean;
  loading?: boolean;
}

// 제한된 페이지네이션 컴포넌트
export default function LimitedPagination({
  currentPage,
  onPageChange,
  hasNext,
  hasPrev,
  loading = false,
}: LimitedPaginationProps) {
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {/* 이전 버튼 */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!hasPrev || loading}
        className={`
          px-4 py-2 rounded-md border transition-colors
          ${
            !hasPrev || loading
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"
          }
        `}
      >
        이전
      </button>

      {/* 현재 페이지 표시 */}
      <div className="flex items-center gap-1">
        <span className="px-3 py-2 bg-blue-500 text-white rounded-md">
          {currentPage}
        </span>
        {hasNext && (
          <>
            <span className="px-3 py-2 text-gray-500">...</span>
          </>
        )}
      </div>

      {/* 다음 버튼 */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasNext || loading}
        className={`
          px-4 py-2 rounded-md border transition-colors
          ${
            !hasNext || loading
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"
          }
        `}
      >
        다음
      </button>
    </div>
  );
}
