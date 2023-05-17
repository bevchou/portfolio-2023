/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
  // async rewrites() {
  //   return [
  //     {
  //       source: "/about",
  //       destination: "/",
  //     },
  //     {
  //       source: "/work",
  //       destination: "/",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
