/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
  },
  trailingSlash: true,
}

module.exports = nextConfig