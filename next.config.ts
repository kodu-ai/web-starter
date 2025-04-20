import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'images.unsplash.com',
      'cdn.discordapp.com',
      'cdn.pixabay.com',
      'cdn.shopify.com',
      'cdn.cloudflare.steamstatic.com',
    ],
  },
};

export default nextConfig;
