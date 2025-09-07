/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate a fully static export
  output: 'export',
  images: {
          // Disable Next.js Image Optimization for static export
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;