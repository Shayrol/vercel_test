import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("http://tong.visitkorea.or.kr/cms/resource/**")],
    domains: ["tong.visitkorea.or.kr"],
  },
};

export default nextConfig;
