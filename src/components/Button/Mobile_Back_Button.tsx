"use client";

import { useBackNavigation } from "@/hooks/useBackNavigation";
import { ChevronLeft } from "lucide-react";

export default function BackButton() {
  const { handleBack } = useBackNavigation();

  return <ChevronLeft className="" onClick={handleBack} />;
}
