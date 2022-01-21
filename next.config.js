/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media-cdn.tripadvisor.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
