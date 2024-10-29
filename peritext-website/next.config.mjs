/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: "/peritext", // This should match the repository name
  assetPrefix: "/peritext/", // Ensures static assets are served correctly
};

export default nextConfig;
