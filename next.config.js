/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  reactStrictMode: false,
  poweredByHeader: false
}

module.exports = nextConfig
