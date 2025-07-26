import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
// 1. MSW 적용하기 전 설정
// const config: Config = {
//   coverageProvider: "v8",
//   testEnvironment: "jsdom",
//   // Add more setup options before each test is run
//   // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
// };

// 2. MSW 적용 후 설정
const config: Config = {
  coverageProvider: "v8",
  // yarn add jest-fixed-jsdom 설치가 필요함(msw 마이그레이션 참고)
  testEnvironment: "jest-fixed-jsdom",
  // testEnvironment: "jsdom",
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/src/app/mocks/jest.setup.ts"],
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
