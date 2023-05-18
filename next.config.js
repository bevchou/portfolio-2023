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
      {
        source: "/work/:item",
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
