import { 실행중인API } from ".";

declare const window: Window & {
  ReactNativeWebView: {
    postMessage: (message: string) => void;
  };
};

type DeviceSettingQuery =
  | "fetchDeviceLocationForLatLngSet"
  | "fetchDeviceSystemForAppSet";

export const useDeviceSetting = () => {
  const fetchApp = async ({ query }: { query: DeviceSettingQuery }) => {
    const result = await new Promise((resolve) => {
      실행중인API[query] = resolve;
      window.ReactNativeWebView.postMessage(JSON.stringify({ query }));
    });
    return result;
  };

  return {
    fetchApp,
  };
};
