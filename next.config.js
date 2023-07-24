/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  basePath: '/blog',
  assetPrefix: '/blog',
}

module.exports = nextConfig
