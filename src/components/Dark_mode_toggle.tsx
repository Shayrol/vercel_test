"use client";

import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState("system"); // "system", "light", "dark"

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    applyTheme(savedTheme);
    setTheme(savedTheme);
  }, []);

  const applyTheme = (theme: string) => {
    const html = document.documentElement;

    // 모든 테마 클래스 제거
    html.classList.remove("light", "dark");

    if (theme === "light") {
      html.classList.add("light");
    } else if (theme === "dark") {
      html.classList.add("dark");
    }
    // system일 때는 클래스를 추가하지 않음 (CSS media query가 처리)
  };

  const toggleDarkMode = () => {
    let newTheme;

    if (theme === "system") {
      newTheme = "light";
    } else if (theme === "light") {
      newTheme = "dark";
    } else {
      newTheme = "system";
    }

    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const getButtonText = () => {
    if (theme === "system") return "🖥️ 시스템";
    if (theme === "light") return "☀️ 라이트";
    return "🌙 다크";
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-[var(--bg-main)] text-[var(--text-main)] hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
    >
      {getButtonText()}
    </button>
  );
}
