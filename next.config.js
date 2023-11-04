/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "www.lahiguera.net",
      "storage.googleapis.com",
      "i.scdn.co",
    ],
  },
};

module.exports = nextConfig;
