/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: "/peritext", // This should match the repository name
  assetPrefix: "/peritext/", // Ensures static assets are served correctly
};

export default nextConfig;
