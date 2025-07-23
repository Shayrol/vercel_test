// __tests__/CategoryButton/categoryButton.test.tsx

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryButton from "@/app/main/components/CategoryButton";
import "@testing-library/jest-dom";

// jest.fn()은 테스트 도중 어떤 값이 들어와도 해당 값으로 반환됨
// 강제로 값을 지정하려면 get: () => "전체" 또는 push: () => "/test" 등 설정해주면 된다.
const pushMock = jest.fn();
const getMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
  useSearchParams: () => ({
    get: getMock,
    toString: () => "",
  }),
}));

import CategoryButtonComponent from "@/app/main/components/CategoryButton";

describe("CategoryButton 컴포넌트", () => {
  // __snapshots__ 폴더가 생성되며, 스타일이나 텍스트 등이 변경이 되면 의도적으로 변경이나
  // 에러로 인한 변경이나 테스트 코드를 통해 잡아준다 여기서 의도적인 변경이라면 yarn test -u 를 통해 적용하면 된다.
  it("스냅샷 테스트", () => {
    const { container } = render(<CategoryButton />);
    expect(container).toMatchSnapshot();
  });

  it("모든 카테고리 버튼이 렌더링되어야 한다", () => {
    render(<CategoryButton />);
    expect(screen.getByText("전체")).toBeInTheDocument();
    expect(screen.getByText("추천코스")).toBeInTheDocument();
    expect(screen.getByText("자연")).toBeInTheDocument();
    expect(screen.getByText("레포츠")).toBeInTheDocument();
    expect(screen.getByText("쇼핑")).toBeInTheDocument();
    expect(screen.getByText("음식")).toBeInTheDocument();
    expect(screen.getByText("숙박")).toBeInTheDocument();
    expect(screen.getByText("인문(문화/예술/역사)")).toBeInTheDocument();
  });

  it("버튼 클릭 시 router.push가 호출되는지 확인", () => {
    render(<CategoryButtonComponent />);

    // 버튼의 레포츠 텍스트를 가진 요소를 찾고 fireEvent.click을 통해 클릭 이벤트 발생하도록 함
    // 버튼을 getByText를 해도 되지만 role를 통해 getByRole로 접근하기도 한다.
    // <button role="count-button">카운트 증가</button> 이렇게 카운트 증가 버튼이 있으면
    // screen.getByRole("count-button")으로 접근 가능
    const natureButton = screen.getByText("레포츠");
    fireEvent.click(natureButton);

    // encodeURIComponent를 통해 디코딩 결과가 "레포츠"인지 확인하는 과정
    expect(getMock).toHaveBeenCalledWith(
      `?category=${encodeURIComponent("레포츠")}`
    );
  });
});
