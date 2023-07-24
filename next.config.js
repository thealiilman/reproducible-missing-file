/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  // Uncomment the following lines to encounter
  // Failed to load resource: the server responded with a status of 404 (Not Found)
  // error as shown in the README.md
  basePath: '/blog',
  assetPrefix: '/blog',
}

module.exports = nextConfig
