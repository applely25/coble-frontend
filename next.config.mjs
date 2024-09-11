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
  async rewrites() {
    return [
      {
        source: '/api/:path*', // 와일드카드 패턴
        destination: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/:path*`, // 동일한 패턴으로 리라이트
      },
    ];
  },
});

export default nextConfig;
