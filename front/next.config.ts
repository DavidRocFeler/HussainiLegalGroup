import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
    resolveAlias: {
      '@/assets': './src/assets',
      '@/icons': './src/assets/icons',
    },
  },
};

export default nextConfig;