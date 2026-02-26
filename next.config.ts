import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wudoseo.com",
        pathname: "/api/v1/blogs/images/**",
      },
    ],
  },
};

export default nextConfig;
