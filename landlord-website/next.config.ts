import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async rewrites() {
    // Hebrew is the default locale and lives at `/` (D-003).
    // Temporary: F-05 replaces this with locale routing in `proxy.ts`.
    return [{ source: '/', destination: '/he' }];
  },
};

export default nextConfig;
