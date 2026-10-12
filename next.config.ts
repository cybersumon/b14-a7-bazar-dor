import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,

  images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
        },
        {
            protocol: "https",
            hostname: "avatars.githubusercontent.com",
        },
    ],
},

  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
