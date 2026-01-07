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
        {
          protocol: 'https',
          hostname: 'tools.applemediaservices.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'developer.apple.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'play.google.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'linkmaker.itunes.apple.com',
          pathname: '/**',
        },
      ],
    },
  };

export default nextConfig;
