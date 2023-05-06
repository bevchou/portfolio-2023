/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/",
      },
      {
        source: "/work",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
