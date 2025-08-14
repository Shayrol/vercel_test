import { useBackNavigation } from "@/hooks/useBackNavigation";
import { usePathname } from "next/navigation";
import { useDeviceSetting } from "../device-setting/hook";

const mainPageUrl = [
  // vercel page url
  "https://vercel-test-nu-six-92.vercel.app/",
  // test page url
  "http://localhost:3000/",
  "http://192.168.200.135:3000/",
  "/",
];

export const useRoutingSettingBackAndExit = () => {
  const { handleBack } = useBackNavigation();
  const { fetchApp } = useDeviceSetting();
  const pathname = usePathname();

  // 수업 건너 뛰어 이 후 추가 할 것
  const onRoutingPush = () => {};

  const onRoutingBack = () => {
    // 메인 페이지 시 앱 종료
    if (mainPageUrl.includes(pathname)) {
      fetchApp({ query: "exitDeviceRoutingForBackSet" });
    } else {
      // 뒤로가기
      return handleBack();
    }
  };

  return {
    onRoutingBack,
  };
};
