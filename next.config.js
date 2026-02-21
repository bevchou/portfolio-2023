/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  // assetPrefix: isProd ? "/portfolio-2023/" : "",
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
