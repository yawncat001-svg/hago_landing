/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/', destination: '/index.html', permanent: true },
    ];
  },
};

export default nextConfig;
