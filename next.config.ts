import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Ensures static site export
  images: {
    unoptimized: true, // Required if using Next.js < 13.3.0 and you use next/image
  },
  trailingSlash: true, // Ensures URLs have a trailing slash (important for static sites)
  basePath: '', // Add your GitHub Pages repository name here if needed, e.g., '/your-repo-name'

};

export default nextConfig;
