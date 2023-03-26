/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  basePath: "/Aion-map",
  assetPrefix: "/Aion-map/",
};

module.exports = nextConfig;
