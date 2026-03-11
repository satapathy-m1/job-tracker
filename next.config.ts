/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cacheComponents: true, // Enable the flag mentioned in your error
    // Note: If you update to a newer Next.js 15 canary, this flag was renamed to `dynamicIO: true`
  },
};

export default nextConfig;