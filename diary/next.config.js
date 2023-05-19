/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_KEY: process.env.REACT_APP_GOOGLE_API_KEY,
  },
};

module.exports = nextConfig;

// https:// nextjs.org/docs/pages/api-reference/next-config-js/images
module.exports = {
  images: {
    dangerouslyAllowSVG: true, // svg를 허용하는 config로, 추후 svg를 허용하지 않을경우 삭제하는 것이 좋다.
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['mydiary-iamges.s3.ap-northeast-2.amazonaws.com'],
  },
};
