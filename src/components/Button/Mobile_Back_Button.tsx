"use client";

import { getPreviousUrl } from "@/utils/navigationHistory";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    const prevUrl = getPreviousUrl();
    if (prevUrl) {
      router.push(prevUrl); // 히스토리 복원
    } else {
      router.back(); // 브라우저 기본 뒤로가기
    }
  };

  return (
    <button onClick={handleBack} className="text-sm text-blue-600 underline">
      ← 뒤로가기
    </button>
  );
}
