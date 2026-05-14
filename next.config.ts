import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/portfolio/muhome",
        destination: "https://muhome.vercel.app",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
