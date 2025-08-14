// 웹, 앱 공통 뒤로가기 훅

import { getPreviousUrl } from "@/utils/navigationHistory";
import { useRouter } from "next/navigation";

import { useCallback } from "react";

export function useBackNavigation() {
  const router = useRouter();

  const handleBack = useCallback(() => {
    const prevUrl = getPreviousUrl();
    if (prevUrl) {
      router.replace(prevUrl);
    } else {
      router.replace("/");
    }
  }, [router]);

  return { handleBack };
}
