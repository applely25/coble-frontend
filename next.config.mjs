import withLinaria from 'next-with-linaria';

/** @type {import('next').NextConfig} */
const nextConfig = withLinaria({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.worker\.(js|ts)$/,
      use: { loader: 'worker-loader' },
    });
    return config;
  },
});

export default nextConfig;
