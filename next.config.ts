import type { NextConfig } from "next";

const apiUrl = (process.env.API_URL ?? "http://localhost:3001").replace(/\/$/, "");

const nextConfig: NextConfig = {
  sassOptions: {},
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${apiUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
