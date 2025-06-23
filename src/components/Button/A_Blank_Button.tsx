"use client";

import { AnchorHTMLAttributes, PropsWithChildren } from "react";
// import styles from "./styles.module.css";

type AnchorBaseProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement>
>;

// 1. 버튼 뼈대 - 기능 중심
function AnchorBase(props: AnchorBaseProps) {
  return (
    <a className={props.className} href={props.href} target={props.target}>
      {props.children}
    </a>
  );
}

// 2. 스타일 적용
export function AnchorSoftMFull(props: AnchorBaseProps) {
  return (
    <AnchorBase
      className="
        absolute bg-[#ff6b6b] text-[var(--text-main)] font-medium h-10 w-[calc(100%-20px)] z-[100] bottom-[10px] left-2
        flex justify-center items-center rounded-[8px] hover:brightness-90
      "
      {...props}
    />
  );
}

// 사용하는 곳이 한 곳 밖에 없지만 굳이 공통컴포넌트로 만들어 봄..
