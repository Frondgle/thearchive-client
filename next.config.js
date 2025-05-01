/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'], // Allow images from Cloudinary
  },
  output: 'standalone', // Use the new standalone output configuration
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