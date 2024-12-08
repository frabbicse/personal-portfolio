import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/personal-portfolio",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
