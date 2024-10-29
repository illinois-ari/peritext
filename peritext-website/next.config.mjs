// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static HTML export
    images: {
      unoptimized: true, // Disables Next.js image optimization (necessary for GitHub Pages)
    },
    basePath: '/peritext', // Sets the base path to match the GitHub Pages URL path
  };
  
  export default nextConfig;
  