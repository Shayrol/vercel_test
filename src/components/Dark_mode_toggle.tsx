"use client";

import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState("system"); // "system", "light", "dark"
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    let shouldBeDark = false;
    if (savedTheme === "dark") {
      shouldBeDark = true;
    } else if (savedTheme === "light") {
      shouldBeDark = false;
    } else {
      shouldBeDark = systemDark;
    }

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setTheme(savedTheme);
    setIsDark(shouldBeDark);
  }, []);

  const toggleDarkMode = () => {
    let newTheme;
    let newIsDark;

    if (theme === "system") {
      // system → light
      newTheme = "light";
      newIsDark = false;
    } else if (theme === "light") {
      // light → dark
      newTheme = "dark";
      newIsDark = true;
    } else {
      // dark → system
      newTheme = "system";
      newIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    if (newIsDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    setIsDark(newIsDark);
  };

  const getButtonText = () => {
    if (theme === "system") return "🖥️ 시스템";
    if (theme === "light") return "☀️ 라이트";
    return "🌙 다크";
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
    >
      {getButtonText()}
    </button>
  );
}
