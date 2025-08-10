// 더이상 수정 할 필요없이 사용하면 됨
// 수정할 필요없는 파일: hook.ts / index.tsx / class_mobile/app.index.tsx

"use client";

import { ReactNode, useEffect } from "react";

type DeviceSettingProps = {
  children: ReactNode;
};

export const 실행중인API: Record<string, (value: any) => void> = {};

export default function DeviceSetting({ children }: DeviceSettingProps) {
  useEffect(() => {
    document.addEventListener("message" as any, (message: MessageEvent) => {
      // 여러 key 값이 들어와도 들어온 key 만 실행 할 수 있음 - 좋음
      const response = JSON.parse(message.data);
      // ReactNative에서 응답받은 즉 실행된 key의 값을 가져온다. - fetchDeviceLocationForLatLngSet
      const query = Object.keys(response)[0];
      const resolve = 실행중인API[query];
      resolve({ data: response });
      delete 실행중인API[query];
    });
  }, []);

  return <>{children}</>;
}
