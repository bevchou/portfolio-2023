/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === "production";

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
  // assetPrefix: isProd ? "/portfolio-2023/" : "",
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
};

module.exports = nextConfig;
