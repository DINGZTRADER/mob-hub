import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  // Stage 6 assets are already web-optimized; avoid requiring Cloudflare Images at runtime.
  images: { unoptimized: true },
};

export default nextConfig;