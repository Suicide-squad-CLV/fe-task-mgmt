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
  output: "standalone",
};

module.exports = nextConfig;
