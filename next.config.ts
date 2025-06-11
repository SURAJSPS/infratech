import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  experimental: {
    optimizeCss: true,
  },
  serverExternalPackages: ['@aws-sdk/client-s3'],
  outputFileTracingRoot: path.join(__dirname, '../../'),
  bundlePagesRouterDependencies: true,
};

export default nextConfig;




