import { test, expect } from "@playwright/test";

test("페이지 이동 시나리오", async ({ page }) => {
  // 메인 페이지로 시작 및 이동
  await page.goto("http://localhost:3000");

  // "밀양햇살상권"가 적힌 텍스트 버튼 클릭
  // 주석 처리된 것은 비동기로 해당 Link 태그의 href에 가져온 데이터가 들어오기 전에 클릭 실행으로
  // "http://localhost:3000/3513142"가 아닌 "http://localhost:3000/"으로 이동이 되어
  // 해당 "밀양햇살상권" 텍스트가 있는지 확인이 되고 클릭하도록 늦춤
  // 첫 번째 방법 - 안 좋음
  // await page.click("text=밀양햇살상권");

  // 이것도 되지만 텍스트가 "밀양햇살상권"인 것을 클릭을 함
  // 다른 곳에 "밀양햇살상권"이 있을 수 있어 원하는 결과가 안나올 수 있음
  // 두 번째 방법 - 실행은 되지만 안전성 없음
  // await page.getByText("밀양햇살상권").click();

  // getByRole을 사용하여 link 태그를 찾고 텍스트로 "밀양햇살상권"이 있는 것을 찾고 있으면 클릭
  // 이 방법이 더 원하는 결과가 나옴
  // 세 번째 방법 - 안정성 있음
  await page.getByRole("link", { name: "밀양햇살상권" }).click();

  // 클릭 이동한 페이지 URL이 맞는지 확인
  await expect(page).toHaveURL("http://localhost:3000/3513142");

  // 이동한 페이지에서 h1 요소로 "밀양햇살상권" 텍스트가 있는지 확인
  await expect(page.locator("h1")).toContainText("밀양햇살상권");
});
