module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // 텍스트 색상
        "text-main": "var(--text-main)",
        "text-secondary": "var(--text-secondary)",
        "text-reverse": "var(--text-reverse)",

        // 배경 색상
        "bg-main": "var(--bg-main)",
        "bg-content": "var(--bg-content)",

        // 테두리 색상 (이름 통일)
        "border-main": "var(--border-main)",

        // 입력창 색상
        "input-bg": "var(--input-bg)",
        "input-hover-bg": "var(--input-hover-bg)",

        // 옵션 색상
        "option-bg": "var(--option-title-bg)",
        "option-hover-bg": "var(--option-hover-bg)",

        // 카테고리 색상
        "category-bg": "var(--category-bg)",
        "category-hover-bg": "var(--category-hover-bg)",

        // 추가 색상들도 설정
        accent: "var(--accent-color)",
        "accent-hover": "var(--accent-hover)",
        success: "var(--success-color)",
        warning: "var(--warning-color)",
        error: "var(--error-color)",
        "card-bg": "var(--card-bg)",
      },
    },
  },
  plugins: [],
};
