# 🌟 Korea Tourism Guide

> 한국관광공사 API를 활용한 관광지 정보 제공 웹사이트

## 📖 프로젝트 소개

한국의 다양한 관광지 정보를 제공하는 웹 애플리케이션입니다. 축제, 레포츠, 숙박 시설 등의 상세 정보와 함께 지도 기반의 위치 서비스를 제공합니다.

## 🎯 주요 기능

- **관광지 검색 및 필터링**: 지역별, 카테고리별 관광지 검색
- **상세 정보 제공**: 축제, 레포츠, 숙박 시설의 세부 정보
- **지도 연동**: 카카오맵을 활용한 위치 기반 서비스
- **이미지 갤러리**: 관광지별 고품질 이미지 제공
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화

## 📚 STACKS

### Frontend
<div style="white-space: nowrap;">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/next.js 15-000000?style=for-the-badge&logo=next.js&logoColor=white">
  <img src="https://img.shields.io/badge/tailwind css-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
</div>

### State Management & API
<div style="white-space: nowrap;">
  <img src="https://img.shields.io/badge/tanstack query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
  <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
</div>

### UI/UX Libraries
<div style="white-space: nowrap;">
  <img src="https://img.shields.io/badge/swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white">
<!--   <img src="https://img.shields.io/badge/framer motion-0055FF?style=for-the-badge&logo=framer&logoColor=white"> -->
</div>

### Map & External APIs
<div style="white-space: nowrap;">
  <img src="https://img.shields.io/badge/kakao map-FFCD00?style=for-the-badge&logo=kakao&logoColor=black">
  <img src="https://img.shields.io/badge/한국관광공사 API-009639?style=for-the-badge&logoColor=white">
</div>

### Development Tools
<div style="white-space: nowrap;">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
  <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">
</div>

## 🏗️ 아키텍처 특징

### Next.js 15 App Router 활용
- **RSC (React Server Components)**: 서버에서 렌더링되는 컴포넌트로 성능 최적화
- **RCC (React Client Components)**: 클라이언트 상호작용이 필요한 컴포넌트 분리
- **Dynamic Routing**: `[tourismId]` 동적 라우팅으로 관광지별 상세 페이지 구현

### 성능 최적화
- **Image Optimization**: Next.js Image 컴포넌트를 활용한 자동 이미지 최적화
- **Server-side Caching**: 한국관광공사 API 데이터 서버 사이드 캐싱
- **Client-side Caching**: TanStack Query를 통한 클라이언트 캐싱 전략

### SEO 최적화
- **Metadata API**: 동적 메타데이터 생성으로 검색엔진 최적화
- **Structured Data**: JSON-LD를 활용한 구조화된 데이터 제공
- **Sitemap**: 자동 사이트맵 생성

## 📁 프로젝트 구조

```
src
├─ app
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ main             # 관광지 목록 페이지
│  │  ├─ api
│  │  │  ├─ queries
│  │  │  │  └─ useQueryTourismData.ts
│  │  │  └─ services
│  │  │     └─ fetchTourismData.ts
│  │  ├─ components
│  │  │  ├─ CategoryButton.tsx
│  │  │  ├─ EventItemList
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ sections
│  │  │  │     └─ SkeletonCardEventItemList.tsx
│  │  │  └─ EventSearchList
│  │  │     ├─ index.tsx
│  │  │     └─ sections
│  │  │        └─ SearchInput
│  │  │           ├─ AreaDropdownButton.tsx
│  │  │           └─ index.tsx
│  │  ├─ types
│  │  │  └─ mainTypes.ts
│  │  └─ utils
│  │     ├─ formatDate.ts
│  │     ├─ getArea.ts
│  │     └─ getCategory.ts
│  ├─ page.tsx
│  └─ [tourismId]             # 관광지 상세 페이지
│     ├─ api
│     │  ├─ queries
│     │  │  └─ useQueryTourismDetailInfoData.ts
│     │  ├─ services
│     │  │  ├─ fetchDetailIntro.ts
│     │  │  ├─ fetchDetailTourismData.ts
│     │  │  └─ fetchDetailTourismImageData.ts
│     │  └─ types
│     │     ├─ DetailTourismImagesTypes.ts
│     │     ├─ DetailTourismIntroTypes.ts
│     │     └─ DetailTourismTypes.ts
│     ├─ components
│     │  ├─ TourismDetailContents
│     │  │  └─ index.tsx
│     │  ├─ TourismDetailHeaderInfo
│     │  │  ├─ index.tsx
│     │  │  └─ sections
│     │  │     └─ TourismDetailIntro
│     │  │        ├─ index.tsx
│     │  │        └─ sections
│     │  │           ├─ CulturalFacilityInfo.tsx
│     │  │           ├─ FestivalInfo.tsx
│     │  │           ├─ LePortsInfoLike.tsx
│     │  │           ├─ LodgingInfo.tsx
│     │  │           ├─ RestaurantInfo.tsx
│     │  │           ├─ ShoppingInfo.tsx
│     │  │           ├─ TourismAttractionInfo.tsx
│     │  │           └─ TravelCourseInfo.tsx
│     │  └─ TourismDetailImage
│     │     └─ index.tsx
│     ├─ layout.tsx
│     └─ page.tsx
├─ components          # 전역 공통 컴포넌트
│  ├─ Button
│  │  ├─ A_Blank_Button.tsx
│  │  ├─ Mobile_Back_Button.tsx
│  │  └─ styles.module.css
│  ├─ Dark_mode_toggle.tsx
│  ├─ history
│  │  └─ ClearHistoryOnUnload.tsx
│  ├─ Kakao
│  │  ├─ KakaoMap.tsx
│  │  └─ KakaoMapWrapper.tsx
│  ├─ Layout
│  │  ├─ Footer.tsx
│  │  └─ header
│  │     ├─ Header.tsx
│  │     └─ MobileHeader.tsx
│  ├─ Pagination.tsx
│  ├─ Tooltip.tsx
│  ├─ TourismInfoItem.tsx
│  └─ 공통 UI 및 컴포넌트
├─ constants
│  ├─ areaCode.ts
│  └─ categoryCodeList.ts
├─ hooks
│  └─ 공통으로 사용하는 로직(useAuth.ts 등 API 함수)
├─ lib
│  └─ api
├─ provider
│  └─ providers.tsx
├─ utils
│     ├─ getCategoryNameChange.ts
│     ├─ getTodayYYYYMMDD.ts
│     ├─ navigationHistory.ts
│     └─ 공통 유틸(날짜 변환, 숫자 단위 등 함수)
├─ tsconfig.json
└─ yarn.lock
```



### 환경 변수 설정

```env
NEXT_PUBLIC_TOURISM_API_KEY=your_tourism_api_key
NEXT_PUBLIC_KAKAO_MAP_API_KEY=your_kakao_map_api_key
```

## 🔧 개발 환경 설정

```bash
# ESLint 실행
npm run lint

# Prettier 실행
npm run format

# 타입 체크
npm run type-check
```

## 📱 반응형 지원

- **Mobile**: ~ 640px 이하  
- **Desktop**: 641px ~ 1024px 이상
