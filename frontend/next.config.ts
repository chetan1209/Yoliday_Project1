import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
};

export default nextConfig;
