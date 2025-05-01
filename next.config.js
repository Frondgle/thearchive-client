/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'], // Allow images from Cloudinary
  },
  experimental: {
    outputStandalone: true, // Enable standalone output for deployment
  },
  // Add custom headers for static files if needed
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache static files
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;