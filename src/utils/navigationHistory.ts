// 저장 키
const HISTORY_KEY = "navigation:prevUrl";

export const saveCurrentUrl = () => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(HISTORY_KEY, window.location.href);
  }
};

export const getPreviousUrl = () => {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem(HISTORY_KEY);
  }
  return null;
};

export const clearPreviousUrl = () => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(HISTORY_KEY);
  }
};
