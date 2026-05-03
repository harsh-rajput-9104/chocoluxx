/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [375, 640, 768, 1024, 1280, 1920],
  },
};

module.exports = nextConfig;
