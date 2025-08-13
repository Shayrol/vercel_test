// 더이상 수정 할 필요없이 사용하면 됨
// 수정할 필요없는 파일: hook.ts / index.tsx / class_mobile/app.index.tsx

import { 실행중인API } from ".";

declare const window: Window & {
  ReactNativeWebView: {
    postMessage: (message: string) => void;
  };
};

type DeviceSettingQuery =
  | "fetchDeviceLocationForLatLngSet"
  | "fetchDeviceSystemForPlatformSet"
  | "fetchDeviceSystemForAppSet"
  | "requestDeviceNotificationsForPermissionSet"
  | "createDeviceNotificationsForHelloSet";

type DeviceSettingResponseMap = {
  data: {
    fetchDeviceLocationForLatLngSet: {
      lat: number;
      lng: number;
    };

    fetchDeviceSystemForPlatformSet: {
      os: "ios" | "android" | "windows" | "macos" | "web";
      osVersion: string | null;
      modelName: string | null;
    };

    fetchDeviceSystemForAppSet: {
      appVersion: string | number | undefined;
    };

    requestDeviceNotificationsForPermissionSet: {
      message: string;
    };

    createDeviceNotificationsForHelloSet: {
      message: string;
    };
  };
};

export const useDeviceSetting = () => {
  const fetchApp = async ({
    query,
    variables = {},
  }: {
    query: DeviceSettingQuery;
    variables?: Object;
  }) => {
    const result: DeviceSettingResponseMap = await new Promise((resolve) => {
      실행중인API[query] = resolve;
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ query, variables })
      );
    });
    return result;
  };

  return {
    fetchApp,
  };
};
