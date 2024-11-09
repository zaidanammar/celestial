import type { NextConfig } from 'next';
import { RemotePattern } from 'next/dist/shared/lib/image-config';

const IMAGE_ORIGINS = ['via.placeholder.com'];
const remote_patterns: Array<RemotePattern> = [];
if (IMAGE_ORIGINS) {
  IMAGE_ORIGINS.map((item) => {
    remote_patterns.push({
      protocol: 'https',
      hostname: item,
      port: '',
      pathname: '**',
    });
  });
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: remote_patterns,
  },
};

export default nextConfig;
