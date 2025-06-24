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
