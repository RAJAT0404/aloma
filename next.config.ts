import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/2ahps9jc/production/**',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        port: '',
        pathname: '/photos/**',
      },
      {
        protocol: 'https',
        hostname: 'logos-world.net',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'alamotees.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'www.promoplace.com',
        port: '',
        pathname: '/ws/ws.dll/QPic/**',
      },
    ],
  },
};

export default nextConfig;
