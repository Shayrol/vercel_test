"use client";

import { getPreviousUrl } from "@/utils/navigationHistory";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    const prevUrl = getPreviousUrl();
    if (prevUrl) {
      router.push(prevUrl); // 히스토리 복원
    } else {
      router.push("/"); // 브라우저 기본 뒤로가기 - back을 했으나 공유시 해당 뒤로가기가 안됨
    }
  };

  return <ChevronLeft className="absolute w-6 left-5" onClick={handleBack} />;
}
