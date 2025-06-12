// "use client";

// import { useState, useEffect } from "react";

// export default function DarkModeToggle() {
//   const [theme, setTheme] = useState("system"); // "system", "light", "dark"

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "system";
//     applyTheme(savedTheme);
//     setTheme(savedTheme);
//   }, []);

//   const applyTheme = (theme: string) => {
//     const html = document.documentElement;

//     // 모든 테마 클래스 제거
//     html.classList.remove("light", "dark");

//     if (theme === "light") {
//       html.classList.add("light");
//     } else if (theme === "dark") {
//       html.classList.add("dark");
//     }
//     // system일 때는 클래스를 추가하지 않음 (CSS media query가 처리)
//   };

//   const toggleDarkMode = () => {
//     let newTheme;

//     if (theme === "system") {
//       newTheme = "light";
//     } else if (theme === "light") {
//       newTheme = "dark";
//     } else {
//       newTheme = "system";
//     }

//     applyTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     setTheme(newTheme);
//   };

//   const getButtonText = () => {
//     if (theme === "system") return "🖥️ 시스템";
//     if (theme === "light") return "☀️ 라이트";
//     return "🌙 다크";
//   };

//   return (
//     <button
//       onClick={toggleDarkMode}
//       className="p-2 rounded-lg bg-[var(--bg-main)] text-[var(--text-main)] hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
//     >
//       {getButtonText()}
//     </button>
//   );
// }

"use client";

import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // localStorage에서 테마 설정 불러오기
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setIsDarkMode(true);
      applyTheme(true);
    } else {
      // localStorage에 값이 없거나 "light"인 경우 라이트 모드 적용
      setIsDarkMode(false);
      applyTheme(false);
    }
  }, []);

  const applyTheme = (isDark: boolean) => {
    const html = document.documentElement;

    if (isDark) {
      html.classList.add("dark");
      html.classList.remove("light");
    } else {
      html.classList.add("light");
      html.classList.remove("dark");
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;

    setIsDarkMode(newDarkMode);
    applyTheme(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  return (
    <label className="absolute flex items-center cursor-pointer gap-3 right-5">
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
