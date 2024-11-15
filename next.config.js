/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/s-kuber",
        destination: "/Skuber",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
