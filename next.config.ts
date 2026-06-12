import type { NextConfig } from "next";

const discoveryLinks = [
  "</sitemap.xml>; rel=\"sitemap\"; type=\"application/xml\"",
  "</robots.txt>; rel=\"robots\"; type=\"text/plain\"",
  "</auth.md>; rel=\"authorization-policy\"; type=\"text/markdown\"",
  "</.well-known/mcp/server-card.json>; rel=\"mcp-server\"; type=\"application/json\"",
  "</.well-known/agent-skills/index.json>; rel=\"agent-skills\"; type=\"application/json\"",
  "</.well-known/webmcp.json>; rel=\"webmcp\"; type=\"application/json\"",
  "</portfolio.md>; rel=\"alternate\"; type=\"text/markdown\""
].join(", ");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/gallery",
        destination: "/photography",
        permanent: true
      },
      {
        source: "/lumen",
        destination: "/portfolio/lumen",
        permanent: true
      },
      {
        source: "/muhome",
        destination: "/portfolio/lumen",
        permanent: true
      },
      {
        source: "/illumenate",
        destination: "/portfolio/lumen",
        permanent: true
      },
      {
        source: "/carwash",
        destination: "/portfolio/car-wash",
        permanent: true
      },
      {
        source: "/fancy-car-wash",
        destination: "/portfolio/car-wash",
        permanent: true
      },
      {
        source: "/car-wash-guys",
        destination: "/portfolio/car-wash",
        permanent: true
      },
      {
        source: "/asig",
        destination: "/portfolio/operations",
        permanent: true
      },
      {
        source: "/alpha-sigma-phi",
        destination: "/portfolio/operations",
        permanent: true
      }
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value: discoveryLinks
          },
          {
            key: "X-Agent-Discovery",
            value: "public-read-only"
          }
        ]
      }
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none';"
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  }
};

export default nextConfig;
