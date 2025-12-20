import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", //this is where
        //cloudinary images are going to be stored
      },
    ],
  },
};

export default nextConfig;
