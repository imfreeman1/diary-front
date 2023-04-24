/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_KEY: process.env.REACT_APP_GOOGLE_API_KEY,
  },
};

module.exports = nextConfig;

module.exports = (phase, { defaultConfig }) => {
  const rewrites = () => {
    return [
      {
        source: "/Login/",
        destination: "http://132.145.86.117:3000/users/signup/",
      },
    ];
  };
  return { rewrites };
};
