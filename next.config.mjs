/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone', // Required for Docker deployment
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '/**',
        },
      ],
    },
  };

export default nextConfig;
