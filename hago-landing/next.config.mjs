/** @type {import('next').NextConfig} */
const nextConfig = {
    // Cloudflare Pages에서 SSR/API를 지원하기 위한 설정
    typescript: {
        ignoreBuildErrors: true, // 빌드 시 타입 에러로 인한 중단 방지
    },
    eslint: {
        ignoreDuringBuilds: true, // 빌드 시 린트 에러로 인한 중단 방지
    },
};

export default nextConfig;
