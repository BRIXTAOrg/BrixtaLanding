import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer"

const nextConfig: NextConfig = {
  output:"standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
      {
        protocol: "https",
        hostname: "www.bestcement.co.in",
      },
      {
        protocol: "https",
        hostname: "www.eurofoam.in",
      },
    ],
  },
  /* config options here */
};

module.exports = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);