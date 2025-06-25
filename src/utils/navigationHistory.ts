// 저장 키
const HISTORY_KEY = "navigation:prevUrl";

// list 클릭 이동시 onClick을 통해 sessionStorage에 현제 url을 저장함 - queryString 포함
export const saveCurrentUrl = () => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(HISTORY_KEY, window.location.href);
  }
};

// 뒤로가기 클릭 시 해당 sessionStorage의 값을 불러와 router.push 함
export const getPreviousUrl = () => {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem(HISTORY_KEY);
  }
  return null;
};

// 창 닫으면 sessionStorage의 값을 지움
export const clearPreviousUrl = () => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(HISTORY_KEY);
  }
};
