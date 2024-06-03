// next.config.ts
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Other configurations...
  output: {
    // Set your desired export options here
    // For example, to export all pages as static HTML:
    publicDir: './public',
    // Other options...
  },
};

export default nextConfig;

