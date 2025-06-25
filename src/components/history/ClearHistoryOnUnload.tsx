// 루트 layout에 해당 useEffect를 사용하지 못하여 클라이언트 컴포넌트를 만들어 사용함
// 해당 역할은 루트 layout에 위치하므로써 어느 곳에서든 창을 닫으면 해당 세션스토리지 정보를 삭제함
// 세션스토리지라 굳이 필요하지 않음..

"use client";

import { clearPreviousUrl } from "@/utils/navigationHistory";
import { useEffect } from "react";

export default function ClearHistoryOnUnload() {
  useEffect(() => {
    const handleUnload = () => {
      clearPreviousUrl();
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return null;
}
