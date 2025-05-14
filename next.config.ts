import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  optimizeFonts: true,
  experimental: {
    optimizePackageImports:['@heroicons/react'],
  },
  i18n: {
    locales: ['fr','en'],
    defaultLocale: 'fr'
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  }
};

export default nextConfig;
