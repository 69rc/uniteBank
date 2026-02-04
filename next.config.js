/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true,  // Allow importing from outside the app directory
  },
  compiler: {
    removeConsole: false,
  },
};

export default nextConfig;