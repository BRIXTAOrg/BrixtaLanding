import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer"

const nextConfig: NextConfig = {
  output:"standalone",
  /* config options here */
};

module.exports = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
