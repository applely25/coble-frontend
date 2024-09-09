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
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dsm-s3-bucket-coble.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
});

export default nextConfig;
