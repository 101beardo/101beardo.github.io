/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // helpful if they do static export to github pages
  },
};

export default nextConfig;
