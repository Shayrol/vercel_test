// 다크모드 모듈을 모바일, PC 헤더에 각각 추가를 하니
// 서로 따로 놀음... 그래서 스타일 제어로 해당 컴포넌트는 사용하지 않고
// 통합해서 운영하도록 함

// "use client";

// import BackButton from "@/components/Button/Mobile_Back_Button";
// import DarkModeToggle from "@/components/Dark_mode_toggle";
// import { usePathname } from "next/navigation";

// export default function MobileHeader() {
//   const pathname = usePathname();

//   // 메인 페이지에서는 뒤로가기 버튼 숨김
//   const isHome = pathname === "/";

//   return (
//     <header
//       className={`
//           md:hidden
//           flex justify-center items-center w-full border-b-2 border-[#ff6b6b]
//           bg-[var(--bg-main)] text-[var(--text-main)]
//           `}
//     >
//       <div
//         className={`flex items-center w-full h-16 px-3 ${
//           !isHome ? "justify-between" : " justify-end"
//         }`}
//       >
//         {!isHome && <BackButton />}
//         <DarkModeToggle />
//       </div>
//     </header>
//   );
// }
