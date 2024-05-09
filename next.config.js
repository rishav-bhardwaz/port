/** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    
  }

  module.exports = {
    // Add other Next.js configuration options if needed
    // For example, you can specify target: 'serverless' or other options here
    output: {
      // Set your desired output directory for the static HTML export
      // You can change "build" to any directory name you prefer
      dir: 'build',
    },
  };