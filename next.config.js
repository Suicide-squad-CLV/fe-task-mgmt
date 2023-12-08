/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/task-management",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
