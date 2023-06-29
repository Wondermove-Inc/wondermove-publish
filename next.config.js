/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/P-LUG/index": { page: "/P-LUG" },
      "/S-kuber/index": { page: "/S-kuber" },
    };
  },
  //   redirects: async () => {
  //     return [
  //       {
  //         source: "/P-LUG",
  //         destination: "/P-LUG",
  //         permanent: true,
  //       },
  //     ];
  //   },
};

module.exports = nextConfig;
