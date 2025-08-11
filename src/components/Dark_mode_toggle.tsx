"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
// import { useState, useEffect } from "react";

declare const window: Window & {
  ReactNativeWebView: {
    postMessage: (message: string) => void;
  };
};

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isDarkMode = theme === "dark" ? true : false;

  const toggleDarkMode = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  // hydration 문제로 렌더링 되고 스타일 적용 - isDarkMode 값이 서버에 없어 변경이 되면 문제 생김
  useEffect(() => {
    setMounted(true);
  }, []);

  // 테마 변경 시 React Native WebView에 메시지 전송
  useEffect(() => {
    if (window.ReactNativeWebView && theme) {
      window.ReactNativeWebView.postMessage(JSON.stringify({ theme }));
    }
  }, [theme]);

  if (!mounted) return null;

  return (
    <label className="flex items-center cursor-pointer gap-3">
      <div className="relative w-14 h-8">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleDarkMode}
          className="sr-only"
        />
        <div className="w-full h-full bg-[#ff6b6b] dark:bg-gray-600 rounded-full transition-colors duration-300" />
        <div
          className={`absolute w-6 h-6 bg-white dark:bg-gray-200 rounded-full shadow-md top-[4px] left-[4px] flex items-center justify-center transform ${
            isDarkMode ? "translate-x-6" : "translate-x-0"
          } transition-transform duration-300`}
        >
          <span className="text-lg">{isDarkMode ? "🌙" : "☀️"}</span>
        </div>
      </div>
    </label>
  );
}

// const [isDarkMode, setIsDarkMode] = useState(false);

// // 테마 적용 함수
// const applyTheme = (isDark: boolean) => {
//   const html = document.documentElement;
//   if (isDark) {
//     html.classList.add("dark");
//     html.classList.remove("light");
//   } else {
//     html.classList.add("light");
//     html.classList.remove("dark");
//   }
// };

// // 초기 로드 시 localStorage 확인 및 적용
// useEffect(() => {
//   const savedTheme = localStorage.getItem("theme");
//   const initialDark = savedTheme === "dark";
//   setIsDarkMode(initialDark);
//   applyTheme(initialDark);

//   // storage 이벤트 리스너 추가 (다른 컴포넌트의 변경 반영)
//   const syncTheme = (e: StorageEvent) => {
//     if (e.key === "theme") {
//       const isDark = e.newValue === "dark";
//       setIsDarkMode(isDark);
//       applyTheme(isDark);
//     }
//   };

//   window.addEventListener("storage", syncTheme);
//   return () => window.removeEventListener("storage", syncTheme);
// }, []);

// // 토글 동작
// const toggleDarkMode = () => {
//   const newDarkMode = !isDarkMode;
//   setIsDarkMode(newDarkMode);
//   applyTheme(newDarkMode);
//   localStorage.setItem("theme", newDarkMode ? "dark" : "light");
// };
